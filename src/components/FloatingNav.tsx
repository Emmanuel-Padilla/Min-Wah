import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "../i18n/I18nContext";
import { useTheme } from "../theme/ThemeContext";
import { CloseIcon, MenuIcon, MoonIcon, PhoneIcon, SunIcon, WhatsAppIcon } from "./icons";

export interface NavItem {
  to: string;
  label: string;
  /** true = salto a una sección, nunca se marca como página activa */
  hash?: boolean;
}

interface Props {
  logo: ReactNode;
  homeTo: string;
  homeLabel: string;
  links: NavItem[];
  phone: { tel: string; display: string };
  whatsappUrl: string;
  whatsappLabel: string;
  showTheme?: boolean;
}

/** Navbar flotante en forma de cápsula: vidrio, borde luminoso giratorio y píldora deslizante. */
export function FloatingNav({ logo, homeTo, homeLabel, links, phone, whatsappUrl, whatsappLabel, showTheme = true }: Props) {
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const wasOpen = useRef(false);

  // Foco: al abrir entra al panel; al cerrar vuelve al botón.
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("a,button")?.focus());
    } else if (wasOpen.current) {
      wasOpen.current = false;
      toggleRef.current?.focus();
    }
  }, [open]);

  const onPanelKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (e.key !== "Tab") return;
    // Orden DOM dentro del header; solo elementos visibles y no inertes (logo y WhatsApp quedan inertes con el menú abierto).
    const focusables = Array.from(e.currentTarget.querySelectorAll<HTMLElement>("a[href],button:not([disabled])")).filter((el) => el.offsetParent !== null && !el.closest("[inert]") && !el.hasAttribute("inert"));
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const activeTo = links.find((l) => !l.hash && l.to === pathname)?.to ?? null;
  const highlighted = hover ?? activeTo;

  const circleBtn =
    "flex size-10 shrink-0 items-center justify-center rounded-full border border-band-line text-band-fg transition-all duration-300 hover:border-gold hover:text-gold hover:rotate-12 active:scale-90";

  const ThemeToggle = showTheme ? (
    <button type="button" onClick={toggleTheme} aria-label={t("theme_toggle_aria")} className={circleBtn}>
      {theme === "light" ? <SunIcon className="size-[18px]" /> : <MoonIcon className="size-[18px]" />}
    </button>
  ) : null;

  const LangToggle = (
    <div role="group" aria-label="Idioma / Language" className="relative inline-flex rounded-full border border-band-line p-[3px]">
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`relative rounded-full px-3 py-1.5 font-display text-[0.7rem] font-extrabold tracking-wide transition-colors ${
            lang === code ? "text-ivory" : "text-band-fg-muted hover:text-band-fg"
          }`}
        >
          {lang === code && <motion.span layoutId={`lang-pill-${homeTo}`} className="absolute inset-0 -z-10 rounded-full bg-red" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header onKeyDown={open ? onPanelKeyDown : undefined} className="pointer-events-none fixed inset-x-0 top-0 z-100 flex justify-center px-3 pt-3 sm:px-5">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.1 }}
        className={`glow-border pointer-events-auto flex w-full max-w-[1120px] items-center justify-between gap-3 rounded-full border border-band-line text-band-fg backdrop-blur-xl transition-[background-color,padding,box-shadow] duration-500 ${
          scrolled ? "bg-band/90 py-1.5 pr-2 pl-5 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.7)]" : "bg-band/60 py-2.5 pr-2.5 pl-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)]"
        }`}
      >
        <Link to={homeTo} inert={open} aria-label={homeLabel} className="flex shrink-0 items-center transition-transform duration-300 hover:scale-105">
          {logo}
        </Link>

        <nav
          aria-label="Navegación principal"
          onMouseLeave={() => setHover(null)}
          className="hidden items-center gap-1 rounded-full border border-band-line bg-black/20 p-1 font-display text-[0.84rem] font-bold whitespace-nowrap lg:flex"
        >
          {links.map((link) => {
            const isLit = highlighted === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => setHover(link.to)}
                onFocus={() => setHover(link.to)}
                onBlur={() => setHover(null)}
                className={`relative rounded-full px-4 py-2 transition-colors duration-200 ${isLit ? "text-ivory" : "text-band-fg-muted"}`}
              >
                {isLit && (
                  <motion.span
                    layoutId={`nav-pill-${homeTo}`}
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-red/80 to-red-dark/80 shadow-[0_0_24px_-4px_rgb(var(--glow)/0.7)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${phone.tel}`} aria-label={phone.display} className={`${circleBtn} hidden lg:flex`}>
            <PhoneIcon className="size-[18px]" />
          </a>
          <a
            href={whatsappUrl}
            inert={open}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="btn-shine animate-pulse-ring flex size-10 shrink-0 items-center justify-center gap-2 rounded-full bg-red font-display text-[0.85rem] font-bold text-ivory transition-transform active:scale-95 lg:size-auto lg:h-10 lg:px-5"
          >
            <WhatsAppIcon className="size-5" />
            <span className="hidden lg:inline">{whatsappLabel}</span>
          </a>
          <div className="hidden items-center gap-2 lg:flex">
            {ThemeToggle}
            {LangToggle}
          </div>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            ref={toggleRef}
            onClick={() => setOpen((v) => !v)}
            className={`${circleBtn} z-[120] lg:hidden`}
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            ref={panelRef}
            aria-label="Navegación móvil"
            initial={{ clipPath: "circle(0px at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(160% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="pointer-events-auto fixed inset-0 z-[110] flex flex-col justify-center gap-4 overflow-y-auto bg-band px-8 py-24 lg:hidden"
          >
            <div className="pointer-events-none absolute -right-20 -bottom-20 size-[360px] animate-orb rounded-full bg-red/25 blur-3xl" />
            {[{ to: homeTo, label: homeLabel, hash: true }, ...links].map((link, i) => (
              <motion.div key={link.to + i} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <Link to={link.to} onClick={() => setOpen(false)} className="block font-display text-[2rem] font-extrabold text-band-fg transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              href={`tel:${phone.tel}`}
              className="mt-2 inline-flex items-center gap-2 font-display text-lg font-bold text-gold"
            >
              <PhoneIcon className="size-5" />
              {phone.display}
            </motion.a>
            <div className="mt-2 flex items-center gap-3 border-t border-band-line pt-6">
              {ThemeToggle}
              {LangToggle}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
