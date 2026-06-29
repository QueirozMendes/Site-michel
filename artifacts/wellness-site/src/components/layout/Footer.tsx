import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ACCENT = "#A0A0A0";

const socials = [
  { label: "Instagram · @mb_wellnessdesing", href: "https://www.instagram.com/mb_wellnessdesing", Icon: FaInstagram },
  { label: "Instagram · @michel__bueno", href: "https://www.instagram.com/michel__bueno", Icon: FaInstagram },
  { label: "LinkedIn · Michel Bueno", href: "https://www.linkedin.com/in/michel-bueno-88a96440a", Icon: FaLinkedinIn },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0908] text-white/60 py-16 px-6 md:px-12 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <img src="/logo-mb.png" alt="Michel Bueno" className="h-10 w-auto" />
          <p className="mt-3 text-xs tracking-[0.1em] text-white/40 uppercase">Michel Bueno · Wellness · Design · Longevidade · Performance</p>
          <div className="mt-5 flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="text-white/50 hover:text-white transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-left md:text-right text-xs text-white/40 tracking-widest uppercase">
          <p>Wellness · Real Estate · Hospitality</p>
          <p className="mt-1">CNPJ 32.404.305/0001-55</p>
          <p className="mt-1">São Paulo · Brasil · 2026</p>
        </div>
      </div>
    </footer>
  );
}
