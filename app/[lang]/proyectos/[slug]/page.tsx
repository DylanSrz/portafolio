import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icono from "@/components/Icono";
import JsonLd from "@/components/JsonLd";
import Placa from "@/components/Placa";
import { diccionario } from "@/lib/diccionarios";
import { esIdioma, etiquetaOg, idiomas, ruta } from "@/lib/i18n";
import { proyectoPorSlug, proyectos, slugs } from "@/lib/proyectos";
import { sitio } from "@/lib/sitio";

type Props = PageProps<"/[lang]/proyectos/[slug]">;

export function generateStaticParams() {
  return idiomas.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!esIdioma(lang)) return {};
  const proyecto = proyectoPorSlug(lang, slug);
  if (!proyecto) return {};
  const camino = `/proyectos/${slug}`;
  const t = diccionario(lang);
  const titulo = `${proyecto.nombre} · ${t.tipos[proyecto.tipo]}`;
  return {
    title: titulo,
    description: proyecto.resumen,
    alternates: {
      canonical: ruta(lang, camino),
      languages: { es: ruta("es", camino), en: ruta("en", camino), "x-default": ruta("es", camino) },
    },
    openGraph: {
      type: "article",
      siteName: sitio.marca,
      title: titulo,
      description: proyecto.resumen,
      url: ruta(lang, camino),
      locale: etiquetaOg[lang],
    },
    twitter: { card: "summary_large_image", title: titulo, description: proyecto.resumen },
  };
}

