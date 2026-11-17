---
name: DylanSrz
description: Portafolio de Dylan Suárez como manifiesto de carga de una terminal de contenedores.
colors:
  acero-950: "#101214"
  acero-900: "#16181a"
  acero-800: "#1d2023"
  acero-700: "#24282b"
  acero-600: "#2c3134"
  pintura: "#efeadf"
  pintura-suave: "#c6c7bf"
  pintura-tenue: "#9a9e99"
  lima: "#d4f03c"
  tinta: "#16181a"
  tinta-suave: "#3a3e40"
typography:
  nombre:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "27.4cqi"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.012em"
  display:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.005em"
    fontVariation: "'opsz' 72"
  estarcido:
    fontFamily: "Big Shoulders Stencil, Big Shoulders, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.035em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.04em"
    fontFeature: "tnum"
  codigo:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  margen: "clamp(1.25rem, 4vw, 3rem)"
  costilla: "4.75rem"
  costilla-movil: "3rem"
  alto-cabecera: "3.75rem"
  contenedor-max: "112rem"
components:
  boton-tinta:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.pintura}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.15rem"
    height: "2.875rem"
  boton-tinta-hover:
    backgroundColor: "{colors.acero-600}"
    textColor: "{colors.pintura}"
  boton-claro:
    backgroundColor: "transparent"
    textColor: "{colors.pintura}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.15rem"
    height: "2.875rem"
  boton-claro-hover:
    backgroundColor: "{colors.pintura}"
    textColor: "{colors.tinta}"
  boton-linea-tinta:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.15rem"
    height: "2.875rem"
  boton-linea-tinta-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.pintura}"
  franja:
    backgroundColor: "{colors.lima}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
  cabecera:
    backgroundColor: "{colors.acero-900}"
    textColor: "{colors.pintura-suave}"
    height: "{spacing.alto-cabecera}"
  placa:
    backgroundColor: "{colors.acero-800}"
    textColor: "{colors.pintura-suave}"
    rounded: "{rounded.none}"
  estado-vivo:
    textColor: "{colors.lima}"
    typography: "{typography.label}"
  seccion-papel:
    backgroundColor: "{colors.pintura}"
    textColor: "{colors.tinta}"
  seccion-lima:
    backgroundColor: "{colors.lima}"
    textColor: "{colors.tinta}"
---

# Design System: DylanSrz

## Overview

**Creative North Star: "Manifiesto de Puerto"**

El sitio es el papeleo de una terminal de contenedores. Cada proyecto es una carga con código, tipo, rol, destino y estado. El nombre DYLANSRZ va pintado a todo lo ancho sobre acero corrugado, como el nombre de una naviera en el costado de un contenedor. Debajo empieza el manifiesto: una tabla de filas finas que se puede verificar.

El material es acero pintado en mate color grafito, pintura blanca cálida y una sola lima de seguridad. Las esquinas son rectas. No hay sombras, brillos ni vidrio. La profundidad viene del propio acero (costillas verticales y un foco de patio), no de capas que flotan. La lectura es densa y ordenada: reglas finas, datos en mono, títulos condensados en mayúsculas.

El movimiento es mecánico, como una grúa pórtico: barridos con `clip-path` y desplazamientos lineales. Nada rebota. Todo se apaga con `prefers-reduced-motion`.

**Key Characteristics:**
- Acero corrugado como textura del mundo (hero, Stack, cabecera de ficha).
- Lima solo para "en producción / disponible".
- Tríada tipográfica: display condensado, grotesca para leer, mono para datos.
- Tablas y filas con reglas finas en vez de tarjetas.
- Secciones de color plano: papel para Sobre mí, lima para Contacto.
- Esquinas rectas, sin sombras.

## Colors

Grafito mate con pintura cálida y una lima de alta visibilidad que solo marca estado.

### Primary
- **Lima de seguridad** (`lima`): la franja de disponibilidad bajo el hero, el cuadrado de estado de los proyectos en producción, la franja de la ficha de un proyecto en producción, la sección de Contacto y la franja inferior de la imagen para compartir cuando el proyecto está vivo.

