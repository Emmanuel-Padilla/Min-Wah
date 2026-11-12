import type { ReactNode } from "react";
import { business } from "../data/business";
import { useI18n } from "../i18n/I18nContext";
import { Btn } from "./Button";
import { AlertCircleIcon } from "./icons";

export function PendingPanel({ icon, title, body }: { icon?: ReactNode; title: string; body: string }) {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 items-start gap-6 overflow-hidden rounded-[32px] border border-gold/25 bg-base-raised p-8 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-10">
      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold/14 text-gold">
        {icon ?? <AlertCircleIcon className="size-7" />}
      </span>
      <div>
        <h3 className="mb-2 font-display text-2xl font-extrabold sm:text-[1.75rem]">{title}</h3>
        <p className="max-w-[60ch] text-fg-base-muted">{body}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Btn href={business.whatsapp.url} target="_blank" rel="noopener" variant="primary" size="sm">
            {t("menu_cta_whatsapp")}
          </Btn>
          <Btn href={`tel:${business.phone.tel}`} variant="outline" size="sm">
            {t("menu_cta_call")}
          </Btn>
          <Btn href={business.social.facebook} target="_blank" rel="noopener" variant="outline" size="sm">
            {t("menu_cta_fb")}
          </Btn>
        </div>
      </div>
    </div>
  );
}
