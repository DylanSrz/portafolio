import { diccionario } from "@/lib/diccionarios";
import { esIdioma, idiomaPorDefecto } from "@/lib/i18n";
import { imagenOg, tamanoOg } from "@/lib/og";
import { sitio } from "@/lib/sitio";

export const alt = "DylanSrz · Full Stack Developer";
export const size = tamanoOg;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = diccionario(esIdioma(lang) ? lang : idiomaPorDefecto);
  return imagenOg({
    titulo: sitio.marca,
    linea: `${t.hero.rol} · ${sitio.ciudad}, CO`,
    codigo: sitio.locode,
    vivo: true,
  });
}
