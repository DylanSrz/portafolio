"use client";

import { useEffect, useRef } from "react";

/**
 * Foco de patio: mueve la luz del acero hacia el puntero.
 * Solo con ratón y sin "reducir movimiento"; si no, la luz queda fija.
 */
export default function Foco({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zona = ref.current;
    if (!zona) return;
    const apto =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!apto) return;

    let cuadro = 0;
    const mover = (evento: PointerEvent) => {
      cancelAnimationFrame(cuadro);
      cuadro = requestAnimationFrame(() => {
        const caja = zona.getBoundingClientRect();
        zona.style.setProperty("--luz-x", `${evento.clientX - caja.left}px`);
        zona.style.setProperty("--luz-y", `${evento.clientY - caja.top}px`);
      });
    };
    zona.addEventListener("pointermove", mover);
    return () => {
      cancelAnimationFrame(cuadro);
      zona.removeEventListener("pointermove", mover);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
