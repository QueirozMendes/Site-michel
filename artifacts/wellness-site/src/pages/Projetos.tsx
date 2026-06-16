import { useState } from "react";
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
  const [active, setActive] = useState(0);

  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
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

          {/* Desktop: expanding-panel gallery */}
          <FadeIn delay={0.1}>
            <div className="mt-20 hidden md:flex gap-2 h-[72vh] min-h-[520px]">
              {projetos.map((p, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`${p.name} — ${p.category}`}
                    aria-expanded={isActive}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="relative block text-left overflow-hidden cursor-pointer appearance-none border-0 p-0 m-0 bg-transparent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
                    style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0 }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "grayscale-0 scale-100" : "grayscale scale-105 opacity-80"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

                    {/* Vertical label (inactive) */}
                    <div
                      className={`absolute inset-x-0 bottom-8 flex justify-center transition-opacity duration-300 ${
                        isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    >
                      <span className="[writing-mode:vertical-rl] rotate-180 text-xs tracking-[0.25em] uppercase text-white/85 whitespace-nowrap">
                        {p.name}
                      </span>
                    </div>

                    {/* Full info (active) */}
                    <div
                      className={`absolute inset-x-0 bottom-0 p-8 lg:p-10 transition-all duration-500 ${
                        isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-6 pointer-events-none"
                      }`}
                    >
                      <p className="text-[10px] tracking-[0.3em] uppercase mb-4 font-light" style={{ color: ACCENT }}>
                        {p.category}
                      </p>
                      <h2 className="font-serif text-white text-3xl lg:text-4xl mb-5 whitespace-nowrap">{p.name}</h2>
                      <div className="flex flex-wrap gap-x-8 gap-y-2 mb-5 text-[11px] tracking-[0.1em] uppercase text-white/55">
                        <span>Local · {p.location}</span>
                        <span>Atuação · {p.role}</span>
                      </div>
                      <p className="text-white/75 font-light leading-relaxed max-w-lg text-sm">{p.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Mobile: stacked full cards */}
          <div className="mt-16 md:hidden space-y-16">
            {projetos.map((p, i) => (
              <FadeIn key={i} delay={0.05}>
                <div>
                  <div className="overflow-hidden aspect-[4/5] mb-6">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-3 font-light" style={{ color: ACCENT }}>{p.category}</p>
                  <h2 className="font-serif text-white text-3xl mb-4">{p.name}</h2>
                  <div className="flex flex-col gap-1 mb-4 text-[11px] tracking-[0.1em] uppercase text-white/55">
                    <span>Local · {p.location}</span>
                    <span>Atuação · {p.role}</span>
                  </div>
                  <p className="text-white/75 font-light leading-relaxed text-sm">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
