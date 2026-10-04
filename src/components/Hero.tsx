import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section id="home">
      <div className="relative w-full min-h-[560px] h-[85vh] bg-taupe">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/web-version.png" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mobile-version.png"
            alt="Alchemy of Scents Diwali candles"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <FadeIn className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <p className="text-[15px] tracking-[0.25em] mb-5">
            FOR MOMENTS WORTH CELEBRATING. AVAILABLE FOR BULK ORDERS.
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[0.85] mb-8 max-w-4xl uppercase">
            Light up your Diwali with Us
          </h1>
          <a
            href="#products"
            className="inline-block border border-white bg-white text-charcoal px-8 py-4 text-[11px] tracking-[0.2em] hover:bg-transparent hover:text-white transition-colors"
          >
            EXPLORE THE DIWALI COLLECTION →
          </a>
        </FadeIn>
      </div>

      <div className="border-b border-charcoal/15 px-6 md:px-10 py-5 flex flex-wrap justify-between gap-x-8 gap-y-2 text-[13px] tracking-[0.22em]">
        <span>HANDCRAFTED SCENTED CANDLES</span>
        <span>PREMIUM QUALITY WAX</span>
        <span>CUSTOM &amp; PRIVATE LABEL</span>
        <span>FASTEST TURNAROUND TIME</span>
      </div>
    </section>
  );
}
