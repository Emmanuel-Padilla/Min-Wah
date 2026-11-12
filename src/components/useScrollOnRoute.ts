import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageTracking } from "../seo/usePageTracking";

/** Al cambiar de ruta sube al inicio; si hay #hash, baja suavemente a esa sección. */
export function useScrollOnRoute() {
  const location = useLocation();
  usePageTracking();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);
}
