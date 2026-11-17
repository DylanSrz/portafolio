export const es = {
  meta: {
    titulo: "DylanSrz · Dylan Suárez, desarrollador Full Stack",
    descripcion:
      "Portafolio de Dylan Suárez (DylanSrz), desarrollador Full Stack con enfoque en backend en Barranquilla, Colombia. Productos en producción, proyectos en equipo y herramientas propias.",
    plantilla: "%s · DylanSrz",
  },
  nav: {
    etiqueta: "Navegación principal",
    inicio: "DylanSrz, ir al inicio",
    proyectos: "Proyectos",
    "sobre-mi": "Sobre mí",
    stack: "Stack",
    contacto: "Contacto",
    abrirMenu: "Abrir menú",
    cerrarMenu: "Cerrar menú",
    idioma: "Idioma",
    cambiarA: "Read in English",
    saltar: "Saltar al contenido",
  },
  hero: {
    rol: "Full Stack Developer",
    declaracion:
      "Transformo ideas en productos digitales funcionales. Diseño, desarrollo e integro soluciones Full Stack, desde la arquitectura hasta el despliegue.",
    origen: "Puerto de origen",
    disponible: "Disponible para empleo como desarrollador",
    verProyectos: "Ver proyectos",
    contactar: "Contactarme",
  },
  proyectos: {
    titulo: "Manifiesto de carga",
    entrada:
      "Siete proyectos, cada uno con su destino verificable. El código al final de cada número dice de qué tipo es.",
    columnas: { codigo: "Código", contenido: "Contenido", carga: "Carga", tipo: "Tipo", rol: "Mi rol", destino: "Destino", estado: "Estado" },
    verFicha: "Abrir la ficha de",
    sinDestino: "Código en GitHub",
    capturaDe: "Captura de",
    detalleTitulo: "Las cargas, una por una",
    leyenda: "Tipos de carga",
  },
  tipos: {
    producto: "Producto real",
    equipo: "Proyecto en equipo",
    personal: "Proyecto personal",
    herramienta: "Herramienta",
  },
  sobreMi: {
    titulo: "Sobre mí",
    frase: "Aprendo embarcando: convierto lo que estudio en productos que alguien usa.",
    parrafos: [
      "Soy Dylan, desarrollador Full Stack en Barranquilla. Estoy empezando mi carrera en la industria y me formo en Riwi, donde hoy curso la ruta avanzada con NestJS.",
      "No espero a terminar un curso para construir. Trabajo a la vez en productos reales: una plataforma de licencias de software y el sitio de una distribuidora de productos de estética, los dos en producción.",
      "Me interesa sobre todo lo que no se ve: el diseño de una API, el modelo de datos, las tareas en segundo plano y el despliegue. Planeo la arquitectura con Claude y ejecuto con Claude Code.",
    ],
    interesesTitulo: "Lo que más me interesa",
    intereses: [
      "Backend",
      "Arquitectura de software",
      "APIs REST",
      "Bases de datos",
      "Automatización",
      "Integración de servicios",
      "Desarrollo Full Stack",
      "IA y herramientas de desarrollo",
    ],
    datosTitulo: "Cómo trabajo con otros",
    datos: [
      {
        termino: "Formación",
        detalle: "Riwi, Barranquilla. Ruta avanzada, módulo de NestJS.",
      },
      {
        termino: "Scrum Master",
        detalle: "En EduLogic, con un equipo de 6 personas, y en ZeroBug.",
      },
      {
        termino: "Tutor de salón",
        detalle: "De mi clan de 26 personas. Doy talleres de refuerzo a mis compañeros.",
      },
      {
        termino: "Idiomas",
        detalle: "Español nativo. Inglés de nivel básico a intermedio, en desarrollo activo.",
      },
    ],
  },
  stack: {
    titulo: "Stack",
    entrada:
      "Agrupado por lo que hace cada herramienta. Debajo de cada una, los proyectos de este portafolio donde la usé.",
    usadoEn: "Usado en",
    grupos: {
      backend: "Backend",
      frontend: "Frontend",
      datos: "Bases de datos y almacenamiento",
      infra: "Infraestructura y herramientas",
      calidad: "Calidad y metodología",
    },
  },
  contacto: {
    titulo: "Hablemos.",
    entrada:
      "Busco empleo como desarrollador. Si tienes una vacante, un proyecto o una pregunta sobre mi trabajo, escríbeme.",
    correo: "Correo",
    copiar: "Copiar correo",
    copiado: "Correo copiado",
    escribir: "Escribirme un correo",
    ubicacion: "Ubicación",
  },
  pie: {
    lema: "Full Stack Developer. Del diseño de la arquitectura al despliegue.",
    navegacion: "Secciones",
    redes: "Redes",
    hechoCon: "Hecho con Next.js, TypeScript y Tailwind CSS.",
    arriba: "Volver arriba",
  },
  detalle: {
    volver: "Manifiesto",
    ficha: "Ficha de carga",
    rol: "Mi rol",
    tipo: "Tipo",
    estado: "Estado",
    destinos: "Destinos",
    problema: "El problema",
    aportes: "Lo que hice",
    decisiones: "Decisiones técnicas",
    stack: "Stack",
    siguiente: "Siguiente carga",
    anterior: "Carga anterior",
    capturaDe: "Captura de",
    rutasTitulo: "Rutas de la API",
    rutasNota: "Tomadas de los controladores del repositorio público. Todas viven bajo /api/v1.",
    flujoTitulo: "Cómo corría",
    flujoNota: "Tomado del workflow y del README del repositorio público.",
  },
  noEncontrado: {
    codigo: "404",
    titulo: "Esta carga no está en el manifiesto.",
    texto: "La página que buscas no existe o cambió de ruta.",
    volver: "Volver al inicio",
  },
} as const;

type Ampliar<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Ampliar<U>[]
    : { readonly [K in keyof T]: Ampliar<T[K]> };

/** El inglés debe tener exactamente las mismas claves que el español. */
export type Diccionario = Ampliar<typeof es>;
