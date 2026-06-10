import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src="/hero.png" 
            alt="Cinematic luxury wellness pool" 
            className="w-full h-full object-cover scale-105 transform transition-transform duration-[20s] hover:scale-100"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <FadeIn delay={0.2}>
            <span className="text-white/80 tracking-[0.3em] uppercase text-sm mb-6 block font-light">
              Arquitetura de Bem-Estar
            </span>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
              O silêncio do <br />
              <span className="italic font-light">design intencional.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex justify-center mt-12">
              <Link href="/questionario">
                <span className="inline-flex items-center space-x-3 text-white border-b border-white/30 pb-2 hover:border-white transition-colors cursor-pointer tracking-widest uppercase text-xs">
                  <span>Iniciar Projeto</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 md:py-48 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-relaxed">
              Desenhamos ecossistemas de cura para residências e hotéis que não aceitam o padrão.
            </h2>
            <div className="mt-12 h-px w-24 bg-primary mx-auto opacity-50" />
            <p className="mt-12 text-lg md:text-xl text-muted-foreground font-light leading-loose">
              Não vendemos equipamentos. Nós curamos atmosferas. A intersecção exata entre a quietude de um onsen japonês e a precisão tátil do design milanês. Para clientes que não perguntam o preço, mas sim a disponibilidade.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Visual Break */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <FadeIn delay={0.1} direction="up" className="aspect-[4/5] relative overflow-hidden group">
              <img src="/portfolio-4.png" alt="Sensory design" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </FadeIn>
            <FadeIn delay={0.3} direction="up" className="aspect-[4/5] relative overflow-hidden group md:mt-24">
              <img src="/service-1.png" alt="Texture detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6 bg-foreground text-background">
        <div className="container mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-12">
              <h2 className="text-4xl md:text-6xl font-serif">Áreas de<br /><span className="italic text-muted/60">Atuação</span></h2>
              <Link href="/servicos">
                <span className="hidden md:inline-flex items-center space-x-3 text-muted border-b border-muted/30 pb-2 hover:border-muted hover:text-white transition-colors cursor-pointer tracking-widest uppercase text-xs mt-8 md:mt-0">
                  <span>Ver todos os serviços</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Design Sensorial", desc: "A coreografia invisível de luz, som e textura." },
              { title: "Curadoria de Equipamentos", desc: "Apenas as peças mais exclusivas do mercado global." },
              { title: "Longevidade & Recovery", desc: "Laboratórios privados de performance e descanso." }
            ].map((svc, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <h3 className="text-xl font-serif mb-4">{svc.title}</h3>
                <p className="text-muted/60 font-light text-sm">{svc.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
