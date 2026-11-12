// Wok Express Min Wah — bilingual (ES default / EN) content engine.
// Spanish is the source language (server-rendered in the HTML); English is
// a client-side translation layer for visitor convenience. Keys map 1:1
// across both dictionaries — add a key to BOTH objects when adding markup.

const I18N = {
  es: {
    nav_home: "Inicio",
    nav_menu: "Menú",
    nav_order: "Cómo ordenar",
    nav_location: "Ubicación",
    nav_contact: "Contacto",
    nav_call: "33 2631 4263",
    nav_whatsapp: "WhatsApp",

    announce: "Comida china rápida para llevar · Chapala, Jalisco · Pide por teléfono o WhatsApp",

    hero_badge: "Chapala, Jalisco",
    hero_title_1: "Wok Express",
    hero_title_2: "Min Wah",
    hero_subtitle_strong: "Comida china rápida en Chapala.",
    hero_subtitle_rest: " Platillos preparados al wok, listos para llevar — pide por teléfono o WhatsApp y recógelos en Paseo Ramón Corona 8C, a unos pasos del Malecón.",
    hero_note: "Frase observada en canales oficiales del negocio — presentada como referencia de posicionamiento, no como slogan registrado.",
    hero_cta_whatsapp: "Ordenar por WhatsApp",
    hero_cta_call: "Llamar ahora",
    hero_cta_menu: "Ver menú",
    hero_meta_address: "Paseo Ramón Corona 8C, Chapala",
    hero_meta_takeout: "Para llevar",
    hero_photo_badge: "Al wok, con fuego real",

    marquee_1: "Comida china rápida",
    marquee_2: "Para llevar",
    marquee_3: "Chapala, Jalisco",
    marquee_4: "Pedidos por WhatsApp",
    marquee_5: "Preparado al wok",
    marquee_6: "Paseo Ramón Corona 8C",

    about_eyebrow: "Quiénes somos",
    about_title: "Comida china preparada al wok, pensada para llevar",
    about_body_1: "Wok Express Min Wah es un negocio gastronómico de comida china rápida ubicado en Chapala, Jalisco. Nuestro modelo está enfocado en pedidos ágiles para llevar, tomados por teléfono o WhatsApp.",
    about_body_2: "No somos un restaurante de mesa ni buffet: somos un punto rápido, pensado para quien quiere comida china recién preparada sin complicaciones, cerca del centro de Chapala.",
    about_photo_caption: "Imagen ilustrativa del estilo de cocina — no corresponde a instalaciones del establecimiento",

    mood_eyebrow: "Nuestro estilo",
    mood_quote_pre: "Calor, movimiento y comida ",
    mood_quote_em: "preparada al wok",
    mood_quote_post: ".",
    mood_body: "Es un concepto de dirección de arte que desarrollamos a partir de nuestra identidad visual — el fuego, el movimiento circular, el contraste rojo y negro — no una declaración oficial del negocio.",
    mood_caption_1: "Wok al fuego — imagen ilustrativa",
    mood_caption_2: "Cocina en movimiento — imagen ilustrativa",

    steps_eyebrow: "Cómo funciona",
    steps_title: "Pedir es simple y rápido",
    step1_title: "Llama o escribe",
    step1_body: "Contáctanos por teléfono al 33 2631 4263 o directamente por WhatsApp para hacer tu pedido.",
    step2_title: "Confirma tu platillo",
    step2_body: "Dinos qué se te antoja; nuestro equipo te confirma disponibilidad y tiempo de preparación.",
    step3_title: "Recógelo para llevar",
    step3_body: "Pasa por tu pedido en Paseo Ramón Corona 8C, Chapala, listo y caliente.",

    menu_eyebrow: "Menú",
    menu_title: "Nuestros platillos",
    menu_panel_title: "Estamos publicando el menú digital completo",
    menu_panel_body: "Para conocer los platillos, combos y precios vigentes, escríbenos por WhatsApp, llama al restaurante o consulta nuestra página oficial de Facebook — no queremos mostrarte información que no podamos confirmar.",
    menu_cta_whatsapp: "Preguntar por WhatsApp",
    menu_cta_call: "Llamar",
    menu_cta_fb: "Ver Facebook",
    menu_page_intro: "Comida china preparada al wok en Chapala, Jalisco.",
    menu_page_panel_title: "Estamos publicando nuestro menú digital",
    menu_page_panel_body: "Queremos mostrarte únicamente platillos, combos y precios que podamos confirmar como vigentes — por eso esta sección se está completando con el menú real del restaurante. Mientras tanto, la forma más rápida de conocer las opciones del día es contactarnos directamente.",
    menu_page_cta_title: "¿Ya sabes qué quieres pedir?",
    menu_page_cta_subtitle: "Haznos tu pedido para llevar",

    gallery_eyebrow: "Ambiente",
    gallery_title: "El wok, el fuego, la comida china para llevar",
    gallery_note: "Fotografías ilustrativas del estilo de cocina al wok y comida china para llevar — no corresponden a instalaciones, personal o platillos específicos de Wok Express Min Wah.",

    faq_eyebrow: "Preguntas frecuentes",
    faq_title: "Antes de pedir",
    faq_q1: "¿Hacen entrega a domicilio?",
    faq_a1: "Por ahora estamos confirmando esta información. Llámanos o escríbenos por WhatsApp y te decimos si hay servicio a domicilio disponible en tu zona.",
    faq_q2: "¿Puedo comer ahí mismo (consumo en el establecimiento)?",
    faq_a2: "Nuestro modelo está enfocado en pedidos para llevar. Si tienes duda sobre consumo en el local, contáctanos directamente para confirmarlo.",
    faq_q3: "¿Cuál es el horario de atención?",
    faq_a3: "Estamos confirmando el horario exacto. Llama al 33 2631 4263 o escribe por WhatsApp para conocer la disponibilidad del día.",
    faq_q4: "¿Qué formas de pago aceptan?",
    faq_a4: "Aún no tenemos esta información confirmada. Pregunta directamente al hacer tu pedido por teléfono o WhatsApp.",
    faq_q5: "¿Cómo hago mi pedido?",
    faq_a5: "Por teléfono al 33 2631 4263 o por WhatsApp al mismo número. Confirmamos tu platillo y el tiempo estimado, y lo recoges para llevar en Paseo Ramón Corona 8C.",
    faq_q6: "¿Dónde están ubicados?",
    faq_a6: "En Paseo Ramón Corona 8C, Chapala, Jalisco, México, C.P. 45900.",

    hours_title: "Horario",
    hours_body: "Estamos confirmando el horario exacto de atención. Llama o escribe por WhatsApp para conocer la disponibilidad del día.",
    hours_cta: "Llamar ahora",
    takeout_title: "Para llevar",
    takeout_body: "Nuestro servicio está enfocado en pedidos para llevar. Ordena con anticipación por teléfono o WhatsApp y recoge tu comida lista.",

    location_eyebrow: "Ubicación",
    location_title: "Encuéntranos en Chapala",
    location_cta_directions: "Cómo llegar",
    location_phone_label: "Teléfono y WhatsApp",
    location_email_label: "Correo electrónico",
    location_address_label: "Dirección",
    location_hours_label: "Horario",
    location_malecon_note: "A unos pasos del Malecón de Chapala.",

    cta_title: "¿Se te antojó? Pide para llevar",
    cta_body: "Escríbenos por WhatsApp o llama directamente — te confirmamos tu pedido en minutos.",
    cta_whatsapp: "Ordenar por WhatsApp",
    cta_call: "Llamar al 33 2631 4263",

    footer_tagline: "Comida china rápida en Chapala, Jalisco. Pedidos para llevar por teléfono o WhatsApp.",
    footer_nav_title: "Navegación",
    footer_contact_title: "Contacto",
    footer_hours_title: "Horario",
    footer_hours_body: "Por confirmar — llama o escribe por WhatsApp",
    footer_rights: "Todos los derechos reservados.",

    theme_toggle_aria: "Cambiar entre tema claro y oscuro",
    lang_es: "ES",
    lang_en: "EN",

    contact_hero_title: "Habla con nosotros",
    contact_hero_subtitle: "Pedidos para llevar por teléfono o WhatsApp en Chapala, Jalisco.",
  },

  en: {
    nav_home: "Home",
    nav_menu: "Menu",
    nav_order: "How to Order",
    nav_location: "Location",
    nav_contact: "Contact",
    nav_call: "33 2631 4263",
    nav_whatsapp: "WhatsApp",

    announce: "Fast Chinese takeout · Chapala, Jalisco · Order by phone or WhatsApp",

    hero_badge: "Chapala, Jalisco",
    hero_title_1: "Wok Express",
    hero_title_2: "Min Wah",
    hero_subtitle_strong: "Fast Chinese food in Chapala.",
    hero_subtitle_rest: " Wok-prepared dishes, ready to go — order by phone or WhatsApp and pick up at Paseo Ramón Corona 8C, just steps from the Malecón.",
    hero_note: "Phrase observed on the business's official channels — shown here as a positioning reference, not as a registered slogan.",
    hero_cta_whatsapp: "Order on WhatsApp",
    hero_cta_call: "Call now",
    hero_cta_menu: "View menu",
    hero_meta_address: "Paseo Ramón Corona 8C, Chapala",
    hero_meta_takeout: "Takeout",
    hero_photo_badge: "Wok-fired, real flame",

    marquee_1: "Fast Chinese food",
    marquee_2: "Takeout",
    marquee_3: "Chapala, Jalisco",
    marquee_4: "Order via WhatsApp",
    marquee_5: "Wok-prepared",
    marquee_6: "Paseo Ramón Corona 8C",

    about_eyebrow: "Who we are",
    about_title: "Chinese food prepared in the wok, made for takeout",
    about_body_1: "Wok Express Min Wah is a fast Chinese food business located in Chapala, Jalisco. Our model is built around quick takeout orders, placed by phone or WhatsApp.",
    about_body_2: "We're not a sit-down restaurant or a buffet — we're a fast stop for anyone who wants freshly prepared Chinese food without the fuss, near downtown Chapala.",
    about_photo_caption: "Illustrative image of the cooking style — not a photo of the actual premises",

    mood_eyebrow: "Our style",
    mood_quote_pre: "Heat, motion, and food ",
    mood_quote_em: "made in the wok",
    mood_quote_post: ".",
    mood_body: "This is an art-direction concept we developed from our visual identity — fire, circular motion, the red-and-black contrast — not an official statement from the business.",
    mood_caption_1: "Wok over flame — illustrative image",
    mood_caption_2: "Cooking in motion — illustrative image",

    steps_eyebrow: "How it works",
    steps_title: "Ordering is simple and fast",
    step1_title: "Call or message us",
    step1_body: "Reach us by phone at 33 2631 4263 or directly on WhatsApp to place your order.",
    step2_title: "Confirm your dish",
    step2_body: "Tell us what you're craving; our team confirms availability and prep time.",
    step3_title: "Pick it up to go",
    step3_body: "Swing by Paseo Ramón Corona 8C, Chapala, and pick up your order hot and ready.",

    menu_eyebrow: "Menu",
    menu_title: "Our dishes",
    menu_panel_title: "We're publishing our full digital menu",
    menu_panel_body: "We only want to show you dishes, combos and prices we can confirm are current — that's why this section is being completed with the restaurant's real menu. In the meantime, the fastest way to see today's options is to contact us directly.",
    menu_cta_whatsapp: "Ask on WhatsApp",
    menu_cta_call: "Call",
    menu_cta_fb: "See Facebook",
    menu_page_intro: "Chinese food prepared in the wok in Chapala, Jalisco.",
    menu_page_panel_title: "We're publishing our digital menu",
    menu_page_panel_body: "We only want to show you dishes, combos and prices we can confirm as current — that's why this section is being filled in with the restaurant's real menu. In the meantime, the fastest way to see today's options is to contact us directly.",
    menu_page_cta_title: "Already know what you want?",
    menu_page_cta_subtitle: "Place your takeout order",

    gallery_eyebrow: "Mood",
    gallery_title: "The wok, the fire, Chinese food to go",
    gallery_note: "Illustrative photography of the wok-cooking style and Chinese takeout food — these do not depict the actual premises, staff, or specific dishes of Wok Express Min Wah.",

    faq_eyebrow: "Frequently asked questions",
    faq_title: "Before you order",
    faq_q1: "Do you deliver?",
    faq_a1: "We're still confirming this. Call us or message us on WhatsApp and we'll let you know if delivery is available in your area.",
    faq_q2: "Can I eat on-site?",
    faq_a2: "Our model is focused on takeout orders. If you're unsure about eating on-site, contact us directly to confirm.",
    faq_q3: "What are your hours?",
    faq_a3: "We're confirming exact hours. Call 33 2631 4263 or message us on WhatsApp to check today's availability.",
    faq_q4: "What payment methods do you accept?",
    faq_a4: "We don't have this confirmed yet. Please ask directly when placing your order by phone or WhatsApp.",
    faq_q5: "How do I place an order?",
    faq_a5: "By phone at 33 2631 4263 or on WhatsApp at the same number. We confirm your dish and the estimated time, and you pick it up to go at Paseo Ramón Corona 8C.",
    faq_q6: "Where are you located?",
    faq_a6: "At Paseo Ramón Corona 8C, Chapala, Jalisco, México, 45900.",

    hours_title: "Hours",
    hours_body: "We're confirming our exact operating hours. Call or message us on WhatsApp to check today's availability.",
    hours_cta: "Call now",
    takeout_title: "Takeout",
    takeout_body: "Our service is focused on takeout orders. Order ahead by phone or WhatsApp and pick up your food ready to go.",

    location_eyebrow: "Location",
    location_title: "Find us in Chapala",
    location_cta_directions: "Get directions",
    location_phone_label: "Phone & WhatsApp",
    location_email_label: "Email",
    location_address_label: "Address",
    location_hours_label: "Hours",
    location_malecon_note: "Just steps from the Chapala Malecón (lakefront boardwalk).",

    cta_title: "Craving it? Order takeout now",
    cta_body: "Message us on WhatsApp or call directly — we'll confirm your order in minutes.",
    cta_whatsapp: "Order on WhatsApp",
    cta_call: "Call 33 2631 4263",

    footer_tagline: "Fast Chinese food in Chapala, Jalisco. Takeout orders by phone or WhatsApp.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Contact",
    footer_hours_title: "Hours",
    footer_hours_body: "To be confirmed — call or message us on WhatsApp",
    footer_rights: "All rights reserved.",

    theme_toggle_aria: "Switch between light and dark theme",
    lang_es: "ES",
    lang_en: "EN",

    contact_hero_title: "Get in touch",
    contact_hero_subtitle: "Takeout orders by phone or WhatsApp in Chapala, Jalisco.",
  },
};

