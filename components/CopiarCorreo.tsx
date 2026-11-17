"use client";

import { useRef, useState } from "react";
import Icono from "@/components/Icono";

export default function CopiarCorreo({
  correo,
  textos,
}: {
  correo: string;
  textos: { copiar: string; copiado: string };
}) {
  const [copiado, setCopiado] = useState(false);
  const temporizador = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(correo);
    } catch {
      return; // Sin permiso de portapapeles: el enlace mailto sigue disponible.
    }
    setCopiado(true);
    clearTimeout(temporizador.current);
    temporizador.current = setTimeout(() => setCopiado(false), 2400);
  }

  return (
    <button type="button" onClick={copiar} className="boton boton--tinta sobre">
      <span aria-live="polite">{copiado ? textos.copiado : textos.copiar}</span>
      <Icono nombre={copiado ? "hecho" : "copiar"} />
    </button>
  );
}
