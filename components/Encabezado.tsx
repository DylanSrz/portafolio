import Link from "next/link";
import NavPrincipal from "@/components/NavPrincipal";
import type { Diccionario } from "@/lib/diccionarios";
import { ruta, type Idioma } from "@/lib/i18n";
import { sitio } from "@/lib/sitio";

export default function Encabezado({ idioma, textos }: { idioma: Idioma; textos: Diccionario["nav"] }) {
  return (
    <header className="cabecera">
      <div className="contenedor flex h-full items-center justify-between gap-4">
        <Link
          href={ruta(idioma)}
          aria-label={textos.inicio}
          className="estarcido text-[1.7rem] leading-none"
        >
          {sitio.marca}
        </Link>
        <NavPrincipal idioma={idioma} textos={textos} />
      </div>
    </header>
  );
}
