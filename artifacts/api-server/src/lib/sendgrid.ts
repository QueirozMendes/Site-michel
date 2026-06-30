import sgMail from "@sendgrid/mail";
import { logger } from "./logger";

type SendGridCredentials = {
  apiKey: string;
  fromEmail: string | undefined;
};

let cached: SendGridCredentials | undefined;

function getAuthToken(): string {
  const replIdentity = process.env["REPL_IDENTITY"];
  const webReplRenewal = process.env["WEB_REPL_RENEWAL"];

  if (replIdentity) {
    return "repl " + replIdentity;
  }
  if (webReplRenewal) {
    return "depl " + webReplRenewal;
  }
  throw new Error(
    "No Replit identity token found (REPL_IDENTITY / WEB_REPL_RENEWAL).",
  );
}

async function getCredentials(): Promise<SendGridCredentials> {
  if (cached) {
    return cached;
  }

  const hostname = process.env["REPLIT_CONNECTORS_HOSTNAME"];
  if (!hostname) {
    throw new Error("REPLIT_CONNECTORS_HOSTNAME is not set.");
  }

  const token = getAuthToken();

  const res = await fetch(
    `https://${hostname}/api/v2/connection?include_secrets=true&connector_names=sendgrid`,
    {
      headers: {
        Accept: "application/json",
        X_REPLIT_TOKEN: token,
      },
    },
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch SendGrid credentials: ${res.status} ${res.statusText}`,
    );
  }

  const data = (await res.json()) as {
    items?: Array<{
      settings?: { api_key?: string; from_email?: string };
    }>;
  };

  const settings = data.items?.[0]?.settings;
  const apiKey = settings?.api_key;

  if (!apiKey) {
    throw new Error("SendGrid connection is missing an API key.");
  }

  cached = { apiKey, fromEmail: settings?.from_email };
  return cached;
}

export type SendEmailParams = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
};

export async function sendEmail(params: SendEmailParams): Promise<void> {
  const { apiKey } = await getCredentials();
  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send({
      to: params.to,
      from: params.from,
      replyTo: params.replyTo,
      subject: params.subject,
      text: params.text,
      ...(params.html ? { html: params.html } : {}),
    });
  } catch (err) {
    logger.error({ err }, "SendGrid send failed");
    throw err;
  }
}

export async function getFromEmail(): Promise<string | undefined> {
  const { fromEmail } = await getCredentials();
  return fromEmail;
}
