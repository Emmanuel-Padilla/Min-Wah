import { Link } from "react-router-dom";
import { business } from "../data/business";
import { useI18n } from "../i18n/I18nContext";
import { FacebookIcon } from "./icons";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-band text-band-fg border-t border-band-line pb-8">
      <div aria-hidden="true" className="greca-strip" />
      <div className="pt-14" />
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-12 px-[clamp(20px,5vw,48px)] sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4"><Wordmark size="lg" /></div>
          <p className="max-w-[40ch] text-sm text-band-fg-muted">{t("footer_tagline")}</p>
          <div className="mt-4 flex gap-2">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="flex size-[38px] items-center justify-center rounded-full border border-band-line text-band-fg transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon className="size-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-display text-[0.85rem] font-bold tracking-[0.08em] text-gold uppercase">{t("footer_nav_title")}</h4>
          <ul className="flex flex-col gap-2 text-sm text-band-fg-muted">
            <li>
              <Link to="/" className="hover:text-gold transition-colors">
                {t("nav_home")}
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-gold transition-colors">
                {t("nav_menu")}
              </Link>
            </li>
            <li>
              <Link to="/wok-express" className="hover:text-gold transition-colors">
                {t("nav_wok")}
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-gold transition-colors">
                {t("nav_contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-[0.85rem] font-bold tracking-[0.08em] text-gold uppercase">{t("footer_contact_title")}</h4>
          <ul className="flex flex-col gap-2 text-sm text-band-fg-muted">
            <li>
              <a href={`tel:${business.phone.tel}`} className="hover:text-gold transition-colors">
                {business.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-gold transition-colors">
                {business.email}
              </a>
            </li>
            <li>
              <a href={business.social.facebook} target="_blank" rel="noopener" className="hover:text-gold transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href={business.social.instagram} target="_blank" rel="noopener" className="hover:text-gold transition-colors">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-[0.85rem] font-bold tracking-[0.08em] text-gold uppercase">{t("footer_hours_title")}</h4>
          <p className="text-sm text-band-fg-muted">{t("footer_hours_body")}</p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1180px] flex-wrap justify-between gap-3 border-t border-band-line px-[clamp(20px,5vw,48px)] pt-6 text-sm text-band-fg-muted">
        <span>
          © {new Date().getFullYear()} {business.name}. {t("footer_rights")}
        </span>
        <span>{business.address.display}</span>
        <a href="https://udigitalbusiness.com/" target="_blank" rel="noopener" className="transition-colors hover:text-gold">
          {t("footer_made_by")} <strong className="font-bold text-band-fg">UDigital Business</strong>
        </a>
      </div>
    </footer>
  );
}
