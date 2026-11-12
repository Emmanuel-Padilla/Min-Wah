import { business } from "../../data/business";
import { useI18n } from "../../i18n/I18nContext";
import { Btn } from "../Button";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

export function HoursTakeout() {
  const { t } = useI18n();

  return (
    <Section tone="pop">
      <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-[32px] bg-pop p-8 text-fg-pop shadow-card">
          <h3 className="mb-2 font-display text-2xl font-extrabold text-gold">{t("hours_title")}</h3>
          <p className="text-fg-pop-muted">{t("hours_body")}</p>
          <ul className="mt-3 flex flex-col gap-1 text-sm text-fg-pop-muted">
            <li>{t("hours_extra_1")}</li>
            <li>{t("hours_extra_2")}</li>
            <li>{t("hours_extra_3")}</li>
          </ul>
          <Btn href={`tel:${business.phone.tel}`} variant="primary" size="sm" className="mt-4">
            {t("hours_cta")}
          </Btn>
        </div>
        <div className="rounded-[32px] bg-pop p-8 text-fg-pop shadow-card">
          <h3 className="mb-2 font-display text-2xl font-extrabold text-gold">{t("takeout_title")}</h3>
          <p className="text-fg-pop-muted">{t("takeout_body")}</p>
        </div>
      </Reveal>
    </Section>
  );
}
