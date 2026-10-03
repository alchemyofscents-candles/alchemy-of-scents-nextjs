import FadeIn from "./FadeIn";
import { Product } from "./ProductCard";
import ProductCarousel from "./ProductCarousel";

const PRODUCTS: Product[] = [
  {
    title: "Glass Jar Candles",
    description:
      "Classic scented candles designed to complement every space.",
    image: "/images/smoor-bulk-closeup.jpg",
  },
  {
    title: "Black Matte Jar Candles",
    description:
      "Bold, contemporary candles that bring a refined touch to any space.",
    image: "/images/IMG_1198.jpg",
  },
  {
    title: "Frosted Jar Candles",
    description:
      "Soft, understated candles crafted to create a calm and elegant ambience.",
    image: "/images/frosted-jar-candle.png",
  },
  {
    title: "Geometric Pillar Candles",
    description:
      "Sculptural candles that add character and style to any setting.",
    image: "/images/pillar-closeup.jpg",
  },
  {
    title: "Custom Candles",
    description:
      "Custom-designed candles created for brands, events and special occasions.",
    image: "/images/jimmychoo-closeup.jpeg",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-taupe">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <FadeIn className="text-center max-w-xl mx-auto mb-14 md:mb-16">
          <p className="text-[11px] tracking-[0.25em] mb-5">PRODUCTS</p>
          <h2 className="text-4xl md:text-6xl text-charcoal mb-4 uppercase">
            Our Products
          </h2>
          <p className="text-charcoal/70 text-[15px]">
            For personal spaces, businesses, celebrations and everything in between.
          </p>
        </FadeIn>

        <FadeIn>
          <ProductCarousel products={PRODUCTS} />
        </FadeIn>
      </div>
    </section>
  );
}
