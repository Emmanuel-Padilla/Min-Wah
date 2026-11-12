import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Btn } from "../components/Button";
import { ClockIcon, BookIcon, FlameIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../components/icons";
import { Reveal } from "../components/Reveal";
import { Section, SectionHead } from "../components/Section";
import { wokExpress, wokMapsDirectionsUrl, wokMapsEmbedUrl } from "../data/business";
import { useI18n } from "../i18n/I18nContext";
import type { TranslationKey } from "../i18n/translations";
import { JsonLd } from "../seo/JsonLd";
import { usePageMeta } from "../seo/usePageMeta";

const ease = [0.16, 1, 0.3, 1] as const;

function Split({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]" aria-label={text}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease, delay: delay + i * 0.05 }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

const marquee: TranslationKey[] = ["w_marquee_1", "w_marquee_2", "w_marquee_3", "w_marquee_4", "w_marquee_5"];
const steps: { t: TranslationKey; b: TranslationKey }[] = [
  { t: "w_step1_title", b: "w_step1_body" },
  { t: "w_step2_title", b: "w_step2_body" },
  { t: "w_step3_title", b: "w_step3_body" },
];

export default function WokHome() {
  const { t } = useI18n();
  usePageMeta("wok");
  const { scrollY } = useScroll();
  const yA = useTransform(scrollY, [0, 600], [0, -60]);
  const yB = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <>
      <JsonLd
        id="ld-wok"
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Wok Express",
          servesCuisine: "Chinese",
          telephone: wokExpress.phone.tel,
          email: wokExpress.email,
          sameAs: [wokExpress.facebook],
          parentOrganization: { "@type": "Restaurant", name: "Restaurant Min Wah" },
          address: {
            "@type": "PostalAddress",
            streetAddress: wokExpress.address.street,
            addressLocality: "Chapala",
            addressRegion: "Jalisco",
            addressCountry: "MX",
          },
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-band pt-36 pb-24 text-band-fg sm:pb-32">
        <div className="pointer-events-none absolute -top-[20%] -right-[12%] -z-10 size-[min(820px,90vw)] animate-orb rounded-full bg-red/35 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-[25%] -left-[10%] -z-10 size-[min(560px,80vw)] animate-orb-slow rounded-full bg-gold/25 blur-[100px]" />

        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-14 px-[clamp(20px,5vw,48px)] text-center lg:grid-cols-[1fr_0.95fr] lg:text-left">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/12 px-3 py-1 font-display text-[0.78rem] font-bold uppercase tracking-[0.1em] text-gold">
              <MapPinIcon className="size-3.5" />
              {t("w_badge")}
            </span>
            <h1 className="font-display text-[clamp(3.25rem,2.2rem+5vw,6rem)] font-black leading-[1.02] text-gradient-flame">
              <Split text={t("w_title_1")} delay={0.15} />
              <Split text={t("w_title_2")} delay={0.45} />
            </h1>
            <p className="mx-auto mt-5 max-w-[46ch] text-lg text-ivory-dim lg:mx-0">
              <strong className="text-ivory">{t("w_sub_strong")}</strong>
              {t("w_sub_rest")}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Btn href={wokExpress.whatsapp.url} target="_blank" rel="noopener" variant="primary">
                <WhatsAppIcon />
                {t("w_cta_whatsapp")}
              </Btn>
              <Btn href={`tel:${wokExpress.phone.tel}`} variant="outline" band>
                <PhoneIcon />
                {t("w_cta_call")}
              </Btn>
              <Btn href="#menu" variant="outline" band>
                {t("w_cta_menu")}
              </Btn>
            </div>
          </motion.div>

          <div className="relative order-first mx-auto grid w-full max-w-[460px] grid-cols-2 gap-3 lg:order-none">
            <motion.figure style={{ y: yA }} className="relative aspect-[3/4] overflow-hidden rounded-[32px] border border-band-line photo-overlay-strong">
              <img src="/assets/images/opt/hero-wok-fire-900.jpg" alt="Wok sobre fuego directo — imagen ilustrativa" width={900} height={1200} fetchPriority="high" className="size-full object-cover" />
            </motion.figure>
            <motion.figure style={{ y: yB }} className="relative mt-10 aspect-[3/4] overflow-hidden rounded-[32px] border border-band-line photo-overlay-strong">
              <img src="/assets/images/opt/hero-noodles-900.jpg" alt="Fideos salteados — imagen ilustrativa" width={900} height={1200} className="size-full object-cover" />
            </motion.figure>
            <span className="absolute top-1/2 left-1/2 z-20 flex size-[120px] -translate-x-1/2 -translate-y-1/2 animate-float items-center justify-center overflow-hidden rounded-full border-[3px] border-gold bg-black shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]">
              <img src="/assets/logo/logo-square-900.png" alt="Wok Express" width={100} height={100} className="size-full object-cover" />
            </span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div aria-hidden="true" className="overflow-hidden border-y border-band-line bg-band-raised py-4">
        <div className="flex w-max motion-safe:animate-marquee">
          {[0, 1].map((g) => (
            <div key={g} className="flex shrink-0 items-center">
              {marquee.map((k) => (
                <span key={k} className="inline-flex items-center gap-3 px-5 font-display text-lg font-extrabold tracking-[0.03em] whitespace-nowrap text-band-fg-muted uppercase">
                  <FlameIcon className="size-4 text-gold" />
                  {t(k)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* QUÉ ES */}
      <Section id="nosotros" tone="alt">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <figure className="relative aspect-video overflow-hidden rounded-[32px] border border-line-base shadow-card photo-overlay">
              <img src="/assets/images/opt/gallery-takeout-boxes-1800.jpg" alt="Cajas de comida para llevar — imagen ilustrativa" loading="lazy" className="size-full object-cover transition-transform duration-700 hover:scale-105" />
            </figure>
          </Reveal>
          <Reveal variant="right">
            <span className="mb-3 inline-flex items-center gap-2 font-display text-[0.8rem] font-extrabold tracking-[0.14em] text-accent uppercase">
              <span className="h-[3px] w-[22px] rounded-full bg-gradient-to-r from-red to-gold" />
              {t("w_about_eyebrow")}
            </span>
            <h2 className="mb-4 font-display text-[clamp(2.25rem,1.8rem+2vw,3.25rem)] font-extrabold leading-[1.12]">{t("w_about_title")}</h2>
            <p className="mb-3 text-lg text-fg-base-muted">{t("w_about_1")}</p>
            <p className="mb-6 text-lg text-fg-base-muted">{t("w_about_2")}</p>
            <Link to="/" className="inline-flex items-center gap-2 font-display font-bold text-gold transition-all hover:gap-4">
              {t("w_about_link")} →
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* MENÚ */}
      <Section id="menu" tone="base">
        <SectionHead eyebrow={t("w_menu_eyebrow")} title={t("w_menu_title")} />
        <Reveal variant="zoom">
          <div className="card-lift grid grid-cols-1 items-start gap-6 rounded-[32px] border border-gold/30 bg-base-raised p-8 sm:grid-cols-[auto_1fr] sm:p-10">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold/14 text-gold">
              <BookIcon className="size-7" />
            </span>
            <div>
              <p className="max-w-[60ch] text-lg text-fg-base-muted">{t("w_menu_body")}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Btn href={wokExpress.whatsapp.url} target="_blank" rel="noopener" variant="primary" size="sm">
                  <WhatsAppIcon />
                  {t("w_menu_cta")}
                </Btn>
                <Btn href={`tel:${wokExpress.phone.tel}`} variant="outline" size="sm">
                  {t("w_cta_call")}
                </Btn>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CÓMO PEDIR */}
      <Section id="como-pedir" tone="pop">
        <SectionHead center pop eyebrow={t("w_steps_eyebrow")} title={t("w_steps_title")} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.12} variant="up" className="card-lift rounded-[32px] border border-line-pop bg-black/5 p-8">
              <span className="mb-4 flex size-11 animate-pulse-ring items-center justify-center rounded-full bg-red font-display font-extrabold text-ivory">{i + 1}</span>
              <h3 className="mb-2 font-display text-2xl font-extrabold">{t(s.t)}</h3>
              <p className="text-sm leading-relaxed text-fg-pop-muted">{t(s.b)}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* UBICACIÓN */}
      <Section id="ubicacion" tone="alt">
        <SectionHead eyebrow={t("w_loc_eyebrow")} title={t("w_loc_title")} />
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left" className="flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 size-[22px] shrink-0 text-accent" />
                <span>{wokExpress.address.display}</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 size-[22px] shrink-0 text-accent" />
                <a href={`tel:${wokExpress.phone.tel}`}>{wokExpress.phone.display}</a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 size-[22px] shrink-0 text-accent" />
                <span>
                  <strong>{t("w_loc_hours_label")}:</strong> {t("w_loc_hours_pending")}
                </span>
              </li>
            </ul>
            <div>
              <Btn href={wokMapsDirectionsUrl()} target="_blank" rel="noopener" variant="primary" size="sm">
                {t("w_loc_directions")}
              </Btn>
            </div>
          </Reveal>
          <Reveal variant="right" className="min-h-[340px] overflow-hidden rounded-[32px] border border-line-base bg-base-alt">
            <iframe title={t("w_map_title")} src={wokMapsEmbedUrl()} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full min-h-[340px] border-0" />
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-band py-24 text-center text-band-fg">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[520px] -translate-x-1/2 -translate-y-1/2 animate-orb rounded-full bg-red/30 blur-[100px]" />
        <Reveal className="mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)]">
          <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(2.25rem,1.8rem+2vw,3.25rem)] font-extrabold leading-[1.12] text-ivory">{t("w_cta_title")}</h2>
          <p className="mt-3 text-lg text-ivory-dim">{t("w_cta_body")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Btn href={wokExpress.whatsapp.url} target="_blank" rel="noopener" variant="primary">
              <WhatsAppIcon />
              {t("w_cta_whatsapp")}
            </Btn>
            <Btn href={`tel:${wokExpress.phone.tel}`} variant="outline" band>
              {t("w_cta_call")}
            </Btn>
          </div>
        </Reveal>
      </section>
    </>
  );
}
