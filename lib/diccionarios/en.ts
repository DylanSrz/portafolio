import type { Diccionario } from "./es";

export const en: Diccionario = {
  meta: {
    titulo: "DylanSrz · Dylan Suárez, Full Stack Developer",
    descripcion:
      "Portfolio of Dylan Suárez (DylanSrz), a Full Stack developer with a backend focus in Barranquilla, Colombia. Products in production, team projects and my own tools.",
    plantilla: "%s · DylanSrz",
  },
  nav: {
    etiqueta: "Main navigation",
    inicio: "DylanSrz, go to home",
    proyectos: "Projects",
    "sobre-mi": "About",
    stack: "Stack",
    contacto: "Contact",
    abrirMenu: "Open menu",
    cerrarMenu: "Close menu",
    idioma: "Language",
    cambiarA: "Leer en español",
    saltar: "Skip to content",
  },
  hero: {
    rol: "Full Stack Developer",
    declaracion:
      "I turn ideas into working digital products. I design, build and integrate Full Stack solutions, from architecture to deployment.",
    origen: "Port of origin",
    disponible: "Available for a developer job",
    verProyectos: "See projects",
    contactar: "Contact me",
  },
  proyectos: {
    titulo: "Cargo manifest",
    entrada:
      "Seven projects, each with a destination you can check. The code after each number tells you what kind of project it is.",
    columnas: { codigo: "Code", contenido: "Contents", carga: "Cargo", tipo: "Type", rol: "My role", destino: "Destination", estado: "Status" },
    verFicha: "Open the page for",
    sinDestino: "Code on GitHub",
    capturaDe: "Screenshot of",
    detalleTitulo: "The cargo, one by one",
    leyenda: "Cargo types",
  },
  tipos: {
    producto: "Real product",
    equipo: "Team project",
    personal: "Personal project",
    herramienta: "Tool",
  },
  sobreMi: {
    titulo: "About me",
    frase: "I learn by shipping: I turn what I study into products that people use.",
    parrafos: [
      "I am Dylan, a Full Stack developer in Barranquilla. I am starting my career in the industry and I study at Riwi, where I am now in the advanced track with NestJS.",
      "I do not wait to finish a course before I build. I work on real products at the same time: a software license platform and the website of a beauty products distributor, both in production.",
      "I care most about the parts you do not see: the design of an API, the data model, background jobs and deployment. I plan the architecture with Claude and I build with Claude Code.",
    ],
    interesesTitulo: "What interests me most",
    intereses: [
      "Backend",
      "Software architecture",
      "REST APIs",
      "Databases",
      "Automation",
      "Service integration",
      "Full Stack development",
      "AI and developer tools",
    ],
    datosTitulo: "How I work with others",
    datos: [
      {
        termino: "Training",
        detalle: "Riwi, Barranquilla. Advanced track, NestJS module.",
      },
      {
        termino: "Scrum Master",
        detalle: "On EduLogic, with a team of 6 people, and on ZeroBug.",
      },
      {
        termino: "Classroom tutor",
        detalle: "For my group of 26 people. I give review workshops to my classmates.",
      },
      {
        termino: "Languages",
        detalle: "Native Spanish. Basic to intermediate English, and I am actively improving it.",
      },
    ],
  },
  stack: {
    titulo: "Stack",
    entrada:
      "Grouped by what each tool does. Under each one, the projects in this portfolio where I used it.",
    usadoEn: "Used in",
    grupos: {
      backend: "Backend",
      frontend: "Frontend",
      datos: "Databases and storage",
      infra: "Infrastructure and tools",
      calidad: "Quality and methodology",
    },
  },
  contacto: {
    titulo: "Let’s talk.",
    entrada:
      "I am looking for a job as a developer. If you have an open role, a project or a question about my work, write to me.",
    correo: "Email",
    copiar: "Copy email",
    copiado: "Email copied",
    escribir: "Send me an email",
    ubicacion: "Location",
  },
  pie: {
    lema: "Full Stack Developer. From architecture design to deployment.",
    navegacion: "Sections",
    redes: "Links",
    hechoCon: "Built with Next.js, TypeScript and Tailwind CSS.",
    arriba: "Back to top",
  },
  detalle: {
    volver: "Manifest",
    ficha: "Cargo sheet",
    rol: "My role",
    tipo: "Type",
    estado: "Status",
    destinos: "Destinations",
    problema: "The problem",
    aportes: "What I did",
    decisiones: "Technical decisions",
    stack: "Stack",
    siguiente: "Next cargo",
    anterior: "Previous cargo",
    capturaDe: "Screenshot of",
    rutasTitulo: "API routes",
    rutasNota: "Taken from the controllers in the public repository. All of them live under /api/v1.",
    flujoTitulo: "How it ran",
    flujoNota: "Taken from the workflow and the README in the public repository.",
  },
  noEncontrado: {
    codigo: "404",
    titulo: "This cargo is not on the manifest.",
    texto: "The page you are looking for does not exist or it moved.",
    volver: "Back to home",
  },
};
