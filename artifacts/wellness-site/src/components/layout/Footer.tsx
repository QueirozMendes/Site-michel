import { Link } from "wouter";

const ACCENT = "#A0A0A0";

export function Footer() {
  return (
    <footer className="bg-[#0a0908] text-white/60 py-16 px-6 md:px-12 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <img src="/logo-mb.png" alt="Michel Bueno" className="h-10 w-auto" />
          <p className="mt-3 text-xs tracking-[0.1em] text-white/40 uppercase">Michel Bueno · Wellness · Longevidade · Performance</p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.15em] uppercase">
          <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">Home</span></Link>
          <Link href="/sobre"><span className="hover:text-white transition-colors cursor-pointer">Sobre</span></Link>
          <Link href="/projetos"><span className="hover:text-white transition-colors cursor-pointer">Projetos</span></Link>
          <Link href="/wellness-spaces"><span className="hover:text-white transition-colors cursor-pointer">Wellness Spaces</span></Link>
          <Link href="/parcerias"><span className="hover:text-white transition-colors cursor-pointer">Parcerias</span></Link>
          <Link href="/midia"><span className="hover:text-white transition-colors cursor-pointer">Mídia</span></Link>
          <Link href="/contato"><span className="hover:text-white transition-colors cursor-pointer">Contato</span></Link>
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
