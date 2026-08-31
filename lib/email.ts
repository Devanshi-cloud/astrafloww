import type { ContactFormData } from "./validation";

interface BrevoRecipient {
  name?: string;
  email: string;
}

interface SendBrevoPayload {
  sender: BrevoRecipient;
  to: BrevoRecipient[];
  replyTo?: BrevoRecipient;
  subject: string;
  htmlContent: string;
  textContent?: string;
}

async function sendBrevoEmail(payload: SendBrevoPayload, apiKey: string) {
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

export async function sendContactEmail(data: ContactFormData) {
  const apiKey =
    process.env.BREVO_API_KEY ||
    process.env.BREVO_SMTP_KEY ||
    process.env.SMTP_PASS;

  if (!apiKey) {
    throw new Error(
      "Brevo API key is not configured. Please set BREVO_API_KEY (or BREVO_SMTP_KEY / SMTP_PASS) in your environment variables."
    );
  }

  const to = process.env.CONTACT_EMAIL;
  if (!to) {
    throw new Error("CONTACT_EMAIL environment variable is not set");
  }

  const fromAddress =
    process.env.SMTP_FROM ||
    process.env.BREVO_FROM_EMAIL ||
    process.env.SMTP_USER;
  if (!fromAddress) {
    throw new Error(
      "Sender email is not configured. Please set SMTP_FROM (or BREVO_FROM_EMAIL / SMTP_USER) in your environment variables."
    );
  }

  const cleanFromName =
    (process.env.SMTP_FROM_NAME || process.env.BREVO_FROM_NAME || "AstraFloww")
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
          body { font-family: Arial, sans-serif; color: #111; background: #F2F2F0; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; border: 2px solid #111; }
          .header { background: #F0299B; padding: 24px 32px; }
          .header h1 { color: #fff; font-size: 20px; margin: 0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
          .body { padding: 32px; font-size: 14px; line-height: 1.6; color: #111; }
          .greeting { font-size: 16px; font-weight: 700; margin-bottom: 16px; }
          .summary-card { background: #F2F2F0; border: 1px solid #DADAD8; padding: 20px; margin: 24px 0; }
          .summary-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #F0299B; font-weight: 700; margin-bottom: 12px; }
          .field { margin-bottom: 10px; }
          .field-label { font-weight: 700; font-size: 12px; color: #555; }
          .field-val { color: #111; margin-top: 2px; }
          .footer { border-top: 2px solid #111; padding: 16px 32px; background: #111; color: rgba(255,255,255,0.7); font-size: 11px; }
          .footer a { color: #F0299B; text-decoration: none; }
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
          email: to,
        },
      ],
      replyTo: {
        name: cleanName,
        email: email,
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
          email: email,
        },
      ],
      replyTo: {
        name: cleanFromName,
        email: to,
      },
      subject: clientSubject,
      textContent: clientText,
      htmlContent: clientHtml,
    },
    apiKey
  );

  await Promise.all([sendAdmin, sendClient]);
}
