import type { ReactNode } from "react";
import { useI18n } from "../../i18n/I18nContext";
import type { TranslationKey } from "../../i18n/translations";
import { ClockIcon, FlameIcon, MapPinIcon, WhatsAppIcon } from "../icons";

const items: { key: TranslationKey; icon: ReactNode }[] = [
  { key: "marquee_1", icon: <FlameIcon className="size-4" /> },
  { key: "marquee_2", icon: <ClockIcon className="size-4" /> },
  { key: "marquee_3", icon: <MapPinIcon className="size-4" /> },
  { key: "marquee_4", icon: <WhatsAppIcon className="size-4" /> },
  { key: "marquee_5", icon: <FlameIcon className="size-4" /> },
  { key: "marquee_6", icon: <MapPinIcon className="size-4" /> },
];

function Group() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map(({ key, icon }) => (
        <span key={key} className="inline-flex items-center gap-3 px-5 font-display text-lg font-extrabold uppercase tracking-[0.03em] text-band-fg-muted whitespace-nowrap">
          <span className="text-gold">{icon}</span>
          <MarqueeLabel k={key} />
        </span>
      ))}
    </div>
  );
}

function MarqueeLabel({ k }: { k: TranslationKey }) {
  const { t } = useI18n();
  return <>{t(k)}</>;
}

export function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-band-line bg-band-raised py-4">
      <div className="flex w-max motion-safe:animate-marquee">
        <Group />
        <Group />
      </div>
    </div>
  );
}
