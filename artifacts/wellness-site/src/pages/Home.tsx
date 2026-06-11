import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const ACCENT = "#A0A0A0";

const atuacao = [
  {
    num: "01",
    title: "Projetos de Espaços Wellness",
    desc: "Desenvolvimento de academias, studios, áreas de recovery e espaços fitness para empreendimentos imobiliários, hotéis, residências e marcas.",
  },
  {
    num: "02",
    title: "Consultoria para Empreendimentos",
    desc: "Estratégia para criar espaços que aumentam percepção de valor, desejo de compra e diferenciação no mercado imobiliário.",
  },
  {
    num: "03",
    title: "Experiências Wellness",
    desc: "Criação de ativações, eventos e experiências que conectam movimento, bem-estar, comunidade e lifestyle.",
  },
  {
    num: "04",
    title: "Performance & Longevidade",
    desc: "Método de treinamento voltado para força, mobilidade, saúde, estética, longevidade e alta performance.",
  },
];

const projetos = [
  { img: "/portfolio-1.png", name: "Six Wellness Itaim", desc: "Projeto de espaço wellness com foco em treinamento, experiência e lifestyle urbano." },
  { img: "/portfolio-2.png", name: "Six Wellness Vila Nova", desc: "Ambiente fitness desenvolvido para entregar funcionalidade, estética e experiência premium." },
  { img: "/portfolio-3.png", name: "Six Wellness Campinas", desc: "Estruturação de espaço wellness para um público que busca saúde, performance e conforto." },
  { img: "/portfolio-4.png", name: "Rosewood", desc: "Atuação em projeto e experiência wellness dentro de um dos nomes mais relevantes da hospitalidade de luxo." },
];

