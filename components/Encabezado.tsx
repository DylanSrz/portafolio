import Link from "next/link";

const enlaces = [
  { href: "/#proyectos", texto: "Proyectos" },
  { href: "/#sobre-mi", texto: "Sobre mí" },
  { href: "/#contacto", texto: "Contacto" },
];

export default function Encabezado() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
      <Link href="/" className="font-display text-lg font-semibold tracking-tight">
        Dylan Suarez
      </Link>
      <nav className="flex gap-4 font-mono text-xs sm:gap-7 sm:text-sm">
        {enlaces.map((enlace) => (
          <Link key={enlace.href} href={enlace.href} className="text-tinta-2 transition-colors hover:text-senal">
            {enlace.texto}
          </Link>
        ))}
      </nav>
    </header>
  );
}
