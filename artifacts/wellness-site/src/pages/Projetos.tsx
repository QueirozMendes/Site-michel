import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";

const ACCENT = "#A0A0A0";

const projetos = [
  {
    img: "/portfolio-1.png",
    name: "Six Wellness Itaim",
    location: "Itaim, São Paulo",
    category: "Espaço wellness / Fitness premium",
    role: "Desenvolvimento e estruturação de espaço wellness",
    desc: "O Six Wellness Itaim foi desenvolvido com foco em criar uma experiência fitness sofisticada, funcional e conectada ao estilo de vida urbano. O projeto integra treinamento, estética, bem-estar e experiência do usuário em um ambiente pensado para performance, saúde e convivência.",
  },
  {
    img: "/portfolio-2.png",
    name: "Six Wellness Vila Nova",
    location: "Vila Nova Conceição, São Paulo",
    category: "Espaço wellness / Studio premium",
    role: "Projeto e estruturação de ambiente fitness",
    desc: "No Six Wellness Vila Nova, Michel Bueno participou da concepção de um espaço voltado para movimento, funcionalidade e experiência. O projeto reforça a importância de ambientes fitness bem planejados como parte essencial do lifestyle contemporâneo.",
  },
  {
    img: "/portfolio-3.png",
    name: "Six Wellness Campinas",
    location: "Campinas",
    category: "Wellness / Fitness / Lifestyle",
    role: "Estruturação de espaço wellness",
    desc: "O Six Wellness Campinas leva o conceito de wellness de alto padrão para um público que busca saúde, performance e qualidade de vida em um ambiente acolhedor, funcional e sofisticado.",
  },
  {
    img: "/portfolio-4.png",
    name: "Rosewood",
    location: "São Paulo",
    category: "Hotelaria de luxo / Wellness",
    role: "Experiência e projeto wellness",
    desc: "A atuação junto ao Rosewood reforça a conexão de Michel Bueno com o universo da hospitalidade de luxo, onde wellness, experiência e excelência operacional são pilares fundamentais para entregar valor ao cliente final.",
  },
];

export default function Projetos() {
  return (
    <PageWrapper>
      <div className="pt-28 pb-14 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Projetos realizados</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Projetos<br />
              <span className="italic font-light" style={{ color: ACCENT }}>realizados</span>
            </h1>
            <p className="mt-8 max-w-2xl text-white/75 font-light leading-relaxed">
              Espaços, experiências e soluções wellness desenvolvidas para marcas, empreendimentos e ambientes de alto padrão.
            </p>
          </FadeIn>

          <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projetos.map((p, i) => (
              <FadeIn key={i} delay={(i % 2) * 0.1}>
                <div className="group relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                    <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-light" style={{ color: ACCENT }}>{p.category}</p>
                    <h2 className="font-serif text-white text-3xl lg:text-4xl mb-4">{p.name}</h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 text-[11px] tracking-[0.1em] uppercase text-white/60">
                      <span>Local · {p.location}</span>
                      <span>Atuação · {p.role}</span>
                    </div>
                    <p className="text-white/80 font-light leading-relaxed text-sm max-w-lg">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
