import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { ScrollProgress } from "./ScrollProgress";
import { useScrollOnRoute } from "./useScrollOnRoute";

export function Layout() {
  useScrollOnRoute();

  return (
    <div className="min-h-dvh bg-base text-fg-base">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-1000 focus:rounded-br-[10px] focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Saltar al contenido principal
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
