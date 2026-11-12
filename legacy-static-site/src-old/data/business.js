/**
 * Wok Express Min Wah — single source of truth for NAP + business facts.
 * Every page/component must read from here, never hardcode a duplicate value.
 *
 * Verification status per field is tracked in `verification` below so it is
 * never lost — update the value AND its status together.
 */

export const business = {
  name: "Wok Express Min Wah",
  legalName: "Wok Express Min Wah",
  shortName: "Wok Express",
  category: "Restaurante de comida china rápida",
  cuisine: "Comida china",
  city: "Chapala",
  state: "Jalisco",
  country: "México",

  address: {
    street: "Paseo Ramón Corona 8C",
    locality: "Chapala",
    region: "Jalisco",
    country: "México",
    postalCode: "45900",
    display: "Paseo Ramón Corona 8C, 45900 Chapala, Jalisco, México",
  },

  phone: {
    display: "33 2631 4263",
    tel: "+523326314263",
  },

  whatsapp: {
    number: "523326314263",
    url: "https://wa.me/523326314263",
    confirmed: true,
  },

  email: "wokexpres01@gmail.com",

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61579570480332",
    instagram: null,
  },

  hours: {
    confirmed: false,
    note: "Horario por confirmar — llama o escribe por WhatsApp para conocer la disponibilidad del día.",
    schedule: null,
  },

  ordering: {
    takeout: true,
    phoneOrders: true,
    whatsappOrders: true,
    dineIn: null,
    delivery: null,
  },

  positioning: {
    observedLine: "Comida China Rápida en Chapala",
    observedNote: "Tú eliges, nosotros lo armamos",
    label: "[Expresión observada en canales oficiales — no confirmada como slogan registrado]",
  },

  verification: {
    hours: "REQUIERE VERIFICACIÓN",
    menu: "INFORMACIÓN NO DISPONIBLE — pendiente de contenido real",
    dineIn: "REQUIERE VERIFICACIÓN",
    delivery: "REQUIERE VERIFICACIÓN",
    whatsapp: "CONFIRMADO por el usuario",
    malecon: "NO VERIFICADO — omitido del contenido publicado",
  },
};

export function mapsEmbedUrl() {
  const q = encodeURIComponent(`${business.name}, ${business.address.display}`);
  return `https://www.google.com/maps?q=${q}&output=embed`;
}

export function mapsDirectionsUrl() {
  const q = encodeURIComponent(business.address.display);
  return `https://www.google.com/maps/dir/?api=1&destination=${q}`;
}
