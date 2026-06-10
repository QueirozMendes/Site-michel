import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const GOLD = "#c9a96e";

const zones = [
  {
    title: "Cardio Zone",
    items: ["Esteiras premium", "Bikes & assault bikes", "Escadas", "Remos"],
  },
  {
    title: "Strength Zone",
    items: ["Pesos livres", "Máquinas seletorizadas", "Racks & Smith", "Cabos & polias"],
  },
  {
    title: "Functional Zone",
    items: ["Turf area", "Sled & prowler", "Kettlebells", "TRX & suspensão"],
  },
  {
    title: "Mobility & Recovery",
    items: ["Alongamento", "Mobilidade funcional", "Foam rolling", "Recovery tools"],
  },
  {
    title: "Longevity & Wellness",
    items: ["Sauna · Infrared", "Cold Plunge", "Compression Therapy", "Breathwork · Meditation"],
  },
];

export default function Espacos() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: GOLD }}>— Arquitetura do Espaço</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              As <span className="italic font-light" style={{ color: GOLD }}>5 zonas</span><br />
              de um espaço completo
            </h1>
            <p className="mt-8 max-w-xl text-white/75 font-light leading-relaxed">
              Cada zona cumpre uma função específica dentro do ecossistema wellness. A combinação correta delas define a qualidade da experiência — e o valor percebido do empreendimento.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-24 border border-white/15 grid grid-cols-1 md:grid-cols-5">
              {zones.map((zone, i) => (
                <div key={i} className="p-8 border-b md:border-b-0 md:border-r border-white/15 last:border-0 hover:bg-white/[0.03] transition-colors">
                  <h3 className="font-serif text-white text-lg mb-6 leading-tight">{zone.title}</h3>
                  <ul className="space-y-3">
                    {zone.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-white/65 text-sm font-light">
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: GOLD }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div className="aspect-[4/3] overflow-hidden group">
                <img src="/portfolio-1.png" alt="Wellness space" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[15%]" />
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: GOLD }}>— Experiência integrada</p>
              <h2 className="font-serif text-white text-4xl md:text-5xl leading-tight mb-8">
                Um ecossistema,<br />
                <span className="italic font-light" style={{ color: GOLD }}>não uma lista de aparelhos</span>
              </h2>
              <p className="text-white/75 font-light leading-relaxed">
                A grande diferença entre um espaço comum e um espaço de alto padrão não está na marca dos equipamentos — está na inteligência por trás de como tudo se conecta. Cada zona foi desenhada para dialogar com as outras, criando uma experiência coesa que o usuário sente, mas não consegue explicar exatamente por quê.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-24 py-24 text-center border-t border-white/10">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-px w-12" style={{ background: GOLD }} />
                <span className="text-xs tracking-[0.4em] uppercase font-light" style={{ color: GOLD }}>Filosofia</span>
                <div className="h-px w-12" style={{ background: GOLD }} />
              </div>
              <p className="font-serif text-3xl md:text-5xl text-white leading-snug max-w-3xl mx-auto">
                "O espaço certo não precisa se explicar.<br />
                <span className="italic" style={{ color: GOLD }}>Ele simplesmente funciona."</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
