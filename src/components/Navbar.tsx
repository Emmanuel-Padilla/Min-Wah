import { business } from "../data/business";
import { useI18n } from "../i18n/I18nContext";
import { FloatingNav } from "./FloatingNav";
import { Wordmark } from "./Wordmark";

export function Navbar() {
  const { t } = useI18n();

  return (
    <FloatingNav
      logo={<Wordmark />}
      homeTo="/"
      homeLabel="Restaurant Min Wah — inicio"
      links={[
        { to: "/", label: t("nav_home") },
        { to: "/menu", label: t("nav_menu") },
        { to: "/#como-ordenar", label: t("nav_order"), hash: true },
        { to: "/wok-express", label: t("nav_wok") },
        { to: "/contacto", label: t("nav_contact") },
      ]}
      phone={business.phone}
      whatsappUrl={business.whatsapp.url}
      whatsappLabel={t("nav_whatsapp")}
    />
  );
}
