import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Al ser una SPA, GTM no ve los cambios de ruta como cargas de página.
 * Enviamos el evento `virtual_page_view` al dataLayer en cada navegación;
 * en GTM se usa como activador (Evento personalizado) para la etiqueta de GA4.
 */
export function usePageTracking() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Esperar a que usePageMeta actualice el título de la nueva ruta.
    const id = window.setTimeout(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "virtual_page_view",
        page_path: pathname + search,
        page_title: document.title,
        page_language: document.documentElement.lang,
      });
    }, 150);
    return () => window.clearTimeout(id);
  }, [pathname, search]);
}
