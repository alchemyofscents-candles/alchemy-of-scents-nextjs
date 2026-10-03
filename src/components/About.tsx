import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn>
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-taupe">
            <Image
              src="/images/aos-setup-home.jpg"
              alt="Alchemy of Scents lifestyle"
              fill
              className="object-cover object-center scale-125"
            />
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-[11px] tracking-[0.25em] text-burgundy mb-5">ABOUT US</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-7 leading-tight">
            Fragrance that turns <span className="italic">moments</span> into rituals
          </h2>
          <div className="space-y-5 text-charcoal/75 leading-relaxed max-w-md">
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
          <p className="font-serif text-lg md:text-xl text-charcoal mt-8 italic">
            Crafted with intention. Designed to be remembered.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
