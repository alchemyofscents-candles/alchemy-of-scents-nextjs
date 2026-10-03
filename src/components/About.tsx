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
          <h2 className="text-4xl md:text-6xl leading-[1] mb-8 uppercase">
            Fragrance turns moments into rituals
          </h2>
          <div className="space-y-5 text-charcoal/75 leading-relaxed max-w-md font-bold text-[15px]">
            <p>
              Alchemy of Scents was created with a simple belief — fragrance
              has the power to transform a space and turn ordinary moments
              into meaningful rituals.
            </p>
            <p>
              We create thoughtfully handpoured candles
              with a focus on quality, quick turnaround time and customer satisfaction.
            </p>
            <p>
              From everyday candles to customisations and gifting, we bring
              together fragrance, craftsmanship and thoughtful design.
            </p>
          </div>
          <p className="text-lg mt-8">
            Crafted with intention. Designed to be remembered.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
