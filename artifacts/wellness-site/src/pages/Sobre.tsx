import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const GOLD = "#c9a96e";

export default function Sobre() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: GOLD }}>— Sobre</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Michel Bueno<br />
              <span className="italic font-light" style={{ color: GOLD }}>Wellness Design</span>
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mt-24 items-start">
            <div className="md:col-span-6 space-y-8 text-white/65 font-light text-lg leading-relaxed">
              <FadeIn delay={0.2}>
                <p>
                  <strong className="text-white font-normal">Michel Bueno</strong> é Wellness & Longevity Director especializado em projetar ecossistemas de alta performance para empreendimentos de luxo. Com trajetória construída nos ambientes mais exigentes do mercado premium brasileiro, atua na intersecção entre design de espaços, longevidade e experiência do usuário.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  Sua metodologia une <strong className="text-white font-normal">estratégia de espaço, curadoria de equipamentos e design sensorial</strong> — transformando academias em ativos de valorização imobiliária e diferencial de lifestyle para incorporadoras, hotéis e empreendimentos de alto padrão.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <ul className="space-y-6 mt-12">
                  {[
                    { title: "Six Wellness Club · Ambassador", desc: "Metodologia de atendimento 6 estrelas, curadoria de equipamentos premium, treinamento de equipe, hospitalidade de alto padrão e desenvolvimento de padrão de excelência na maior rede de academias de luxo do Brasil." },
                    { title: "Hotel Rosewood São Paulo", desc: "Estruturação completa do fitness center: curadoria de equipamentos, metodologia wellness, hospitalidade e jornada de hóspedes e residentes. Referência mundial em wellness hoteleiro." },
                    { title: "Consultoria a Academias de Luxo", desc: "Posicionamento, experiência, curadoria e padrão de atendimento para espaços wellness premium." },
                    { title: "Clientela Exclusiva", desc: "Executivos, celebridades e líderes empresariais — atendimento personalizado de alto padrão." },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 border-b border-white/8 pb-6 last:border-0">
                      <div className="w-6 h-px mt-3 flex-shrink-0" style={{ background: GOLD }} />
                      <div>
                        <h4 className="text-white text-sm font-normal tracking-wide mb-2">{item.title}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <div className="md:col-span-6">
              <FadeIn delay={0.3} direction="up">
                <div className="aspect-[4/5] overflow-hidden mb-8">
                  <img src="/portrait.png" alt="Michel Bueno" className="w-full h-full object-cover grayscale-[15%]" />
                </div>
                {/* Credenciais */}
                <div className="border border-[#c9a96e]/20 p-8 bg-white/3">
                  <p className="text-xs tracking-[0.3em] uppercase mb-6 font-light" style={{ color: GOLD }}>Credenciais Profissionais</p>
                  <ul className="space-y-4">
                    {[
                      { label: "CREF", value: "105588-G/SP" },
                      { label: "CRECI SP", value: "264629" },
                      { label: "Mercado", value: "Luxury Fitness & Wellness" },
                      { label: "Atuação", value: "São Paulo, SP — Brasil" },
                      { label: "Instagram", value: "@michel_bueno" },
                    ].map((cred) => (
                      <li key={cred.label} className="flex justify-between items-center border-b border-white/8 pb-4 last:border-0">
                        <span className="text-xs tracking-[0.2em] uppercase text-white/30">{cred.label}</span>
                        <span className="text-sm text-white/70">{cred.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Destaque */}
                <div className="border border-[#c9a96e]/25 p-8 mt-4 bg-[#c9a96e]/5">
                  <p className="text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: GOLD }}>Caso de Referência</p>
                  <h4 className="font-serif text-white text-xl mb-3">Hotel Rosewood São Paulo</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Estruturou do zero o fitness center: curadoria de equipamentos, metodologia wellness proprietária, hospitalidade de alto padrão e jornada completa de hóspedes e residentes. Referência mundial em wellness hoteleiro.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
