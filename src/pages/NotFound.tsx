import { business } from "../data/business";
import { useI18n } from "../i18n/I18nContext";
import { Btn, BtnLink } from "../components/Button";

export default function NotFound() {
  const { lang } = useI18n();

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 pt-40 pb-24 text-center">
      <span className="font-display text-7xl font-extrabold text-gradient-flame">404</span>
      <p className="max-w-md text-lg text-fg-base-muted">
        {lang === "en" ? "This page doesn't exist. Let's get you back on track." : "Esta página no existe. Volvamos al camino correcto."}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <BtnLink to="/" variant="primary">
          {lang === "en" ? "Go home" : "Ir al inicio"}
        </BtnLink>
        <Btn href={`tel:${business.phone.tel}`} variant="outline">
          {lang === "en" ? "Call us" : "Llamar"}
        </Btn>
      </div>
    </section>
  );
}
