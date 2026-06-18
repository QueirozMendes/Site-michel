import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { useState } from "react";

const ACCENT = "#A0A0A0";

const interesses = [
  "Projeto wellness para empreendimento",
  "Parceria de marca",
  "Imprensa / mídia",
  "Evento / palestra",
  "Consultoria privada",
  "Outro",
];

const inputClass =
  "w-full bg-transparent border-b border-white/25 pb-3 text-white placeholder-white/35 outline-none focus:border-white transition-colors text-sm";
const labelClass = "block text-xs tracking-[0.2em] uppercase text-white/60 mb-3";

export default function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <PageWrapper>
      <div className="pt-24 pb-10 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-8 font-light text-center" style={{ color: ACCENT }}>— Contato</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight text-center">
              Vamos <span className="italic font-light" style={{ color: ACCENT }}>conversar</span>
            </h1>
            <p className="mt-6 text-white/75 font-light leading-relaxed max-w-lg mx-auto text-center">
              Para projetos wellness, parcerias, imprensa ou convites institucionais, entre em contato.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            {!sent ? (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-16 text-left space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="nome" className={labelClass}>Nome</label>
                    <input id="nome" name="nome" required type="text" className={inputClass} placeholder="Seu nome" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>E-mail</label>
                    <input id="email" name="email" required type="email" className={inputClass} placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="telefone" className={labelClass}>Telefone</label>
                    <input id="telefone" name="telefone" type="tel" className={inputClass} placeholder="(11) 90000-0000" />
                  </div>
                  <div>
                    <label htmlFor="empresa" className={labelClass}>Empresa</label>
                    <input id="empresa" name="empresa" type="text" className={inputClass} placeholder="Incorporadora, hotel, marca..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="interesse" className={labelClass}>Tipo de interesse</label>
                  <select id="interesse" name="interesse" required defaultValue="" className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled style={{ backgroundColor: "#0f0e0c", color: "#ffffff" }}>Selecione uma opção</option>
                    {interesses.map((i) => (
                      <option key={i} value={i} style={{ backgroundColor: "#0f0e0c", color: "#ffffff" }}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className={labelClass}>Mensagem</label>
                  <textarea id="mensagem" name="mensagem" required rows={4} className={`${inputClass} resize-none`} placeholder="Conte um pouco sobre o seu projeto ou interesse..." />
                </div>
                <div className="pt-4 text-center">
                  <button type="submit" className="bg-white text-[#0f0e0c] text-xs tracking-[0.2em] uppercase px-14 py-4 hover:bg-white/90 transition-all">
                    Enviar mensagem
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-16 py-16 border border-white/20 text-center">
                <div className="w-8 h-px mx-auto mb-8" style={{ background: ACCENT }} />
                <h3 className="font-serif text-white text-3xl mb-4">Mensagem recebida</h3>
                <p className="text-white/70 font-light">Em breve a equipe Michel Bueno entrará em contato. Obrigado pelo interesse.</p>
              </div>
            )}
          </FadeIn>

          {/* Informações adicionais */}
          <FadeIn delay={0.2}>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px border border-white/10 bg-white/10">
              {[
                { label: "Instagram", value: "@michel_bueno", href: "https://instagram.com/michel_bueno", external: true },
                { label: "Mídia", value: "Jetsetter News", href: "/midia", external: false },
                { label: "Local", value: "São Paulo — SP — Brasil" },
              ].map((info) => (
                <div key={info.label} className="bg-[#0f0e0c] p-8 text-center">
                  <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>{info.label}</p>
                  {info.href ? (
                    info.external ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-white/85 text-sm hover:text-white transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <Link href={info.href}>
                        <span className="text-white/85 text-sm hover:text-white transition-colors cursor-pointer">{info.value}</span>
                      </Link>
                    )
                  ) : (
                    <p className="text-white/85 text-sm">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
