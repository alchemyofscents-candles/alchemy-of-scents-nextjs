import Image from "next/image";
import FadeIn from "./FadeIn";

// Replace this with the real path once you add your PDF to public/catalogue/
const CATALOGUE_PDF = "/catalogue/Alchemy-of-Ccents-Catalogue.pdf";

export default function Catalogue() {
  return (
    <section id="catalogue" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <FadeIn className="max-w-xl mx-auto mb-12">
          <p className="text-[11px] tracking-[0.25em] text-burgundy mb-5">CATALOGUE</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Our catalogue
          </h2>
          <p className="text-charcoal/70">
            Discover our fragrances, scent notes, and curated selection of containers.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="relative w-full max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-[2rem] bg-cream shadow-[0_10px_40px_rgba(42,32,26,0.12)] mb-10">
            {/* Replace with a cover image of your actual catalogue */}
            <Image
              src="/catalogue/_AOS Catalog - With Pricing.png"
              alt="Alchemy of Scents catalogue cover"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CATALOGUE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-charcoal text-cream px-9 py-4 text-[11px] tracking-[0.2em] hover:bg-burgundy transition-colors"
            >
              VIEW CATALOGUE
            </a>
            <a
              href={CATALOGUE_PDF}
              download
              className="inline-block rounded-full border border-charcoal text-charcoal px-9 py-4 text-[11px] tracking-[0.2em] hover:bg-charcoal hover:text-cream transition-colors"
            >
              DOWNLOAD CATALOGUE
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
