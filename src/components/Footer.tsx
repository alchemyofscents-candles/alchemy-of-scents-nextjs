const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal py-14">
      <div className="px-6 md:px-10 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-2xl tracking-[0.05em] mb-3">ALCHEMY OF SCENTS</p>
          <p className="text-sm text-charcoal/60">
            Thoughtfully crafted candles &amp; fragrances.
          </p>
          <p className="text-xs text-charcoal/50 mt-6">
            &copy; 2026 Alchemy of Scents. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.2em] uppercase hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
