import InstagramIcon from "./InstagramIcon";
import { WhatsAppIcon, MailIcon } from "./ContactIcons";
import FadeIn from "./FadeIn";

const INSTAGRAM_URL = "https://www.instagram.com/alchemyofscents/";
const WHATSAPP_URL = "https://wa.me/919019951550";
const GMAIL_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=alchemyofscents@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <FadeIn>
          <p className="text-[11px] tracking-[0.25em] mb-5">CONTACT US</p>
          <h2 className="text-4xl md:text-6xl text-charcoal mb-6 uppercase">
            GET IN TOUCH
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-9 max-w-sm mx-auto">
            Looking for candles for your brand, event, business or next
            gifting experience? We&apos;d love to hear from you.
          </p>

          <div className="space-y-3 mb-8">
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Alchemy of Scents"
              className="inline-flex items-center gap-2.5 text-charcoal hover:underline transition-colors"
            >
              <MailIcon className="w-5 h-5" />
              <span className="text-sm tracking-wide">alchemyofscents@gmail.com</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Alchemy of Scents on WhatsApp"
              className="inline-flex items-center gap-2.5 text-charcoal hover:underline transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="text-sm tracking-wide">+91 90199 51550</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Alchemy of Scents on Instagram"
              className="inline-flex items-center gap-2.5 text-charcoal hover:underline transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="text-sm tracking-wide">@alchemyofscents</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}