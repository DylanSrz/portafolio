import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders, Big_Shoulders_Stencil, Martian_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Encabezado from "@/components/Encabezado";
import Pie from "@/components/Pie";
import { diccionario } from "@/lib/diccionarios";
import { esIdioma, etiquetaOg, idiomas, ruta } from "@/lib/i18n";
import { sitio } from "@/lib/sitio";
import "../globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--fuente-display",
  adjustFontFallback: false,
});
const estarcido = Big_Shoulders_Stencil({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--fuente-estarcido",
  adjustFontFallback: false,
});
const texto = Archivo({ subsets: ["latin"], variable: "--fuente-texto" });
const mono = Martian_Mono({ subsets: ["latin"], variable: "--fuente-mono" });

export function generateStaticParams() {
  return idiomas.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#16181a", colorScheme: "dark" };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!esIdioma(lang)) return {};
  const t = diccionario(lang);
  return {
    metadataBase: new URL(sitio.url),
    title: { default: t.meta.titulo, template: t.meta.plantilla },
    description: t.meta.descripcion,
    applicationName: sitio.marca,
    authors: [{ name: sitio.nombre, url: sitio.url }],
    creator: sitio.nombre,
    alternates: {
      canonical: ruta(lang),
      languages: { es: ruta("es"), en: ruta("en"), "x-default": ruta("es") },
    },
    openGraph: {
      type: "website",
      siteName: sitio.marca,
      title: t.meta.titulo,
      description: t.meta.descripcion,
      url: ruta(lang),
      locale: etiquetaOg[lang],
      alternateLocale: idiomas.filter((otro) => otro !== lang).map((otro) => etiquetaOg[otro]),
    },
    twitter: { card: "summary_large_image", title: t.meta.titulo, description: t.meta.descripcion },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const t = diccionario(lang);

  return (
    <html
      lang={lang}
      className={`${display.variable} ${estarcido.variable} ${texto.variable} ${mono.variable}`}
    >
      <body id="arriba" className="min-h-dvh antialiased">
        <a
          href="#contenido"
          className="boton boton--tinta fixed left-3 top-3 z-[60] -translate-y-24 focus-visible:translate-y-0"
        >
          <span>{t.nav.saltar}</span>
        </a>
        <Encabezado idioma={lang} textos={t.nav} />
        <main id="contenido">{children}</main>
        <Pie idioma={lang} t={t} />
      </body>
    </html>
  );
}
