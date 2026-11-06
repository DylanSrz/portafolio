export type Enlace = { etiqueta: string; url: string };

export type Proyecto = {
  slug: string;
  nombre: string;
  resumen: string;
  tipo: "Producto real" | "Proyecto en equipo" | "Proyecto personal";
  estado: string;
  rol: string;
  captura?: string;
  stack: string[];
  enlaces: Enlace[];
  problema: string;
  aportes: string[];
  decisiones: { titulo: string; detalle: string }[];
  nota?: string;
};

export const proyectos: Proyecto[] = [
  {
    slug: "doctrader",
    nombre: "DocTraderPro",
    resumen:
      "Plataforma para vender y administrar licencias de software, con API, worker asíncrono y panel web.",
    tipo: "Producto real",
    estado: "En producción",
    rol: "Desarrollador y socio del proyecto",
    captura: "/proyectos/doctrader.png",
    stack: ["NestJS", "TypeORM", "BullMQ", "PostgreSQL", "Redis", "Next.js", "Railway", "Vercel", "Resend"],
    enlaces: [{ etiqueta: "Ver sitio", url: "https://www.doctraderpro.com" }],
    problema:
      "El negocio necesitaba vender licencias de uso de un software, verificar pagos y administrar clientes. Al manejar datos personales y pagos, la seguridad debía ser un requisito desde el inicio.",
    aportes: [
      "Desarrollé la plataforma: sitio público, panel de clientes, panel de administración, API y worker.",
      "Desplegué los servicios en Railway y Vercel, y roté las llaves y secretos de producción.",
      "Documenté el modelo de datos, las decisiones técnicas y el plan de seguridad.",
    ],
    decisiones: [
      {
        titulo: "API y worker con el mismo código",
        detalle:
          "Son dos servicios con dos comandos de arranque. Las tareas lentas, como enviar correos, salen de la petición del usuario y se procesan con BullMQ sobre Redis.",
      },
      {
        titulo: "Bandeja de salida transaccional",
        detalle:
          "Cada correo se guarda dentro de la misma transacción que la acción que lo origina, y el worker lo envía después. Si la acción falla, no sale ningún aviso.",
      },
      {
        titulo: "El navegador nunca habla con la API",
        detalle:
          "La web llama a la API desde el servidor con peticiones firmadas, y la sesión vive en una cookie HttpOnly.",
      },
      {
        titulo: "Datos sensibles cifrados por campo",
        detalle:
          "Los datos más delicados se cifran con AES-256-GCM en la API. Las búsquedas usan huellas HMAC, así no hace falta descifrar para encontrar un registro repetido.",
      },
      {
        titulo: "Auditoría encadenada",
        detalle:
          "Las acciones delicadas se registran en la misma transacción, en una cadena de hashes con HMAC.",
      },
      {
        titulo: "Copias cifradas y restauración de prueba",
        detalle:
          "Un workflow de GitHub Actions cifra la copia de la base, la guarda fuera de Railway y hace una restauración de prueba.",
      },
    ],
    nota: "El código es privado. Aquí muestro solo la arquitectura y las decisiones técnicas.",
  },
  {
    slug: "edulogic",
    nombre: "EduLogic",
    resumen: "Plataforma de aprendizaje STEM que corrige al instante y explica cada error.",
    tipo: "Proyecto en equipo",
    estado: "En producción",
    rol: "Scrum Master, líder técnico y backend",
    captura: "/proyectos/edulogic.png",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Supabase", "JavaScript", "Tailwind CSS", "Render", "Vercel"],
    enlaces: [
      { etiqueta: "Ver demo", url: "https://edulogic.pro" },
      { etiqueta: "Ver API", url: "https://api.edulogic.pro/docs" },
      { etiqueta: "Ver código", url: "https://github.com/DylanSrz/EduLogic" },
    ],
    problema:
      'Quien aprende por su cuenta suele chocar con evaluaciones que solo dicen "incorrecto". EduLogic explica cada error para que fallar también sea parte del aprendizaje.',
    aportes: [
      "Fui Scrum Master y líder del equipo de 6 personas en el Proyecto Integrador de Riwi.",
      "Trabajé en el backend junto al equipo.",
      "Usamos GitFlow, ramas protegidas y trazabilidad de issue a rama y a PR.",
    ],
    decisiones: [
      {
        titulo: "Motor de evaluación en la capa de servicios",
        detalle:
          "El router maneja HTTP y permisos. Calificar es lógica de negocio, y el intento se guarda con sus respuestas en una sola transacción.",
      },
      {
        titulo: "Las respuestas no viajan antes de tiempo",
        detalle:
          "El cuestionario que recibe el estudiante no incluye la opción correcta. La explicación llega solo después de responder.",
      },
      {
        titulo: "Base normalizada a 3FN",
        detalle: "Modelo relacional con integridad referencial, roles y borrado lógico para conservar el historial.",
      },
    ],
  },
  {
    slug: "dislaverde",
    nombre: "Dislaverde",
    resumen:
      "Catálogo público, registro de eventos y sorteos auditables para una distribuidora de productos de estética.",
    tipo: "Producto real",
    estado: "En producción",
    rol: "Desarrollador",
    captura: "/proyectos/dislaverde.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Postgres", "Resend", "Vercel"],
    enlaces: [{ etiqueta: "Ver sitio", url: "https://www.dislaverde.com" }],
    problema:
      "La empresa necesitaba mostrar su catálogo y registrar asistentes a eventos presenciales y virtuales, conservando la autorización de tratamiento de datos de cada persona.",
    aportes: [
      "Construí el catálogo, el panel de eventos, el registro y la pantalla de sorteo.",
      "Trabajé el esquema, las políticas RLS y las funciones SQL con migraciones versionadas.",
      "Retiré un e-commerce ya construido antes de operarlo, para retomarlo más adelante con más seguridad.",
    ],
    decisiones: [
      {
        titulo: "Un evento es una fila, no un despliegue",
        detalle: "Al crear un evento en el panel, su página de registro existe de inmediato, sin tocar el código.",
      },
      {
        titulo: "La base no confía en el navegador",
        detalle:
          "Las tablas de personas tienen RLS sin políticas: son invisibles desde el cliente, y las escrituras públicas pasan solo por funciones SQL.",
      },
      {
        titulo: "Autorización guardada dos veces",
        detalle: "Se conserva el estado actual de cada persona y lo que autorizó ese día, como soporte para la Ley 1581.",
      },
    ],
    nota: "El código es privado.",
  },
  {
    slug: "zerobug",
    nombre: "ZeroBug",
    resumen: "API REST para la operación de un restaurante: mesas, menú, reservas, usuarios y roles.",
    tipo: "Proyecto en equipo",
    estado: "Código público",
    rol: "Scrum Master y desarrollador",
    stack: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Docker", "Vitest", "GitHub Actions"],
    enlaces: [{ etiqueta: "Ver código", url: "https://github.com/DylanSrz/ZeroBug" }],
    problema:
      "Modelar las reglas de un restaurante, como reservas, disponibilidad y roles, en una API mantenible por un equipo que trabaja en sprints.",
    aportes: [
      "Fui Scrum Master y desarrollador del equipo.",
      "Trabajamos con historias de usuario, reglas de negocio documentadas y acuerdos de equipo.",
    ],
    decisiones: [
      {
        titulo: "Migraciones versionadas",
        detalle: "TypeORM con synchronize desactivado: cada cambio del esquema queda en una migración revisable.",
      },
      {
        titulo: "Configuración validada al arrancar",
        detalle: "Las variables de entorno se validan con Zod, y la app no arranca si falta una.",
      },
      {
        titulo: "Pruebas en CI",
        detalle: "Pruebas unitarias y e2e con Vitest y Supertest en GitHub Actions.",
      },
    ],
  },
  {
    slug: "quiniela",
    nombre: "Quiniela Hunters",
    resumen: "Quiniela del Mundial 2026 entre 9 amigos, con puntaje automático y tabla pública.",
    tipo: "Proyecto personal",
    estado: "Terminado",
    rol: "Desarrollador",
    captura: "/proyectos/quiniela.png",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Vitest", "GitHub Actions", "Vercel"],
    enlaces: [
      { etiqueta: "Ver demo", url: "https://quiniela-hazel-five.vercel.app" },
      { etiqueta: "Ver código", url: "https://github.com/DylanSrz/quiniela" },
    ],
    problema:
      "Calcular a mano los puntos de 9 personas en 72 partidos es lento y propenso a errores. El sistema lo hace solo al guardar cada resultado.",
    aportes: [
      "Construí el proyecto y lo usamos durante toda la fase de grupos.",
      "Hice la carga de pronósticos desde Excel, con vista previa antes de guardar.",
    ],
    decisiones: [
      {
        titulo: "El puntaje vive en Postgres",
        detalle: "Un trigger recalcula los pronósticos al guardar un resultado, y la tabla siempre queda consistente.",
      },
      {
        titulo: "Modelo admin-céntrico",
        detalle: "Sin registro de usuarios: solo el administrador escribe, y RLS deja la llave pública en modo lectura.",
      },
    ],
  },
  {
    slug: "geldo",
    nombre: "GELDO",
    resumen: "Bot de Discord modular y multi-servidor, desplegado en una VM con GitHub Actions y systemd.",
    tipo: "Proyecto personal",
    estado: "Desplegado en VM",
    rol: "Desarrollador",
    captura: "/proyectos/geldo.png",
    stack: ["Python", "discord.py", "SQLite", "GitHub Actions", "systemd", "Oracle Cloud"],
    enlaces: [{ etiqueta: "Ver sitio", url: "https://geldo.vercel.app" }],
    problema:
      "Reunir en un solo bot economía, casino, niveles, moderación y tickets, con los datos de cada servidor aislados.",
    aportes: [
      "Diseñé la arquitectura de Cogs y los paneles con botones persistentes.",
      "Configuré el despliegue con GitHub Actions por SSH a una VM Ubuntu.",
    ],
    decisiones: [
      {
        titulo: "Datos aislados por servidor",
        detalle: "Todo se guarda por guild_id en SQLite con modo WAL.",
      },
      {
        titulo: "Operación en servidor",
        detalle: "Corre como servicio systemd con un usuario dedicado y un EnvironmentFile.",
      },
    ],
  },
  {
    slug: "scriptvuelos",
    nombre: "ScriptVuelos",
    resumen: "Monitor diario de precios de vuelos con reportes por correo, sin servidor propio.",
    tipo: "Proyecto personal",
    estado: "Terminado",
    rol: "Desarrollador",
    stack: ["Python", "SerpAPI", "GitHub Actions", "SMTP"],
    enlaces: [{ etiqueta: "Ver código", url: "https://github.com/DylanSrz/ScriptVuelos" }],
    problema:
      "Revisar precios a mano todos los días es tedioso. Lo automaticé y deshabilité el workflow cuando compré los tiquetes.",
    aportes: ["Construí el script, el reporte HTML y la automatización con cron en GitHub Actions."],
    decisiones: [
      {
        titulo: "Validar la fuente de datos",
        detalle: "Aviasales no devolvía resultados, así que cambié a SerpAPI, que consulta Google Flights.",
      },
    ],
  },
];

export const proyectoPorSlug = (slug: string) =>
  proyectos.find((proyecto) => proyecto.slug === slug);
