import { useI18n } from "../../i18n/I18nContext";
import { Reveal } from "../Reveal";
import { Section, Eyebrow } from "../Section";

export function Mood() {
  const { t } = useI18n();

  return (
    <Section tone="pop">
      <Reveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Eyebrow pop>{t("mood_eyebrow")}</Eyebrow>
          <p className="my-5 max-w-[16ch] font-display text-[clamp(2.5rem,2rem+3vw,4.25rem)] font-extrabold leading-[1.08] tracking-[-0.01em]">
            {t("mood_quote_pre")}
            <em className="not-italic text-gradient-flame">{t("mood_quote_em")}</em>
            {t("mood_quote_post")}
          </p>
          <p className="text-lg text-fg-pop-muted">{t("mood_body")}</p>
        </div>

        <div className="order-1 grid grid-cols-2 items-stretch gap-4 lg:order-2">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-line-pop shadow-card photo-overlay">
            <img
              src="/assets/images/opt/mood-flaming-wok-1800.jpg"
              srcSet="/assets/images/opt/mood-flaming-wok-900.jpg 900w, /assets/images/opt/mood-flaming-wok-1800.jpg 1800w"
              sizes="(max-width: 860px) 60vw, 26vw"
              alt="Wok con flama alta durante la cocción — imagen ilustrativa"
              width={1200}
              height={1500}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 to-transparent px-4 py-3 text-[0.78rem] font-semibold text-ivory">
              {t("mood_caption_1")}
            </figcaption>
          </figure>
          <figure className="relative aspect-[3/4] self-end overflow-hidden rounded-[32px] border border-line-pop shadow-card photo-overlay">
            <img
              src="/assets/images/opt/mood-fried-rice-toss-1800.jpg"
              srcSet="/assets/images/opt/mood-fried-rice-toss-900.jpg 900w, /assets/images/opt/mood-fried-rice-toss-1800.jpg 1800w"
              sizes="(max-width: 860px) 60vw, 22vw"
              alt="Cocinero salteando arroz al wok — imagen ilustrativa"
              width={1200}
              height={1600}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 to-transparent px-4 py-3 text-[0.78rem] font-semibold text-ivory">
              {t("mood_caption_2")}
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </Section>
  );
}
