import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const GOLD = "#A0A0A0";

const services = [
  {
    num: "01",
    title: "Consultoria Conceitual",
    subtitle: "Wellness Strategy",
    desc: "Diagnóstico completo do empreendimento para definir o DNA do espaço wellness. Antes de qualquer máquina ou layout, entendemos quem é o público e qual experiência precisa ser gerada.",
    items: ["Perfil do público e estilo de vida", "Direcionamento conceitual do espaço", "Mood & lifestyle direction", "Benchmarking de referências globais"],
  },
  {
    num: "02",
    title: "Space Planning",
    subtitle: "Layout Estratégico",
    desc: "Distribuição inteligente do espaço com foco em fluxo, ergonomia e percepção de sofisticação. Máximo valor por metro quadrado.",
    items: ["Divisão e zoneamento do espaço", "Fluxo de circulação", "Posicionamento dos equipamentos", "Otimização de metragem"],
  },
  {
    num: "03",
    title: "Curadoria de Equipamentos",
    subtitle: "Equipment Curation",
    desc: "Seleção precisa de aparelhos conforme o perfil do público e o budget do empreendimento. Sem desperdício. Sem superlotação. Sem compra equivocada.",
    items: ["Especificação técnica por zona", "Curadoria de fornecedores premium", "Análise custo-benefício", "Quantitativo otimizado"],
  },
  {
    num: "04",
    title: "Wellness Amenities",
    subtitle: "Longevity Layer",
    desc: "Integração de amenidades de longevidade e recovery que elevam a percepção de luxo e diferenciam o empreendimento no mercado.",
    items: ["Sauna · Cold Plunge · Infrared", "Recovery & Compression Therapy", "Pilates · Yoga · Breathwork", "Longevity Rooms"],
  },
  {
    num: "05",
    title: "User Journey Design",
    subtitle: "Experience Layer",
    desc: "Design completo da experiência sensorial do espaço. Como a pessoa entra, circula, sente e vive o ambiente. Iluminação, aromas, som, interação social.",
    items: ["Iluminação cênica e funcional", "Design de aromas e ambiência", "Trilha sonora e identidade auditiva", "Pontos de interação social"],
  },
  {
    num: "06",
    title: "Retrofit de Academias",
    subtitle: "Premium Upgrade",
    desc: "Reestruturação de academias existentes em espaços wellness de alto padrão. Transformação de custo de condomínio em ativo de valorização imobiliária.",
    items: ["Diagnóstico do espaço atual", "Plano de modernização", "Substituição estratégica de equipamentos", "Elevação da percepção de valor"],
  },
];

export default function Servicos() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: GOLD }}>— O que entrego</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Serviços para<br />
              <span className="italic font-light" style={{ color: GOLD }}>empreendimentos</span>
            </h1>
            <p className="mt-8 max-w-xl text-white/75 font-light leading-relaxed">
              Do conceito estratégico à curadoria sensorial — cada projeto é tratado como um ecossistema único, alinhado ao público e ao posicionamento do empreendimento.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-24 border border-white/8 bg-white/8">
            {services.map((svc, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#0f0e0c] p-10 h-full hover:bg-[#161410] transition-colors duration-300 group">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-8 h-px mt-3" style={{ background: GOLD }} />
                    <span className="font-serif text-6xl font-light text-white/6 leading-none select-none group-hover:text-white/10 transition-colors">
                      {svc.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-white text-2xl mb-1">{svc.title}</h3>
                  <p className="text-xs tracking-[0.2em] uppercase mb-6 font-light" style={{ color: GOLD }}>{svc.subtitle}</p>
                  <p className="text-white/75 text-sm leading-relaxed mb-8">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/65 text-xs">
                        <div className="w-4 h-px mt-2 flex-shrink-0" style={{ background: GOLD + "80" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
