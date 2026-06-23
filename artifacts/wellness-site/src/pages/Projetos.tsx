import { useState, useEffect, useCallback, useRef } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { X, ChevronLeft, ChevronRight, Expand, Play, Volume2, VolumeX } from "lucide-react";

const ACCENT = "#A0A0A0";

type Projeto = {
  name: string;
  location: string;
  category: string;
  role: string;
  desc: string;
  img: string;
  gallery?: string[];
  video?: string;
  poster?: string;
};

const projetos: Projeto[] = [
  {
    name: "Six Wellness Club — Itaim",
    location: "Itaim · São Paulo",
    category: "Espaço wellness / Fitness premium",
    role: "Experiência do usuário e jornada do cliente",
    desc: "No Six Wellness Club, unidade Itaim, Michel desenvolveu toda a experiência do usuário e a jornada do cliente — da chegada ao acolhimento, do primeiro treino à construção de um vínculo contínuo com o espaço. Cada detalhe foi pensado para transformar o ato de treinar em uma experiência fluida, intuitiva e memorável, elevando o padrão de atendimento ao nível dos clubes wellness mais exclusivos do país.",
    img: "/portfolio-1.png",
  },
  {
    name: "Rosewood São Paulo",
    location: "São Paulo",
    category: "Hotelaria de luxo / Wellness",
    role: "Layout, seleção de aparelhos e metodologia de treinamento",
    desc: "No Rosewood São Paulo, um dos endereços mais relevantes da hotelaria de luxo internacional, Michel colaborou na concepção do layout do fitness center, projetou a seleção de aparelhos e desenvolveu a metodologia de treinamento aplicada ao espaço. Seu trabalho se estendeu à criação da jornada do residente e do hóspede, além da curadoria de eventos wellness — unindo rigor técnico à excelência em hospitalidade que define a marca.",
    img: "/gallery-rosewood-1.jpg",
    video: "/rosewood-video.mp4",
    poster: "/rosewood-video-poster.jpg",
    gallery: Array.from({ length: 20 }, (_, i) => `/gallery-rosewood-${i + 1}.jpg`),
  },
];

type Media =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster: string };

