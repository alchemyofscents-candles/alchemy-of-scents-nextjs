import Image from "next/image";

export type Product = {
  title: string;
  image: string;
};

export default function ProductCard({ title, image }: Product) {
  return (
    <div className="group flex flex-col">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-taupe mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="text-lg uppercase mb-2">{title}</h3>
        <a
          href="#contact"
          className="text-[11px] tracking-[0.2em] underline underline-offset-4 hover:no-underline"
        >
          ENQUIRE
        </a>
      </div>
    </div>
  );
}
