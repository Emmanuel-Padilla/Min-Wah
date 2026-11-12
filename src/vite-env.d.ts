/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Dominio definitivo, sin barra final. Ej.: https://www.minwah.mx — vacío = sitio de pruebas (noindex). */
  readonly VITE_SITE_URL?: string;
  /** ID de Google Tag Manager (por defecto GTM-KTNZTWB6). Vacío = sin analítica. */
  readonly VITE_GTM_ID?: string;
}
