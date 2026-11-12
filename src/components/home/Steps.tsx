import { useI18n } from "../../i18n/I18nContext";
import type { TranslationKey } from "../../i18n/translations";
import { Reveal } from "../Reveal";
import { Section, SectionHead } from "../Section";

const steps: { title: TranslationKey; body: TranslationKey }[] = [
  { title: "step1_title", body: "step1_body" },
  { title: "step2_title", body: "step2_body" },
  { title: "step3_title", body: "step3_body" },
];

export function Steps() {
  const { t } = useI18n();

  return (
    <Section id="como-ordenar" tone="base">
      <SectionHead center eyebrow={t("steps_eyebrow")} title={t("steps_title")} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08} className="card-lift rounded-[32px] border border-line-base bg-base-raised p-8">
            <span className="mb-4 flex animate-pulse-ring size-10 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark font-display font-extrabold text-ivory">
              {i + 1}
            </span>
            <h3 className="mb-2 font-display text-2xl font-extrabold">{t(step.title)}</h3>
            <p className="text-sm leading-relaxed text-fg-base-muted">{t(step.body)}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
