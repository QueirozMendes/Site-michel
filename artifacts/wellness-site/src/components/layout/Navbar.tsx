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
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <span className="cursor-pointer flex items-center gap-3 group">
            <span className="font-serif text-xl tracking-[0.15em] transition-colors duration-300" style={{ color: ACCENT }}>
              MB
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer ${
                  location === link.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contato">
            <span
              className={`text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-colors cursor-pointer ${
                location === "/contato"
                  ? "bg-white text-[#0f0e0c] border-white"
                  : "border-white/40 text-white hover:bg-white hover:text-[#0f0e0c]"
              }`}
            >
              Contato
            </span>
          </Link>
        </nav>

        <button
          className="lg:hidden text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} strokeWidth={1} /> : <Menu size={22} strokeWidth={1} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#0f0e0c]/98 border-b border-white/15 px-8 py-8 shadow-2xl lg:hidden flex flex-col space-y-6"
          >
            {[...navLinks, { href: "/contato", label: "Contato" }].map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-serif text-xl tracking-wide cursor-pointer transition-colors ${
                    location === link.href ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
