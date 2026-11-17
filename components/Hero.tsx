import Foco from "@/components/Foco";
import Icono from "@/components/Icono";
import type { Diccionario } from "@/lib/diccionarios";
import { sitio } from "@/lib/sitio";

export default function Hero({ textos }: { textos: Diccionario["hero"] }) {
  return (
    <section aria-labelledby="marca">
      <Foco className="acero">
        <div className="contenedor pb-9 pt-7 sm:pb-11 sm:pt-9">
          <div className="hero-acero">
            <h1 id="marca" className="nombre" aria-label={sitio.marca}>
              {Array.from(sitio.marca).map((letra, indice) => (
                <span key={indice} aria-hidden="true" style={{ "--i": indice } as React.CSSProperties}>
                  {letra}
                </span>
              ))}
            </h1>
          </div>

          <div className="hero-texto mt-6 grid gap-8 sm:mt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
            <div>
              <p className="display text-[clamp(2rem,4.6vw,3.6rem)]">{textos.rol}</p>
              <p className="mt-4 max-w-[38rem] text-[clamp(1.0625rem,1.35vw,1.25rem)] leading-normal text-suave">
                {textos.declaracion}
              </p>
            </div>
            <div className="lg:text-right">
              <p className="estarcido text-[clamp(2.25rem,4.2vw,3.5rem)]">{sitio.locode}</p>
              <p className="dato mt-2.5 text-suave">
                {textos.origen} · {sitio.ciudad}, {sitio.pais}
                <span className="block">{sitio.coordenadas}</span>
              </p>
            </div>
          </div>
        </div>
      </Foco>

      <div className="franja">
        <div className="contenedor flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="dato estado text-[0.8125rem] font-medium">{textos.disponible}</p>
          <div className="flex flex-wrap gap-2.5">
            <a href="#proyectos" className="boton boton--tinta">
              <span>{textos.verProyectos}</span>
              <Icono nombre="flecha-abajo" />
            </a>
            <a href="#contacto" className="boton boton--linea-tinta">
              <span>{textos.contactar}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
