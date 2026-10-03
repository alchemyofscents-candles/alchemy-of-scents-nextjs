import FadeIn from "./FadeIn";
import { Product } from "./ProductCard";
import ProductCarousel from "./ProductCarousel";

const PRODUCTS: Product[] = [
  {
    title: "Shot Glass Candles",
    image: "/images/smoor-bulk-closeup.jpg",
  },
  {
    title: "Black Matte Jar Candles",
    image: "/images/black-matte-jar-candle.jpg",
  },
  {
    title: "Frosted Jar Candles",
    image: "/images/frosted-jar-candle.png",
  },
  {
    title: "Geometric Pillar Candles",
    image: "/images/pillar-closeup.jpg",
  },
  {
    title: "Clear Jar Candles",
    image: "/images/jimmychoo-closeup.jpeg",
  },
  {
    title: "Mason Jar Candles",
    image: "/images/straight-sided-jar.jpg",
  },
  {
    title: "Urli Candles",
    image: "/images/urli.jpg",
  },
  {
    title: "Black Matte Straight Sided Jar Candles",
    image: "/images/black-straight-sided-jar.jpg",
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
            For special moments, gifting, celebrations, private labels & more.
          </p>
        </FadeIn>

        <FadeIn>
          <ProductCarousel products={PRODUCTS} />
        </FadeIn>
      </div>
    </section>
  );
}
