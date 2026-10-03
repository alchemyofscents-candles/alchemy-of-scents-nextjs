"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#products" },
  { label: "CATALOGUE", href: "#catalogue" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-charcoal/15">
      <div className="px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#home" className="text-sm md:text-base tracking-[0.1em] text-charcoal">
          ALCHEMY OF SCENTS
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.18em] text-charcoal hover:underline underline-offset-8"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-7 h-7 justify-center items-center"
        >
          <span className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-charcoal ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-charcoal/15 bg-white px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.15em] text-charcoal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
