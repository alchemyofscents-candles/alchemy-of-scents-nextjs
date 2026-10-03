import InstagramIcon from "./InstagramIcon";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream rounded-t-[2rem] md:rounded-t-[3rem] mt-10 py-16">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col items-center text-center gap-6">
        <p className="font-serif text-3xl tracking-[0.12em]">ALCHEMY OF SCENTS</p>
        <p className="text-sm text-cream/60">
          Thoughtfully crafted candles &amp; fragrances.
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.18em] uppercase text-cream/70 hover:text-cream transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://www.instagram.com/alchemyofscents/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Alchemy of Scents on Instagram"
          className="text-cream/70 hover:text-cream transition-colors"
        >
          <InstagramIcon />
        </a>

        <p className="text-xs text-cream/40 pt-4">
          &copy; 2026 Alchemy of Scents. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
