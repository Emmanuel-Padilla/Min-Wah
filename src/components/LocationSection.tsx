import { business, mapsDirectionsUrl, mapsEmbedUrl } from "../data/business";
import { useI18n } from "../i18n/I18nContext";
import { Btn } from "./Button";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";
import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export function LocationSection({ tone = "base" }: { tone?: "base" | "alt" | "pop" }) {
  const { t } = useI18n();

  return (
    <Section id="ubicacion" tone={tone}>
      <SectionHead eyebrow={t("location_eyebrow")} title={t("location_title")} pop={tone === "pop"} />
      <Reveal className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 size-[22px] shrink-0 text-accent" />
              <span>{business.address.display}</span>
            </li>
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 size-[22px] shrink-0 text-accent" />
              <a href={`tel:${business.phone.tel}`}>{business.phone.display}</a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 size-[22px] shrink-0 text-accent" />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          </ul>
          <p className="text-sm text-fg-base-muted">{t("location_malecon_note")}</p>
          <div className="flex flex-wrap gap-3">
            <Btn href={mapsDirectionsUrl()} target="_blank" rel="noopener" variant="primary" size="sm">
              {t("location_cta_directions")}
            </Btn>
          </div>
        </div>
        <div className="min-h-[340px] overflow-hidden rounded-[32px] border border-line-base bg-base-alt">
          <iframe
            title="Mapa de ubicación de Restaurant Min Wah"
            src={mapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full min-h-[340px] border-0"
          />
        </div>
      </Reveal>
    </Section>
  );
}
