import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { sitio } from "@/lib/sitio";

export const tamanoOg = { width: 1200, height: 630 };

const fuente = (archivo: string) => readFile(join(process.cwd(), "assets/fonts", archivo));

type Datos = {
  titulo: string;
  linea: string;
  codigo: string;
  /** La franja lima solo aparece en lo que está en producción o disponible. */
  vivo: boolean;
};

/** Imagen para compartir: el costado de un contenedor con el título pintado. */
export async function imagenOg({ titulo, linea, codigo, vivo }: Datos) {
  const [display, estarcido, mono] = await Promise.all([
    fuente("BigShoulders-Black.ttf"),
    fuente("BigShouldersStencil-Bold.ttf"),
    fuente("MartianMono-Medium.ttf"),
  ]);
  const talla = titulo.length > 14 ? 150 : titulo.length > 9 ? 210 : 290;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#24282b",
          color: "#efeadf",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex" }}>
          {Array.from({ length: 16 }, (_, indice) => (
            <div
              key={indice}
              style={{
                width: 75,
                height: "100%",
                display: "flex",
                backgroundColor: indice % 2 ? "#2c3134" : "#24282b",
                borderRight: "4px solid #1d2023",
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "40px 56px 0",
            fontFamily: "Estarcido",
            fontSize: 44,
            letterSpacing: 2,
          }}
        >
          <span>{sitio.marca.toUpperCase()}</span>
          <span style={{ color: "#c6c7bf" }}>{codigo}</span>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            padding: "0 52px",
            fontFamily: "Display",
            fontSize: talla,
            lineHeight: 0.85,
            textTransform: "uppercase",
          }}
        >
          {titulo}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 92,
            padding: "0 56px",
            backgroundColor: vivo ? "#d4f03c" : "#16181a",
            color: vivo ? "#16181a" : "#efeadf",
            fontFamily: "Mono",
            fontSize: 26,
            textTransform: "uppercase",
          }}
        >
          {linea}
        </div>
      </div>
    ),
    {
      ...tamanoOg,
      fonts: [
        { name: "Display", data: display, weight: 900, style: "normal" },
        { name: "Estarcido", data: estarcido, weight: 700, style: "normal" },
        { name: "Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
