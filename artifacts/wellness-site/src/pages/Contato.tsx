import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { useState } from "react";
import Swal from "sweetalert2";
import { submitContact } from "@workspace/api-client-react";

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

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  interesse: string;
  mensagem: string;
};

const emptyForm: FormState = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  interesse: "",
  mensagem: "",
};

const swalBase = {
  background: "#161513",
  color: "#ffffff",
  confirmButtonColor: ACCENT,
} as const;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): string | null {
  if (form.nome.trim().length < 2) return "Informe o seu nome.";
  if (!emailRegex.test(form.email.trim())) return "Informe um e-mail válido.";
  if (!form.interesse) return "Selecione o tipo de interesse.";
  if (form.mensagem.trim().length < 5) return "Escreva uma mensagem com mais detalhes.";
  return null;
}

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const error = validate(form);
    if (error) {
      await Swal.fire({
        ...swalBase,
        icon: "warning",
        title: "Quase lá",
        text: error,
        confirmButtonText: "Entendi",
      });
      return;
    }

    setSubmitting(true);
    try {
      await submitContact({
        nome: form.nome.trim(),
        email: form.email.trim(),
        telefone: form.telefone.trim() || undefined,
        empresa: form.empresa.trim() || undefined,
        interesse: form.interesse,
        mensagem: form.mensagem.trim(),
      });

      setForm(emptyForm);
      setSent(true);
      await Swal.fire({
        ...swalBase,
        icon: "success",
        title: "Mensagem enviada",
        text: "Em breve a equipe Michel Bueno entrará em contato. Obrigado pelo interesse.",
        confirmButtonText: "Fechar",
      });
    } catch {
      await Swal.fire({
        ...swalBase,
        icon: "error",
        title: "Não foi possível enviar",
        text: "Ocorreu um erro ao enviar a sua mensagem. Tente novamente em instantes.",
        confirmButtonText: "Tentar novamente",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageWrapper>
      <div className="pt-28 pb-14 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0f0e0c] min-h-screen">
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
              <form onSubmit={handleSubmit} className="mt-16 text-left space-y-8" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="nome" className={labelClass}>Nome</label>
                    <input id="nome" name="nome" type="text" value={form.nome} onChange={update("nome")} className={inputClass} placeholder="Seu nome" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>E-mail</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="telefone" className={labelClass}>Telefone</label>
                    <input id="telefone" name="telefone" type="tel" value={form.telefone} onChange={update("telefone")} className={inputClass} placeholder="(11) 90000-0000" />
                  </div>
                  <div>
                    <label htmlFor="empresa" className={labelClass}>Empresa</label>
                    <input id="empresa" name="empresa" type="text" value={form.empresa} onChange={update("empresa")} className={inputClass} placeholder="Incorporadora, hotel, marca..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="interesse" className={labelClass}>Tipo de interesse</label>
                  <select id="interesse" name="interesse" value={form.interesse} onChange={update("interesse")} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled style={{ backgroundColor: "#0f0e0c", color: "#ffffff" }}>Selecione uma opção</option>
                    {interesses.map((i) => (
                      <option key={i} value={i} style={{ backgroundColor: "#0f0e0c", color: "#ffffff" }}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className={labelClass}>Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows={4} value={form.mensagem} onChange={update("mensagem")} className={`${inputClass} resize-none`} placeholder="Conte um pouco sobre o seu projeto ou interesse..." />
                </div>
                <div className="pt-4 text-center">
                  <button type="submit" disabled={submitting} className="bg-white text-[#0f0e0c] text-xs tracking-[0.2em] uppercase px-14 py-4 hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    {submitting ? "Enviando..." : "Enviar mensagem"}
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
                { label: "Instagram", value: "@michel__bueno", href: "https://www.instagram.com/michel__bueno", external: true },
                { label: "LinkedIn", value: "Michel Bueno", href: "https://www.linkedin.com/in/michel-bueno-88a96440a", external: true },
                { label: "Local", value: "São Paulo — SP — Brasil" },
              ].map((info) => (
                <div key={info.label} className="bg-[#0f0e0c] p-8 text-center">
                  <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>{info.label}</p>
                  {info.href ? (
                    info.external ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer">
                        <span className="inline-flex items-center justify-center border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-white/10 transition-all cursor-pointer">
                          {info.value}
                        </span>
                      </a>
                    ) : (
                      <Link href={info.href}>
                        <span className="inline-flex items-center justify-center border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-white/10 transition-all cursor-pointer">
                          {info.value}
                        </span>
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
