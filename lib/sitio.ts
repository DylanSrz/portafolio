export const sitio = {
  url: "https://dylansuarez.vercel.app",
  marca: "DylanSrz",
  nombre: "Dylan Suárez",
  correo: "dylansrz96@gmail.com",
  linkedin: "https://www.linkedin.com/in/dylansrz/",
  github: "https://github.com/DylanSrz",
  ciudad: "Barranquilla",
  pais: "Colombia",
  /** Código UN/LOCODE del puerto de Barranquilla. */
  locode: "CO BAQ",
  coordenadas: "10°59′N 74°47′W",
} as const;

export const secciones = ["proyectos", "sobre-mi", "stack", "contacto"] as const;
export type Seccion = (typeof secciones)[number];
