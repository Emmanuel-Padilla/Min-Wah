import { useI18n } from "../../i18n/I18nContext";
import { Reveal } from "../Reveal";
import { Section, SectionHead } from "../Section";

const images = [
  { src: "gallery-fried-rice", alt: "Plato de arroz salteado servido en sartén caliente — imagen ilustrativa", span: "col-span-2 row-span-3 sm:col-span-3" },
  { src: "gallery-takeout-boxes", alt: "Cajas de comida para llevar — imagen ilustrativa", span: "col-span-2 row-span-2 sm:col-span-3" },
  { src: "hero-noodles", alt: "Noodles salteados con flama en wok — imagen ilustrativa", span: "col-span-2 row-span-2 sm:col-span-3" },
  { src: "gallery-omelette-rice", alt: "Arroz con omelette y chile — imagen ilustrativa", span: "col-span-1 row-span-2 sm:col-span-2" },
  { src: "gallery-noodles-marble", alt: "Noodles asiáticos con palillos — imagen ilustrativa", span: "col-span-1 row-span-2 sm:col-span-2" },
  { src: "hero-fried-rice", alt: "Arroz frito con omelette y cebollín — imagen ilustrativa", span: "col-span-2 row-span-2 sm:col-span-2" },
];

export function Gallery() {
  const { t } = useI18n();

  return (
    <Section tone="base">
      <SectionHead eyebrow={t("gallery_eyebrow")} title={t("gallery_title")} description={t("gallery_note")} />
      <Reveal className="grid grid-cols-2 auto-rows-[180px] gap-3 sm:grid-cols-6 sm:auto-rows-[130px]">
        {images.map((img) => (
          <figure key={img.src} className={`relative overflow-hidden rounded-[24px] border border-line-base photo-overlay ${img.span}`}>
            <img
              src={`/assets/images/opt/${img.src}-1800.jpg`}
              srcSet={`/assets/images/opt/${img.src}-900.jpg 900w, /assets/images/opt/${img.src}-1800.jpg 1800w`}
              sizes="(max-width: 900px) 50vw, 33vw"
              alt={img.alt}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </Reveal>
    </Section>
  );
}
