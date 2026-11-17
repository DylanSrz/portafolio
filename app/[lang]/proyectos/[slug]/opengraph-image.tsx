import { diccionario } from "@/lib/diccionarios";
import { esIdioma, idiomaPorDefecto } from "@/lib/i18n";
import { imagenOg, tamanoOg } from "@/lib/og";
import { proyectoPorSlug } from "@/lib/proyectos";
import { sitio } from "@/lib/sitio";

export const alt = "DylanSrz";
export const size = tamanoOg;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const idioma = esIdioma(lang) ? lang : idiomaPorDefecto;
  const proyecto = proyectoPorSlug(idioma, slug);
  const t = diccionario(idioma);
  return imagenOg({
    titulo: proyecto?.nombre ?? sitio.marca,
    linea: proyecto ? `${t.tipos[proyecto.tipo]} · ${proyecto.estado}` : t.hero.rol,
    codigo: proyecto?.codigo ?? sitio.locode,
    vivo: proyecto?.enProduccion ?? false,
  });
}
