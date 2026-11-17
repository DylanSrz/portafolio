import type { Idioma } from "@/lib/i18n";
import { en } from "./en";
import { es, type Diccionario } from "./es";

const diccionarios: Record<Idioma, Diccionario> = { es, en };

export const diccionario = (idioma: Idioma): Diccionario => diccionarios[idioma];
export type { Diccionario };
