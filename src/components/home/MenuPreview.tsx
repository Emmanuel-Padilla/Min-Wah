import { useI18n } from "../../i18n/I18nContext";
import { PendingPanel } from "../PendingPanel";
import { Reveal } from "../Reveal";
import { Section, SectionHead } from "../Section";
import { BookIcon } from "../icons";

export function MenuPreview() {
  const { t } = useI18n();

  return (
    <Section id="menu-preview" tone="alt">
      <SectionHead eyebrow={t("menu_eyebrow")} title={t("menu_title")} />
      <Reveal>
        <PendingPanel icon={<BookIcon className="size-7" />} title={t("menu_panel_title")} body={t("menu_panel_body")} />
      </Reveal>
    </Section>
  );
}
