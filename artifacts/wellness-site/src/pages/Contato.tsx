import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Contato() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-24 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-serif mb-12">Conversa<br /><span className="italic text-muted-foreground">Privada</span></h1>
              <p className="text-muted-foreground font-light text-lg mb-16 max-w-md">
                Para consultas de imprensa, parcerias de marca ou dúvidas gerais, nosso estúdio está à disposição.
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-mono text-muted-foreground mb-4">Directório</h3>
                  <a href="mailto:studio@aurawellness.com" className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors group">
                    <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-light">studio@aurawellness.com</span>
                  </a>
                </div>

                <div>
                  <h3 className="uppercase tracking-widest text-xs font-mono text-muted-foreground mb-4">Social</h3>
                  <a href="#" className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors group">
                    <Instagram size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-light">@aurawellness.arch</span>
                  </a>
                </div>

                <div>
                  <h3 className="uppercase tracking-widest text-xs font-mono text-muted-foreground mb-4">Base</h3>
                  <div className="flex items-start space-x-4 text-foreground">
                    <MapPin size={18} className="text-muted-foreground mt-1" />
                    <span className="font-light leading-relaxed">
                      Atendimento Global.<br />
                      Baseados em São Paulo,<br />
                      com presença em Milão.
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left" className="h-full">
              <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                <img src="/portrait.png" alt="Studio Atmosphere" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
