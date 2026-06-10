import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const projects = [
  {
    name: "Residência C|M",
    location: "São Paulo, SP",
    type: "Private Gym & Recovery",
    image: "/portfolio-1.png",
    colSpan: "col-span-12"
  },
  {
    name: "Amanera Resort",
    location: "Trancoso, BA",
    type: "Wellness Ecosystem",
    image: "/portfolio-3.png",
    colSpan: "col-span-12 md:col-span-7"
  },
  {
    name: "Cobertura S.",
    location: "Nova York, NY",
    type: "Sensory Bath & Cold Plunge",
    image: "/portfolio-2.png",
    colSpan: "col-span-12 md:col-span-5"
  },
  {
    name: "Refúgio da Serra",
    location: "Campos do Jordão, MG",
    type: "Minimalist Sauna",
    image: "/service-2.png",
    colSpan: "col-span-12"
  }
];

export default function Portfolio() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-24 px-6 bg-foreground text-background min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Acervo</h1>
            <p className="text-muted/60 max-w-lg font-light text-lg mb-24">
              Uma seleção curada de santuários privados. Cada projeto é um estudo rigoroso de materialidade, luz e silêncio.
            </p>
          </FadeIn>

          <div className="grid grid-cols-12 gap-6 md:gap-12">
            {projects.map((project, index) => (
              <div key={index} className={`${project.colSpan} group cursor-pointer`}>
                <FadeIn delay={index * 0.1} direction="up" className="h-full">
                  <div className="relative overflow-hidden aspect-video w-full mb-6">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-between items-start border-t border-white/10 pt-4">
                    <div>
                      <h3 className="font-serif text-xl mb-1">{project.name}</h3>
                      <p className="text-muted/40 text-sm font-light">{project.location}</p>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted/60">{project.type}</span>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
