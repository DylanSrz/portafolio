const trazos = {
  "flecha-diagonal": "M6 18 18 6M8 6h10v10",
  "flecha-derecha": "M4 12h16M13 5l7 7-7 7",
  "flecha-izquierda": "M20 12H4M11 5l-7 7 7 7",
  "flecha-abajo": "M12 4v16M5 13l7 7 7-7",
  "flecha-arriba": "M12 20V4M5 11l7-7 7 7",
  copiar: "M9 9h11v11H9zM5 15H4V4h11v1",
  hecho: "M4 12.5 9.5 18 20 6.5",
  menu: "M3 7h18M3 12h18M3 17h18",
  cerrar: "M5 5l14 14M19 5 5 19",
} as const;

export type NombreIcono = keyof typeof trazos;

/** Iconos propios: trazo de 2px, extremos rectos, misma rejilla de 24. */
export default function Icono({
  nombre,
  className = "size-4",
}: {
  nombre: NombreIcono;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={`flex-none ${className}`}
    >
      <path d={trazos[nombre]} />
    </svg>
  );
}
