import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const ACCENT = "#A0A0A0";

export default function Midia() {
  return (
    <PageWrapper>
      <div className="pt-28 pb-14 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Mídia e conteúdo</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Mídia e<br />
              <span className="italic font-light" style={{ color: ACCENT }}>conteúdo</span>
            </h1>
          </FadeIn>

          {/* Destaque Jetsetters News */}
          <FadeIn delay={0.2}>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-white/10 p-10 md:p-16">
              <div className="order-2 md:order-1">
                <p className="text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: ACCENT }}>Destaque</p>
                <h2 className="font-serif text-white text-4xl md:text-5xl mb-3">Jetsetters News</h2>
                <p className="text-base tracking-[0.15em] uppercase font-light mb-6" style={{ color: ACCENT }}>Jornalismo de luxo</p>
                <p className="text-white/75 font-light leading-relaxed">
                  Michel Bueno participa da Jetsetters News com conteúdos sobre wellness, treinamento, longevidade, comportamento e alta performance, levando sua visão para uma audiência conectada a saúde, lifestyle e transformação.
                </p>
                <a
                  href="https://instagram.com/michel__bueno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-sm tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-1"
                >
                  @michel__bueno
                </a>
              </div>
              <div className="order-1 md:order-2 aspect-[3/4] overflow-hidden">
                <img src="/michel-jetsetter.jpg" alt="Michel Bueno" className="w-full h-full object-cover object-top grayscale-[15%]" />
              </div>
            </div>
          </FadeIn>

          {/* Instagram */}
          <FadeIn delay={0.3}>
            <div className="mt-12 border border-white/10 p-10 md:p-16 text-center">
              <p className="text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: ACCENT }}>Instagram</p>
              <h2 className="font-serif text-white text-3xl md:text-4xl mb-6">Acompanhe no Instagram</h2>
              <a
                href="https://www.instagram.com/mb_wellnessdesing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-1"
              >
                @mb_wellnessdesing
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
