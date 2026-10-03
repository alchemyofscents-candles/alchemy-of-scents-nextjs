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
    <section className="py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <FadeIn className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl text-charcoal uppercase">
            Our services
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-charcoal/15">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80} className="border-r border-b border-charcoal/15 p-8 min-h-[260px] flex flex-col justify-between">
              <p className="text-[11px] tracking-[0.25em] mb-10">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-xl uppercase mb-2">
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
