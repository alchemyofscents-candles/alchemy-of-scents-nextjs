"use client";

import { useState } from "react";
import InstagramIcon from "./InstagramIcon";
import { WhatsAppIcon, MailIcon } from "./ContactIcons";
import FadeIn from "./FadeIn";

const INSTAGRAM_URL = "https://www.instagram.com/alchemyofscents/";
const WHATSAPP_URL = "https://wa.me/919019951550";
const GMAIL_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=alchemyofscents@gmail.com";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData();
    data.append("entry.1401833457", (form.elements.namedItem("name") as HTMLInputElement).value);
    data.append("entry.1134538966", (form.elements.namedItem("email") as HTMLInputElement).value);
    data.append("entry.26928925", (form.elements.namedItem("phone") as HTMLInputElement).value);
    data.append("entry.1858751310", (form.elements.namedItem("message") as HTMLTextAreaElement).value);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSeap87Gu425uMi9KsDfSZtxeJbR9fYlgYHlN9Yxn5JZ-G0hYw/formResponse",
      { method: "POST", mode: "no-cors", body: data }
    );

    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20">
        <FadeIn>
          <p className="text-[11px] tracking-[0.25em] text-burgundy mb-5">CONTACT US</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            Let&apos;s connect
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-9 max-w-sm">
            Looking for candles for your brand, event, business or next
            gifting experience? We&apos;d love to hear from you.
          </p>

          <div className="space-y-3 mb-8">
            <p className="font-serif text-lg text-charcoal">Alchemy of Scents</p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Alchemy of Scents"
              className="inline-flex items-center gap-2 text-charcoal hover:text-burgundy transition-colors"
            >
              <MailIcon />
              <span className="text-sm tracking-wide">alchemyofscents@gmail.com</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Alchemy of Scents on WhatsApp"
              className="inline-flex items-center gap-2 text-charcoal hover:text-burgundy transition-colors"
            >
              <WhatsAppIcon />
              <span className="text-sm tracking-wide">+91 90199 51550</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Alchemy of Scents on Instagram"
              className="inline-flex items-center gap-2 text-charcoal hover:text-burgundy transition-colors"
            >
              <InstagramIcon />
              <span className="text-sm tracking-wide">@alchemyofscents</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] bg-cream p-8 md:p-10 shadow-[0_10px_40px_rgba(42,32,26,0.08)]">
            <div>
              <label className="block text-xs tracking-[0.1em] text-charcoal/70 mb-2">
                NAME
              </label>
              <input
                required
                type="text"
                name="name"
                className="w-full border-b border-taupe-dark bg-transparent py-2.5 text-charcoal focus:outline-none focus:border-burgundy"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.1em] text-charcoal/70 mb-2">
                EMAIL
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full border-b border-taupe-dark bg-transparent py-2.5 text-charcoal focus:outline-none focus:border-burgundy"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.1em] text-charcoal/70 mb-2">
                PHONE
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full border-b border-taupe-dark bg-transparent py-2.5 text-charcoal focus:outline-none focus:border-burgundy"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.1em] text-charcoal/70 mb-2">
                MESSAGE
              </label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full border-b border-taupe-dark bg-transparent py-2.5 text-charcoal focus:outline-none focus:border-burgundy resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-block rounded-full bg-charcoal text-cream px-9 py-4 text-[11px] tracking-[0.2em] hover:bg-burgundy transition-colors"
            >
              SEND ENQUIRY
            </button>

            {submitted && (
              <p className="text-sm text-burgundy pt-2">
                Thank you — we&apos;ll get back to you shortly!
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}