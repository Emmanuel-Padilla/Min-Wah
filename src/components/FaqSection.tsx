import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../i18n/I18nContext";
import type { TranslationKey } from "../i18n/translations";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";
import { PlusIcon } from "./icons";

const allFaqs: { q: TranslationKey; a: TranslationKey }[] = [
  { q: "faq_q1", a: "faq_a1" },
  { q: "faq_q2", a: "faq_a2" },
  { q: "faq_q3", a: "faq_a3" },
  { q: "faq_q4", a: "faq_a4" },
  { q: "faq_q5", a: "faq_a5" },
  { q: "faq_q6", a: "faq_a6" },
];

function FaqItem({ q, a }: { q: TranslationKey; a: TranslationKey }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[18px] border border-line-base bg-base-raised">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-display text-lg font-bold"
      >
        <span>{t(q)}</span>
        <span className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-red/12 text-accent transition-transform duration-250 ${open ? "rotate-45" : ""}`}>
          <PlusIcon className="size-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[70ch] px-6 pb-5 text-fg-base-muted">{t(a)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection({ subset, tone = "alt" }: { subset?: TranslationKey[]; tone?: "base" | "alt" | "pop" }) {
  const { t } = useI18n();
  const faqs = subset ? allFaqs.filter((f) => subset.includes(f.q)) : allFaqs;

  return (
    <Section tone={tone}>
      <SectionHead eyebrow={t("faq_eyebrow")} title={t("faq_title")} pop={tone === "pop"} />
      <Reveal className="flex max-w-[840px] flex-col gap-3">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} {...faq} />
        ))}
      </Reveal>
    </Section>
  );
}