### Neutral
- **Acero noche** (`acero-950`): fondo del `html`, del pie y de la barra de desplazamiento.
- **Acero base** (`acero-900`): fondo de página y de la cabecera fija.
- **Acero placa** (`acero-800`): fondo de las placas de captura y de la franja de un proyecto que no está en producción.
- **Acero costilla** (`acero-700`) y **Acero claro** (`acero-600`): las dos caras de cada costilla del acero corrugado. `acero-600` también es el relleno del botón en tinta al pasar el cursor.
- **Pintura** (`pintura`): texto principal sobre acero, reglas fuertes y el fondo de papel de Sobre mí.
- **Pintura suave** (`pintura-suave`): texto secundario, resúmenes y enlaces de navegación en reposo.
- **Pintura tenue** (`pintura-tenue`): etiquetas de columna y términos de las fichas.
- **Tinta** (`tinta`) y **Tinta suave** (`tinta-suave`): texto sobre papel y lima. Tinta también es el botón sólido sobre lima o papel.
- **Reglas**: la pintura al 16 % (`regla`) separa filas; al 42 % (`regla-fuerte`) cierra tablas y bordea placas. Sobre papel y lima, la regla fuerte pasa a tinta.

### Named Rules
**La Ley de la Lima.** La lima significa "en producción / disponible" y nada más. Un proyecto que no está en producción lleva un cuadrado vacío del color del texto. Nunca uses lima para decorar, para enlaces ni para hover. La única excepción es la sección de Contacto, que es la disponibilidad misma.

**La Regla de la Pintura.** Sobre acero, el texto es pintura cálida, nunca blanco puro. La selección y el foco también son pintura; sobre papel y lima pasan a tinta.

## Typography

**Display Font:** Big Shoulders (con Arial Narrow)
**Stencil Font:** Big Shoulders Stencil (con Big Shoulders)
**Body Font:** Archivo (con system-ui)
**Label/Mono Font:** Martian Mono (con ui-monospace)

**Character:** Letras condensadas de rotulación industrial para nombres y títulos, estarcido para códigos de contenedor, una grotesca sobria para leer y un mono técnico para los datos del manifiesto.

### Hierarchy
- **Nombre** (900, `27.4cqi`, 0.8): solo DYLANSRZ en el hero. Llena el ancho del contenedor y no se parte.
- **Display** (800, entre 2.25rem y 19rem según sección, 0.8–0.88, mayúsculas): títulos de sección, nombres de carga, títulos de la ficha y elementos del stack. Usa `text-wrap: balance`.
- **Estarcido** (700, 1.125–3.5rem, 0.035em, mayúsculas): códigos de carga (`DSRZ 01 PR`), el LOCODE `CO BAQ`, la marca de la cabecera y la marca gigante del pie.
- **Body** (400, 1.0625rem, 1.6): párrafos. Los resúmenes y textos largos se limitan a 34–44rem.
- **Label** (400–500, 0.75rem, 0.04em, mayúsculas, cifras tabulares): navegación, etiquetas de columna, términos de ficha, estados y botones.
- **Código** (400, 0.8125rem, 1.6): hosts de destino y rutas de API.

### Named Rules
**El Peso es Estado.** En el manifiesto, la fila enfocada sube el peso variable del nombre de 700 a 900. El peso cambia para marcar foco, no para decorar.

**Sin Antetítulos.** Ningún título lleva una etiqueta pequeña encima. Las etiquetas mono son encabezados de columna o de lista, no adornos sobre un titular.

## Layout

Un solo contenedor de hasta 112rem con margen lateral fluido (`margen`). La cabecera es fija y mide `alto-cabecera`; el desplazamiento a anclas la descuenta.

El inicio sigue este orden: hero de acero, franja lima, manifiesto (índice compacto y luego una fila amplia por carga), Sobre mí en papel, Stack sobre acero, Contacto en lima y el pie en acero noche.

En escritorio el contenido usa una rejilla de 12 columnas. Las cargas en producción ocupan 5 + 7 columnas y alternan el lado de la captura. Las demás usan tres columnas de 4. La ficha de proyecto pone una barra lateral fija (3–4 columnas) junto al contenido (8 columnas).

En móvil todo pasa a una columna. El índice muestra código y estado arriba y el nombre debajo. Las costillas del acero se estrechan de 4.75rem a 3rem por debajo de 48rem. El menú móvil es una capa a pantalla completa con enlaces en display grande.

El ritmo vertical de sección va de 5rem a 7rem (`py-20` / `py-28`). Las filas se separan con reglas, no con huecos grandes.

## Elevation & Depth

Este sistema es plano. No usa `box-shadow`, desenfoque ni vidrio. La profundidad sale del material: el acero corrugado se pinta con un degradado repetido de cuatro bandas y encima lleva un solo foco de patio (un círculo radial de pintura al 11 %) más un oscurecimiento arriba y abajo. Con ratón, el foco sigue al puntero; sin ratón o con movimiento reducido, queda fijo arriba a la derecha.

### Named Rules
**La Regla del Acero Plano.** Nada flota. Las capas se separan con cambios de superficie (acero, papel, lima) y con reglas, nunca con sombras ni brillos.

**Un Solo Foco.** Cada superficie de acero tiene una sola luz. No añadas resplandores ni halos de color.

