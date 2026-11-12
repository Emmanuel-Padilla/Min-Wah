import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMeta, type PageKey } from "../i18n/translations";
import { useI18n } from "../i18n/I18nContext";
import { absoluteUrl, isIndexable, SITE_URL } from "../config/site";

function upsertMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Título, descripción, canonical, Open Graph, Twitter Card y robots por página e idioma. */
export function usePageMeta(page: PageKey) {
  const { lang } = useI18n();
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[page][lang];
    const url = absoluteUrl(pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:locale", lang === "en" ? "en_US" : "es_MX");
    upsertMeta("property", "og:url", url);
    if (SITE_URL && page !== "wok") {
      upsertMeta("property", "og:image", absoluteUrl("/assets/logo-minwah/logo-minwah-512.png"));
      upsertMeta("name", "twitter:image", absoluteUrl("/assets/logo-minwah/logo-minwah-512.png"));
    }
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertCanonical(url);
    if (!isIndexable) upsertMeta("name", "robots", "noindex, nofollow");
  }, [page, lang, pathname]);
}
