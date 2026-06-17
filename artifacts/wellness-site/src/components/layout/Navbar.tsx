import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#A0A0A0";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
    { href: "/wellness-spaces", label: "Wellness Spaces" },
    { href: "/parcerias", label: "Parcerias" },
    { href: "/midia", label: "Mídia" },
  ];

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f0e0c]/95 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo (left) */}
        <Link href="/">
          <span className="cursor-pointer font-serif text-xl lg:text-2xl tracking-[0.15em] transition-colors duration-300" style={{ color: ACCENT }}>
            MB
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-300 cursor-pointer ${
                  location === link.href ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right slot: Contato (desktop) + menu button (mobile) */}
        <div className="flex items-center">
          <Link href="/contato">
            <span
              className={`hidden lg:inline-block text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-colors cursor-pointer ${
                location === "/contato"
                  ? "bg-white text-[#0f0e0c] border-white"
                  : "border-white/40 text-white hover:bg-white hover:text-[#0f0e0c]"
              }`}
            >
              Contato
            </span>
          </Link>

          <button
            className="lg:hidden relative z-[60] text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-50 bg-[#0f0e0c] lg:hidden"
          >
            <nav className="flex h-full w-full flex-col justify-center px-10">
              {[...navLinks, { href: "/contato", label: "Contato" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.22 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden border-b border-white/10 last:border-0"
                >
                  <Link href={link.href}>
                    <span
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-baseline gap-4 py-5 cursor-pointer"
                    >
                      <span
                        className="font-mono text-[0.65rem] tracking-[0.3em] tabular-nums transition-colors duration-300"
                        style={{ color: location === link.href ? "#fff" : ACCENT }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-serif text-4xl tracking-tight transition-all duration-300 group-hover:translate-x-2 ${
                          location === link.href ? "text-white italic" : "text-white/75 group-hover:text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-12 text-xs tracking-[0.3em] uppercase font-light"
                style={{ color: ACCENT }}
              >
                Wellness · Longevidade · Performance
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
