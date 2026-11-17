export const idiomas = ["es", "en"] as const;
export type Idioma = (typeof idiomas)[number];

export const idiomaPorDefecto: Idioma = "es";
export const cookieIdioma = "idioma";

export const esIdioma = (valor: string): valor is Idioma =>
  (idiomas as readonly string[]).includes(valor);

/** Ruta pública: el español no lleva prefijo, el inglés vive en /en. */
export function ruta(idioma: Idioma, camino = "/"): string {
  const limpio = camino === "/" ? "" : camino;
  if (idioma === idiomaPorDefecto) return limpio || "/";
  return `/${idioma}${limpio}`;
}

/**
 * Quita el prefijo de idioma. En español, el proxy reescribe "/x" a "/es/x",
 * así que el cliente puede ver cualquiera de las dos formas.
 */
export const sinPrefijo = (rutaActual: string) =>
  rutaActual.replace(/^\/(?:es|en)(?=\/|$)/, "") || "/";

/** Convierte una ruta pública de un idioma a su equivalente en otro. */
export function rutaEnOtroIdioma(rutaActual: string, destino: Idioma): string {
  return ruta(destino, sinPrefijo(rutaActual));
}

export const etiquetaOg: Record<Idioma, string> = { es: "es_CO", en: "en_US" };
