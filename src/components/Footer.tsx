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
    <footer className="border-t border-taupe-dark/40 py-14">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col items-center text-center gap-6">
        <p className="font-serif text-xl text-charcoal">ALCHEMY OF SCENTS</p>
        <p className="text-sm text-charcoal/60">
          Thoughtfully crafted candles &amp; fragrances.
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.1em] text-charcoal/70 hover:text-burgundy transition-colors"
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
          className="text-charcoal/70 hover:text-burgundy transition-colors"
        >
          <InstagramIcon />
        </a>

        <p className="text-xs text-charcoal/50 pt-4">
          &copy; 2026 Alchemy of Scents. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
