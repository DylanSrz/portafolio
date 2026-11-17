import type { Idioma } from "@/lib/i18n";

export type Tipo = "producto" | "equipo" | "personal" | "herramienta";
export type ClaveEnlace = "sitio" | "demo" | "api" | "codigo";
export type Enlace = { clave: ClaveEnlace; etiqueta: string; url: string };
export type Decision = { titulo: string; detalle: string };

/** Material extra, tomado del repositorio, para proyectos sin captura. */
export type Extra = "rutas" | "flujo";

type Textos = {
  resumen: string;
  estado: string;
  rol: string;
  problema: string;
  aportes: string[];
  decisiones: Decision[];
  nota?: string;
};

type Base = {
  slug: string;
  nombre: string;
  tipo: Tipo;
  /** Solo los proyectos que hoy atienden usuarios en su dominio. */
  enProduccion: boolean;
  captura?: string;
  extra?: Extra;
  stack: string[];
  enlaces: { clave: ClaveEnlace; url: string }[];
  textos: Record<Idioma, Textos>;
};

export type Proyecto = Omit<Base, "textos" | "enlaces"> &
  Textos & {
    /** Posición en el manifiesto, con dos dígitos. */
    numero: string;
    /** Código de carga: DSRZ + número + tipo. */
    codigo: string;
    enlaces: Enlace[];
    destino: { host: string; url: string };
  };

const codigoTipo: Record<Tipo, string> = {
  producto: "PR",
  equipo: "EQ",
  personal: "PE",
  herramienta: "HE",
};

export const leyendaTipos = (Object.keys(codigoTipo) as Tipo[]).map((tipo) => ({
  tipo,
  codigo: codigoTipo[tipo],
}));

const etiquetas: Record<Idioma, Record<ClaveEnlace, string>> = {
  es: { sitio: "Ver sitio", demo: "Ver demo", api: "Ver API", codigo: "Ver código" },
  en: { sitio: "Visit site", demo: "View demo", api: "View API", codigo: "View code" },
};

