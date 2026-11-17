import Link from "next/link";
import { lang } from "next/root-params";
import Icono from "@/components/Icono";
import { diccionario } from "@/lib/diccionarios";
import { esIdioma, idiomaPorDefecto, ruta } from "@/lib/i18n";

export default async function NoEncontrado() {
  const valor = await lang();
  const idioma = esIdioma(valor) ? valor : idiomaPorDefecto;
  const t = diccionario(idioma).noEncontrado;

  return (
    <section className="acero">
      <div className="contenedor flex min-h-[70dvh] flex-col justify-center py-20">
        <p className="estarcido text-[clamp(6rem,24vw,20rem)] leading-[0.8] text-tenue">{t.codigo}</p>
        <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.5rem,6vw,5.5rem)]">{t.titulo}</h1>
        <p className="mt-5 max-w-[32rem] text-[1.125rem] text-suave">{t.texto}</p>
        <div className="mt-8">
          <Link href={ruta(idioma)} className="boton boton--claro">
            <Icono nombre="flecha-izquierda" />
            <span>{t.volver}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