const I18N_META = {
  home: {
    es: { title: "Wok Express Min Wah | Comida China Rápida en Chapala, Jalisco", description: "Wok Express Min Wah: comida china rápida para llevar en Chapala, Jalisco, a pasos del Malecón. Pide por teléfono o WhatsApp en Paseo Ramón Corona 8C." },
    en: { title: "Wok Express Min Wah | Fast Chinese Food in Chapala, Jalisco", description: "Wok Express Min Wah: fast Chinese takeout in Chapala, Jalisco, steps from the Malecón. Order by phone or WhatsApp at Paseo Ramón Corona 8C." },
  },
  menu: {
    es: { title: "Menú | Wok Express Min Wah — Comida China en Chapala", description: "Consulta cómo conocer el menú actual de Wok Express Min Wah en Chapala: llama, escribe por WhatsApp o visita nuestra página de Facebook." },
    en: { title: "Menu | Wok Express Min Wah — Chinese Food in Chapala", description: "Find out how to see the current menu at Wok Express Min Wah in Chapala: call, message us on WhatsApp, or visit our Facebook page." },
  },
  contact: {
    es: { title: "Contacto y Ubicación | Wok Express Min Wah — Chapala", description: "Contacta a Wok Express Min Wah en Chapala, Jalisco. Teléfono, WhatsApp, correo y ubicación en Paseo Ramón Corona 8C." },
    en: { title: "Contact & Location | Wok Express Min Wah — Chapala", description: "Contact Wok Express Min Wah in Chapala, Jalisco. Phone, WhatsApp, email, and location at Paseo Ramón Corona 8C." },
  },
};

(function () {
  function getLang() {
    const qs = new URLSearchParams(location.search).get("lang");
    if (qs === "es" || qs === "en") return qs;
    try {
      return localStorage.getItem("wemw-lang") || "es";
    } catch (e) {
      return "es";
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem("wemw-lang", lang);
    } catch (e) {}
    applyLang(lang);
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.es;
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "es-MX");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    const ALLOWED_TAGS = ["strong", "em", "b", "i"];
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-html").split(",");
      let html = "";
      spec.forEach((token) => {
        const match = token.match(/^(\w+):(.+)$/);
        const tag = match && ALLOWED_TAGS.includes(match[1]) ? match[1] : null;
        const k = match ? match[2] : token;
        const val = dict[k] !== undefined ? dict[k] : "";
        html += tag ? `<${tag}>${val}</${tag}>` : val;
      });
      el.innerHTML = html;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr")
        .split(",")
        .forEach((pair) => {
          const [attr, key] = pair.split(":");
          if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
        });
    });

    const page = document.body.getAttribute("data-page");
    const meta = page && I18N_META[page] ? I18N_META[page][lang] : null;
    if (meta) {
      document.title = meta.title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", meta.description);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", meta.title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", meta.description);
    }

    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getLang());
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
  });
})();
