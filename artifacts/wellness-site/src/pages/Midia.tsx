import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const ACCENT = "#A0A0A0";

const blocos = [
  { title: "Artigos publicados", desc: "Conteúdos autorais sobre wellness, longevidade e performance." },
  { title: "Entrevistas", desc: "Conversas sobre comportamento, saúde e alta performance." },
  { title: "Colunas", desc: "Visão editorial recorrente sobre lifestyle e bem-estar." },
  { title: "Aparições em eventos", desc: "Participações e palestras em encontros do setor." },
  { title: "Press kit", desc: "Materiais institucionais para imprensa e parceiros." },
];

export default function Midia() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Mídia e conteúdo</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Mídia e<br />
              <span className="italic font-light" style={{ color: ACCENT }}>conteúdo</span>
            </h1>
          </FadeIn>

          {/* Destaque Jetsetter */}
          <FadeIn delay={0.2}>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-white/10 p-10 md:p-16">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: ACCENT }}>Destaque</p>
                <h2 className="font-serif text-white text-4xl md:text-5xl mb-6">Jetsetter News</h2>
                <p className="text-white/75 font-light leading-relaxed">
                  Michel Bueno participa da Jetsetter News com conteúdos sobre wellness, treinamento, longevidade, comportamento e alta performance, levando sua visão para uma audiência conectada a saúde, lifestyle e transformação.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/portfolio-2.png" alt="Jetsetter News" className="w-full h-full object-cover grayscale-[15%]" />
              </div>
            </div>
          </FadeIn>

          {/* Blocos de conteúdo */}
          <div className="mt-24">
            <FadeIn>
              <p className="text-xs tracking-[0.4em] uppercase mb-12 font-light" style={{ color: ACCENT }}>— Conteúdo</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/10 bg-white/10">
              {blocos.map((b, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="bg-[#0f0e0c] p-10 h-full hover:bg-[#161410] transition-colors duration-300">
                    <div className="w-8 h-px mb-8" style={{ background: ACCENT }} />
                    <h3 className="font-serif text-white text-2xl mb-3">{b.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
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
