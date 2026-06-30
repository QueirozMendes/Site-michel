import { Router, type IRouter } from "express";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";
import { sendEmail, getFromEmail } from "../lib/sendgrid";

const router: IRouter = Router();

const CONTACT_TO = "contato@michelbuenogroup.com.br";

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    const data = SubmitContactResponse.parse({
      success: false,
      message: "Dados inválidos. Verifique os campos e tente novamente.",
    });
    return res.status(400).json(data);
  }

  const { nome, email, telefone, empresa, interesse, mensagem } = parsed.data;

  const lines = [
    `Nome: ${nome}`,
    `E-mail: ${email}`,
    telefone ? `Telefone: ${telefone}` : null,
    empresa ? `Empresa: ${empresa}` : null,
    `Tipo de interesse: ${interesse}`,
    "",
    "Mensagem:",
    mensagem,
  ].filter((l): l is string => l !== null);

  const text = lines.join("\n");
  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">Novo contato pelo site</h2>
      <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      ${telefone ? `<p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>` : ""}
      ${empresa ? `<p><strong>Empresa:</strong> ${escapeHtml(empresa)}</p>` : ""}
      <p><strong>Tipo de interesse:</strong> ${escapeHtml(interesse)}</p>
      <p style="margin-top: 16px;"><strong>Mensagem:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(mensagem)}</p>
    </div>
  `;

  try {
    const fromEmail = await getFromEmail();
    if (!fromEmail) {
      throw new Error("No verified SendGrid sender (from_email) is configured.");
    }
    await sendEmail({
      to: CONTACT_TO,
      from: fromEmail,
      replyTo: email,
      subject: sanitizeHeader(`Novo contato — ${nome} (${interesse})`),
      text,
      html,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    const data = SubmitContactResponse.parse({
      success: false,
      message: "Não foi possível enviar a mensagem agora. Tente novamente em instantes.",
    });
    return res.status(500).json(data);
  }

  const data = SubmitContactResponse.parse({
    success: true,
    message: "Mensagem enviada com sucesso.",
  });
  return res.json(data);
});

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default router;
