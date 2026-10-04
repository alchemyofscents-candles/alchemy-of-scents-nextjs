import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn>
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-taupe">
            <Image
              src="/images/aos-setup-home.jpg"
              alt="Alchemy of Scents lifestyle"
              fill
              className="object-cover object-center scale-125"
            />
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="border-t border-charcoal pt-4 mb-8">
            <p className="text-[11px] tracking-[0.25em]">ABOUT US</p>
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1] mb-8 uppercase">
            Your brand, our craftsmanship
          </h2>
          <div className="space-y-5 text-charcoal/75 leading-relaxed max-w-md font-bold text-[15px]">
            <p>
              Alchemy of Scents began as a small self-care studio, built on a
              simple belief: fragrance can transform a space and turn ordinary
              moments into meaningful rituals.
            </p>
            <p>
              Today, we&apos;re bringing that idea of wellness to a much larger
              scale. Every candle is hand-poured by our in-house team in our own
              factory, using premium wax and fragrances. We handle production
              and manufacturing end to end, with the quickest turnaround in the
              business, and ship across India.
            </p>
            <p>
              We&apos;re grateful to have been trusted by brands like JW
              Marriott, Jimmy Choo and Titan, and we&apos;d love to create
              something for yours.
            </p>
          </div>
          <a
            href="https://wa.me/919019951550?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20bulk%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg mt-8 underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Planning an order? Get a quote in 24 hours.
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
