import nodemailer from "nodemailer";
import type { ContactFormData } from "./validation";

function createTransporter() {
  const host = process.env.SMTP_HOST || "smtp-relay.brevo.com";
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS || process.env.BREVO_SMTP_KEY;

  if (!user || !pass) {
    throw new Error(
      "Brevo SMTP credentials are not configured. Please set SMTP_USER and SMTP_PASS in your environment variables."
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

export async function sendContactEmail(data: ContactFormData) {
  const to = process.env.CONTACT_EMAIL;
  if (!to) {
    throw new Error("CONTACT_EMAIL environment variable is not set");
  }

  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
  if (!fromAddress) {
    throw new Error("SMTP_FROM or SMTP_USER environment variable is not set");
  }

  const fromName = process.env.SMTP_FROM_NAME || "AstraFloww Contact";
  const { name, email, phone, service, preferredTime, message } = data;

  const subject = `[AstraFloww] New inquiry from ${name} — ${service}`;

  const text = [
    `New Contact Request from AstraFloww`,
    `------------------------------------`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Service Interested In: ${service}`,
    preferredTime ? `Preferred Date / Time: ${preferredTime}` : null,
    `\nMessage:\n${message}`,
    `\n---\nSent via AstraFloww contact form (astrafloww.in)`,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; color: #111; background: #F2F2F0; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; border: 2px solid #111; }
          .header { background: #F0299B; padding: 24px 32px; }
          .header h1 { color: #fff; font-size: 20px; margin: 0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
          .body { padding: 32px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #F0299B; font-weight: 700; margin-bottom: 4px; }
          .value { font-size: 14px; color: #111; }
          .message-box { background: #F2F2F0; border: 1px solid #DADAD8; padding: 16px; white-space: pre-wrap; }
          .footer { border-top: 2px solid #111; padding: 16px 32px; background: #111; color: rgba(255,255,255,0.6); font-size: 11px; }
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
              <div class="value">${name}</div>
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

  const transporter = createTransporter();

  // Use structured address objects for RFC-compliant header formatting
  await transporter.sendMail({
    from: {
      name: `${name} (via AstraFloww)`,
      address: fromAddress,
    },
    to,
    replyTo: {
      name: name,
      address: email,
    },
    subject,
    text,
    html,
  });
}
