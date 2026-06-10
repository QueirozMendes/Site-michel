import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const GOLD = "#A0A0A0";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative h-screen flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
          <img
            src="/hero.png"
            alt="Luxury wellness space"
            className="w-full h-full object-cover scale-[1.03] transition-transform duration-[25s] hover:scale-100"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <FadeIn delay={0.2}>
            <p className="text-white/70 tracking-[0.4em] uppercase text-xs mb-8 font-light">
              Luxury Wellness Design · São Paulo
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-none">
              Michel <span style={{ color: GOLD }} className="italic font-light">Bueno</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.55}>
            <p className="mt-4 tracking-[0.25em] uppercase text-xs font-light" style={{ color: GOLD }}>
              Wellness Design
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <p className="mt-8 max-w-lg text-white/85 font-light text-lg leading-relaxed italic">
              Projetando ecossistemas de wellness, performance<br />
              e longevidade para empreendimentos de alto padrão.
            </p>
          </FadeIn>
          <FadeIn delay={0.85}>
            <div className="flex items-center gap-5 mt-12">
              <Link href="/contato">
                <span className="inline-flex items-center justify-center bg-white text-[#0f0e0c] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/90 transition-all cursor-pointer">
                  Falar Comigo
                </span>
              </Link>
              <Link href="/servicos">
                <span className="inline-flex items-center justify-center border border-white/70 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-all cursor-pointer">
                  Ver Serviços
                </span>
              </Link>
            </div>
          </FadeIn>
          <div className="mt-20 flex flex-col items-start gap-1">
            <div className="w-px h-12 bg-white/20 mx-0" />
            <p className="text-white/55 text-xs tracking-[0.3em] uppercase">Explorar</p>
          </div>
        </div>
      </section>

      {/* Filosofia Statement */}
      <section className="py-36 px-6 md:px-12 bg-[#0f0e0c]">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-12" style={{ background: GOLD }} />
              <span className="text-xs tracking-[0.4em] uppercase font-light" style={{ color: GOLD }}>Filosofia</span>
              <div className="h-px w-12" style={{ background: GOLD }} />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-snug">
              Não vendemos máquinas.<br />
              <span className="italic" style={{ color: GOLD }}>Desenhamos experiências.</span><br />
              Criamos ecossistemas de wellness<br />
              que se tornam ativos de valor.
            </h2>
            <p className="mt-12 text-xs tracking-[0.3em] text-white/50 uppercase">Michel Bueno Wellness Design · São Paulo · 2025</p>
          </FadeIn>
        </div>
      </section>

      {/* Visual grid */}
      <section className="px-6 md:px-12 pb-0 bg-[#0f0e0c]">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
          {["/portfolio-1.png", "/portfolio-2.png", "/portfolio-3.png", "/portfolio-4.png"].map((src, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="aspect-[3/4] overflow-hidden group">
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%]" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section className="py-36 px-6 md:px-12 bg-[#0f0e0c]">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-4 font-light" style={{ color: GOLD }}>— Para quem projeto</p>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-4">
              Empreendimentos
            </h2>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-16" style={{ color: GOLD }}>
              <span className="italic font-light">de alto padrão</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <FadeIn delay={0.2}>
              <blockquote className="text-white/70 font-serif text-2xl italic leading-relaxed border-l-2 pl-8" style={{ borderColor: GOLD }}>
                "A academia deixa de ser um custo de condomínio e passa a ser uma ferramenta de valorização imobiliária."
              </blockquote>
              <div className="mt-12 flex flex-wrap gap-3">
                {["Incorporadoras","Construtoras","Hotéis 5 Estrelas","Resorts","Branded Residences","Condomínios de Luxo","Wellness Clubs","Retrofit Premium","Fundos Imobiliários","Projetos de Lifestyle"].map((tag) => (
                  <span key={tag} className="border border-white/25 text-white/65 text-xs tracking-[0.15em] uppercase px-3 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <ul className="space-y-6">
                {[
                  "Gera valor imobiliário percebido",
                  "Aumenta retenção de moradores e hóspedes",
                  "Diferencia o empreendimento no mercado",
                  "Cria lifestyle branding consistente",
                  "Eleva o ticket e a percepção de luxo",
                  "Atrai o perfil de público premium",
                  "Transforma academia em ativo de venda",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-0">
                    <div className="w-6 h-px mt-3 flex-shrink-0" style={{ background: GOLD }} />
                    <span className="text-white/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 px-6 md:px-12 border-t border-white/8 bg-[#0f0e0c]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h3 className="text-3xl md:text-4xl font-serif text-white">
              Vamos <span className="italic" style={{ color: GOLD }}>conversar</span>
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contato">
              <span className="inline-flex items-center gap-3 border text-xs tracking-[0.2em] uppercase px-10 py-4 hover:opacity-70 transition-all cursor-pointer" style={{ borderColor: GOLD, color: GOLD }}>
                Solicitar Proposta <ArrowRight size={12} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
