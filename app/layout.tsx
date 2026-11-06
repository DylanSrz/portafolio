import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Encabezado from "@/components/Encabezado";
import Pie from "@/components/Pie";
import "./globals.css";

const titulo = Bricolage_Grotesque({ subsets: ["latin"], variable: "--fuente-titulo" });
const texto = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--fuente-texto",
});
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--fuente-mono" });

export const metadata: Metadata = {
  title: "Dylan Suarez · Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack con enfoque en backend, en Barranquilla, Colombia. Proyectos, stack y contacto.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${titulo.variable} ${texto.variable} ${mono.variable}`}>
      <body className="min-h-dvh antialiased">
        <Encabezado />
        {children}
        <Pie />
      </body>
    </html>
  );
}
