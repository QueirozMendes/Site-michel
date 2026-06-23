import { useState, useEffect, useCallback, useRef } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

const ACCENT = "#A0A0A0";

const projetos = [
  {
    name: "Six Wellness Itaim",
    location: "Itaim, São Paulo",
    category: "Espaço wellness / Fitness premium",
    role: "Desenvolvimento e estruturação de espaço wellness",
    desc: "O Six Wellness Itaim foi desenvolvido com foco em criar uma experiência fitness sofisticada, funcional e conectada ao estilo de vida urbano. O projeto integra treinamento, estética, bem-estar e experiência do usuário em um ambiente pensado para performance, saúde e convivência.",
    gallery: [
      "/gallery-itaim-1.jpg",
      "/gallery-itaim-2.jpg",
      "/gallery-itaim-3.jpg",
      "/gallery-itaim-4.jpg",
      "/gallery-itaim-5.jpg",
    ],
  },
  {
    name: "Six Wellness Vila Nova",
    location: "Vila Nova Conceição, São Paulo",
    category: "Espaço wellness / Studio premium",
    role: "Projeto e estruturação de ambiente fitness",
    desc: "No Six Wellness Vila Nova, Michel Bueno participou da concepção de um espaço voltado para movimento, funcionalidade e experiência. O projeto reforça a importância de ambientes fitness bem planejados como parte essencial do lifestyle contemporâneo.",
    gallery: [
      "/gallery-vilanova-1.jpg",
      "/gallery-vilanova-2.jpg",
      "/gallery-vilanova-3.jpg",
      "/gallery-vilanova-4.jpg",
      "/gallery-vilanova-5.jpg",
    ],
  },
  {
    name: "Six Wellness Campinas",
    location: "Campinas",
    category: "Wellness / Fitness / Lifestyle",
    role: "Estruturação de espaço wellness",
    desc: "O Six Wellness Campinas leva o conceito de wellness de alto padrão para um público que busca saúde, performance e qualidade de vida em um ambiente acolhedor, funcional e sofisticado.",
    gallery: [
      "/gallery-campinas-1.jpg",
      "/gallery-campinas-2.jpg",
      "/gallery-campinas-3.jpg",
      "/gallery-campinas-4.jpg",
      "/gallery-campinas-5.jpg",
    ],
  },
  {
    name: "Rosewood",
    location: "São Paulo",
    category: "Hotelaria de luxo / Wellness",
    role: "Experiência e projeto wellness",
    desc: "A atuação junto ao Rosewood reforça a conexão de Michel Bueno com o universo da hospitalidade de luxo, onde wellness, experiência e excelência operacional são pilares fundamentais para entregar valor ao cliente final.",
    gallery: [
      "/gallery-rosewood-1.jpg",
      "/gallery-rosewood-2.jpg",
      "/gallery-rosewood-3.jpg",
      "/gallery-rosewood-4.jpg",
      "/gallery-rosewood-5.jpg",
    ],
  },
];

export default function Projetos() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const openLightbox = (projectIndex: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveProject(projectIndex);
    setPhotoIndex(0);
  };

  const closeLightbox = useCallback(() => setActiveProject(null), []);

  const gallery = activeProject !== null ? projetos[activeProject].gallery : [];

  const next = useCallback(() => {
    setPhotoIndex((i) => (gallery.length ? (i + 1) % gallery.length : 0));
  }, [gallery.length]);

  const prev = useCallback(() => {
    setPhotoIndex((i) => (gallery.length ? (i - 1 + gallery.length) % gallery.length : 0));
  }, [gallery.length]);

  useEffect(() => {
    if (activeProject === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    const trigger = triggerRef.current;
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [activeProject, next, prev, closeLightbox]);

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
              Espaços, experiências e soluções wellness desenvolvidas para marcas, empreendimentos e ambientes de alto padrão. Clique em um projeto para ver a galeria de imagens.
            </p>
          </FadeIn>

          <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projetos.map((p, i) => (
              <FadeIn key={i} delay={(i % 2) * 0.1}>
                <button
                  type="button"
                  onClick={(e) => openLightbox(i, e)}
                  className="group relative block w-full text-left overflow-hidden aspect-[4/3] cursor-pointer"
                  aria-label={`Ver galeria de ${p.name}`}
                >
                  <img
                    src={p.gallery[0]}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  <span
                    className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm bg-black/30 border border-white/20 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <Expand size={12} /> {p.gallery.length} fotos
                  </span>

                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                    <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-light" style={{ color: ACCENT }}>{p.category}</p>
                    <h2 className="font-serif text-white text-3xl lg:text-4xl mb-4">{p.name}</h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 text-[11px] tracking-[0.1em] uppercase text-white/60">
                      <span>Local · {p.location}</span>
                      <span>Atuação · {p.role}</span>
                    </div>
                    <p className="text-white/80 font-light leading-relaxed text-sm max-w-lg">{p.desc}</p>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {activeProject !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 md:px-12 py-6 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase font-light" style={{ color: ACCENT }}>{projetos[activeProject].category}</p>
              <h3 className="font-serif text-white text-2xl md:text-3xl mt-1">{projetos[activeProject].name}</h3>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeLightbox}
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label="Fechar galeria"
            >
              <X size={28} />
            </button>
          </div>

          {/* Image stage */}
          <div className="relative flex-1 flex items-center justify-center px-4 md:px-20 min-h-0" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 md:left-6 z-10 p-3 text-white/70 hover:text-white border border-white/20 hover:border-white/50 transition-colors bg-black/30 backdrop-blur-sm"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <img
              src={gallery[photoIndex]}
              alt={`${projetos[activeProject].name} — imagem ${photoIndex + 1}`}
              className="max-h-full max-w-full object-contain select-none"
            />

            <button
              type="button"
              onClick={next}
              className="absolute right-2 md:right-6 z-10 p-3 text-white/70 hover:text-white border border-white/20 hover:border-white/50 transition-colors bg-black/30 backdrop-blur-sm"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom: counter + thumbnails */}
          <div className="shrink-0 px-6 md:px-12 py-6" onClick={(e) => e.stopPropagation()}>
            <p className="text-center text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: ACCENT }}>
              {photoIndex + 1} / {gallery.length}
            </p>
            <div className="flex justify-center gap-2 md:gap-3 overflow-x-auto">
              {gallery.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setPhotoIndex(idx)}
                  className={`relative h-14 w-20 md:h-16 md:w-24 shrink-0 overflow-hidden transition-opacity ${
                    idx === photoIndex ? "opacity-100 ring-1 ring-white" : "opacity-40 hover:opacity-80"
                  }`}
                  aria-label={`Ir para imagem ${idx + 1}`}
                >
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
