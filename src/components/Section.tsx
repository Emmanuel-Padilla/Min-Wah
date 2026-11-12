import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Tone = "base" | "alt" | "pop";

const toneClass: Record<Tone, string> = {
  base: "bg-base text-fg-base",
  alt: "bg-base-alt text-fg-base",
  pop: "bg-pop text-fg-pop",
};

export function Section({
  tone = "base",
  id,
  className,
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 lg:py-24 ${toneClass[tone]} ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, pop = false }: { children: ReactNode; pop?: boolean }) {
  return (
    <span
      className={`mb-3 inline-flex items-center gap-2 font-display text-[0.8rem] font-extrabold tracking-[0.14em] uppercase ${
        pop ? "text-gold" : "text-accent"
      }`}
    >
      <span className="h-[3px] w-[22px] rounded-full bg-gradient-to-r from-red to-gold" />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
  center = false,
  pop = false,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  pop?: boolean;
}) {
  return (
    <Reveal className={`mb-12 max-w-[720px] ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow pop={pop}>{eyebrow}</Eyebrow>
      <h2 className="font-display text-[clamp(2.25rem,1.8rem+2vw,3.25rem)] font-extrabold leading-[1.12] tracking-[-0.01em]">{title}</h2>
      {description && <p className={`mt-3 text-lg ${pop ? "text-fg-pop-muted" : "text-fg-base-muted"}`}>{description}</p>}
    </Reveal>
  );
}
