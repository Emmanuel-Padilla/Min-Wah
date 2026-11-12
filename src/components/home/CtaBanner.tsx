import { business } from "../../data/business";
import { useI18n } from "../../i18n/I18nContext";
import { Btn } from "../Button";

export function CtaBanner() {
  const { t } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-band text-band-fg">
      <div className="absolute inset-0 -z-20">
        <img
          src="/assets/images/opt/cta-flames-1800.jpg"
          srcSet="/assets/images/opt/cta-flames-900.jpg 900w, /assets/images/opt/cta-flames-1800.jpg 1800w"
          sizes="100vw"
          alt=""
          loading="lazy"
          className="size-full object-cover opacity-55"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(30,23,23,0.55) 0%, rgba(30,23,23,0.9) 75%), linear-gradient(90deg, rgb(var(--glow) / 0.35), transparent 60%)",
          }}
        />
      </div>
      <div className="mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)] py-24 text-center">
        <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(2.25rem,1.8rem+2vw,3.25rem)] font-extrabold leading-[1.12] text-ivory">{t("cta_title")}</h2>
        <p className="mt-3 text-lg text-ivory-dim">{t("cta_body")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Btn href={business.whatsapp.url} target="_blank" rel="noopener" variant="primary">
            {t("cta_whatsapp")}
          </Btn>
          <Btn href={`tel:${business.phone.tel}`} variant="outline" band>
            {t("cta_call")}
          </Btn>
        </div>
      </div>
    </section>
  );
}
