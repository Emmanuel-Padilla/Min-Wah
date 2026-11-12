import { business } from "../data/business";
import { useI18n } from "../i18n/I18nContext";
import { usePageMeta } from "../seo/usePageMeta";
import { JsonLd } from "../seo/JsonLd";
import { PageHero } from "../components/PageHero";
import { LocationSection } from "../components/LocationSection";
import { FaqSection } from "../components/FaqSection";
import { MapPinIcon } from "../components/icons";

export default function ContactPage() {
  const { t } = useI18n();
  usePageMeta("contact");

  return (
    <>
      <JsonLd
        id="ld-contact"
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: business.name,
          telephone: business.phone.tel,
          email: business.email,
          sameAs: [business.social.facebook, business.social.instagram],
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.street,
            addressLocality: business.address.locality,
            addressRegion: business.address.region,
            addressCountry: "MX",
          },
        }}
      />

      <PageHero
        eyebrow={t("location_eyebrow")}
        icon={<MapPinIcon className="size-3.5" />}
        title={t("contact_hero_title")}
        subtitle={t("contact_hero_subtitle")}
      />

      <LocationSection tone="alt" />
      <FaqSection tone="base" subset={["faq_q1", "faq_q3", "faq_q5"]} />
    </>
  );
}