const partners = ["Technogym", "Tryex", "Mitre", "Mentore Bank"];

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85 z-10" />
          <img
            src="/hero-michel.jpg"
            alt="Michel Bueno"
            className="w-full h-full object-cover object-top scale-[1.03] transition-transform duration-[25s] hover:scale-100"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <FadeIn delay={0.2}>
            <p className="text-white/70 tracking-[0.35em] uppercase text-[11px] md:text-xs mb-8 font-light">
              Michel Bueno · Wellness · Longevidade · Performance
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.08] max-w-4xl">
              Wellness, performance e longevidade<br />
              <span style={{ color: ACCENT }} className="italic font-light">para espaços e pessoas de alto padrão.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="mt-8 max-w-xl text-white/85 font-light text-base md:text-lg leading-relaxed">
              Michel Bueno desenvolve projetos, experiências e estratégias de wellness para empreendimentos imobiliários, hotéis, marcas e clientes que buscam elevar saúde, performance e lifestyle a um novo nível.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="flex flex-wrap items-center gap-5 mt-12">
              <Link href="/projetos">
                <span className="inline-flex items-center justify-center bg-white text-[#0f0e0c] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/90 transition-all cursor-pointer">
                  Conheça os projetos
                </span>
              </Link>
              <Link href="/contato">
                <span className="inline-flex items-center justify-center border border-white/70 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-all cursor-pointer">
                  Solicitar contato
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Autoridade */}
      <section className="py-36 px-6 md:px-12 bg-[#0f0e0c]">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-8 font-light" style={{ color: ACCENT }}>— Posicionamento</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Um novo olhar para wellness,<br />
              <span className="italic font-light" style={{ color: ACCENT }}>fitness e longevidade.</span>
            </h2>
            <div className="mt-12 space-y-6 text-white/80 font-light text-lg leading-relaxed max-w-3xl">
              <p>
                Com uma trajetória construída entre performance física, treinamento de alto padrão e projetos de wellness, Michel Bueno atua na criação de ambientes, experiências e soluções que unem saúde, estética, funcionalidade e valorização imobiliária.
              </p>
              <p>
                Seu trabalho conecta treinamento, arquitetura, comportamento, equipamentos, operação e experiência do usuário, transformando espaços fitness em verdadeiros ativos de valor para marcas, empreendimentos e clientes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section className="py-24 px-6 md:px-12 bg-[#0f0e0c]">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Áreas de atuação</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-16">
              O que <span className="italic font-light" style={{ color: ACCENT }}>desenvolvo</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-white/10 bg-white/10">
            {atuacao.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#0f0e0c] p-10 md:p-12 h-full hover:bg-[#161410] transition-colors duration-300 group">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-8 h-px mt-3" style={{ background: ACCENT }} />
                    <span className="font-serif text-5xl font-light text-white/10 leading-none select-none group-hover:text-white/15 transition-colors">{item.num}</span>
                  </div>
                  <h3 className="font-serif text-white text-2xl mb-4">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="py-24 px-6 md:px-12 bg-[#0f0e0c]">
        <div className="container mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Projetos realizados</p>
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                  Espaços que <span className="italic font-light" style={{ color: ACCENT }}>movimentam valor</span>
                </h2>
              </div>
              <Link href="/projetos">
                <span className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/80 hover:text-white border-b border-white/30 pb-1 cursor-pointer transition-colors whitespace-nowrap">
                  Ver todos <ArrowRight size={12} />
                </span>
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projetos.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href="/projetos">
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden mb-5">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%]" />
                    </div>
                    <h3 className="font-serif text-white text-2xl mb-2">{p.name}</h3>
                    <p className="text-white/65 text-sm leading-relaxed font-light max-w-md">{p.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Parcerias */}
      <section className="py-28 px-6 md:px-12 bg-[#0f0e0c] border-t border-white/10">
        <div className="container mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-12 font-light" style={{ color: ACCENT }}>— Parceiros e marcas conectadas ao ecossistema Michel Bueno</p>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 mb-12">
              {partners.map((p) => (
                <span key={p} className="font-serif text-2xl md:text-3xl text-white/55 tracking-wide hover:text-white/80 transition-colors">{p}</span>
              ))}
            </div>
            <p className="text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              Michel Bueno desenvolve projetos e experiências em colaboração com marcas que compartilham a mesma visão de excelência, inovação, saúde e alto padrão.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mídia */}
      <section className="py-28 px-6 md:px-12 bg-[#0f0e0c]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Michel na mídia</p>
            <h2 className="font-serif text-white text-4xl md:text-5xl leading-tight mb-6">Jetsetter News</h2>
            <p className="text-white/75 font-light leading-relaxed mb-8 max-w-lg">
              Michel Bueno assina conteúdos e participa de conversas sobre wellness, longevidade, performance e estilo de vida, levando sua visão para uma audiência conectada a saúde, comportamento e alta performance.
            </p>
            <Link href="/midia">
              <span className="inline-flex items-center gap-3 border text-xs tracking-[0.2em] uppercase px-10 py-4 hover:opacity-70 transition-all cursor-pointer" style={{ borderColor: ACCENT, color: "#ffffff" }}>
                Ver publicações <ArrowRight size={12} />
              </span>
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <div className="aspect-[4/3] overflow-hidden">
              <img src="/midia-michel.jpg" alt="Michel na mídia" className="w-full h-full object-cover object-top grayscale-[15%]" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contato CTA */}
      <section className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#0f0e0c]">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Vamos desenvolver o próximo<br />
              <span className="italic font-light" style={{ color: ACCENT }}>projeto wellness?</span>
            </h2>
            <p className="mt-8 text-white/75 font-light leading-relaxed max-w-xl mx-auto">
              Para projetos, parcerias, imprensa ou convites institucionais, entre em contato com a equipe Michel Bueno.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <Link href="/contato">
                <span className="inline-flex items-center justify-center bg-white text-[#0f0e0c] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-white/90 transition-all cursor-pointer">
                  Entrar em contato
                </span>
              </Link>
              <a href="https://instagram.com/michel_bueno" target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center justify-center border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-white/10 transition-all cursor-pointer">
                  Instagram
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
