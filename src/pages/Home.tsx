import { business } from "../data/business";
import { usePageMeta } from "../seo/usePageMeta";
import { JsonLd } from "../seo/JsonLd";
import { absoluteUrl } from "../config/site";
import { Hero } from "../components/home/Hero";
import { Marquee } from "../components/home/Marquee";
import { About } from "../components/home/About";
import { Tour } from "../components/home/Tour";
import { Mood } from "../components/home/Mood";
import { Steps } from "../components/home/Steps";
import { MenuPreview } from "../components/home/MenuPreview";
import { Gallery } from "../components/home/Gallery";
import { FaqSection } from "../components/FaqSection";
import { HoursTakeout } from "../components/home/HoursTakeout";
import { LocationSection } from "../components/LocationSection";
import { CtaBanner } from "../components/home/CtaBanner";
import { WokExpress } from "../components/home/WokExpress";

export default function Home() {
  usePageMeta("home");

  return (
    <>
      <JsonLd
        id="ld-restaurant"
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: business.name,
          servesCuisine: "Chinese",
          image: absoluteUrl("/assets/logo-minwah/logo-minwah-512.png"),
          logo: absoluteUrl("/assets/logo-minwah/logo-minwah-512.png"),
          foundingDate: String(business.founded),
          priceRange: "$$",
          paymentAccepted: "Cash, Debit Card, Credit Card",
          openingHours: "Mo-Su 11:00-19:00",
          petsAllowed: true,
          telephone: business.phone.tel,
          email: business.email,
          url: absoluteUrl("/"),
          sameAs: [business.social.facebook, business.social.instagram],
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.street,
            addressLocality: business.address.locality,
            addressRegion: business.address.region,
            addressCountry: "MX",
          },
          menu: absoluteUrl("/menu"),
          acceptsReservations: "True",
        }}
      />
      <Hero />
      <Marquee />
      <About />
      <Tour />
      <Mood />
      <Steps />
      <MenuPreview />
      <Gallery />
      <FaqSection tone="alt" />
      <HoursTakeout />
      <LocationSection tone="base" />
      <WokExpress />
      <CtaBanner />
    </>
  );
}
