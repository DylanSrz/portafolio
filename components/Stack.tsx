import type { Diccionario } from "@/lib/diccionarios";
import type { Idioma } from "@/lib/i18n";
import type { Proyecto } from "@/lib/proyectos";
import { proyectosCon, stack } from "@/lib/stack";

type Props = { idioma: Idioma; textos: Diccionario["stack"]; lista: Proyecto[] };

export default function Stack({ idioma, textos, lista }: Props) {
  return (
    <section id="stack" aria-labelledby="titulo-stack" className="acero py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 id="titulo-stack" className="display text-[clamp(3.25rem,9.5vw,9rem)] lg:col-span-8">
            {textos.titulo}
          </h2>
          <p className="max-w-[26rem] text-suave lg:col-span-4">{textos.entrada}</p>
        </div>

        <div className="mt-12 lg:mt-16">
          {stack.map((grupo) => (
            <div
              key={grupo.grupo}
              className="grid gap-x-8 gap-y-3 border-t-2 border-pintura pt-4 pb-10 lg:grid-cols-12"
            >
              <h3 className="dato font-medium lg:col-span-3 lg:pt-3">{textos.grupos[grupo.grupo]}</h3>
              <dl className="lg:col-span-9">
                {grupo.items.map((item, indice) => {
                  const usos = proyectosCon(item, lista);
                  return (
                    <div
                      key={item.nombre}
                      className={`grid gap-x-8 gap-y-1 py-2.5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-baseline ${
                        indice > 0 ? "border-t border-regla" : ""
                      }`}
                    >
                      <dt className="display text-[clamp(1.75rem,2.6vw,2.375rem)] leading-none">{item.nombre}</dt>
                      <dd className="dato text-suave">
                        <span className="sr-only">{textos.usadoEn}: </span>
                        {usos.length > 0 ? usos.map((proyecto) => proyecto.nombre).join(" · ") : item.nota?.[idioma]}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
