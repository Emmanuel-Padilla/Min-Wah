import { useI18n } from "../../i18n/I18nContext";
import { Reveal } from "../Reveal";
import { Section, SectionHead } from "../Section";

/** Recorrido virtual en video: sin autoplay, con controles y carga diferida. */
export function Tour() {
  const { t } = useI18n();

  return (
    <Section id="recorrido" tone="base">
      <SectionHead center eyebrow={t("tour_eyebrow")} title={t("tour_title")} description={t("tour_body")} />
      <Reveal variant="zoom" className="mx-auto max-w-[1040px]">
        <div className="relative overflow-hidden rounded-[32px] border border-line-base bg-black shadow-card">
          <video
            controls
            playsInline
            preload="none"
            poster="/assets/video/recorrido-min-wah-poster.jpg"
            width={1280}
            height={634}
            aria-label={t("tour_aria")}
            className="block aspect-[1280/634] w-full bg-black object-cover"
          >
            <source src="/assets/video/recorrido-min-wah.webm" type="video/webm" />
            <source src="/assets/video/recorrido-min-wah.mp4" type="video/mp4" />
            {t("tour_fallback")}
          </video>
        </div>
      </Reveal>
    </Section>
  );
}
