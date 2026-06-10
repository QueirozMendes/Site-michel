import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0a0908] text-white/60 py-16 px-6 md:px-12 border-t border-[#c9a96e]/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <span className="font-serif text-[#c9a96e] text-lg tracking-[0.15em]">MB</span>
          <p className="mt-2 text-xs tracking-[0.1em] text-white/30 uppercase">Michel Bueno Wellness Design</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 text-xs tracking-[0.15em] uppercase">
          <Link href="/sobre"><span className="hover:text-[#c9a96e] transition-colors cursor-pointer">Sobre</span></Link>
          <Link href="/servicos"><span className="hover:text-[#c9a96e] transition-colors cursor-pointer">Serviços</span></Link>
          <Link href="/metodologia"><span className="hover:text-[#c9a96e] transition-colors cursor-pointer">Metodologia</span></Link>
          <Link href="/espacos"><span className="hover:text-[#c9a96e] transition-colors cursor-pointer">Espaços</span></Link>
          <Link href="/contato"><span className="hover:text-[#c9a96e] transition-colors cursor-pointer">Contato</span></Link>
        </div>

        <div className="text-right text-xs text-white/30 tracking-widest uppercase">
          <p>Luxury Real Estate & Hospitality</p>
          <p className="mt-1">São Paulo · Brasil · 2025</p>
        </div>
      </div>
    </footer>
  );
}
