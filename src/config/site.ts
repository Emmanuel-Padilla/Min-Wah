/** Configuración del dominio. Pendiente: dominio definitivo del cliente (VITE_SITE_URL). */
const raw = (import.meta.env.VITE_SITE_URL ?? "").trim().replace(/\/+$/, "");

export const SITE_URL = raw;
/** Sin dominio confirmado el sitio se trata como pruebas y se mantiene fuera de indexación. */
export const isIndexable = SITE_URL !== "";
export const absoluteUrl = (path = "/") => (SITE_URL ? `${SITE_URL}${path}` : path);
