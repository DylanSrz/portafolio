import Image from "next/image";
import { ViewTransition } from "react";
import Icono from "@/components/Icono";
import type { Idioma } from "@/lib/i18n";
import { flujoScriptVuelos, rutasZeroBug, type Proyecto } from "@/lib/proyectos";

type Props = {
  proyecto: Proyecto;
  idioma: Idioma;
  alt: string;
  /** "ficha" muestra el material completo; "manifiesto", un extracto. */
  variante: "manifiesto" | "ficha";
  sizes: string;
  prioridad?: boolean;
};

const metodo = (linea: string) => linea.split(" ")[0];
const camino = (recurso: string, linea: string) => {
  const resto = linea.split(" ")[1];
  return `/${recurso}${resto === "/" ? "" : resto}`;
};

function Rutas({ completa }: { completa: boolean }) {
  const grupos = completa
    ? rutasZeroBug
    : rutasZeroBug.filter((grupo) => grupo.recurso === "reservations");
  return (
    <div className="codigo p-5 sm:p-6">
      <p className="mb-3 text-tenue">
        base <span className="text-texto">/api/v1</span>
      </p>
      <div className={completa ? "grid gap-x-10 gap-y-6 md:grid-cols-2" : ""}>
      {grupos.map((grupo) => (
        <ul key={grupo.recurso}>
          {grupo.rutas.map((linea) => (
            <li key={linea} className="grid grid-cols-[3.6rem_1fr] gap-2 border-b border-regla py-1.5">
              <span className="text-tenue">{metodo(linea)}</span>
              <span className="[overflow-wrap:anywhere]">{camino(grupo.recurso, linea)}</span>
            </li>
          ))}
        </ul>
      ))}
      </div>
    </div>
  );
}

function Flujo({ idioma }: { idioma: Idioma }) {
  return (
    <ol className="p-5 sm:p-6">
      {flujoScriptVuelos[idioma].map((paso, indice) => (
        <li key={paso.paso} className="grid grid-cols-[1.5rem_1fr] gap-3 border-b border-regla py-3">
          <span className="pt-1 text-tenue">
            {indice > 0 && <Icono nombre="flecha-abajo" className="size-4" />}
          </span>
          <span>
            <span className="codigo block text-texto">{paso.paso}</span>
            <span className="block text-[0.9375rem] leading-snug text-suave">{paso.detalle}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

/** La "puerta" de cada carga: su captura real o, si no existe, material real del repositorio. */
export default function Placa({ proyecto, idioma, alt, variante, sizes, prioridad = false }: Props) {
  const barra = (
    <div className="dato flex items-center justify-between gap-4 border-b border-regla-fuerte px-4 py-2.5 text-suave">
      <span className="flex-none whitespace-nowrap">{proyecto.codigo}</span>
      <span className="min-w-0 truncate normal-case tracking-normal">{proyecto.destino.host}</span>
    </div>
  );

  return (
    <ViewTransition name={`placa-${proyecto.slug}`}>
      <div className={`placa ${proyecto.captura ? "placa--puerta" : ""}`}>
        {barra}
        {proyecto.captura ? (
          <div className="aspect-[16/10] overflow-hidden">
            <Image
              src={proyecto.captura}
              alt={alt}
              width={1280}
              height={800}
              sizes={sizes}
              priority={prioridad}
            />
          </div>
        ) : proyecto.extra === "rutas" ? (
          <Rutas completa={variante === "ficha"} />
        ) : (
          <Flujo idioma={idioma} />
        )}
      </div>
    </ViewTransition>
  );
}
