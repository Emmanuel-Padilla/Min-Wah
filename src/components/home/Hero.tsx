import { motion, useScroll, useTransform } from "framer-motion";
import { business } from "../../data/business";
import { useI18n } from "../../i18n/I18nContext";
import { Btn } from "../Button";
import { ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../icons";

const ease = [0.16, 1, 0.3, 1] as const;

/** Palabra que sube letra por letra. */
function SplitWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]" aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          initial={{ y: "110%", rotate: 8, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: delay + i * 0.045 }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const { t } = useI18n();
  const { scrollY } = useScroll();
  const yA = useTransform(scrollY, [0, 600], [0, -50]);
  const yB = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section className="relative isolate overflow-hidden bg-band pt-36 pb-24 text-band-fg sm:pb-32">
      <div className="pointer-events-none absolute -top-[18%] -right-[10%] -z-10 size-[min(760px,90vw)] animate-orb rounded-full bg-red/30 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-[25%] -left-[12%] -z-10 size-[min(620px,80vw)] animate-orb-slow rounded-full bg-gold/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-[30%] left-[38%] -z-10 size-[260px] animate-orb rounded-full bg-ivory/10 blur-[80px]" />

      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-16 px-[clamp(20px,5vw,48px)] text-center lg:grid-cols-[1fr_0.95fr] lg:text-left">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/12 px-3 py-1 font-display text-[0.78rem] font-bold uppercase tracking-[0.1em] text-gold">
            <MapPinIcon className="size-3.5" />
            {t("hero_badge")}
          </span>

          <h1 className="font-display text-[clamp(2.75rem,2rem+3.5vw,4.5rem)] font-extrabold leading-[1.12] text-ivory">
            <span className="block text-gradient-flame">
              <SplitWord text={t("hero_title_1")} delay={0.15} />
            </span>
            <span className="block text-gradient-flame">
              <SplitWord text={t("hero_title_2")} delay={0.55} />
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[46ch] text-lg text-ivory-dim lg:mx-0">
            <strong className="text-ivory">{t("hero_subtitle_strong")}</strong>
            {t("hero_subtitle_rest")}
          </p>
          <p className="mx-auto mt-2 max-w-[50ch] text-sm text-band-fg-muted lg:mx-0">{t("hero_note")}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Btn href={business.whatsapp.url} target="_blank" rel="noopener" variant="primary">
              <WhatsAppIcon />
              {t("hero_cta_whatsapp")}
            </Btn>
            <Btn href={`tel:${business.phone.tel}`} variant="outline" band>
              <PhoneIcon />
              {t("hero_cta_call")}
            </Btn>
            <Btn href="/menu" variant="outline" band>
              {t("hero_cta_menu")}
            </Btn>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-5 lg:justify-start">
            <span className="flex items-center gap-2 text-sm text-band-fg-muted">
              <MapPinIcon className="size-[18px] text-gold" />
              {t("hero_meta_address")}
            </span>
            <span className="flex items-center gap-2 text-sm text-band-fg-muted">
              <ClockIcon className="size-[18px] text-gold" />
              {t("hero_meta_takeout")}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative order-first grid min-h-[300px] grid-cols-2 items-stretch gap-3 lg:order-none lg:min-h-[460px]"
        >
          <span className="pointer-events-none absolute -top-[8%] -right-[8%] -z-10 size-[60%] animate-spin-slow rounded-full border-2 border-dashed border-gold/25" />

          <motion.figure style={{ y: yA }} className="relative min-h-[240px] overflow-hidden rounded-[999px_999px_32px_32px] border border-band-line shadow-[0_24px_48px_-18px_rgba(0,0,0,0.6)] photo-overlay-strong lg:min-h-[360px]">
            <img
              src="/assets/images/opt/hero-wok-fire-1800.jpg"
              srcSet="/assets/images/opt/hero-wok-fire-900.jpg 900w, /assets/images/opt/hero-wok-fire-1800.jpg 1800w"
              sizes="(max-width: 1024px) 45vw, 30vw"
              alt="Wok sobre fuego directo — imagen ilustrativa del estilo de cocina"
              width={900}
              height={1200}
              fetchPriority="high"
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <span className="absolute bottom-3 left-3 z-10 rounded-full border border-ivory/25 bg-black/60 px-3.5 py-1.5 font-display text-[0.72rem] font-bold uppercase tracking-[0.06em] text-ivory backdrop-blur">
              {t("hero_photo_badge")}
            </span>
          </motion.figure>

          <motion.figure style={{ y: yB }} className="relative min-h-[112px] overflow-hidden rounded-[32px_32px_999px_999px] border border-band-line shadow-[0_24px_48px_-18px_rgba(0,0,0,0.6)] photo-overlay-strong lg:min-h-[360px]">
            <img
              src="/assets/images/opt/gallery-takeout-night-1800.jpg"
              srcSet="/assets/images/opt/gallery-takeout-night-900.jpg 900w, /assets/images/opt/gallery-takeout-night-1800.jpg 1800w"
              sizes="(max-width: 1024px) 35vw, 22vw"
              alt="Comida china para llevar — imagen ilustrativa"
              width={900}
              height={1350}
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.figure>

          <span className="animate-float absolute -right-2 -bottom-2 z-20 flex size-[78px] items-center justify-center rounded-full border-[3px] border-gold bg-band shadow-[0_16px_30px_-10px_rgba(0,0,0,0.7)] lg:size-[108px] lg:-right-3.5 lg:-bottom-3.5">
            <span className="text-center font-display text-[0.6rem] leading-tight font-black tracking-wider text-gold uppercase lg:text-[0.8rem]">Est.<br /><span className="text-xl text-ivory lg:text-3xl">1994</span></span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
