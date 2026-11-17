import { notFound } from "next/navigation";
import Contacto from "@/components/Contacto";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Proyectos from "@/components/Proyectos";
import SobreMi from "@/components/SobreMi";
import Stack from "@/components/Stack";
import { diccionario } from "@/lib/diccionarios";
import { esIdioma, ruta } from "@/lib/i18n";
import { proyectos } from "@/lib/proyectos";
import { sitio } from "@/lib/sitio";
import { stack } from "@/lib/stack";

export default async function Inicio({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const t = diccionario(lang);
  const lista = proyectos(lang);

  return (
    <>
      <JsonLd
        datos={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${sitio.url}/#persona`,
              name: sitio.nombre,
              alternateName: sitio.marca,
              jobTitle: t.hero.rol,
              description: t.meta.descripcion,
              url: sitio.url,
              email: `mailto:${sitio.correo}`,
              address: { "@type": "PostalAddress", addressLocality: sitio.ciudad, addressCountry: "CO" },
              sameAs: [sitio.linkedin, sitio.github],
              knowsAbout: stack.flatMap((grupo) => grupo.items.map((item) => item.nombre)),
              knowsLanguage: ["es", "en"],
            },
            {
              "@type": "WebSite",
              "@id": `${sitio.url}/#sitio`,
              name: sitio.marca,
              url: sitio.url + ruta(lang),
              inLanguage: lang,
              author: { "@id": `${sitio.url}/#persona` },
            },
          ],
        }}
      />
      <Hero textos={t.hero} />
      <Proyectos idioma={lang} lista={lista} t={t} />
      <SobreMi textos={t.sobreMi} />
      <Stack idioma={lang} textos={t.stack} lista={lista} />
      <Contacto textos={t.contacto} />
    </>
  );
}
