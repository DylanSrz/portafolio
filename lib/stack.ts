import type { Idioma } from "@/lib/i18n";
import type { Proyecto } from "@/lib/proyectos";

export type GrupoStack = "backend" | "frontend" | "datos" | "infra" | "calidad";

type Item = {
  nombre: string;
  /** Proyectos donde se usa sin aparecer en su lista de stack (por ejemplo, Node.js bajo NestJS). */
  tambienEn?: string[];
  /** Dónde se aprendió, cuando no hay un proyecto del portafolio que lo use. */
  nota?: Record<Idioma, string>;
};

const riwi = { es: "Formación en Riwi", en: "Riwi training" };

export const stack: { grupo: GrupoStack; items: Item[] }[] = [
  {
    grupo: "backend",
    items: [
      { nombre: "Node.js", tambienEn: ["doctrader", "zerobug"] },
      { nombre: "TypeScript" },
      { nombre: "Python" },
      { nombre: "NestJS" },
      { nombre: "FastAPI" },
    ],
  },
  {
    grupo: "frontend",
    items: [
      { nombre: "React", tambienEn: ["doctrader", "dislaverde"] },
      { nombre: "Next.js" },
      { nombre: "JavaScript" },
      { nombre: "Tailwind CSS" },
    ],
  },
  { grupo: "datos", items: [{ nombre: "PostgreSQL" }, { nombre: "Redis" }, { nombre: "Supabase" }] },
  {
    grupo: "infra",
    items: [
      { nombre: "Docker" },
      { nombre: "GitHub Actions" },
      { nombre: "Vercel" },
      { nombre: "Railway" },
      { nombre: "Render" },
      { nombre: "Oracle Cloud" },
    ],
  },
  {
    grupo: "calidad",
    items: [
      { nombre: "Vitest" },
      { nombre: "Jest", nota: riwi },
      { nombre: "TDD", nota: riwi },
      { nombre: "GitFlow", tambienEn: ["edulogic"] },
      { nombre: "Scrum", tambienEn: ["edulogic", "zerobug"] },
    ],
  },
];

/** Proyectos del portafolio donde se usó esta herramienta, en orden del manifiesto. */
export const proyectosCon = (item: Item, lista: Proyecto[]) =>
  lista.filter(
    (proyecto) => proyecto.stack.includes(item.nombre) || item.tambienEn?.includes(proyecto.slug),
  );
