import Image from "next/image";
import FadeIn from "./FadeIn";

// Replace this with the real path once you add your PDF to public/catalogue/
const CATALOGUE_PDF = "/catalogue/Alchemy-of-Ccents-Catalogue.pdf";

export default function Catalogue() {
  return (
    <section id="catalogue" className="py-20 md:py-28 bg-taupe/40">
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <FadeIn className="max-w-xl mx-auto mb-12">
          <p className="text-xs tracking-[0.2em] text-burgundy mb-5">CATALOGUE</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            OUR CATALOGUE
          </h2>
          <p className="text-charcoal/70">
            Discover our fragrances, scent notes, and curated selection of containers.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="relative w-full max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-sm bg-cream border border-taupe-dark/50 mb-10">
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
              className="inline-block bg-charcoal text-cream px-8 py-3.5 text-xs tracking-[0.15em] hover:bg-burgundy transition-colors"
            >
              VIEW CATALOGUE
            </a>
            <a
              href={CATALOGUE_PDF}
              download
              className="inline-block border border-charcoal text-charcoal px-8 py-3.5 text-xs tracking-[0.15em] hover:bg-charcoal hover:text-cream transition-colors"
            >
              DOWNLOAD CATALOGUE
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