function getMedia(p: Projeto): Media[] {
  const items: Media[] = [];
  if (p.video) items.push({ type: "video", src: p.video, poster: p.poster ?? p.img });
  (p.gallery ?? []).forEach((src) => items.push({ type: "image", src }));
  return items;
}

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

  const media = activeProject !== null ? getMedia(projetos[activeProject]) : [];

  const next = useCallback(() => {
    setPhotoIndex((i) => (media.length ? (i + 1) % media.length : 0));
  }, [media.length]);

  const prev = useCallback(() => {
    setPhotoIndex((i) => (media.length ? (i - 1 + media.length) % media.length : 0));
  }, [media.length]);

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

  const rosewood = projetos.find((p) => p.video);
  const current = media[photoIndex];

  return (
    <PageWrapper>
      <div className="pt-28 pb-14 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— Projetos realizados</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Espaços que<br />
              <span className="italic font-light" style={{ color: ACCENT }}>movimentam valor</span>
            </h1>
            <p className="mt-8 max-w-2xl text-white/75 font-light leading-relaxed">
              Espaços, experiências e soluções wellness desenvolvidas para marcas, empreendimentos e ambientes de alto padrão. Clique em um projeto para ver a galeria.
            </p>
          </FadeIn>

          <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projetos.map((p, i) => {
              const items = getMedia(p);
              const clickable = items.length > 0;
              const photoCount = p.gallery?.length ?? 0;
              const cardInner = (
                <>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 grayscale-[20%] ${clickable ? "group-hover:scale-105" : ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {clickable && (
                    <span className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm bg-black/30 border border-white/20 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {p.video ? <Play size={12} /> : <Expand size={12} />}
                      {p.video ? `Vídeo + ${photoCount} fotos` : `${photoCount} fotos`}
                    </span>
                  )}

                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                    <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-light" style={{ color: ACCENT }}>{p.category}</p>
                    <h2 className="font-serif text-white text-3xl lg:text-4xl mb-4">{p.name}</h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 text-[11px] tracking-[0.1em] uppercase text-white/60">
                      <span>Local · {p.location}</span>
                      <span>Atuação · {p.role}</span>
                    </div>
                    <p className="text-white/80 font-light leading-relaxed text-sm max-w-lg">{p.desc}</p>
                  </div>
                </>
              );

              return (
                <FadeIn key={i} delay={(i % 2) * 0.1}>
                  {clickable ? (
                    <button
                      type="button"
                      onClick={(e) => openLightbox(i, e)}
                      className="group relative block w-full text-left overflow-hidden aspect-[4/3] cursor-pointer"
                      aria-label={`Ver galeria de ${p.name}`}
                    >
                      {cardInner}
                    </button>
                  ) : (
                    <div className="group relative overflow-hidden aspect-[4/3]">
                      {cardInner}
                    </div>
                  )}
                </FadeIn>
              );
            })}
          </div>

          {/* Seção dedicada: vídeo Rosewood */}
          {rosewood?.video && (
            <RosewoodVideoSection video={rosewood.video} poster={rosewood.poster ?? rosewood.img} />
          )}
        </div>
      </div>

      {activeProject !== null && current && (
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

          {/* Stage */}
          <div className="relative flex-1 flex items-center justify-center px-4 md:px-20 min-h-0" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 md:left-6 z-10 p-3 text-white/70 hover:text-white border border-white/20 hover:border-white/50 transition-colors bg-black/30 backdrop-blur-sm"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {current.type === "video" ? (
              <video
                key={current.src}
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                loop
                playsInline
                className="max-h-full max-w-full object-contain select-none"
              />
            ) : (
              <img
                src={current.src}
                alt={`${projetos[activeProject].name} — imagem ${photoIndex + 1}`}
                className="max-h-full max-w-full object-contain select-none"
              />
            )}

            <button
              type="button"
              onClick={next}
              className="absolute right-2 md:right-6 z-10 p-3 text-white/70 hover:text-white border border-white/20 hover:border-white/50 transition-colors bg-black/30 backdrop-blur-sm"
              aria-label="Próxima"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Counter + thumbnails */}
          <div className="shrink-0 px-6 md:px-12 py-6" onClick={(e) => e.stopPropagation()}>
            <p className="text-center text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: ACCENT }}>
              {photoIndex + 1} / {media.length}
            </p>
            <div className="flex justify-center gap-2 md:gap-3 overflow-x-auto">
              {media.map((item, idx) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setPhotoIndex(idx)}
                  className={`relative h-14 w-20 md:h-16 md:w-24 shrink-0 overflow-hidden transition-opacity ${
                    idx === photoIndex ? "opacity-100 ring-1 ring-white" : "opacity-40 hover:opacity-80"
                  }`}
                  aria-label={`Ir para item ${idx + 1}`}
                >
                  <img src={item.type === "video" ? item.poster : item.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                  {item.type === "video" && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
                      <Play size={16} />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

function RosewoodVideoSection({ video, poster }: { video: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const el = videoRef.current;
    setMuted((prev) => {
      const nextMuted = !prev;
      if (el && !nextMuted) el.play().catch(() => {});
      return nextMuted;
    });
  };

  return (
    <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
      <FadeIn className="md:col-span-5">
        <div className="relative mx-auto max-w-[320px] md:max-w-[360px] aspect-[9/16] overflow-hidden border" style={{ borderColor: "rgba(160,160,160,0.3)" }}>
          <video
            ref={videoRef}
            src={video}
            poster={poster}
            autoPlay
            loop
            muted={muted}
            playsInline
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={toggleSound}
            className="absolute bottom-4 right-4 p-3 text-white/90 hover:text-white border border-white/25 hover:border-white/60 bg-black/40 backdrop-blur-sm transition-colors"
            aria-label={muted ? "Ativar som" : "Desativar som"}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="md:col-span-7">
        <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: ACCENT }}>— A experiência Rosewood</p>
        <h2 className="font-serif text-white text-4xl md:text-5xl leading-tight mb-6">
          Wellness dentro de um<br />
          <span className="italic font-light" style={{ color: ACCENT }}>ícone da hospitalidade de luxo.</span>
        </h2>
        <p className="text-white/75 font-light leading-relaxed max-w-xl">
          Um registro da atuação de Michel Bueno no Rosewood — onde performance, estética e experiência se encontram para criar ambientes wellness à altura de um dos endereços mais exclusivos do mundo.
        </p>
      </FadeIn>
    </div>
  );
}
