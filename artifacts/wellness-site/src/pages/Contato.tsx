import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { useState } from "react";

const GOLD = "#c9a96e";

export default function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-8 font-light" style={{ color: GOLD }}>— Contato</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Vamos <span className="italic font-light" style={{ color: GOLD }}>conversar</span>
            </h1>
            <p className="mt-6 text-white/50 font-light leading-relaxed max-w-lg mx-auto">
              Para incorporadoras, hotéis, arquitetos e investidores interessados em estruturar um espaço wellness de alto padrão.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {[
                { label: "Instagram", value: "@michel_bueno" },
                { label: "CREF", value: "105588-G/SP" },
                { label: "CRECI SP", value: "264629" },
                { label: "Local", value: "São Paulo — SP — Brasil" },
              ].map((tag) => (
                <span key={tag.label} className="border border-white/15 text-white/40 text-xs tracking-[0.15em] uppercase px-4 py-2">
                  {tag.value}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            {!sent ? (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-16 text-left space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-white/30 mb-2">Nome</label>
                    <input required type="text" className="w-full bg-transparent border-b border-white/15 pb-3 text-white/80 placeholder-white/20 outline-none focus:border-[#c9a96e] transition-colors text-sm" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-white/30 mb-2">Empresa</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/15 pb-3 text-white/80 placeholder-white/20 outline-none focus:border-[#c9a96e] transition-colors text-sm" placeholder="Incorporadora, hotel, etc." />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-white/30 mb-2">E-mail</label>
                  <input required type="email" className="w-full bg-transparent border-b border-white/15 pb-3 text-white/80 placeholder-white/20 outline-none focus:border-[#c9a96e] transition-colors text-sm" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-white/30 mb-2">Tipo de projeto</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/15 pb-3 text-white/80 placeholder-white/20 outline-none focus:border-[#c9a96e] transition-colors text-sm" placeholder="Residencial, hotel, condomínio..." />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-white/30 mb-2">Mensagem</label>
                  <textarea required rows={4} className="w-full bg-transparent border-b border-white/15 pb-3 text-white/80 placeholder-white/20 outline-none focus:border-[#c9a96e] transition-colors text-sm resize-none" placeholder="Conte um pouco sobre o seu projeto..." />
                </div>
                <div className="pt-4 text-center">
                  <button type="submit" className="border text-xs tracking-[0.2em] uppercase px-14 py-4 hover:opacity-70 transition-all" style={{ borderColor: GOLD, color: GOLD }}>
                    Solicitar Proposta
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-16 py-16 border border-[#c9a96e]/20 text-center">
                <div className="w-8 h-px mx-auto mb-8" style={{ background: GOLD }} />
                <h3 className="font-serif text-white text-3xl mb-4">Mensagem recebida</h3>
                <p className="text-white/50 font-light">Em breve entraremos em contato. Obrigado pelo interesse.</p>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
