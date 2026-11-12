import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const ROUTES = ["/", "/menu", "/contacto", "/wok-express"];

/** Canonical / noindex en index.html y robots.txt + sitemap.xml coherentes con VITE_SITE_URL. */
function seoPlugin(siteUrl: string): Plugin {
  return {
    name: "seo-files",
    transformIndexHtml(html) {
      if (siteUrl) {
        return html
          .replace('<link rel="canonical" href="/" />', `<link rel="canonical" href="${siteUrl}/" />\n<meta property="og:url" content="${siteUrl}/" />`);
      }
      return html.replace("</head>", '<meta name="robots" content="noindex, nofollow" />\n</head>');
    },
    generateBundle() {
      const robots = siteUrl ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n` : "User-agent: *\nDisallow: /\n";
      this.emitFile({ type: "asset", fileName: "robots.txt", source: robots });
      if (siteUrl) {
        const urls = ROUTES.map((r) => `  <url><loc>${siteUrl}${r}</loc></url>`).join("\n");
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        });
      }
    },
  };
}

/** Google Tag Manager: solo en builds de producción (no en `npm run dev`). ID configurable con VITE_GTM_ID. */
function gtmPlugin(gtmId: string): Plugin {
  return {
    name: "gtm",
    apply: "build",
    transformIndexHtml() {
      if (!gtmId) return [];
      return [
        {
          tag: "script",
          injectTo: "head-prepend",
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
        },
        {
          tag: "noscript",
          injectTo: "body-prepend",
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ];
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL ?? "").trim().replace(/\/+$/, "");
  const gtmId = (env.VITE_GTM_ID ?? "GTM-KTNZTWB6").trim();
  return { plugins: [react(), tailwindcss(), seoPlugin(siteUrl), gtmPlugin(gtmId)] };
});
