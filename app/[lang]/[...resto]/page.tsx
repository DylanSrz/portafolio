import { notFound } from "next/navigation";

/** Cualquier ruta desconocida cae aquí para mostrar el 404 dentro del diseño. */
export default function RutaDesconocida() {
  notFound();
}
