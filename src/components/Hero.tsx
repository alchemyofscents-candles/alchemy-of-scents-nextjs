import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section id="home">
      <div className="relative w-full min-h-[560px] h-[85vh] bg-taupe">
        <Image
          src="/images/coconut-bulk-aesthetic.jpg"
          alt="Alchemy of Scents candle"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <FadeIn className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <p className="text-[11px] tracking-[0.25em] mb-5">
            PREMIUM CANDLES &amp; HOME FRAGRANCE
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 max-w-4xl uppercase">
            Handpoured with love
          </h1>
          <a
            href="#products"
            className="inline-block border border-white bg-white text-charcoal px-8 py-4 text-[11px] tracking-[0.2em] hover:bg-transparent hover:text-white transition-colors"
          >
            EXPLORE OUR PRODUCTS
          </a>
        </FadeIn>
      </div>

      <div className="border-b border-charcoal/15 px-6 md:px-10 py-5 flex flex-wrap justify-between gap-x-8 gap-y-2 text-[11px] tracking-[0.22em]">
        <span>HANDPOURED</span>
        <span>SMALL BATCH</span>
        <span>CUSTOM &amp; PRIVATE LABEL</span>
        <span>QUICK TURNAROUND</span>
      </div>
    </section>
  );
}
