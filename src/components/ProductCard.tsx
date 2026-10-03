import Image from "next/image";

export type Product = {
  title: string;
  description: string;
  image: string;
};

export default function ProductCard({ title, description, image }: Product) {
  return (
    <div className="group flex flex-col rounded-[2rem] bg-cream p-3 shadow-[0_2px_20px_rgba(42,32,26,0.05)] hover:shadow-[0_10px_40px_rgba(42,32,26,0.12)] transition-shadow">
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-taupe mb-5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="px-3 pb-4">
        <h3 className="font-serif text-2xl text-charcoal mb-2">{title}</h3>
        <p className="text-sm text-charcoal/70 leading-relaxed mb-4">{description}</p>
        <a
          href="#contact"
          className="inline-block rounded-full border border-charcoal/30 px-5 py-2 text-[11px] tracking-[0.18em] text-charcoal group-hover:bg-charcoal group-hover:text-cream transition-colors"
        >
          ENQUIRE
        </a>
      </div>
    </div>
  );
}
