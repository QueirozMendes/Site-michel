import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const ACCENT = "#A0A0A0";

export default function Sobre() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Sobre Michel</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Michel Bueno
            </h1>
            <p className="mt-4 text-lg md:text-xl font-serif italic" style={{ color: ACCENT }}>
              Especialista em wellness, performance e longevidade.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mt-24 items-start">
            <div className="md:col-span-6 space-y-8 text-white/80 font-light text-lg leading-relaxed">
              <FadeIn delay={0.2}>
                <p>
                  <strong className="text-white font-normal">Michel Bueno</strong> é especialista em wellness, performance e longevidade, com atuação voltada ao desenvolvimento de espaços fitness, experiências wellness e projetos de alto padrão para empreendimentos imobiliários, hotéis, marcas e clientes privados.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  Ao longo de sua trajetória, Michel construiu uma visão que vai além do treinamento físico. Seu trabalho integra <strong className="text-white font-normal">saúde, arquitetura, comportamento, estética, equipamentos e experiência do usuário</strong> para criar ambientes que promovem movimento, bem-estar e qualidade de vida.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  Com experiência em projetos como <strong className="text-white font-normal">Six Wellness</strong> e <strong className="text-white font-normal">Rosewood</strong>, e parcerias com marcas como Technogym, Tryex, Mitre e Mentore Bank, Michel atua na interseção entre fitness, lifestyle e valorização imobiliária.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p>
                  Sua abordagem combina técnica, sofisticação e visão estratégica, criando soluções que transformam espaços wellness em diferenciais reais para empreendimentos e marcas que desejam se posicionar no mercado de alto padrão.
                </p>
              </FadeIn>
            </div>

            <div className="md:col-span-6">
              <FadeIn delay={0.3} direction="up">
                <div className="aspect-[4/5] overflow-hidden mb-8">
                  <img src="/portrait.png" alt="Michel Bueno" className="w-full h-full object-cover grayscale-[15%]" />
                </div>

                {/* Bio curta destaque */}
                <div className="border p-8 bg-white/[0.03]" style={{ borderColor: "rgba(160,160,160,0.25)" }}>
                  <p className="text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: ACCENT }}>Em resumo</p>
                  <p className="font-serif text-white text-xl leading-relaxed">
                    Especialista em wellness, performance e longevidade, atuando no desenvolvimento de espaços fitness, experiências wellness e projetos estratégicos para empreendimentos, hotéis, marcas e clientes de alto padrão.
                  </p>
                </div>

                {/* Credenciais */}
                <div className="border border-white/15 p-8 mt-4">
                  <p className="text-xs tracking-[0.3em] uppercase mb-6 font-light" style={{ color: ACCENT }}>Credenciais</p>
                  <ul className="space-y-4">
                    {[
                      { label: "CREF", value: "105588-G/SP" },
                      { label: "CRECI SP", value: "264629" },
                      { label: "Mercado", value: "Wellness & Longevidade" },
                      { label: "Atuação", value: "São Paulo, SP — Brasil" },
                      { label: "Instagram", value: "@michel_bueno" },
                    ].map((cred) => (
                      <li key={cred.label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0">
                        <span className="text-xs tracking-[0.2em] uppercase text-white/55">{cred.label}</span>
                        <span className="text-sm text-white/85">{cred.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
