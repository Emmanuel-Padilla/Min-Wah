/**
 * Restaurant Min Wah — single source of truth for NAP + business facts.
 * Fuente: "Formulario cliente Restaurant Min Wah" (validó Tamara Ramos, 06-nov-2026).
 * Every component must read from here, never hardcode a duplicate value.
 */

export const business = {
  name: "Restaurant Min Wah",
  shortName: "Min Wah",
  category: "Restaurante de comida china",
  cuisine: "Comida china (Szechuan, Mandarín y Cantonesa)",
  city: "Ajijic",
  state: "Jalisco",
  country: "México",
  founded: 1994,

  address: {
    street: "Callejón al Tepalo 96",
    locality: "Ajijic",
    region: "Jalisco",
    country: "México",
    /** Código postal y colonia no vienen en el formulario — no se publican hasta confirmarse. */
    display: "Callejón al Tepalo 96, Ajijic, Jalisco, México",
  },

  /** Enlace oficial de Google Maps entregado por el cliente. */
  mapsShareUrl: "https://share.google/T61nt8sDY0zYt8ow0",

  phone: {
    display: "376 766 06 86",
    tel: "+523767660686",
  },

  whatsapp: {
    number: "523767660686",
    url: "https://wa.me/523767660686",
  },

  email: "restaurantminwah@gmail.com",

  social: {
    facebook: "https://www.facebook.com/RestaurantMinWah/",
    instagram: "https://www.instagram.com/restaurant_min_wah",
  },

  hours: {
    /** Lunes a domingo igual. */
    open: "11:00",
    close: "19:00",
    display: { es: "Lunes a domingo · 11:00 am – 7:00 pm", en: "Monday to Sunday · 11:00 am – 7:00 pm" },
  },

  services: {
    dineIn: true,
    takeout: true,
    delivery: true,
    pickup: true,
    buffet: true,
    breakfast: true,
    reservations: true, // por WhatsApp o teléfono
    parking: true,
    petFriendlyTerrace: true,
    englishService: true,
    invoicing: true, // datos de facturación por WhatsApp
    payments: ["Efectivo", "Tarjeta de débito", "Tarjeta de crédito"],
  },

  delivery: {
    area: "De Jocotepec a Chapala",
    ajijicCentroFee: 50, // MXN
  },

  /** Precios en pesos mexicanos, IVA incluido. */
  lunchSpecial: {
    price: 240,
  },
} as const;

/**
 * Wok Express — sucursal de comida china rápida de Min Wah.
 * ⚠ El formulario no trae datos propios de Wok Express (datos_wok vacío).
 * Estos datos vienen del sitio anterior y están pendientes de confirmación
 * por el cliente; su menú también está pendiente.
 */
export const wokExpress = {
  name: "Wok Express",
  confirmed: false,
  address: {
    street: "Paseo Ramón Corona 8C",
    display: "Paseo Ramón Corona 8C, 45900 Chapala, Jalisco, México",
  },
  phone: { display: "33 2631 4263", tel: "+523326314263" },
  whatsapp: { url: "https://wa.me/523326314263" },
  facebook: "https://www.facebook.com/profile.php?id=61579570480332",
  email: "wokexpres01@gmail.com",
} as const;

export function mapsEmbedUrl(): string {
  const q = encodeURIComponent(`${business.name}, ${business.address.display}`);
  return `https://www.google.com/maps?q=${q}&output=embed`;
}

export function mapsDirectionsUrl(): string {
  return business.mapsShareUrl;
}

export function wokMapsEmbedUrl(): string {
  const q = encodeURIComponent(`${wokExpress.name}, ${wokExpress.address.display}`);
  return `https://www.google.com/maps?q=${q}&output=embed`;
}

export function wokMapsDirectionsUrl(): string {
  const q = encodeURIComponent(wokExpress.address.display);
  return `https://www.google.com/maps/dir/?api=1&destination=${q}`;
}
