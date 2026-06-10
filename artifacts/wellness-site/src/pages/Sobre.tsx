import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

export default function Sobre() {
  return (
    <PageWrapper>
      <div className="pt-40 pb-24 px-6">
        <div className="container mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif mb-12">A<br /><span className="italic text-muted-foreground">Visão</span></h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start mt-24">
            <div className="md:col-span-5 relative">
              <FadeIn direction="right">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src="/portrait.png" alt="Architect Portrait" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-7 space-y-12 font-light text-lg text-muted-foreground leading-relaxed">
              <FadeIn delay={0.2}>
                <p className="text-2xl text-foreground font-serif leading-snug">
                  "O verdadeiro luxo não grita. Ele permite que você ouça a si mesmo."
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p>
                  Aura Wellness Architecture nasceu da percepção de uma lacuna monumental na arquitetura de alto padrão: construímos fortalezas para viver, mas esquecemos de desenhar altares para recuperar.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p>
                  Nossa prática não é sobre colocar uma esteira cara em um quarto vago. É sobre desenhar ecossistemas completos onde a biologia humana encontra o design sublime. Da exata temperatura da pedra na sala de recovery à acústica perfeita do estúdio de meditação.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <p>
                  Atendemos uma carteira restrita de clientes — desenvolvedores visionários, marcas de hospitalidade globais e residências privadas classe A. Nossa assinatura é a ausência de excessos e a presença absoluta de intenção.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
