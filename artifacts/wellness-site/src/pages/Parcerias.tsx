import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const ACCENT = "#A0A0A0";

const partners = [
  { name: "Technogym", note: "Equipamentos premium" },
  { name: "Tryex", note: "Soluções fitness" },
  { name: "Mitre", note: "Lifestyle & performance" },
  { name: "Mentore Bank", note: "Parceria institucional" },
];

export default function Parcerias() {
  return (
    <PageWrapper>
      <div className="pt-28 pb-14 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Parcerias estratégicas</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Parcerias<br />
              <span className="italic font-light" style={{ color: ACCENT }}>estratégicas</span>
            </h1>
            <p className="mt-8 max-w-2xl text-white/75 font-light leading-relaxed">
              Michel Bueno colabora com marcas que compartilham uma visão de excelência, inovação e alto padrão no universo wellness.
            </p>
          </FadeIn>

          {/* Logos / wordmarks */}
          <FadeIn delay={0.2}>
            <div className="mt-12 md:mt-24 grid grid-cols-1 sm:grid-cols-2 border border-white/10">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="p-12 md:p-16 border-b border-white/10 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(odd)]:border-r flex flex-col items-center justify-center text-center hover:bg-white/[0.02] transition-colors min-h-[200px]"
                >
                  <span className="font-serif text-3xl md:text-4xl text-white/70 tracking-wide mb-3">{p.name}</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-white/45">{p.note}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Texto */}
          <FadeIn delay={0.15}>
            <div className="mt-12 md:mt-24 max-w-3xl">
              <p className="text-white/80 font-light text-lg leading-relaxed">
                As parcerias de Michel Bueno fortalecem um ecossistema que conecta equipamentos, arquitetura, imóveis, experiências, conteúdo e lifestyle. Cada colaboração é pensada para ampliar o impacto do wellness em diferentes contextos, de empreendimentos imobiliários a projetos privados e experiências de marca.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
