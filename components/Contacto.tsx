import CopiarCorreo from "@/components/CopiarCorreo";
import Icono from "@/components/Icono";
import type { Diccionario } from "@/lib/diccionarios";
import { sitio } from "@/lib/sitio";

export default function Contacto({ textos }: { textos: Diccionario["contacto"] }) {
  const redes = [
    { etiqueta: "LinkedIn", valor: "in/dylansrz", url: sitio.linkedin },
    { etiqueta: "GitHub", valor: "DylanSrz", url: sitio.github },
  ];
  const valor = "display text-[clamp(1.75rem,5.4vw,5rem)] leading-none";

  return (
    <section id="contacto" aria-labelledby="titulo-contacto" className="sobre-lima pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div className="contenedor">
        <h2 id="titulo-contacto" className="display text-[clamp(4.5rem,19vw,19rem)] font-black leading-[0.8]">
          {textos.titulo}
        </h2>
        <p className="mt-8 max-w-[34rem] text-[clamp(1.125rem,1.5vw,1.375rem)] leading-normal">{textos.entrada}</p>

        <ul className="mt-12 border-b-2 border-tinta lg:mt-16">
          <li className="fila-contacto grid gap-x-8 gap-y-3 py-6 sm:grid-cols-[8rem_1fr_auto] sm:items-center">
            <span className="dato font-medium">{textos.correo}</span>
            <a href={`mailto:${sitio.correo}`} className={`principal break-all normal-case ${valor}`}>
              <span className="sr-only">{textos.escribir}: </span>
              {sitio.correo}
            </a>
            <CopiarCorreo correo={sitio.correo} textos={{ copiar: textos.copiar, copiado: textos.copiado }} />
          </li>
          {redes.map((red) => (
            <li
              key={red.etiqueta}
              className="fila-contacto grid gap-x-8 gap-y-3 py-6 sm:grid-cols-[8rem_1fr_auto] sm:items-center"
            >
              <span className="dato font-medium">{red.etiqueta}</span>
              <a
                href={red.url}
                target="_blank"
                rel="noopener noreferrer me"
                className={`principal normal-case ${valor}`}
              >
                {red.valor}
              </a>
              <Icono nombre="flecha-diagonal" className="hidden size-9 sm:block" />
            </li>
          ))}
        </ul>

        <p className="dato mt-6 font-medium">
          {textos.ubicacion} · {sitio.ciudad}, {sitio.pais} · {sitio.coordenadas}
        </p>
      </div>
    </section>
  );
}
