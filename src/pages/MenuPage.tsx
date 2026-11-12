import { business } from "../data/business";
import { useI18n } from "../i18n/I18nContext";
import { usePageMeta } from "../seo/usePageMeta";
import { JsonLd } from "../seo/JsonLd";
import { PageHero } from "../components/PageHero";
import { PendingPanel } from "../components/PendingPanel";
import { Reveal } from "../components/Reveal";
import { Section, SectionHead } from "../components/Section";
import { Btn } from "../components/Button";
import { FlameIcon, BookIcon } from "../components/icons";
import type { TranslationKey } from "../i18n/translations";

const categories: { title: TranslationKey; desc: TranslationKey }[] = [
  { title: "menu_cat_1", desc: "menu_cat_1_desc" },
  { title: "menu_cat_2", desc: "menu_cat_2_desc" },
  { title: "menu_cat_3", desc: "menu_cat_3_desc" },
  { title: "menu_cat_4", desc: "menu_cat_4_desc" },
];

const galleryPreview = [
  { src: "mood-flaming-wok", alt: "Wok con flama alta — imagen ilustrativa" },
  { src: "gallery-fried-rice", alt: "Arroz salteado en sartén caliente — imagen ilustrativa" },
  { src: "gallery-takeout-boxes", alt: "Cajas de comida para llevar — imagen ilustrativa" },
];

export default function MenuPage() {
  const { t } = useI18n();
  usePageMeta("menu");

  return (
    <>
      <JsonLd
        id="ld-breadcrumb-menu"
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
            { "@type": "ListItem", position: 2, name: "Menú", item: "/menu" },
          ],
        }}
      />

      <PageHero eyebrow={t("menu_eyebrow")} icon={<FlameIcon className="size-3.5" />} title={t("menu_title")} subtitle={t("menu_page_intro")} />

      <Section tone="alt" className="pt-8">
        <Reveal className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-[32px] border border-gold/40 bg-base-raised p-8 shadow-card">
            <span className="mb-2 block font-display text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-gold">{t("special_eyebrow")}</span>
            <h2 className="font-display text-3xl font-extrabold">{t("special_title")}</h2>
            <p className="mt-1 font-display text-4xl font-black text-gradient-flame">{t("special_price")}</p>
            <p className="mt-1 text-sm font-semibold text-fg-base-muted">{t("special_time")}</p>
            <p className="mt-4 text-lg text-fg-base-muted">{t("special_body")}</p>
            <p className="mt-3 text-sm text-fg-base-muted">{t("special_note")}</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-[24px] border border-line-base bg-base-raised p-6">
              <h3 className="font-display text-xl font-extrabold">{t("buffet_title")}</h3>
              <p className="text-fg-base-muted">{t("buffet_body")}</p>
            </div>
            <div className="rounded-[24px] border border-line-base bg-base-raised p-6">
              <h3 className="font-display text-xl font-extrabold">{t("breakfast_title")}</h3>
              <p className="text-fg-base-muted">{t("breakfast_body")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.title} className="rounded-[24px] border border-line-base bg-base-raised p-6">
              <h3 className="mb-1 font-display text-lg font-extrabold">{t(c.title)}</h3>
              <p className="text-sm text-fg-base-muted">{t(c.desc)}</p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <PendingPanel icon={<BookIcon className="size-7" />} title={t("menu_page_panel_title")} body={t("menu_page_panel_body")} />
        </Reveal>
        {/*
          Estructura lista para el menú real (MenuSection / MenuItem).
          Al recibir el contenido confirmado, construir aquí las categorías
          reales con precios — no antes.
        */}
      </Section>

      <Section tone="base">
        <SectionHead eyebrow={t("gallery_eyebrow")} title={t("gallery_title")} description={t("gallery_note")} />
        <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {galleryPreview.map((img) => (
            <figure key={img.src} className="relative aspect-square overflow-hidden rounded-[24px] border border-line-base photo-overlay">
              <img
                src={`/assets/images/opt/${img.src}-1800.jpg`}
                srcSet={`/assets/images/opt/${img.src}-900.jpg 900w, /assets/images/opt/${img.src}-1800.jpg 1800w`}
                sizes="(max-width: 860px) 90vw, 30vw"
                alt={img.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </Reveal>
      </Section>

      <Section tone="pop">
        <Reveal className="text-center">
          <span className="mb-2 block font-display text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-gold">{t("menu_page_cta_title")}</span>
          <h2 className="mb-6 font-display text-[clamp(2.25rem,1.8rem+2vw,3.25rem)] font-extrabold">{t("menu_page_cta_subtitle")}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Btn href={business.whatsapp.url} target="_blank" rel="noopener" variant="primary">
              {t("hero_cta_whatsapp")}
            </Btn>
            <Btn href={`tel:${business.phone.tel}`} variant="outline" surface="pop">
              {t("hero_cta_call")}
            </Btn>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
