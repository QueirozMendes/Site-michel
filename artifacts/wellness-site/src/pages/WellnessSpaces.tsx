import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const ACCENT = "#A0A0A0";

const servicos = [
  { num: "01", title: "Conceito e posicionamento do espaço", desc: "Definição do propósito, público, linguagem estética e experiência desejada." },
  { num: "02", title: "Curadoria de equipamentos", desc: "Seleção estratégica de equipamentos, marcas e soluções alinhadas ao perfil do projeto." },
  { num: "03", title: "Layout funcional", desc: "Planejamento da disposição dos equipamentos, fluxo de circulação e aproveitamento inteligente da área." },
  { num: "04", title: "Experiência do usuário", desc: "Criação de uma jornada sensorial, estética e funcional para quem utiliza o espaço." },
  { num: "05", title: "Áreas de recovery e longevidade", desc: "Estruturação de soluções como sauna, crioterapia, mobilidade, respiração, alongamento, recovery e bem-estar." },
  { num: "06", title: "Valorização imobiliária", desc: "Desenvolvimento de espaços que aumentam o valor percebido do empreendimento e fortalecem o poder de decisão do comprador." },
];

const paraQuem = [
  "Empreendimentos residenciais de alto padrão",
  "Hotéis e resorts",
  "Incorporadoras",
  "Condomínios premium",
  "Clubes privados",
  "Studios boutique",
  "Marcas de wellness",
  "Residências privadas",
];

export default function WellnessSpaces() {
  return (
    <PageWrapper>
      <div className="pt-28 pb-14 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
              <div className="md:col-span-7 flex flex-col justify-center">
                <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Wellness Spaces</p>
                <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                  Projetista de espaços wellness<br />
                  <span className="italic font-light" style={{ color: ACCENT }}>para empreendimentos</span>
                </h1>
                <p className="mt-8 max-w-2xl text-white/75 font-light leading-relaxed">
                  Transformando áreas fitness em ativos de valor para empreendimentos imobiliários, hotéis, residenciais e marcas.
                </p>
                <div className="mt-10 space-y-6 text-white/80 font-light text-lg leading-relaxed">
                  <p>
                    O wellness deixou de ser apenas uma amenidade. Hoje, espaços fitness, áreas de recovery, studios de movimento e ambientes dedicados à longevidade influenciam diretamente a percepção de valor, o desejo de compra e a experiência do usuário dentro de um empreendimento.
                  </p>
                  <p>
                    Michel Bueno atua como projetista e consultor na criação de espaços wellness que unem estética, funcionalidade, operação e posicionamento premium.
                  </p>
                  <p>
                    Seu trabalho considera não apenas os equipamentos, mas toda a jornada do usuário: circulação, layout, iluminação, materiais, experiência sensorial, tipo de treino, público-alvo, operação, manutenção e potencial de diferenciação comercial.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="h-full min-h-[420px] overflow-hidden">
                  <img src="/service-2.jpg" alt="Espaço wellness" className="w-full h-full object-cover grayscale-[15%]" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Blocos de serviço */}
          <div className="mt-14 md:mt-28">
            <FadeIn>
              <p className="text-xs tracking-[0.4em] uppercase mb-12 font-light" style={{ color: ACCENT }}>— O que entrego</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-white/10 bg-white/10">
              {servicos.map((s, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="bg-[#0f0e0c] p-10 h-full hover:bg-[#161410] transition-colors duration-300 group">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-8 h-px mt-3" style={{ background: ACCENT }} />
                      <span className="font-serif text-5xl font-light text-white/10 leading-none select-none group-hover:text-white/15 transition-colors">{s.num}</span>
                    </div>
                    <h3 className="font-serif text-white text-xl mb-4 leading-snug">{s.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Para quem é */}
          <div className="mt-14 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-10 items-start">
            <FadeIn className="md:col-span-4">
              <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Para quem é</p>
              <h2 className="font-serif text-white text-3xl md:text-4xl leading-tight">
                Quem se beneficia de um espaço bem projetado
              </h2>
            </FadeIn>
            <FadeIn delay={0.15} className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                {paraQuem.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-white/10 py-5">
                    <div className="w-5 h-px flex-shrink-0" style={{ background: ACCENT }} />
                    <span className="text-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Chamada estratégica */}
          <FadeIn delay={0.1}>
            <div className="mt-14 md:mt-28 py-12 md:py-24 text-center border-t border-white/10">
              <p className="font-serif text-3xl md:text-5xl text-white leading-snug max-w-4xl mx-auto">
                Um espaço wellness bem projetado não é apenas uma academia.<br />
                <span className="italic" style={{ color: ACCENT }}>É uma ferramenta de desejo, diferenciação e valorização.</span>
              </p>
              <Link href="/contato">
                <span className="inline-flex items-center gap-3 mt-12 bg-white text-[#0f0e0c] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-white/90 transition-all cursor-pointer">
                  Solicitar projeto <ArrowRight size={12} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
