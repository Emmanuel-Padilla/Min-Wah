import { useI18n } from "../../i18n/I18nContext";
import { Reveal } from "../Reveal";
import { Section, Eyebrow } from "../Section";
import { CountUp } from "../CountUp";

export function About() {
  const { t } = useI18n();

  return (
    <Section tone="alt">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left" className="relative">
          <span className="absolute -top-[10%] -right-[10%] -z-10 size-[46%] rounded-full border-2 border-gold/35" />
          <figure className="relative aspect-video overflow-hidden rounded-[32px] border border-line-base shadow-card photo-overlay">
            <img
              src="/assets/images/opt/about-kitchen-1800.jpg"
              srcSet="/assets/images/opt/about-kitchen-900.jpg 900w, /assets/images/opt/about-kitchen-1800.jpg 1800w"
              sizes="(max-width: 900px) 92vw, 46vw"
              alt="Cocina con wok al fuego — imagen ilustrativa"
              width={1800}
              height={1200}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 to-transparent px-4 py-3 text-[0.78rem] font-semibold text-ivory">
              {t("about_photo_caption")}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal variant="right">
          <Eyebrow>{t("about_eyebrow")}</Eyebrow>
          <h2 className="mb-4 font-display text-[clamp(2.25rem,1.8rem+2vw,3.25rem)] font-extrabold leading-[1.12] tracking-[-0.01em]">{t("about_title")}</h2>
          <p className="mb-3 text-lg text-fg-base-muted">{t("about_body_1")}</p>
          <p className="text-lg text-fg-base-muted">{t("about_body_2")}</p>
          <dl className="mt-8 grid grid-cols-3 gap-3">
            {[
              { n: 32, s: "", k: "about_stat_years" as const },
              { n: 3, s: "", k: "about_stat_styles" as const },
              { n: 7, s: "", k: "about_stat_days" as const },
            ].map((x) => (
              <div key={x.k} className="rounded-[24px] border border-line-base bg-base-raised p-4 text-center card-lift">
                <dt className="font-display text-4xl font-black text-gradient-flame">
                  <CountUp to={x.n} suffix={x.s} />
                </dt>
                <dd className="mt-1 text-xs font-semibold text-fg-base-muted">{t(x.k)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
