import Image from "next/image";
import FadeIn from "./FadeIn";

const CATALOGUE_CANVA_URL = "https://canva.link/aos-catalog";
const CATALOGUE_PDF = "/catalogue/Alchemy-of-Scents-Catalogue.pdf";

export default function Catalogue() {
  return (
    <section id="catalogue" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <FadeIn className="max-w-xl mx-auto mb-12">
          <p className="text-[11px] tracking-[0.25em] mb-5">CATALOGUE</p>
          <h2 className="text-4xl md:text-6xl text-charcoal mb-4 uppercase">
            Our Catalogue
          </h2>
          <p className="text-charcoal/70">
          Select from our curated containers - Customize the fragrance, labelling and packaging for your brand.</p>
        </FadeIn>

        <FadeIn delay={120}>
          <a
            href={CATALOGUE_CANVA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Alchemy of Scents catalogue on Canva"
            className="relative block w-full max-w-md mx-auto aspect-[3/4] overflow-hidden bg-white border border-charcoal/15 mb-10"
          >
            <Image
              src="/catalogue/_AOS Catalog - With Pricing.png"
              alt="Alchemy of Scents catalogue cover"
              fill
              className="object-cover"
            />
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CATALOGUE_CANVA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-charcoal bg-charcoal text-white px-9 py-4 text-[11px] tracking-[0.2em] hover:bg-white hover:text-charcoal transition-colors"
            >
              VIEW CATALOGUE
            </a>
            <a
              href={CATALOGUE_PDF}
              download
              className="inline-block border border-charcoal text-charcoal px-9 py-4 text-[11px] tracking-[0.2em] hover:bg-charcoal hover:text-cream transition-colors"
            >
              DOWNLOAD CATALOGUE
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
