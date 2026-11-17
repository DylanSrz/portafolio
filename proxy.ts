import { NextResponse, type NextRequest } from "next/server";
import { cookieIdioma, idiomaPorDefecto } from "@/lib/i18n";
import { slugs } from "@/lib/proyectos";

/** Con Cache Components no existe dynamicParams: un slug desconocido debe ir al 404 antes de renderizar. */
const slugDesconocido = (camino: string) => {
  const coincidencia = camino.match(/^(?:\/en)?\/proyectos\/([^/]+)\/?$/);
  return coincidencia !== null && !slugs.includes(coincidencia[1]);
};

/**
 * El español vive sin prefijo (/ y /proyectos/...) y el inglés en /en.
 * Por dentro, todas las páginas están en app/[lang].
 */
export function proxy(peticion: NextRequest) {
  const { pathname } = peticion.nextUrl;
  const url = peticion.nextUrl.clone();

  if (slugDesconocido(pathname)) {
    const idioma = pathname.startsWith("/en/") ? "en" : idiomaPorDefecto;
    url.pathname = `/${idioma}/no-encontrado${pathname.replace(/^\/en/, "")}`;
    return NextResponse.rewrite(url);
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next();

  // /es/... no es una URL pública: se redirige a la versión sin prefijo.
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    if (pathname.includes("opengraph-image")) return NextResponse.next();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  // Quien eligió inglés antes vuelve a su idioma.
  if (peticion.cookies.get(cookieIdioma)?.value === "en") {
    url.pathname = `/en${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  url.pathname = `/${idiomaPorDefecto}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Deja pasar los internos de Next y cualquier archivo con extensión.
  matcher: ["/((?!_next/|api/|.*\\.[\\w]+$).*)"],
};
