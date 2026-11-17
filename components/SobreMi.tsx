import type { Diccionario } from "@/lib/diccionarios";

export default function SobreMi({ textos }: { textos: Diccionario["sobreMi"] }) {
  return (
    <section id="sobre-mi" aria-labelledby="titulo-sobre-mi" className="sobre-papel py-20 sm:py-28">
      <div className="contenedor">
        <h2 id="titulo-sobre-mi" className="display max-w-[18ch] text-[clamp(2.75rem,7.6vw,7.5rem)]">
          <span className="sr-only">{textos.titulo}: </span>
          {textos.frase}
        </h2>

        <div className="mt-14 grid gap-x-8 gap-y-14 lg:mt-20 lg:grid-cols-12">
          <div className="max-w-[40rem] space-y-5 text-[1.125rem] leading-relaxed lg:col-span-6">
            {textos.parrafos.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>

          <div className="space-y-12 lg:col-span-5 lg:col-start-8">
            <div>
              <h3 className="dato border-b-2 border-tinta pb-3 font-medium">{textos.datosTitulo}</h3>
              <dl>
                {textos.datos.map((dato) => (
                  <div key={dato.termino} className="grid gap-1 border-b border-regla py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                    <dt className="font-semibold">{dato.termino}</dt>
                    <dd className="text-suave">{dato.detalle}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="dato border-b-2 border-tinta pb-3 font-medium">{textos.interesesTitulo}</h3>
              <ul className="display mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[clamp(1.5rem,2.2vw,2rem)] leading-none">
                {textos.intereses.map((interes) => (
                  <li key={interes}>{interes}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
