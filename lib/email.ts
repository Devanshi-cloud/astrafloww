import type { ContactFormData } from "./validation";
import nodemailer from "nodemailer";

export type EmailProvider = "gmail" | "brevo" | "auto";

export interface EmailOptions {
  provider?: EmailProvider;
}

export interface BrevoRecipient {
  name?: string;
  email: string;
}

export interface SendBrevoPayload {
  sender: BrevoRecipient;
  to: BrevoRecipient[];
  replyTo?: BrevoRecipient;
  subject: string;
  htmlContent: string;
  textContent?: string;
}

export interface EmailTemplates {
  cleanName: string;
  cleanFromName: string;
  fromAddress: string;
  toAddress: string;
  adminSubject: string;
  adminText: string;
  adminHtml: string;
  clientSubject: string;
  clientText: string;
  clientHtml: string;
}

/**
 * Builds email content and templates shared between Brevo and Gmail SMTP.
 */
export function buildEmailTemplates(data: ContactFormData): EmailTemplates {
  const toAddress = process.env.CONTACT_EMAIL;
  if (!toAddress) {
    throw new Error("CONTACT_EMAIL environment variable is not set");
  }

  const fromAddress =
    process.env.SMTP_FROM ||
    process.env.GMAIL_USER ||
    process.env.BREVO_FROM_EMAIL ||
    process.env.SMTP_USER;
  if (!fromAddress) {
    throw new Error(
      "Sender email is not configured. Please set SMTP_FROM (or GMAIL_USER / BREVO_FROM_EMAIL / SMTP_USER) in your environment variables."
    );
  }

  const cleanFromName =
    (
      process.env.SMTP_FROM_NAME ||
      process.env.GMAIL_FROM_NAME ||
      process.env.BREVO_FROM_NAME ||
      "AstraFloww"
    )
      .replace(/["'\\]/g, "")
      .trim() || "AstraFloww";

  const cleanName = data.name.replace(/["'\\]/g, "").trim();
  const { email, phone, service, preferredTime, message } = data;

  // -------------------------------------------------------------
  // 1. Admin notification email (sent to AstraFloww team)
  // -------------------------------------------------------------
  const adminSubject = `[AstraFloww] New inquiry from ${cleanName} — ${service}`;

  const adminText = [
    `New Contact Request from AstraFloww`,
    `------------------------------------`,
    `Name: ${cleanName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Service Interested In: ${service}`,
    preferredTime ? `Preferred Date / Time: ${preferredTime}` : null,
    `\nMessage:\n${message}`,
    `\n---\nSent via AstraFloww contact form (astrafloww.in)`,
  ]
    .filter(Boolean)
    .join("\n");

  const adminHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; color: #0F041A; background: #F4F8FC; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; border: 2px solid #0F041A; }
          .header { background: #7C6DF6; padding: 24px 32px; }
          .header h1 { color: #fff; font-size: 20px; margin: 0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
          .body { padding: 32px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #7C6DF6; font-weight: 700; margin-bottom: 4px; }
          .value { font-size: 14px; color: #0F041A; }
          .message-box { background: #F4F8FC; border: 1px solid #D1DCF9; padding: 16px; white-space: pre-wrap; }
          .footer { border-top: 2px solid #0F041A; padding: 16px 32px; background: #0F041A; color: rgba(255,255,255,0.6); font-size: 11px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Request</h1>
          </div>
          <div class="body">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${cleanName}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `<div class="field"><div class="label">Phone</div><div class="value">${phone}</div></div>` : ""}
            <div class="field">
              <div class="label">Service Interested In</div>
              <div class="value">${service}</div>
            </div>
            ${preferredTime ? `<div class="field"><div class="label">Preferred Date / Time</div><div class="value">${preferredTime}</div></div>` : ""}
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">Sent via AstraFloww contact form &mdash; astrafloww.in</div>
        </div>
      </body>
    </html>
  `;

  // -------------------------------------------------------------
  // 2. Client confirmation email (auto-reply sent to the client)
  // -------------------------------------------------------------
  const clientSubject = `We've received your request! — AstraFloww`;

  const clientText = [
    `Hi ${cleanName},`,
    `\nThank you for reaching out to AstraFloww! We've received your inquiry regarding "${service}" and our team is currently reviewing your details.`,
    `\nWe typically get back to you within 24 business hours.`,
    `\nHere is a summary of what you submitted:`,
    `• Service: ${service}`,
    preferredTime ? `• Preferred Time: ${preferredTime}` : null,
    phone ? `• Phone: ${phone}` : null,
    `• Message: ${message}`,
    `\nIf you have any urgent questions, feel free to reply directly to this email or reach us on WhatsApp.`,
    `\nBest regards,`,
    `Team AstraFloww`,
    `https://astrafloww.in`,
  ]
    .filter(Boolean)
    .join("\n");

  const clientHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; color: #0F041A; background: #F4F8FC; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; border: 2px solid #0F041A; }
          .header { background: #7C6DF6; padding: 24px 32px; }
          .header h1 { color: #fff; font-size: 20px; margin: 0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
          .body { padding: 32px; font-size: 14px; line-height: 1.6; color: #0F041A; }
          .greeting { font-size: 16px; font-weight: 700; margin-bottom: 16px; }
          .summary-card { background: #F4F8FC; border: 1px solid #D1DCF9; padding: 20px; margin: 24px 0; }
          .summary-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #7C6DF6; font-weight: 700; margin-bottom: 12px; }
          .field { margin-bottom: 10px; }
          .field-label { font-weight: 700; font-size: 12px; color: #555; }
          .field-val { color: #0F041A; margin-top: 2px; }
          .footer { border-top: 2px solid #0F041A; padding: 16px 32px; background: #0F041A; color: rgba(255,255,255,0.7); font-size: 11px; }
          .footer a { color: #7C6DF6; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>AstraFloww</h1>
          </div>
          <div class="body">
            <div class="greeting">Hi ${cleanName},</div>
            <p>Thank you for reaching out to us! We've received your request and our team is currently reviewing your project details.</p>
            <p>We'll get back to you within <strong>24 business hours</strong>.</p>
            
            <div class="summary-card">
              <div class="summary-title">Your Submission Summary</div>
              <div class="field">
                <div class="field-label">Service:</div>
                <div class="field-val">${service}</div>
              </div>
              ${
                preferredTime
                  ? `
              <div class="field">
                <div class="field-label">Preferred Date / Time:</div>
                <div class="field-val">${preferredTime}</div>
              </div>`
                  : ""
              }
              <div class="field">
                <div class="field-label">Your Message:</div>
                <div class="field-val" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>

            <p>If you need immediate assistance or want to add anything else, simply reply directly to this email.</p>

            <p style="margin-top: 24px;">
              Best regards,<br />
              <strong>Team AstraFloww</strong>
            </p>
          </div>
          <div class="footer">
            AstraFloww &mdash; Digital Marketing &amp; Creative Solutions | <a href="https://astrafloww.in">astrafloww.in</a>
          </div>
        </div>
      </body>
    </html>
  `;

  return {
    cleanName,
    cleanFromName,
    fromAddress,
    toAddress,
    adminSubject,
    adminText,
    adminHtml,
    clientSubject,
    clientText,
    clientHtml,
  };
}

// -------------------------------------------------------------
// BREVO (Sendinblue) Transactional REST API Mailer
// -------------------------------------------------------------

/**
 * Sends transactional email via Brevo's v3 REST API.
 */
export async function sendBrevoEmail(payload: SendBrevoPayload, apiKey: string) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo API error (${response.status}): ${errorText}`);
  }

  return response.json();
}

/**
 * Sends contact form emails (admin notification + client confirmation) using Brevo.
 */
export async function sendContactEmailViaBrevo(data: ContactFormData) {
  const apiKey =
    process.env.BREVO_API_KEY ||
    process.env.BREVO_SMTP_KEY;

  if (!apiKey) {
    throw new Error(
      "Brevo API key is not configured. Please set BREVO_API_KEY (or BREVO_SMTP_KEY) in your environment variables."
    );
  }

  const {
    cleanName,
    cleanFromName,
    fromAddress,
    toAddress,
    adminSubject,
    adminText,
    adminHtml,
    clientSubject,
    clientText,
    clientHtml,
  } = buildEmailTemplates(data);

  // Send admin notification
  const sendAdmin = sendBrevoEmail(
    {
      sender: {
        name: `${cleanName} (via AstraFloww)`,
        email: fromAddress,
      },
      to: [
        {
          name: "AstraFloww Team",
          email: toAddress,
        },
      ],
      replyTo: {
        name: cleanName,
        email: data.email,
      },
      subject: adminSubject,
      textContent: adminText,
      htmlContent: adminHtml,
    },
    apiKey
  );

  // Send client confirmation auto-reply
  const sendClient = sendBrevoEmail(
    {
      sender: {
        name: cleanFromName,
        email: fromAddress,
      },
      to: [
        {
          name: cleanName,
          email: data.email,
        },
      ],
      replyTo: {
        name: cleanFromName,
        email: toAddress,
      },
      subject: clientSubject,
      textContent: clientText,
      htmlContent: clientHtml,
    },
    apiKey
  );

  await Promise.all([sendAdmin, sendClient]);
}

// -------------------------------------------------------------
// GMAIL WORKSPACE SMTP (Nodemailer) Mailer
// -------------------------------------------------------------

export interface GmailSmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
}

/**
 * Reads Gmail / Google Workspace SMTP configuration from environment variables.
 */
export function getGmailSmtpConfig(): GmailSmtpConfig {
  const host =
    process.env.GMAIL_SMTP_HOST ||
    process.env.SMTP_HOST ||
    "smtp.gmail.com";

  const port =
    Number(process.env.GMAIL_SMTP_PORT || process.env.SMTP_PORT) || 587;

  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : process.env.GMAIL_SMTP_SECURE !== undefined
      ? process.env.GMAIL_SMTP_SECURE === "true"
      : port === 465;

  const user =
    process.env.GMAIL_USER ||
    process.env.SMTP_USER ||
    process.env.SMTP_FROM ||
    "";

  // Google App Passwords are 16 characters often grouped in 4s with spaces — remove spaces
  const pass = (
    process.env.GMAIL_APP_PASSWORD ||
    process.env.GMAIL_PASS ||
    process.env.SMTP_PASS ||
    ""
  ).replace(/\s+/g, "");

  return { host, port, secure, user, pass };
}

/**
 * Creates a Nodemailer transporter configured for Gmail / Google Workspace SMTP.
 */
export function createGmailTransporter() {
  const { host, port, secure, user, pass } = getGmailSmtpConfig();

  if (!user || !pass) {
    throw new Error(
      "Gmail Workspace SMTP is not fully configured. Please set SMTP_USER (or GMAIL_USER) and SMTP_PASS (or GMAIL_APP_PASSWORD) in your environment variables."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends contact form emails (admin notification + client confirmation) using Gmail Workspace SMTP.
 */
export async function sendContactEmailViaGmail(data: ContactFormData) {
  const transporter = createGmailTransporter();

  const {
    cleanName,
    cleanFromName,
    fromAddress,
    toAddress,
    adminSubject,
    adminText,
    adminHtml,
    clientSubject,
    clientText,
    clientHtml,
  } = buildEmailTemplates(data);

  // Send admin notification
  const sendAdmin = transporter.sendMail({
    from: `"${cleanName} (via AstraFloww)" <${fromAddress}>`,
    to: toAddress,
    replyTo: `"${cleanName}" <${data.email}>`,
    subject: adminSubject,
    text: adminText,
    html: adminHtml,
  });

  // Send client confirmation auto-reply
  const sendClient = transporter.sendMail({
    from: `"${cleanFromName}" <${fromAddress}>`,
    to: `"${cleanName}" <${data.email}>`,
    replyTo: `"${cleanFromName}" <${toAddress}>`,
    subject: clientSubject,
    text: clientText,
    html: clientHtml,
  });

  await Promise.all([sendAdmin, sendClient]);
}

// -------------------------------------------------------------
// PROVIDER RESOLUTION & DISPATCHER
// -------------------------------------------------------------

/**
 * Resolves which email provider to use: 'gmail' or 'brevo'.
 * Defaults to auto-detection if not explicitly configured.
 */
export function resolveEmailProvider(requested?: EmailProvider): "gmail" | "brevo" {
  if (requested && requested !== "auto") {
    return requested;
  }

  const envProvider = (
    process.env.EMAIL_PROVIDER ||
    process.env.MAIL_PROVIDER ||
    ""
  )
    .toLowerCase()
    .trim();

  if (
    envProvider === "gmail" ||
    envProvider === "google" ||
    envProvider === "workspace" ||
    envProvider === "smtp"
  ) {
    return "gmail";
  }

  if (envProvider === "brevo" || envProvider === "sendinblue") {
    return "brevo";
  }

  // Auto-detection:
  // 1. If SMTP_HOST is smtp.gmail.com or Gmail credentials exist -> use gmail
  const { user: smtpUser, pass: smtpPass, host: smtpHost } = getGmailSmtpConfig();
  const hasGmailConfig = Boolean(
    smtpUser &&
      smtpPass &&
      (smtpHost.includes("gmail") ||
        process.env.GMAIL_USER ||
        process.env.GMAIL_APP_PASSWORD)
  );

  if (hasGmailConfig) {
    return "gmail";
  }

  // 2. If Brevo API key is configured -> use brevo
  const hasBrevoKey = Boolean(
    process.env.BREVO_API_KEY || process.env.BREVO_SMTP_KEY
  );
  if (hasBrevoKey) {
    return "brevo";
  }

  // 3. Fallback: if generic SMTP user and password exist -> use gmail/smtp transporter
  if (smtpUser && smtpPass) {
    return "gmail";
  }

  // Default provider
  return "gmail";
}

/**
 * Main dispatcher for contact form submissions.
 * Supports Gmail Workspace SMTP, Brevo, or automatic provider selection.
 */
export async function sendContactEmail(
  data: ContactFormData,
  options?: EmailOptions
) {
  const provider = resolveEmailProvider(options?.provider);

  console.log(`[Email] Dispatching contact form inquiry via ${provider}...`);

  if (provider === "gmail") {
    try {
      await sendContactEmailViaGmail(data);
    } catch (err) {
      // Optional fallback to Brevo if enabled
      const hasBrevo = Boolean(
        process.env.BREVO_API_KEY || process.env.BREVO_SMTP_KEY
      );
      const enableFallback = process.env.EMAIL_ENABLE_FALLBACK === "true";

      if (enableFallback && hasBrevo) {
        console.warn(
          `[Email] Gmail Workspace SMTP failed (${(err as Error).message}). Attempting fallback to Brevo...`
        );
        await sendContactEmailViaBrevo(data);
        return;
      }
      throw err;
    }
  } else {
    try {
      await sendContactEmailViaBrevo(data);
    } catch (err) {
      // Optional fallback to Gmail if enabled
      const { user, pass } = getGmailSmtpConfig();
      const hasGmail = Boolean(user && pass);
      const enableFallback = process.env.EMAIL_ENABLE_FALLBACK === "true";

      if (enableFallback && hasGmail) {
        console.warn(
          `[Email] Brevo API failed (${(err as Error).message}). Attempting fallback to Gmail Workspace SMTP...`
        );
        await sendContactEmailViaGmail(data);
        return;
      }
      throw err;
    }
  }
}