const base: Base[] = [
  {
    slug: "doctrader",
    nombre: "DocTraderPro",
    tipo: "producto",
    enProduccion: true,
    captura: "/proyectos/doctrader.png",
    stack: [
      "NestJS",
      "TypeScript",
      "TypeORM",
      "BullMQ",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "pnpm workspaces",
      "Railway",
      "Vercel",
      "Resend",
    ],
    enlaces: [{ clave: "sitio", url: "https://www.doctraderpro.com" }],
    textos: {
      es: {
        resumen:
          "Plataforma para vender y administrar licencias de software, con API, worker asíncrono y panel web.",
        estado: "En producción",
        rol: "Desarrollador y socio del proyecto",
        problema:
          "El negocio necesitaba vender licencias de uso de un software, verificar pagos y administrar clientes. Al manejar datos personales y pagos, la seguridad debía ser un requisito desde el inicio.",
        aportes: [
          "Desarrollé la plataforma: sitio público, panel de clientes, panel de administración, API y worker.",
          "Organicé el código como monorepo: la API, la web y un paquete compartido.",
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
              "Los datos más delicados se guardan cifrados, y aun así se puede detectar un registro repetido sin descifrarlo.",
          },
          {
            titulo: "Auditoría que no se puede alterar en silencio",
            detalle:
              "Las acciones delicadas quedan registradas en la misma transacción que las produce, y el registro detecta si alguien lo modifica.",
          },
          {
            titulo: "Copias de seguridad que se prueban",
            detalle:
              "Un workflow de GitHub Actions saca copias cifradas de la base y comprueba que se pueden restaurar.",
          },
        ],
        nota: "El código es privado. Aquí muestro solo la arquitectura y las decisiones técnicas.",
      },
      en: {
        resumen:
          "Platform to sell and manage software licenses, with an API, an async worker and a web panel.",
        estado: "In production",
        rol: "Developer and project partner",
        problema:
          "The business needed to sell software licenses, verify payments and manage customers. It handles personal data and payments, so security had to be a requirement from the start.",
        aportes: [
          "I built the platform: public site, customer panel, admin panel, API and worker.",
          "I organized the code as a monorepo: the API, the web app and a shared package.",
          "I deployed the services on Railway and Vercel, and I rotated the production keys and secrets.",
          "I documented the data model, the technical decisions and the security plan.",
        ],
        decisiones: [
          {
            titulo: "API and worker from the same code",
            detalle:
              "They are two services with two start commands. Slow tasks, like sending emails, leave the user request and run on BullMQ over Redis.",
          },
          {
            titulo: "Transactional outbox",
            detalle:
              "Each email is saved in the same transaction as the action that causes it, and the worker sends it later. If the action fails, no email goes out.",
          },
          {
            titulo: "The browser never talks to the API",
            detalle:
              "The web app calls the API from the server with signed requests, and the session lives in an HttpOnly cookie.",
          },
          {
            titulo: "Sensitive data encrypted per field",
            detalle:
              "The most sensitive data is stored encrypted, and the system can still detect a duplicate record without decrypting it.",
          },
          {
            titulo: "An audit log that cannot be changed silently",
            detalle:
              "Sensitive actions are recorded in the same transaction that causes them, and the log detects if someone modifies it.",
          },
          {
            titulo: "Backups that are tested",
            detalle:
              "A GitHub Actions workflow makes encrypted backups of the database and checks that they can be restored.",
          },
        ],
        nota: "The code is private. Here I only show the architecture and the technical decisions.",
      },
    },
  },
  {
    slug: "dislaverde",
    nombre: "Dislaverde",
    tipo: "producto",
    enProduccion: true,
    captura: "/proyectos/dislaverde.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Resend", "Vercel"],
    enlaces: [{ clave: "sitio", url: "https://www.dislaverde.com" }],
    textos: {
      es: {
        resumen:
          "Catálogo público, registro de eventos y sorteos auditables para una distribuidora de productos de estética.",
        estado: "En producción",
        rol: "Desarrollador",
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
            detalle:
              "Al crear un evento en el panel, su página de registro existe de inmediato, sin tocar el código.",
          },
          {
            titulo: "La base no confía en el navegador",
            detalle:
              "Las tablas de personas tienen RLS sin políticas: son invisibles desde el cliente, y las escrituras públicas pasan solo por funciones SQL.",
          },
          {
            titulo: "Autorización guardada dos veces",
            detalle:
              "Se conserva el estado actual de cada persona y lo que autorizó ese día, como soporte para la Ley 1581.",
          },
        ],
        nota: "El código es privado.",
      },
      en: {
        resumen:
          "Public catalog, event registration and auditable raffles for a distributor of beauty and spa products.",
        estado: "In production",
        rol: "Developer",
        problema:
          "The company needed to show its catalog and register people for in-person and online events, and keep each person’s consent for data processing.",
        aportes: [
          "I built the catalog, the events panel, the registration flow and the raffle screen.",
          "I worked on the schema, the RLS policies and the SQL functions with versioned migrations.",
          "I removed an e-commerce that was already built before it went live, to bring it back later with more security.",
        ],
        decisiones: [
          {
            titulo: "An event is a row, not a deployment",
            detalle:
              "When someone creates an event in the panel, its registration page exists right away, with no code changes.",
          },
          {
            titulo: "The database does not trust the browser",
            detalle:
              "The tables with personal data have RLS with no policies: the client cannot see them, and public writes only go through SQL functions.",
          },
          {
            titulo: "Consent stored twice",
            detalle:
              "The system keeps the current state of each person and what they accepted that day, as evidence for Colombia’s data protection law (Ley 1581).",
          },
        ],
        nota: "The code is private.",
      },
    },
  },
  {
    slug: "edulogic",
    nombre: "EduLogic",
    tipo: "equipo",
    enProduccion: true,
    captura: "/proyectos/edulogic.png",
    stack: [
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "Supabase",
      "JavaScript",
      "Tailwind CSS",
      "Render",
      "Vercel",
    ],
    enlaces: [
      { clave: "demo", url: "https://edulogic.pro" },
      { clave: "api", url: "https://api.edulogic.pro/docs" },
      { clave: "codigo", url: "https://github.com/DylanSrz/EduLogic" },
    ],
    textos: {
      es: {
        resumen: "Plataforma de aprendizaje STEM que corrige al instante y explica cada error.",
        estado: "En producción",
        rol: "Scrum Master, líder técnico y backend",
        problema:
          "Quien aprende por su cuenta suele chocar con evaluaciones que solo dicen «incorrecto». EduLogic explica cada error para que fallar también sea parte del aprendizaje.",
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
            detalle:
              "Modelo relacional con integridad referencial, roles y borrado lógico para conservar el historial.",
          },
        ],
      },
      en: {
        resumen: "STEM learning platform that grades instantly and explains every mistake.",
        estado: "In production",
        rol: "Scrum Master, technical lead and backend",
        problema:
          "People who learn on their own often get tests that only say “wrong”. EduLogic explains every mistake, so failing is also part of learning.",
        aportes: [
          "I was Scrum Master and leader of a team of 6 people in the Riwi Integrator Project.",
          "I worked on the backend together with the team.",
          "We used GitFlow, protected branches and traceability from issue to branch to PR.",
        ],
        decisiones: [
          {
            titulo: "Grading engine in the service layer",
            detalle:
              "The router handles HTTP and permissions. Grading is business logic, and the attempt is saved with its answers in one transaction.",
          },
          {
            titulo: "Answers do not travel early",
            detalle:
              "The quiz that the student receives does not include the correct option. The explanation arrives only after they answer.",
          },
          {
            titulo: "Database normalized to 3NF",
            detalle:
              "Relational model with referential integrity, roles and soft delete to keep the history.",
          },
        ],
      },
    },
  },
  {
    slug: "zerobug",
    nombre: "ZeroBug",
    tipo: "equipo",
    enProduccion: false,
    extra: "rutas",
    stack: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Docker", "Vitest", "GitHub Actions"],
    enlaces: [{ clave: "codigo", url: "https://github.com/DylanSrz/ZeroBug" }],
    textos: {
      es: {
        resumen: "API REST para la operación de un restaurante: mesas, menú, reservas, usuarios y roles.",
        estado: "Código público",
        rol: "Scrum Master y desarrollador",
        problema:
          "Modelar las reglas de un restaurante, como reservas, disponibilidad y roles, en una API mantenible por un equipo que trabaja en sprints.",
        aportes: [
          "Fui Scrum Master y desarrollador del equipo.",
          "Trabajamos con historias de usuario, reglas de negocio documentadas y acuerdos de equipo.",
        ],
        decisiones: [
          {
            titulo: "Migraciones versionadas",
            detalle:
              "TypeORM con synchronize desactivado: cada cambio del esquema queda en una migración revisable.",
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
      en: {
        resumen: "REST API to run a restaurant: tables, menu, reservations, users and roles.",
        estado: "Public code",
        rol: "Scrum Master and developer",
        problema:
          "Model the rules of a restaurant, like reservations, availability and roles, in an API that a team working in sprints can maintain.",
        aportes: [
          "I was the Scrum Master and a developer on the team.",
          "We worked with user stories, documented business rules and team agreements.",
        ],
        decisiones: [
          {
            titulo: "Versioned migrations",
            detalle:
              "TypeORM with synchronize turned off: every schema change lives in a migration that the team can review.",
          },
          {
            titulo: "Configuration validated at startup",
            detalle: "Environment variables are validated with Zod, and the app does not start if one is missing.",
          },
          {
            titulo: "Tests in CI",
            detalle: "Unit and e2e tests with Vitest and Supertest on GitHub Actions.",
          },
        ],
      },
    },
  },
  {
    slug: "geldo",
    nombre: "GELDO",
    tipo: "personal",
    enProduccion: false,
    captura: "/proyectos/geldo.png",
    stack: ["Python", "discord.py", "SQLite", "GitHub Actions", "systemd", "Oracle Cloud"],
    enlaces: [
      { clave: "sitio", url: "https://geldo.vercel.app" },
      { clave: "codigo", url: "https://github.com/DylanSrz/geldo-bot" },
    ],
    textos: {
      es: {
        resumen:
          "Bot de Discord modular y multi-servidor, desplegado en una VM con GitHub Actions y systemd.",
        estado: "Desplegado en VM",
        rol: "Desarrollador",
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
      en: {
        resumen:
          "Modular, multi-server Discord bot, deployed on a VM with GitHub Actions and systemd.",
        estado: "Deployed on a VM",
        rol: "Developer",
        problema:
          "Put economy, casino, levels, moderation and tickets in one bot, and keep the data of each server isolated.",
        aportes: [
          "I designed the Cogs architecture and the panels with persistent buttons.",
          "I set up the deployment with GitHub Actions over SSH to an Ubuntu VM.",
        ],
        decisiones: [
          {
            titulo: "Data isolated per server",
            detalle: "Everything is stored by guild_id in SQLite with WAL mode.",
          },
          {
            titulo: "Running on a server",
            detalle: "It runs as a systemd service with a dedicated user and an EnvironmentFile.",
          },
        ],
      },
    },
  },
  {
    slug: "quiniela",
    nombre: "Quiniela Hunters",
    tipo: "personal",
    enProduccion: false,
    captura: "/proyectos/quiniela.png",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Vitest", "GitHub Actions", "Vercel"],
    enlaces: [
      { clave: "demo", url: "https://quiniela-hazel-five.vercel.app" },
      { clave: "codigo", url: "https://github.com/DylanSrz/quiniela" },
    ],
    textos: {
      es: {
        resumen: "Quiniela del Mundial 2026 entre 9 amigos, con puntaje automático y tabla pública.",
        estado: "Terminado",
        rol: "Desarrollador",
        problema:
          "Calcular a mano los puntos de 9 personas en 72 partidos es lento y propenso a errores. El sistema lo hace solo al guardar cada resultado.",
        aportes: [
          "Construí el proyecto y lo usamos durante toda la fase de grupos.",
          "Hice la carga de pronósticos desde Excel, con vista previa antes de guardar.",
        ],
        decisiones: [
          {
            titulo: "El puntaje vive en Postgres",
            detalle:
              "Un trigger recalcula los pronósticos al guardar un resultado, y la tabla siempre queda consistente.",
          },
          {
            titulo: "Modelo admin-céntrico",
            detalle:
              "Sin registro de usuarios: solo el administrador escribe, y RLS deja la llave pública en modo lectura.",
          },
        ],
      },
      en: {
        resumen: "World Cup 2026 prediction pool for 9 friends, with automatic scoring and a public table.",
        estado: "Finished",
        rol: "Developer",
        problema:
          "Counting the points of 9 people over 72 matches by hand is slow and easy to get wrong. The system does it when each result is saved.",
        aportes: [
          "I built the project and we used it during the whole group stage.",
          "I built the import of predictions from Excel, with a preview before saving.",
        ],
        decisiones: [
          {
            titulo: "The scoring lives in Postgres",
            detalle:
              "A trigger recalculates the predictions when a result is saved, so the table is always consistent.",
          },
          {
            titulo: "Admin-centered model",
            detalle:
              "No user sign-up: only the admin writes, and RLS keeps the public key read-only.",
          },
        ],
      },
    },
  },
  {
    slug: "scriptvuelos",
    nombre: "ScriptVuelos",
    tipo: "herramienta",
    enProduccion: false,
    extra: "flujo",
    stack: ["Python", "SerpAPI", "GitHub Actions", "SMTP"],
    enlaces: [{ clave: "codigo", url: "https://github.com/DylanSrz/ScriptVuelos" }],
    textos: {
      es: {
        resumen: "Monitor diario de precios de vuelos con reportes por correo, sin servidor propio.",
        estado: "Terminado",
        rol: "Desarrollador",
        problema:
          "Revisar precios a mano todos los días es tedioso. Lo automaticé y deshabilité el workflow cuando compré los tiquetes.",
        aportes: ["Construí el script, el reporte HTML y la automatización con cron en GitHub Actions."],
        decisiones: [
          {
            titulo: "Validar la fuente de datos",
            detalle:
              "Aviasales no devolvía resultados, así que cambié a SerpAPI, que consulta Google Flights.",
          },
        ],
      },
      en: {
        resumen: "Daily flight price monitor with email reports and no server of its own.",
        estado: "Finished",
        rol: "Developer",
        problema:
          "Checking prices by hand every day is tedious. I automated it, and I disabled the workflow when I bought the tickets.",
        aportes: ["I built the script, the HTML report and the automation with cron on GitHub Actions."],
        decisiones: [
          {
            titulo: "Validate the data source",
            detalle:
              "Aviasales returned no results, so I switched to SerpAPI, which queries Google Flights.",
          },
        ],
      },
    },
  },
];

export const slugs = base.map((proyecto) => proyecto.slug);

export function proyectos(idioma: Idioma): Proyecto[] {
  return base.map(({ textos, enlaces, ...resto }, indice) => {
    const numero = String(indice + 1).padStart(2, "0");
    const principal = enlaces[0];
    return {
      ...resto,
      ...textos[idioma],
      numero,
      codigo: `DSRZ ${numero} ${codigoTipo[resto.tipo]}`,
      enlaces: enlaces.map((enlace) => ({ ...enlace, etiqueta: etiquetas[idioma][enlace.clave] })),
      destino: {
        url: principal.url,
        host: new URL(principal.url).host.replace(/^www\./, "") +
          (principal.clave === "codigo" ? new URL(principal.url).pathname : ""),
      },
    };
  });
}

export const proyectoPorSlug = (idioma: Idioma, slug: string) =>
  proyectos(idioma).find((proyecto) => proyecto.slug === slug);

/** Rutas reales de ZeroBug, leídas de sus controladores (prefijo /api/v1). */
export const rutasZeroBug: { recurso: string; rutas: string[] }[] = [
  { recurso: "auth", rutas: ["POST /register", "POST /login", "POST /forgot-password", "POST /reset-password"] },
  {
    recurso: "reservations",
    rutas: [
      "GET /availability",
      "POST /",
      "GET /",
      "GET /:id",
      "PATCH /:id",
      "PATCH /:id/cancel",
      "PATCH /:id/confirm",
      "PATCH /:id/check-in",
    ],
  },
  { recurso: "tables", rutas: ["POST /", "GET /", "GET /:id", "PATCH /:id", "PATCH /:id/status"] },
  {
    recurso: "menu",
    rutas: ["GET /", "GET /categories", "GET /categories/:categoryId/products", "GET /products/:id"],
  },
  {
    recurso: "products",
    rutas: ["POST /", "GET /", "GET /:id", "PATCH /:id", "PATCH /:id/status", "PATCH /:id/availability"],
  },
  { recurso: "categories", rutas: ["POST /", "GET /", "GET /:id", "PATCH /:id", "PATCH /:id/status"] },
  { recurso: "employees", rutas: ["POST /", "GET /", "GET /:id", "PATCH /:id", "PATCH /:id/status"] },
  { recurso: "profile", rutas: ["GET /", "PATCH /"] },
  { recurso: "health", rutas: ["GET /"] },
];

/** Flujo real de ScriptVuelos, leído de su workflow y su README. */
export const flujoScriptVuelos: Record<Idioma, { paso: string; detalle: string }[]> = {
  es: [
    { paso: "GitHub Actions", detalle: "cron: 5 16 * * *" },
    { paso: "flight_monitor.py", detalle: "Consulta ida y vuelta, quita duplicados y ordena por precio" },
    { paso: "SerpAPI", detalle: "Google Flights, BAQ ↔ BOG" },
    { paso: "Gmail SMTP", detalle: "Reporte HTML con los vuelos bajo el presupuesto" },
  ],
  en: [
    { paso: "GitHub Actions", detalle: "cron: 5 16 * * *" },
    { paso: "flight_monitor.py", detalle: "Queries both legs, removes duplicates and sorts by price" },
    { paso: "SerpAPI", detalle: "Google Flights, BAQ ↔ BOG" },
    { paso: "Gmail SMTP", detalle: "HTML report with the flights under the budget" },
  ],
};
