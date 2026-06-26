import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const ACCENT = "#A0A0A0";

export default function Sobre() {
  return (
    <PageWrapper>
      <div className="pt-28 pb-14 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          {/* Foto (mobile) — acima do nome */}
          <FadeIn>
            <div className="md:hidden aspect-[3/4] overflow-hidden mb-10">
              <img src="/portrait-michel.jpg" alt="Michel Bueno" className="w-full h-full object-cover object-top grayscale-[15%]" />
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Sobre Michel</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Michel Bueno
            </h1>
            <p className="mt-4 text-lg md:text-xl font-serif italic" style={{ color: ACCENT }}>
              Projetista wellness. Especialista em performance e longevidade.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 md:gap-24 mt-12 md:mt-24 items-start">
            <div className="md:col-span-6 space-y-8 text-white/80 font-light text-lg leading-relaxed">
              <FadeIn delay={0.2}>
                <p>
                  <strong className="text-white font-normal">Michel Bueno</strong> é projetista wellness e especialista em performance e longevidade, com atuação voltada ao desenvolvimento de espaços fitness, experiências wellness e projetos de alto padrão para empreendimentos imobiliários, hotéis, marcas e clientes privados.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  Sua trajetória nasce do treinamento de alta performance, anos dedicados a formar executivos, lideranças e personalidades que exigem precisão técnica e resultado real. Dessa vivência, Michel desenvolveu uma visão que vai além do exercício físico: ela integra <strong className="text-white font-normal">saúde, arquitetura, comportamento, estética, tecnologia e experiência do usuário</strong> para criar ambientes que promovem movimento, bem-estar e longevidade.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  Com passagens por <strong className="text-white font-normal">academias de luxo e hotéis 6 estrelas</strong>, Michel atua hoje na interseção entre fitness, lifestyle e valorização imobiliária, desenhando não apenas treinos, mas jornadas. Sua abordagem une rigor técnico, sensibilidade estética e visão estratégica, transformando espaços wellness em verdadeiros diferenciais competitivos para marcas e empreendimentos que desejam se posicionar no mais alto padrão do mercado.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p>
                  Mais do que um projetista, Michel é um <strong className="text-white font-normal">designer de experiências de bem-estar</strong>, um especialista que pensa o wellness como linguagem de luxo, saúde como ativo de valor, e cada espaço como uma oportunidade de elevar a forma como as pessoas vivem.
                </p>
              </FadeIn>

              {/* Bio curta destaque */}
              <FadeIn delay={0.6}>
                <div className="border p-8 bg-white/[0.03]" style={{ borderColor: "rgba(160,160,160,0.25)" }}>
                  <p className="text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: ACCENT }}>Em resumo</p>
                  <p className="font-serif text-white text-xl leading-relaxed">
                    Especialista em wellness, performance e longevidade, atuando no desenvolvimento de espaços fitness, experiências wellness e projetos estratégicos para empreendimentos, hotéis, marcas e clientes de alto padrão.
                  </p>
                </div>
              </FadeIn>

              {/* Credenciais */}
              <FadeIn delay={0.7}>
                <div className="border border-white/15 p-8">
                  <p className="text-xs tracking-[0.3em] uppercase mb-6 font-light" style={{ color: ACCENT }}>Credenciais</p>
                  <ul className="space-y-4">
                    {[
                      { label: "CREF", value: "105588-G/SP" },
                      { label: "CRECI SP", value: "264629" },
                      { label: "Mercado", value: "Wellness & Longevidade" },
                      { label: "Atuação", value: "São Paulo, SP — Brasil" },
                      { label: "Instagram", value: "@michel__bueno", href: "https://www.instagram.com/michel__bueno" },
                      { label: "LinkedIn", value: "Michel Bueno", href: "https://www.linkedin.com/in/michel-bueno-88a96440a" },
                    ].map((cred: { label: string; value: string; href?: string }) => (
                      <li key={cred.label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0">
                        <span className="text-xs tracking-[0.2em] uppercase text-white/55">{cred.label}</span>
                        {cred.href ? (
                          <a href={cred.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/85 hover:text-white transition-colors">{cred.value}</a>
                        ) : (
                          <span className="text-sm text-white/85">{cred.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="hidden md:block md:col-span-6 md:-mt-64">
              <FadeIn delay={0.3} direction="up">
                <div className="aspect-[4/5] overflow-hidden md:sticky md:top-32">
                  <img src="/portrait-michel.jpg" alt="Michel Bueno" className="w-full h-full object-cover grayscale-[15%]" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
