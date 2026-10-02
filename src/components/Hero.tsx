import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section id="home" className="pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <FadeIn className="order-2 md:order-1">
          <p className="text-xs tracking-[0.2em] text-burgundy mb-5">
            PREMIUM CANDLES &amp; HOME FRAGRANCE
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-charcoal mb-6">
            HANDPOURED WITH LOVE
          </h1>
          <p className="font-serif text-xl md:text-2xl text-charcoal/80 mb-6">
            Thoughtfully handcrafted candles for everyday rituals and special occasions.
          </p>
          <a
            href="#products"
            className="inline-block border border-charcoal px-8 py-3.5 text-xs tracking-[0.15em] text-charcoal hover:bg-charcoal hover:text-cream transition-colors"
          >
            EXPLORE OUR PRODUCTS
          </a>
        </FadeIn>

        <FadeIn delay={150} className="order-1 md:order-2">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-taupe">
            {/* Replace with a real brand/product photo in public/images */}
            <Image
              src="/images/coconut-bulk-aesthetic.jpg"
              alt="Alchemy of Scents candle"
              fill
              className="object-cover object-top scale-110"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
