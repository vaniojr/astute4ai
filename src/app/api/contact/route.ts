import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  nome?: string;
  whatsapp?: string;
  tipo?: string;
  descricao?: string;
  estagio?: string;
};

function toRequiredString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  const nome = toRequiredString(payload.nome);
  const whatsapp = toRequiredString(payload.whatsapp);
  const tipo = toRequiredString(payload.tipo);
  const descricao = toRequiredString(payload.descricao);
  const estagio = toRequiredString(payload.estagio);

  if (!nome || !whatsapp || !tipo || !descricao || !estagio) {
    return NextResponse.json(
      { ok: false, message: "Preencha todos os campos obrigatórios." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactEmail = process.env.CONTACT_EMAIL ?? "contato@astute4ai.com";
  const fromEmail =
    process.env.SMTP_FROM ?? smtpUser ?? "no-reply@astute4ai.com";

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Configuração de e-mail incompleta no servidor. Defina SMTP_HOST, SMTP_PORT, SMTP_USER e SMTP_PASS.",
      },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: contactEmail,
      subject: "Novo diagnóstico - Astute4AI",
      text: [
        `Nome: ${nome}`,
        `WhatsApp: ${whatsapp}`,
        `Tipo de projeto: ${tipo}`,
        `Estágio atual do projeto: ${estagio}`,
        "",
        "Descrição da ideia:",
        descricao,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Não foi possível enviar seu formulário agora. Tente novamente em alguns minutos.",
      },
      { status: 500 },
    );
  }
}
