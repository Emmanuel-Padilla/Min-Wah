# Restaurant Min Wah — sitio web

Auténtica comida china en Ajijic, Jalisco (desde 1994). Incluye la sucursal Wok Express (comida rápida, Chapala) como sección.

## Stack

- **React 19** + **TypeScript** — componentes e interfaz
- **Tailwind CSS 4** — estilos, colores y diseño responsivo (config CSS-first en `src/index.css`)
- **Vite 6** — servidor de desarrollo y build de producción
- **React Router 7** — navegación entre páginas (`/`, `/menu`, `/contacto`)
- **Framer Motion 11** — animaciones (scroll reveal, menú móvil, acordeón FAQ, hero)

## Estructura

```
src/
  data/business.ts       # única fuente de verdad para NAP (nombre, dirección, teléfono...)
  i18n/                   # diccionario ES/EN + contexto de idioma
  theme/                  # contexto de tema claro/oscuro
  seo/                    # meta tags + JSON-LD por página
  components/             # componentes compartidos (Navbar, Footer, botones, íconos...)
  components/home/        # secciones exclusivas de la página de inicio
  pages/                  # Home, MenuPage, ContactPage, NotFound
public/
  assets/logo/            # logo oficial en distintos tamaños
  assets/images/opt/      # fotografías (Pexels) optimizadas, uso ilustrativo
```

## Dominio, SEO y publicación

- Copia `.env.example` a `.env` y define `VITE_SITE_URL` (dominio definitivo, sin barra final).
- **Con dominio**: el build genera `robots.txt` (Allow) y `sitemap.xml` (/, /menu, /contacto, /wok-express) y pone el canonical.
- **Sin dominio**: se trata como pruebas — `robots.txt` con `Disallow: /`, meta `noindex` y sin sitemap.
- Rutas directas y recarga: `public/.htaccess` (Apache/Hostinger) y `public/_redirects` (Netlify) envían todo a `index.html`.
- Pendiente tras publicar: enviar el sitemap a Search Console y verificar el perfil de Google.

## Desarrollo

```bash
npm install
npm run dev       # http://127.0.0.1:5173
npm run build     # type-check + build de producción en dist/
npm run preview   # sirve dist/ localmente
```

## Contenido pendiente

- **Logo de Min Wah**: ya integrado (`public/assets/logo-minwah/`, usado en `components/Wordmark.tsx`, favicon y JSON-LD). Falta confirmar la paleta definitiva a partir del logo (rojo greca, oro, negro); la actual es provisional, en `src/index.css`.
- **Fotos reales** del restaurante: las actuales son de stock, marcadas como ilustrativas.
- **Menú completo y precios**: solo está el Lunch Special ($240). Agregar el resto en `src/pages/MenuPage.tsx`.
- **Wok Express**: el formulario no trae sus datos. Dirección/teléfono vienen del sitio anterior (`wokExpress` en `src/data/business.ts`, `confirmed: false`). Falta su menú.
- Código postal/colonia de Min Wah, dominio real en `sitemap.xml`, aviso de privacidad.

## Nota

El sitio estático anterior (HTML/CSS/JS sin build) se conserva como referencia
en `legacy-static-site/` y ya no se usa en producción.
