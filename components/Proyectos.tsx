import Link from "next/link";
import Icono from "@/components/Icono";
import Placa from "@/components/Placa";
import type { Diccionario } from "@/lib/diccionarios";
import { ruta, type Idioma } from "@/lib/i18n";
import { leyendaTipos, type Proyecto } from "@/lib/proyectos";

type Props = { idioma: Idioma; lista: Proyecto[]; t: Diccionario };

function Ficha({ proyecto, t }: { proyecto: Proyecto; t: Diccionario }) {
  const c = t.proyectos.columnas;
  return (
    <dl className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 text-[0.9375rem] leading-snug">
      <dt className="dato pt-0.5 text-tenue">{c.codigo}</dt>
      <dd className="estarcido text-[1.25rem]">{proyecto.codigo}</dd>
      <dt className="dato pt-0.5 text-tenue">{c.tipo}</dt>
      <dd>{t.tipos[proyecto.tipo]}</dd>
      <dt className="dato pt-0.5 text-tenue">{c.rol}</dt>
      <dd>{proyecto.rol}</dd>
      <dt className="dato pt-0.5 text-tenue">{c.destino}</dt>
      <dd className="min-w-0">
        <a
          href={proyecto.destino.url}
          className="enlace sobre [overflow-wrap:anywhere]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {proyecto.destino.host}
          <Icono nombre="flecha-diagonal" className="ml-1.5 inline-block size-3.5 align-[-0.1em]" />
        </a>
      </dd>
      <dt className="dato pt-0.5 text-tenue">{c.estado}</dt>
      <dd className={`estado ${proyecto.enProduccion ? "estado--vivo" : ""}`}>{proyecto.estado}</dd>
    </dl>
  );
}

/** Índice compacto: la tabla del manifiesto, una fila por carga. */
function Indice({ idioma, lista, t }: Props) {
  const c = t.proyectos.columnas;
  const columnas =
    "lg:grid-cols-[6.5rem_minmax(0,1.15fr)_minmax(0,2fr)_minmax(0,1.25fr)_10.5rem]";
  return (
    <div className="border-b border-regla-fuerte">
      <div
        aria-hidden="true"
        className={`dato hidden gap-x-6 border-t-2 border-pintura py-2.5 text-tenue lg:grid ${columnas}`}
      >
        <span>{c.codigo}</span>
        <span>{c.carga}</span>
        <span>{c.contenido}</span>
        <span>{c.destino}</span>
        <span>{c.estado}</span>
      </div>
      <ol className="manifiesto border-t-2 border-pintura lg:border-t-0">
        {lista.map((proyecto, indice) => (
          <li
            key={proyecto.slug}
            className={`carga grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-3 lg:items-center ${columnas} ${
              indice === 0 ? "border-t-0" : "border-t border-regla"
            }`}
          >
            <span className="estarcido order-1 text-[1.125rem] text-suave lg:order-none">
              {proyecto.codigo}
            </span>
            <span className="carga-nombre order-3 col-span-2 text-[clamp(1.75rem,2.6vw,2.375rem)] lg:order-none lg:col-span-1">
              <Link href={ruta(idioma, `/proyectos/${proyecto.slug}`)}>
                <span className="sr-only">{t.proyectos.verFicha} </span>
                {proyecto.nombre}
              </Link>
            </span>
            <span className="hidden text-[0.9375rem] leading-snug text-suave lg:block">{proyecto.resumen}</span>
            <span className="codigo hidden text-suave [overflow-wrap:anywhere] lg:block">{proyecto.destino.host}</span>
            <span
              className={`dato estado order-2 justify-self-end lg:order-none lg:justify-self-start ${
                proyecto.enProduccion ? "estado--vivo" : "text-suave"
              }`}
            >
              {proyecto.estado}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Proyectos({ idioma, lista, t }: Props) {
  return (
    <section id="proyectos" aria-labelledby="titulo-proyectos" className="pb-8 pt-8 sm:pt-10">
      <div className="contenedor">
        <h2 id="titulo-proyectos" className="display pb-4 text-[clamp(2.5rem,4vw,3.75rem)]">
          {t.proyectos.titulo}
        </h2>

        <Indice idioma={idioma} lista={lista} t={t} />

        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-baseline lg:justify-between lg:gap-8">
          <p className="max-w-[36rem] text-[0.9375rem] leading-snug text-suave">{t.proyectos.entrada}</p>
          <ul aria-label={t.proyectos.leyenda} className="dato flex flex-wrap gap-x-5 gap-y-1 text-tenue">
            {leyendaTipos.map(({ tipo, codigo }) => (
              <li key={tipo}>
                <span className="text-texto">{codigo}</span> {t.tipos[tipo]}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="sr-only">{t.proyectos.detalleTitulo}</h3>
        <ol className="manifiesto mt-12 lg:mt-16">
          {lista.map((proyecto, indice) => {
            const destacado = proyecto.enProduccion;
            const invertido = destacado && indice % 2 === 1;
            const alt = `${t.proyectos.capturaDe} ${proyecto.nombre}`;
            return (
              <li
                key={proyecto.slug}
                className={`carga grid gap-x-8 gap-y-7 py-9 lg:grid-cols-12 ${
                  destacado ? "lg:items-end lg:py-14" : "lg:items-start lg:py-10"
                }`}
              >
                <div
                  className={`@container ${
                    destacado
                      ? `lg:col-span-5 ${invertido ? "lg:order-2 lg:col-start-8" : ""}`
                      : "lg:col-span-4"
                  }`}
                >
                  <h4
                    className={`carga-nombre ${
                      destacado ? "text-[min(7.25rem,15.5cqi)]" : "text-[min(4.75rem,15.5cqi)]"
                    }`}
                  >
                    <Link href={ruta(idioma, `/proyectos/${proyecto.slug}`)}>
                      <span className="sr-only">{t.proyectos.verFicha} </span>
                      {proyecto.nombre}
                    </Link>
                  </h4>
                  <p className="mt-5 max-w-[34rem] text-[1.125rem] leading-normal text-suave">
                    {proyecto.resumen}
                  </p>
                  {destacado && (
                    <div className="mt-7 max-w-[30rem]">
                      <Ficha proyecto={proyecto} t={t} />
                    </div>
                  )}
                </div>

                {!destacado && (
                  <div className="lg:col-span-4 lg:pt-10">
                    <Ficha proyecto={proyecto} t={t} />
                  </div>
                )}

                <div
                  className={
                    destacado
                      ? `lg:col-span-7 ${invertido ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`
                      : "lg:col-span-4"
                  }
                >
                  <Placa
                    proyecto={proyecto}
                    idioma={idioma}
                    alt={alt}
                    variante="manifiesto"
                    prioridad={indice === 0}
                    sizes={
                      destacado
                        ? "(min-width: 1024px) 56vw, 100vw"
                        : "(min-width: 1024px) 32vw, 100vw"
                    }
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
