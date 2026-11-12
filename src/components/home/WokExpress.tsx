import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/I18nContext";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

/** Avance de Wok Express dentro del sitio de Min Wah: usa su propia paleta y lleva a su sitio independiente. */
export function WokExpress() {
  const { t } = useI18n();

  return (
    <Section id="wok-express" tone="base">
      <Reveal variant="zoom">
        <div data-brand="wok" className="card-lift relative isolate grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[40px] border border-band-line bg-band p-8 text-band-fg sm:p-12 lg:grid-cols-[auto_1fr_auto]">
          <div className="pointer-events-none absolute -top-20 -right-20 -z-10 size-[320px] animate-orb rounded-full bg-red/35 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 left-10 -z-10 size-[260px] animate-orb-slow rounded-full bg-gold/25 blur-[80px]" />
          <span className="mx-auto flex size-[130px] animate-float items-center justify-center overflow-hidden rounded-full border-[3px] border-gold bg-black lg:mx-0">
            <img src="/assets/logo/logo-square-900.png" alt="Wok Express" width={110} height={110} className="size-full object-cover" />
          </span>
          <div className="text-center lg:text-left">
            <span className="mb-2 block font-display text-[0.8rem] font-extrabold tracking-[0.14em] text-gold uppercase">{t("wok_eyebrow")}</span>
            <h2 className="font-display text-[clamp(2rem,1.6rem+2vw,3rem)] font-black text-gradient-flame">{t("wok_title")}</h2>
            <p className="mt-2 max-w-[52ch] text-lg text-ivory-dim">{t("wok_body_1")}</p>
          </div>
          <Link
            to="/wok-express"
            className="btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red px-7 font-display font-bold text-ivory shadow-red-glow transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            {t("wok_teaser_cta")} →
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