## Shapes

Todas las esquinas son rectas (0px). Los bordes son líneas de 1px (reglas) o de 1.5–2px (botones, cierres de tabla). La marca de estado es un cuadrado de 0.6rem, relleno en lima si el proyecto está vivo y vacío si no. Los iconos son propios: trazo de 2px, extremos rectos, rejilla de 24.

## Components

### Buttons
Rectángulos de pintura industrial que se llenan como una persiana.
- **Shape:** esquinas rectas, borde de 1.5px del color del texto, alto mínimo 2.875rem.
- **Texto:** mono, 0.75rem, mayúsculas, espaciado 0.05em.
- **Hover / Focus:** el relleno barre de izquierda a derecha en 180ms con la curva de grúa. El texto invierte su color y la flecha se mueve 2px en diagonal.
- **Tinta:** sólido en tinta sobre lima o papel; al pasar el cursor se llena de acero claro.
- **Claro:** contorno de pintura sobre acero; se llena de pintura y el texto pasa a tinta.
- **Línea tinta:** contorno de tinta sobre lima o papel; se llena de tinta y el texto pasa a pintura.

### Estado
- **Style:** etiqueta mono con un cuadrado delante. En producción: texto y cuadrado lima. En otro estado: cuadrado vacío y texto suave. Dentro de la franja lima el cuadrado es tinta.

### Cards / Containers
No hay tarjetas. El contenedor propio es la **placa**:
- **Corner Style:** recta.
- **Background:** acero placa, borde de regla fuerte.
- **Barra:** arriba lleva el código de la carga a la izquierda y el host a la derecha, en mono.
- **Contenido:** la captura real (16:10, anclada arriba). Si el proyecto no tiene captura, la placa muestra material real del repositorio: la lista de rutas de la API o el flujo del script.
- **Movimiento:** las placas con captura se abren como una puerta (barrido horizontal) al entrar en pantalla. La captura crece al 102.5 % al pasar el cursor por la fila.

### Navigation
- **Cabecera:** fija, acero base, regla inferior. Marca en estarcido a la izquierda. Enlaces en mono, pintura suave; en hover pasan a pintura. La sección activa lleva una barra de pintura de 3px que se despliega desde la izquierda.
- **Idioma:** `ES / EN` en mono; el idioma actual en pintura, el otro subrayado.
- **Móvil:** botón de menú de 44px. El panel baja con un barrido de `clip-path` en 300ms y lista las secciones en display grande con flecha.

### Manifiesto
La firma del sitio. Un índice con columnas Código, Carga, Contenido, Destino y Estado, cerrado arriba por una regla de pintura de 2px. Cada fila entera es un enlace a su ficha. Al enfocar o pasar el cursor por una carga, las demás bajan al 40 % de opacidad y el nombre sube a peso 900.

### Franja
Banda lima a todo lo ancho bajo el hero y bajo la cabecera de una ficha en producción. Lleva el estado y la acción principal. Si el proyecto no está en producción, la franja es acero placa con botones claros.

### Fila de contacto
Filas separadas por reglas de tinta de 2px sobre lima: etiqueta mono, valor en display grande y una flecha o el botón de copiar. Al pasar el cursor, la tinta sube desde abajo y el texto pasa a lima.

### Imagen para compartir
1200 × 630. Costillas de acero, la marca y el código en estarcido arriba, el título en display negro al centro y una franja inferior en mono: lima si el proyecto está vivo, tinta si no.

## Do's and Don'ts

### Do:
- **Do** reserva la lima para "en producción / disponible" y para la sección de Contacto.
- **Do** usa el acero corrugado como fondo de las superficies de marca (hero, Stack, cabecera de ficha).
- **Do** usa papel (`pintura`) para Sobre mí y lima para Contacto, con texto en tinta.
- **Do** anima con barridos de `clip-path` y la curva de grúa `cubic-bezier(0.3, 0, 0.1, 1)`, entre 180ms y 620ms.
- **Do** desactiva toda animación y transición con `prefers-reduced-motion: reduce`.
- **Do** muestra material real del repositorio cuando un proyecto no tiene captura.
- **Do** da a cada proyecto un código de carga construido con datos reales.

### Don't:
- **Don't** redondees esquinas ni uses botones en forma de píldora.
- **Don't** uses sombras, brillos, vidrio ni degradados de color.
- **Don't** pongas antetítulos sobre los títulos.
- **Don't** uses lima como acento decorativo, para enlaces o para hover.
- **Don't** agrupes proyectos en una rejilla de tarjetas; son filas de un manifiesto.
- **Don't** uses movimientos con rebote o resorte.
- **Don't** inventes capturas, métricas ni ilustraciones para proyectos que no las tienen.
