"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#products" },
  { label: "CATALOGUE", href: "#catalogue" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-taupe-dark/40">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#home" className="font-serif text-xl md:text-2xl tracking-wide text-charcoal">
          ALCHEMY OF SCENTS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.15em] text-charcoal/80 hover:text-burgundy transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-7 h-7 justify-center items-center"
        >
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${
              open ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span className={`block h-px w-6 bg-charcoal ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${
              open ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="md:hidden border-t border-taupe-dark/40 bg-cream px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.15em] text-charcoal/80"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
