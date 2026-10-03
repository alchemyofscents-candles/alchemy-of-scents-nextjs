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
    <header className="sticky top-0 z-50 px-4 md:px-8 pt-4">
      <div className="max-w-content mx-auto px-6 md:px-8 flex items-center justify-between h-16 rounded-full bg-cream/85 backdrop-blur-md shadow-[0_4px_30px_rgba(42,32,26,0.08)] border border-white/60">
        <a href="#home" className="font-serif text-lg md:text-xl tracking-[0.12em] text-charcoal">
          ALCHEMY OF SCENTS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.18em] text-charcoal/80 hover:text-burgundy transition-colors"
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
        <nav className="md:hidden mt-2 rounded-3xl bg-cream shadow-lg px-6 py-6 flex flex-col gap-5">
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
