import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    { href: "/servicos", label: "Serviços" },
    { href: "/metodologia", label: "Metodologia" },
    { href: "/espacos", label: "Espaços" },
    { href: "/contato", label: "Contato" },
  ];

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f0e0c]/95 backdrop-blur-md py-4 border-b border-[#c9a96e]/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <span className="cursor-pointer flex items-center gap-3 group">
            <span
              className={`font-serif text-xl tracking-[0.15em] transition-colors duration-300 ${
                scrolled || !isHome ? "text-[#c9a96e]" : "text-[#c9a96e]"
              }`}
            >
              MB
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer ${
                  location === link.href
                    ? "text-[#c9a96e]"
                    : scrolled || !isHome
                    ? "text-white/70 hover:text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <button
          className={`md:hidden transition-colors ${
            scrolled || !isHome ? "text-white" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            className="absolute top-full left-0 right-0 bg-[#0f0e0c]/98 border-b border-[#c9a96e]/15 px-8 py-8 shadow-2xl md:hidden flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-serif text-xl tracking-wide cursor-pointer transition-colors ${
                    location === link.href ? "text-[#c9a96e]" : "text-white/80 hover:text-white"
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
