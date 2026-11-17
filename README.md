# Portafolio de Dylan Suárez (DylanSrz)

Sitio personal con mis proyectos, stack y contacto. Hecho con Next.js 16, React 19, TypeScript y Tailwind CSS 4. Está en español e inglés.

En producción: https://dylansuarez.vercel.app

## Cómo correrlo

```bash
npm install
npm run dev
```

El sitio queda en http://localhost:3000.

Comprobaciones antes de subir cambios:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Idiomas y rutas

- Español (por defecto): `/` y `/proyectos/<slug>`.
- Inglés: `/en` y `/en/proyectos/<slug>`.

Por dentro, todas las páginas viven en `app/[lang]`. El archivo `proxy.ts` reescribe las rutas sin prefijo a español y recuerda el idioma elegido con una cookie.

## Editar el contenido

| Qué | Dónde |
|---|---|
| Proyectos (datos y textos en los dos idiomas) | `lib/proyectos.ts` |
| Textos de la interfaz | `lib/diccionarios/es.ts` y `lib/diccionarios/en.ts` |
| Categorías del stack | `lib/stack.ts` |
| Correo, redes y URL del sitio | `lib/sitio.ts` |
| Capturas | `public/proyectos/` |

`en.ts` debe tener las mismas claves que `es.ts`. Si falta una, TypeScript marca el error.

Cada proyecto genera su página de detalle, su imagen para compartir y su entrada en `sitemap.xml`.

## Diseño

El sistema visual se llama «Manifiesto de Puerto»: acero pintado, pintura blanca cálida y una sola lima de seguridad, que se usa solo para lo que está en producción o disponible. Los tokens están en `app/globals.css`. El contexto de producto está en `PRODUCT.md` y el sistema de diseño en `DESIGN.md`.

## Despliegue

Se publica en Vercel importando el repositorio. No necesita variables de entorno.

## Pendientes

Segunda fase:

- [ ] Botón para descargar el CV. Falta el PDF, que irá en `public/`.
