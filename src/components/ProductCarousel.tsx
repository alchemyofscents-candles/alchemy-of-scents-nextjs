"use client";

import { useRef } from "react";
import ProductCard, { Product } from "./ProductCard";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : node.clientWidth * 0.8;
    node.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const arrowClass =
    "hidden md:flex absolute top-[35%] -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full border border-charcoal/30 bg-white text-charcoal hover:bg-charcoal hover:text-white transition-colors";

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous products"
        onClick={() => scrollByCard(-1)}
        className={`${arrowClass} -left-5`}
      >
        ‹
      </button>
      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <div
            key={product.title}
            className="snap-start shrink-0 basis-[80%] sm:basis-[calc(50%-8px)] lg:basis-[calc(33.333%-11px)]"
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Next products"
        onClick={() => scrollByCard(1)}
        className={`${arrowClass} -right-5`}
      >
        ›
      </button>
    </div>
  );
}
