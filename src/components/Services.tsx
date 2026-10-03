import FadeIn from "./FadeIn";

const SERVICES = [
  {
    title: "Wholesale",
    description: "Quality candles crafted for businesses, retailers and bulk requirements.",
  },
  {
    title: "Private Label",
    description: "Custom candle manufacturing, created exclusively for your brand.",
  },
  {
    title: "Custom Branding",
    description: "Bespoke candles and packaging designed to reflect your brand.",
  },
  {
    title: "Corporate & Event Gifting",
    description:
      "Thoughtfully curated candles and gifts for celebrations, events and corporate occasions.",
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <FadeIn className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            Our services
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80} className="text-center rounded-[2rem] bg-taupe/60 px-6 py-10">
              <div className="w-10 h-10 rounded-full bg-burgundy/15 text-burgundy mx-auto mb-5 flex items-center justify-center text-sm">✦</div>
              <h3 className="font-serif text-xl text-charcoal mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