export default async function PaginaProyecto({ params }: Props) {
  const { lang, slug } = await params;
  if (!esIdioma(lang)) notFound();
  const lista = proyectos(lang);
  const indice = lista.findIndex((item) => item.slug === slug);
  if (indice === -1) notFound();

  const proyecto = lista[indice];
  const anterior = lista[(indice - 1 + lista.length) % lista.length];
  const siguiente = lista[(indice + 1) % lista.length];
  const t = diccionario(lang);
  const d = t.detalle;
  const url = sitio.url + ruta(lang, `/proyectos/${slug}`);
  const repositorio = proyecto.enlaces.find((enlace) => enlace.clave === "codigo");

  return (
    <article>
      <JsonLd
        datos={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": repositorio ? "SoftwareSourceCode" : "CreativeWork",
              name: proyecto.nombre,
              description: proyecto.resumen,
              url,
              inLanguage: lang,
              keywords: proyecto.stack.join(", "),
              ...(repositorio ? { codeRepository: repositorio.url } : {}),
              author: { "@type": "Person", name: sitio.nombre, alternateName: sitio.marca, url: sitio.url },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: sitio.marca, item: sitio.url + ruta(lang) },
                { "@type": "ListItem", position: 2, name: proyecto.nombre, item: url },
              ],
            },
          ],
        }}
      />

      <header className="acero">
        <div className="contenedor pb-10 pt-8 sm:pb-14 sm:pt-10">
          <Link
            href={`${ruta(lang)}#proyectos`}
            className="dato inline-flex items-center gap-2 py-2 text-suave transition-colors hover:text-texto"
          >
            <Icono nombre="flecha-izquierda" className="size-3.5" />
            {d.volver}
          </Link>
          <h1 className="display mt-8 text-[clamp(3.5rem,13.5vw,13rem)] font-black leading-[0.8]">
            {proyecto.nombre}
          </h1>
          <p className="mt-7 max-w-[42rem] text-[clamp(1.125rem,1.6vw,1.375rem)] leading-normal text-suave">
            {proyecto.resumen}
          </p>
        </div>
      </header>

      <div className={proyecto.enProduccion ? "franja" : "border-b border-regla-fuerte bg-superficie"}>
        <div className="contenedor flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="dato estado text-[0.8125rem] font-medium">{proyecto.estado}</p>
          <ul aria-label={d.destinos} className="flex flex-wrap gap-2.5">
            {proyecto.enlaces.map((enlace, posicion) => (
              <li key={enlace.url}>
                <a
                  href={enlace.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`boton ${
                    proyecto.enProduccion
                      ? posicion === 0
                        ? "boton--tinta"
                        : "boton--linea-tinta"
                      : "boton--claro"
                  }`}
                >
                  <span>{enlace.etiqueta}</span>
                  <Icono nombre="flecha-diagonal" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="contenedor grid gap-x-8 gap-y-14 py-14 lg:grid-cols-12 lg:py-20">
        <aside className="min-w-0 lg:col-span-4 xl:col-span-3">
          <div className="lg:sticky lg:top-[calc(var(--alto-cabecera)+2rem)]">
            <h2 className="dato border-b-2 border-pintura pb-3 font-medium">{d.ficha}</h2>
            <dl>
              {[
                [t.proyectos.columnas.codigo, proyecto.codigo],
                [d.tipo, t.tipos[proyecto.tipo]],
                [d.rol, proyecto.rol],
                [d.estado, proyecto.estado],
              ].map(([termino, valor]) => (
                <div key={termino} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-regla py-3.5">
                  <dt className="dato pt-1 text-tenue">{termino}</dt>
                  <dd className="leading-snug">{valor}</dd>
                </div>
              ))}
            </dl>

            <h2 className="dato mt-10 border-b-2 border-pintura pb-3 font-medium">{d.stack}</h2>
            <ul className="display mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[1.625rem] leading-none">
              {proyecto.stack.map((tecnologia) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="min-w-0 space-y-16 lg:col-span-8 xl:col-start-5">
          <figure>
            <Placa
              proyecto={proyecto}
              idioma={lang}
              alt={`${d.capturaDe} ${proyecto.nombre}`}
              variante="ficha"
              prioridad
              sizes="(min-width: 1024px) 64vw, 100vw"
            />
            {proyecto.extra && (
              <figcaption className="mt-3 text-[0.9375rem] text-tenue">
                <span className="font-semibold text-suave">
                  {proyecto.extra === "rutas" ? d.rutasTitulo : d.flujoTitulo}.
                </span>{" "}
                {proyecto.extra === "rutas" ? d.rutasNota : d.flujoNota}
              </figcaption>
            )}
          </figure>

          <section aria-labelledby="titulo-problema">
            <h2 id="titulo-problema" className="display text-[clamp(2.25rem,4vw,3.5rem)]">
              {d.problema}
            </h2>
            <p className="mt-5 max-w-[44rem] text-[clamp(1.1875rem,1.7vw,1.4375rem)] leading-normal">
              {proyecto.problema}
            </p>
          </section>

          <section aria-labelledby="titulo-aportes">
            <h2 id="titulo-aportes" className="display text-[clamp(2.25rem,4vw,3.5rem)]">
              {d.aportes}
            </h2>
            <ul className="mt-5 border-t border-regla-fuerte">
              {proyecto.aportes.map((aporte) => (
                <li key={aporte} className="max-w-none border-b border-regla py-4 text-[1.125rem] leading-normal text-suave">
                  <span className="block max-w-[44rem]">{aporte}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="titulo-decisiones">
            <h2 id="titulo-decisiones" className="display text-[clamp(2.25rem,4vw,3.5rem)]">
              {d.decisiones}
            </h2>
            <dl className="mt-5 border-t border-regla-fuerte">
              {proyecto.decisiones.map((decision) => (
                <div
                  key={decision.titulo}
                  className="grid gap-x-8 gap-y-1.5 border-b border-regla py-5 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
                >
                  <dt className="text-[1.1875rem] font-semibold leading-snug">{decision.titulo}</dt>
                  <dd className="leading-relaxed text-suave">{decision.detalle}</dd>
                </div>
              ))}
            </dl>
          </section>

          {proyecto.nota && <p className="dato text-tenue">{proyecto.nota}</p>}
        </div>
      </div>

      <nav aria-label={t.proyectos.titulo} className="border-t border-regla-fuerte">
        <div className="contenedor grid sm:grid-cols-2">
          {[
            { item: anterior, etiqueta: d.anterior, icono: "flecha-izquierda" as const, fin: false },
            { item: siguiente, etiqueta: d.siguiente, icono: "flecha-derecha" as const, fin: true },
          ].map(({ item, etiqueta, icono, fin }) => (
            <Link
              key={etiqueta}
              href={ruta(lang, `/proyectos/${item.slug}`)}
              className={`carga group block border-t-0 py-8 sm:py-12 ${
                fin ? "border-t border-regla sm:border-l sm:border-t-0 sm:pl-8 sm:text-right" : "sm:pr-8"
              }`}
            >
              <span className={`dato flex items-center gap-2 text-tenue ${fin ? "sm:flex-row-reverse" : ""}`}>
                <Icono nombre={icono} className="size-3.5" />
                {etiqueta} · {item.codigo}
              </span>
              <span className="carga-nombre mt-3 block text-[clamp(2.25rem,5vw,4.5rem)]">{item.nombre}</span>
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
