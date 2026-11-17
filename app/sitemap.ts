import type { MetadataRoute } from "next";
import { idiomas, ruta } from "@/lib/i18n";
import { slugs } from "@/lib/proyectos";
import { sitio } from "@/lib/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  const caminos = ["/", ...slugs.map((slug) => `/proyectos/${slug}`)];
  return caminos.flatMap((camino) =>
    idiomas.map((idioma) => ({
      url: sitio.url + ruta(idioma, camino),
      changeFrequency: "monthly" as const,
      priority: camino === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(idiomas.map((otro) => [otro, sitio.url + ruta(otro, camino)])),
      },
    })),
  );
}
