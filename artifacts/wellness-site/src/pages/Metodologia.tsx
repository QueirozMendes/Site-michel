import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const GOLD = "#A0A0A0";

const phases = [
  {
    num: "01",
    title: "Diagnóstico",
    subtitle: "Discovery Phase",
    desc: "Imersão no perfil do empreendimento: público, metragem, ticket, objetivo do incorporador e contexto competitivo do projeto.",
    tags: ["Perfil do Público", "Metragem", "Objetivo", "Competitivo"],
  },
  {
    num: "02",
    title: "Conceito Wellness",
    subtitle: "Concept Development",
    desc: "Definição do DNA do espaço: posicionamento, experiência emocional, mood e lifestyle direction. O ponto de partida de tudo.",
    tags: ["Posicionamento", "Mood", "Experiência", "Lifestyle Direction"],
  },
  {
    num: "03",
    title: "Layout Inteligente",
    subtitle: "Space Planning",
    desc: "Distribuição estratégica do espaço com zoneamento funcional, fluxo de circulação e máxima percepção de valor por metro quadrado.",
    tags: ["Fluxo", "Zonas", "Ergonomia", "Funcionalidade"],
  },
  {
    num: "04",
    title: "Curadoria de Equipamentos",
    subtitle: "Equipment Curation",
    desc: "Seleção e especificação técnica de aparelhos, fornecedores premium, quantitativos e orçamento — sem desperdício, sem lacunas.",
    tags: ["Aparelhos", "Fornecedores", "Budget", "Diferenciação"],
  },
  {
    num: "05",
    title: "Experience Layer",
    subtitle: "Sensory Design",
    desc: "A camada que transforma uma academia em experiência premium: iluminação, aromas, som, recovery e design das interações sociais.",
    tags: ["Iluminação", "Aromas", "Som", "Recovery", "Social"],
  },
];

export default function Metodologia() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: GOLD }}>— Como trabalho</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Metodologia em<br />
              <span className="italic font-light" style={{ color: GOLD }}>5 fases</span>
            </h1>
            <p className="mt-8 max-w-xl text-white/75 font-light leading-relaxed">
              Um processo estruturado do diagnóstico à entrega — garantindo que cada decisão esteja alinhada ao público, ao empreendimento e ao objetivo do incorporador.
            </p>
          </FadeIn>

          <div className="mt-24 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-0">
              {phases.map((phase, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 border-b border-white/10 relative">
                    <div className="hidden md:flex absolute left-[27px] top-1/2 -translate-y-1/2 w-5 h-5 rotate-45 border border-[#A0A0A0]/60 bg-[#0f0e0c] items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                    </div>

                    <div className="md:col-span-2 md:pl-20 flex md:flex-col items-center md:items-start gap-4">
                      <span className="font-serif text-5xl font-light text-white/15 leading-none">{phase.num}</span>
                    </div>

                    <div className="md:col-span-10">
                      <h3 className="font-serif text-white text-3xl mb-1">{phase.title}</h3>
                      <p className="text-xs tracking-[0.2em] uppercase mb-6 font-light" style={{ color: GOLD }}>{phase.subtitle}</p>
                      <p className="text-white/75 font-light leading-relaxed max-w-2xl mb-8">{phase.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.tags.map((tag) => (
                          <span key={tag} className="border border-white/25 text-white/60 text-xs tracking-[0.15em] uppercase px-3 py-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
