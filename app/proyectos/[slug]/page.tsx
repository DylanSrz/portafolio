import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { proyectoPorSlug, proyectos } from "@/lib/proyectos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({ slug: proyecto.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const proyecto = proyectoPorSlug((await params).slug);
  return proyecto
    ? { title: `${proyecto.nombre} · Dylan Suarez`, description: proyecto.resumen }
    : {};
}

export default async function PaginaProyecto({ params }: Props) {
  const proyecto = proyectoPorSlug((await params).slug);
  if (!proyecto) notFound();

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8">
      <Link href="/#proyectos" className="font-mono text-sm text-tinta-2 transition-colors hover:text-senal">
        ← Proyectos
      </Link>

      <header className="mt-8 max-w-4xl">
        <p className="font-mono text-sm text-senal">
          {proyecto.tipo} · {proyecto.estado}
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-none tracking-tight">
          {proyecto.nombre}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-tinta-2">{proyecto.resumen}</p>
        <div className="mt-7 flex flex-wrap gap-3 font-mono text-sm">
          {proyecto.enlaces.map((enlace) => (
            <a
              key={enlace.url}
              href={enlace.url}
              className="border border-tinta px-4 py-2.5 transition-colors hover:border-senal hover:text-senal"
            >
              {enlace.etiqueta} ↗
            </a>
          ))}
        </div>
      </header>

      {proyecto.captura && (
        <Image
          src={proyecto.captura}
          alt={`Captura de ${proyecto.nombre}`}
          width={1280}
          height={800}
          priority
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="mt-12 w-full border border-linea"
        />
      )}

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-7 font-mono text-sm">
          <div>
            <h2 className="text-tinta-2">Mi rol</h2>
            <p className="mt-2 leading-relaxed">{proyecto.rol}</p>
          </div>
          <div>
            <h2 className="text-tinta-2">Stack</h2>
            <ul className="mt-2 space-y-1">
              {proyecto.stack.map((tecnologia) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight">El problema</h2>
            <p className="mt-3 text-lg leading-relaxed text-tinta-2">{proyecto.problema}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Lo que hice</h2>
            <ul className="mt-3 space-y-2.5 leading-relaxed text-tinta-2">
              {proyecto.aportes.map((aporte) => (
                <li key={aporte} className="border-l-2 border-senal pl-4">
                  {aporte}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Decisiones técnicas</h2>
            <dl className="mt-4 border-t border-tinta">
              {proyecto.decisiones.map((decision) => (
                <div key={decision.titulo} className="border-b border-linea py-4">
                  <dt className="font-semibold">{decision.titulo}</dt>
                  <dd className="mt-1 leading-relaxed text-tinta-2">{decision.detalle}</dd>
                </div>
              ))}
            </dl>
          </section>

          {proyecto.nota && <p className="font-mono text-sm text-tinta-2">{proyecto.nota}</p>}
        </div>
      </div>
    </main>
  );
}
