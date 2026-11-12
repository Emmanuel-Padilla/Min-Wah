import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type Variant = "primary" | "outline" | "gold";
type Size = "md" | "sm";
type Surface = "base" | "pop" | "band";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-[0.01em] whitespace-nowrap transition-[transform,background-color,border-color,box-shadow,color] duration-150 active:scale-[0.97] [touch-action:manipulation] [&>svg]:size-5 [&>svg]:shrink-0";

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 text-[0.95rem]",
  sm: "min-h-10 px-5 text-[0.85rem]",
};

const solidVariants: Record<Exclude<Variant, "outline">, string> = {
  primary: "btn-shine bg-red text-ivory shadow-red-glow hover:bg-red-dark hover:-translate-y-0.5 border-2 border-transparent",
  gold: "btn-shine bg-gold text-ink hover:bg-gold-soft hover:-translate-y-0.5 border-2 border-transparent",
};

/** Outline buttons must pull their border/text color from whichever surface
 * they're rendered on — the fixed-dark "band" (nav/hero/footer/cta), a
 * pop/inverted section, or a normal theme-following section. */
const outlineBySurface: Record<Surface, string> = {
  base: "bg-transparent border-2 border-line-base text-fg-base hover:border-gold hover:text-gold",
  pop: "bg-transparent border-2 border-line-pop text-fg-pop hover:border-gold hover:text-gold",
  band: "bg-transparent border-2 border-band-line text-band-fg hover:border-gold hover:text-gold",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  /** @deprecated use surface="band" */
  band?: boolean;
  surface?: Surface;
  children: ReactNode;
  className?: string;
}

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to?: undefined };
type RouterLinkProps = CommonProps & LinkProps;
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined };

function classes(variant: Variant, size: Size, surface: Surface, className?: string) {
  const variantClass = variant === "outline" ? outlineBySurface[surface] : solidVariants[variant];
  return [base, sizes[size], variantClass, className].filter(Boolean).join(" ");
}

function resolveSurface(band: boolean | undefined, surface: Surface | undefined): Surface {
  if (band) return "band";
  return surface ?? "base";
}

export function Btn({ variant = "primary", size = "md", band, surface, className, children, ...rest }: AnchorProps) {
  return (
    <a className={classes(variant, size, resolveSurface(band, surface), className)} {...rest}>
      {children}
    </a>
  );
}

export function BtnLink({ variant = "primary", size = "md", band, surface, className, children, ...rest }: RouterLinkProps) {
  return (
    <Link className={classes(variant, size, resolveSurface(band, surface), className)} {...rest}>
      {children}
    </Link>
  );
}

export function BtnButton({ variant = "primary", size = "md", band, surface, className, children, ...rest }: ButtonProps) {
  return (
    <button className={classes(variant, size, resolveSurface(band, surface), className)} {...rest}>
      {children}
    </button>
  );
}
