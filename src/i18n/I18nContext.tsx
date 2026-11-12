import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "./translations";

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  const qs = new URLSearchParams(window.location.search).get("lang");
  if (qs === "es" || qs === "en") return qs;
  try {
    const saved = window.localStorage.getItem("minwah-lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* localStorage unavailable */
  }
  return "es";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "es-MX");
    try {
      window.localStorage.setItem("minwah-lang", lang);
    } catch {
      /* localStorage unavailable */
    }
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);
  const t = (key: TranslationKey) => translations[lang][key];

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
