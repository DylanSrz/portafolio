import Image from "next/image";
import Link from "next/link";
import { proyectos } from "@/lib/proyectos";

const stack = [
  { area: "Backend", items: "Node.js, TypeScript, Python, FastAPI, NestJS, PostgreSQL, Redis, Supabase" },
  { area: "Frontend", items: "Next.js, React, Tailwind CSS, JavaScript" },
  { area: "Infraestructura", items: "Docker, GitHub Actions, Vercel, Railway, Render, Oracle Cloud" },
  { area: "Calidad", items: "Vitest, Jest, TDD, GitFlow, Scrum" },
];

const contacto = [
  { etiqueta: "Correo", valor: "dylansrz96@gmail.com", url: "mailto:dylansrz96@gmail.com" },
  { etiqueta: "LinkedIn", valor: "in/dylansrz", url: "https://www.linkedin.com/in/dylansrz/" },
  { etiqueta: "GitHub", valor: "DylanSrz", url: "https://github.com/DylanSrz" },
];

export default function Inicio() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:pt-24">
        <div>
          <p className="font-mono text-sm text-senal">Full Stack · enfoque en backend</p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,7.5vw,5.6rem)] font-semibold leading-[0.98] tracking-tight">
            Construyo el backend que sostiene productos reales.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-tinta-2">
            Soy Dylan, desarrollador en Barranquilla. Diseño APIs, integro servicios y llevo mis
            proyectos hasta producción.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <a href="#proyectos" className="bg-tinta px-5 py-3 text-papel transition-colors hover:bg-senal">
              Ver proyectos
            </a>
            <a href="#contacto" className="border border-tinta px-5 py-3 transition-colors hover:border-senal hover:text-senal">
              Contactarme
            </a>
          </div>
        </div>
        <aside className="border-t border-tinta pt-4 font-mono text-sm">
          <p className="text-tinta-2">Hoy en producción</p>
          <ul className="mt-3">
            {[
              ["doctraderpro.com", "https://www.doctraderpro.com"],
              ["dislaverde.com", "https://www.dislaverde.com"],
              ["edulogic.pro", "https://edulogic.pro"],
            ].map(([nombre, url]) => (
              <li key={nombre} className="border-b border-linea">
                <a href={url} className="flex items-center justify-between py-2.5 transition-colors hover:text-senal">
                  {nombre}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="proyectos" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Proyectos</h2>
        <div className="mt-8 border-t border-tinta">
          {proyectos.map((proyecto, indice) => (
            <Link
              key={proyecto.slug}
              href={`/proyectos/${proyecto.slug}`}
              className="group grid gap-5 border-b border-linea py-7 md:grid-cols-[3rem_1fr_16rem] md:items-center"
            >
              <span className="hidden font-mono text-sm text-tinta-2 md:block">
                {String(indice + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-senal sm:text-3xl">
                  {proyecto.nombre}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-tinta-2">{proyecto.resumen}</p>
                <p className="mt-3 font-mono text-xs text-tinta-2">
                  {proyecto.tipo} · {proyecto.estado}
                </p>
              </div>
              {proyecto.captura ? (
                <Image
                  src={proyecto.captura}
                  alt={`Captura de ${proyecto.nombre}`}
                  width={1280}
                  height={800}
                  sizes="(min-width: 768px) 16rem, 100vw"
                  className="aspect-[16/10] w-full border border-linea object-cover object-top"
                />
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center border border-linea bg-papel-2 p-4 text-center font-mono text-xs text-tinta-2">
                  {proyecto.stack.slice(0, 3).join(" · ")}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Sobre mí</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-tinta-2">
            <p>
              Me formo en Riwi, en Barranquilla, y hoy estoy en la ruta avanzada con NestJS. Trabajo a
              la vez en proyectos reales, no solo en ejercicios del bootcamp.
            </p>
            <p>
              Soy tutor de salón de mi clan de 26 personas, donde doy talleres de refuerzo, y he sido
              Scrum Master en proyectos de equipo.
            </p>
            <p>
              Planeo y diseño la arquitectura con Claude y ejecuto con Claude Code.
            </p>
            <p>Español nativo. Inglés de nivel básico a intermedio, en desarrollo activo.</p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Stack</h2>
          <dl className="mt-6 border-t border-tinta">
            {stack.map((grupo) => (
              <div key={grupo.area} className="grid gap-1 border-b border-linea py-3 sm:grid-cols-[9rem_1fr]">
                <dt className="font-mono text-sm text-senal">{grupo.area}</dt>
                <dd className="leading-relaxed text-tinta-2">{grupo.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-none tracking-tight">
          Hablemos.
        </h2>
        <ul className="mt-8 border-t border-tinta">
          {contacto.map((medio) => (
            <li key={medio.etiqueta} className="border-b border-linea">
              <a
                href={medio.url}
                className="grid gap-1 py-4 transition-colors hover:text-senal sm:grid-cols-[9rem_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-sm text-tinta-2">{medio.etiqueta}</span>
                <span className="break-all text-lg">{medio.valor}</span>
                <span aria-hidden="true" className="hidden font-mono sm:block">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
