import FadeIn from "./FadeIn";

const SERVICES = [
  {
    title: "WHOLESALE",
    description: "Quality candles crafted for businesses, retailers and bulk requirements.",
  },
  {
    title: "PRIVATE LABEL",
    description: "Custom candle manufacturing, created exclusively for your brand.",
  },
  {
    title: "CUSTOM BRANDING",
    description: "Bespoke candles and packaging designed to reflect your brand.",
  },
  {
    title: "CORPORATE & EVENT GIFTING",
    description:
      "Thoughtfully curated candles and gifts for celebrations, events and corporate occasions.",
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <FadeIn className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            OUR SERVICES
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80} className="text-center">
              <div className="w-10 h-px bg-burgundy mx-auto mb-5" />
              <h3 className="font-serif text-lg text-charcoal mb-2">
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
