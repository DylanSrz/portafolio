"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icono from "@/components/Icono";
import type { Diccionario } from "@/lib/diccionarios";
import { cookieIdioma, idiomas, ruta, rutaEnOtroIdioma, sinPrefijo, type Idioma } from "@/lib/i18n";
import { secciones, type Seccion } from "@/lib/sitio";

type Props = { idioma: Idioma; textos: Diccionario["nav"] };

/** Marca la sección que cruza el centro de la pantalla. Solo aplica en el inicio. */
function useSeccionActiva(activo: boolean) {
  const [seccion, setSeccion] = useState<Seccion | null>(null);

  useEffect(() => {
    if (!activo) return;
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) setSeccion(entrada.target.id as Seccion);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of secciones) {
      const nodo = document.getElementById(id);
      if (nodo) observador.observe(nodo);
    }
    return () => observador.disconnect();
  }, [activo]);

  return activo ? seccion : null;
}

function guardarIdioma(idioma: Idioma) {
  document.cookie = `${cookieIdioma}=${idioma}; path=/; max-age=31536000; samesite=lax`;
}

export default function NavPrincipal({ idioma, textos }: Props) {
  const camino = usePathname();
  const inicio = ruta(idioma);
  const seccionActiva = useSeccionActiva(sinPrefijo(camino) === "/");
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const cerrar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAbierto(false);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", cerrar);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", cerrar);
    };
  }, [abierto]);

  const selector = (
    <div className="dato flex items-center gap-1.5" role="group" aria-label={textos.idioma}>
      {idiomas.map((opcion, indice) => (
        <span key={opcion} className="flex items-center gap-1.5">
          {indice > 0 && (
            <span aria-hidden="true" className="text-tenue">
              /
            </span>
          )}
          {opcion === idioma ? (
            <span aria-current="true" className="font-medium text-texto">
              {opcion}
            </span>
          ) : (
            <a
              href={rutaEnOtroIdioma(camino, opcion)}
              hrefLang={opcion}
              lang={opcion}
              aria-label={textos.cambiarA}
              onClick={() => guardarIdioma(opcion)}
              className="enlace py-3 text-suave hover:text-texto"
            >
              {opcion}
            </a>
          )}
        </span>
      ))}
    </div>
  );

  return (
    <>
      <nav aria-label={textos.etiqueta} className="hidden items-center gap-8 md:flex">
        <ul className="dato flex items-center gap-7 lg:gap-9">
          {secciones.map((id) => (
            <li key={id}>
              <Link
                href={`${inicio}#${id}`}
                aria-current={seccionActiva === id ? "location" : undefined}
                className="nav-enlace"
              >
                {textos[id]}
              </Link>
            </li>
          ))}
        </ul>
        {selector}
      </nav>

      <div className="flex items-center gap-5 md:hidden">
        {selector}
        <button
          type="button"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto((valor) => !valor)}
          className="-mr-2 grid size-11 place-items-center"
        >
          <span className="sr-only">{abierto ? textos.cerrarMenu : textos.abrirMenu}</span>
          <Icono nombre={abierto ? "cerrar" : "menu"} className="size-6" />
        </button>
      </div>

      <nav
        id="menu-movil"
        aria-label={textos.etiqueta}
        inert={!abierto}
        className={`fixed inset-x-0 bottom-0 top-(--alto-cabecera) z-40 overflow-y-auto bg-fondo transition-[clip-path] duration-300 ease-(--grua) md:hidden ${
          abierto ? "[clip-path:inset(0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <ul className="contenedor py-6">
          {secciones.map((id) => (
            <li key={id} className="border-b border-regla">
              <Link
                href={`${inicio}#${id}`}
                onClick={() => setAbierto(false)}
                className="display flex items-center justify-between py-5 text-[clamp(2.5rem,13vw,4rem)]"
              >
                {textos[id]}
                <Icono nombre="flecha-derecha" className="size-7" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
