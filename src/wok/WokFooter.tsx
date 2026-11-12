import { Link } from "react-router-dom";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "../components/icons";
import { wokExpress } from "../data/business";
import { useI18n } from "../i18n/I18nContext";

export function WokFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-band-line bg-band py-14 text-band-fg">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-[clamp(20px,5vw,48px)] md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img src="/assets/logo/logo-nav-360.png" alt="Wok Express" width={150} height={120} className="mb-4 h-14 w-auto" />
          <p className="max-w-[40ch] text-sm text-band-fg-muted">{t("w_footer_tagline")}</p>
        </div>
        <ul className="flex flex-col gap-3 text-sm text-band-fg-muted">
          <li className="flex items-start gap-2">
            <MapPinIcon className="mt-0.5 size-[18px] shrink-0 text-gold" />
            {wokExpress.address.display}
          </li>
          <li className="flex items-center gap-2">
            <PhoneIcon className="size-[18px] shrink-0 text-gold" />
            <a href={`tel:${wokExpress.phone.tel}`} className="transition-colors hover:text-gold">
              {wokExpress.phone.display}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MailIcon className="size-[18px] shrink-0 text-gold" />
            <a href={`mailto:${wokExpress.email}`} className="transition-colors hover:text-gold">
              {wokExpress.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FacebookIcon className="size-[18px] shrink-0 text-gold" />
            <a href={wokExpress.facebook} target="_blank" rel="noopener" className="transition-colors hover:text-gold">
              Facebook
            </a>
          </li>
        </ul>
        <div className="text-sm text-band-fg-muted">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-band-line px-4 py-2 font-display font-bold text-band-fg transition-colors hover:border-gold hover:text-gold">
            ← {t("w_footer_main")}
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-[1180px] border-t border-band-line px-[clamp(20px,5vw,48px)] pt-6 text-sm text-band-fg-muted">
        <div className="flex flex-wrap justify-between gap-3">
          <span>
            © {new Date().getFullYear()} Wok Express. {t("w_rights")}
          </span>
          <a href="https://udigitalbusiness.com/" target="_blank" rel="noopener" className="transition-colors hover:text-gold">
          {t("footer_made_by")} <strong className="font-bold text-band-fg">UDigital Business</strong>
        </a>
        </div>
      </div>
    </footer>
  );
}
