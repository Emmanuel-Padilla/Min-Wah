import { Outlet } from "react-router-dom";
import { BackToTop } from "../components/BackToTop";
import { FloatingNav } from "../components/FloatingNav";
import { ScrollProgress } from "../components/ScrollProgress";
import { useScrollOnRoute } from "../components/useScrollOnRoute";
import { wokExpress } from "../data/business";
import { useI18n } from "../i18n/I18nContext";
import { WokFooter } from "./WokFooter";

/** Sitio independiente de Wok Express: su propio logo, navegación, pie y paleta ([data-brand="wok"]). */
export function WokLayout() {
  const { t } = useI18n();
  useScrollOnRoute();

  return (
    <div data-brand="wok" className="min-h-dvh bg-base text-fg-base">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-1000 focus:rounded-br-[10px] focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Saltar al contenido principal
      </a>
      <ScrollProgress />
      <FloatingNav
        showTheme={false}
        logo={<img src="/assets/logo/logo-nav-360.png" alt="Wok Express" width={120} height={96} className="h-11 w-auto" />}
        homeTo="/wok-express"
        homeLabel="Wok Express — inicio"
        links={[
          { to: "/wok-express", label: t("w_nav_home") },
          { to: "/wok-express#nosotros", label: t("w_nav_about"), hash: true },
          { to: "/wok-express#menu", label: t("w_nav_menu"), hash: true },
          { to: "/wok-express#como-pedir", label: t("w_nav_order"), hash: true },
          { to: "/wok-express#ubicacion", label: t("w_nav_location"), hash: true },
          { to: "/", label: t("w_nav_main") },
        ]}
        phone={wokExpress.phone}
        whatsappUrl={wokExpress.whatsapp.url}
        whatsappLabel="WhatsApp"
      />
      <main id="main">
        <Outlet />
      </main>
      <WokFooter />
      <BackToTop />
    </div>
  );
}
