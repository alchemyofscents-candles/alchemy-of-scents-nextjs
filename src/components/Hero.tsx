import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section id="home" className="-mt-20 px-4 md:px-8 pb-6">
      <div className="relative max-w-[1400px] mx-auto min-h-[640px] h-[88vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-taupe">
        <Image
          src="/images/coconut-bulk-aesthetic.jpg"
          alt="Alchemy of Scents candle"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/25 to-charcoal/10" />

        <FadeIn className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-cream">
          <p className="text-[11px] tracking-[0.25em] mb-5 text-cream/80">
            PREMIUM CANDLES &amp; HOME FRAGRANCE
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 max-w-3xl">
            Handpoured
            <br />
            <span className="italic">with love</span>
          </h1>
          <p className="font-serif text-lg md:text-2xl text-cream/90 mb-8 max-w-xl">
            Thoughtfully handcrafted candles for everyday rituals and special occasions.
          </p>
          <a
            href="#products"
            className="inline-block rounded-full bg-cream text-charcoal px-9 py-4 text-[11px] tracking-[0.2em] hover:bg-burgundy hover:text-cream transition-colors"
          >
            EXPLORE OUR PRODUCTS
          </a>
        </FadeIn>
      </div>

      {/* Marquee-style value strip */}
      <div className="max-w-[1400px] mx-auto mt-6 rounded-full bg-charcoal text-cream/90 py-4 px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-[11px] tracking-[0.22em]">
        <span>HANDPOURED</span>
        <span className="text-burgundy">✦</span>
        <span>SMALL BATCH</span>
        <span className="text-burgundy">✦</span>
        <span>CUSTOM &amp; PRIVATE LABEL</span>
        <span className="text-burgundy">✦</span>
        <span>QUICK TURNAROUND</span>
      </div>
    </section>
  );
}
