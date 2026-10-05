import Image from "next/image";
import FadeIn from "./FadeIn";

export default function DiwaliDecor() {
  return (
    <section className="pt-20 md:pt-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <FadeIn>
          <div className="relative w-full max-w-xl mx-auto aspect-[3/4] overflow-hidden bg-taupe">
            <Image
              src="/images/diwali-decor.jpg"
              alt="Alchemy of Scents Diwali decor"
              fill
              sizes="(min-width: 768px) 576px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
