import Link from "next/link";
import { cacheLife } from "next/cache";
import Icono from "@/components/Icono";
import type { Diccionario } from "@/lib/diccionarios";
import { ruta, type Idioma } from "@/lib/i18n";
import { secciones, sitio } from "@/lib/sitio";

/** El año se recalcula a diario sin volver dinámica la página. */
async function anioActual() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default async function Pie({ idioma, t }: { idioma: Idioma; t: Diccionario }) {
  const inicio = ruta(idioma);
  const anio = await anioActual();
  const redes = [
    { etiqueta: "LinkedIn", url: sitio.linkedin },
    { etiqueta: "GitHub", url: sitio.github },
    { etiqueta: t.contacto.correo, url: `mailto:${sitio.correo}` },
  ];

  return (
    <footer className="overflow-hidden bg-(--acero-950) pt-16 sm:pt-20">
      <div className="contenedor">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          <p className="max-w-[22rem] text-[1.125rem] leading-snug lg:col-span-5">{t.pie.lema}</p>

          <nav aria-label={t.pie.navegacion} className="lg:col-span-2 lg:col-start-7">
            <h2 className="dato text-tenue">{t.pie.navegacion}</h2>
            <ul className="mt-3 space-y-1.5">
              {secciones.map((id) => (
                <li key={id}>
                  <Link href={`${inicio}#${id}`} className="enlace">
                    {t.nav[id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="dato text-tenue">{t.pie.redes}</h2>
            <ul className="mt-3 space-y-1.5">
              {redes.map((red) => (
                <li key={red.etiqueta}>
                  <a href={red.url} rel="me noopener noreferrer" className="enlace">
                    {red.etiqueta}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="dato text-tenue">{t.contacto.ubicacion}</h2>
            <p className="mt-3 leading-snug">
              {sitio.ciudad}, {sitio.pais}
              <span className="dato mt-1.5 block text-suave">
                {sitio.locode} · {sitio.coordenadas}
              </span>
            </p>
          </div>
        </div>

        <div className="dato mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-regla pt-5 text-tenue">
          <p>
            © {anio} {sitio.marca} · {sitio.nombre}
          </p>
          <p className="normal-case tracking-normal">{t.pie.hechoCon}</p>
          <a href="#arriba" className="inline-flex items-center gap-2 text-suave hover:text-texto">
            {t.pie.arriba}
            <Icono nombre="flecha-arriba" className="size-3.5" />
          </a>
        </div>
      </div>

      <p aria-hidden="true" className="pie-marca estarcido mt-10 select-none text-(--acero-700)">
        {sitio.marca}
      </p>
    </footer>
  );
}
