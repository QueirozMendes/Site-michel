import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const services = [
  {
    title: "Consultoria Conceitual",
    description: "Estratégia e posicionamento de espaços de bem-estar. Antes do traço, a intenção. Definimos a vocação do espaço e sua narrativa curativa.",
    image: "/portfolio-4.png"
  },
  {
    title: "Design Sensorial",
    description: "A arquitetura invisível. Projetamos a luz que acalma, a acústica que isola, o aroma que centra e a textura que aterra.",
    image: "/service-1.png"
  },
  {
    title: "Curadoria de Equipamentos",
    description: "Acesso direto às manufaturas mais exclusivas do mundo. Equipamentos que funcionam como esculturas e performam como instrumentos de precisão.",
    image: "/portfolio-1.png"
  },
  {
    title: "Longevidade & Recovery",
    description: "O ápice da ciência do descanso. Câmaras de crioterapia customizadas, saunas de precisão térmica e santuários de regeneração celular.",
    image: "/service-2.png"
  }
];

export default function Servicos() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-24 px-6">
        <div className="container mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif mb-24">Nossos<br /><span className="italic text-muted-foreground">Serviços</span></h1>
          </FadeIn>

          <div className="space-y-32">
            {services.map((svc, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <FadeIn 
                  direction={index % 2 === 0 ? "right" : "left"} 
                  className={index % 2 !== 0 ? "md:order-2" : ""}
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                  </div>
                </FadeIn>
                
                <FadeIn 
                  delay={0.2} 
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={index % 2 !== 0 ? "md:order-1" : ""}
                >
                  <span className="text-primary font-mono text-xs tracking-widest uppercase block mb-6">0{index + 1}</span>
                  <h2 className="text-3xl md:text-4xl font-serif mb-6">{svc.title}</h2>
                  <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-md">
                    {svc.description}
                  </p>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
