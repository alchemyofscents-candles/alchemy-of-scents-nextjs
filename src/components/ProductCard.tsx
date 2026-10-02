import Image from "next/image";

export type Product = {
  title: string;
  description: string;
  image: string;
};

export default function ProductCard({ title, description, image }: Product) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-taupe mb-5">
        {/* Replace `image` in Products.tsx with your own product photo */}
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="font-serif text-xl text-charcoal mb-2">{title}</h3>
      <p className="text-sm text-charcoal/70 leading-relaxed">{description}</p>
    </div>
  );
}
