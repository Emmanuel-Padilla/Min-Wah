import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({ eyebrow, icon, title, subtitle }: { eyebrow: string; icon: ReactNode; title: string; subtitle: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-band pt-36 pb-14 text-band-fg">
      <div
        className="pointer-events-none absolute -top-[20%] -right-[12%] -z-10 size-[min(820px,90vw)] rounded-full"
        style={{ background: "radial-gradient(circle at 50% 50%, rgb(var(--glow) / 0.28), transparent 68%)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)]"
      >
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/12 px-3 py-1 font-display text-[0.78rem] font-bold uppercase tracking-[0.1em] text-gold">
          {icon}
          {eyebrow}
        </span>
        <h1 className="font-display text-[clamp(2.75rem,2rem+3.5vw,4.5rem)] font-extrabold leading-[1.12] text-ivory">{title}</h1>
        <p className="mt-4 max-w-[46ch] text-lg text-ivory-dim">{subtitle}</p>
      </motion.div>
    </section>
  );
}
