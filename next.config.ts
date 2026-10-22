import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    EMAIL_PROVIDER:
      process.env.EMAIL_PROVIDER || process.env.MAIL_PROVIDER || "",
    BREVO_API_KEY:
      process.env.BREVO_API_KEY || process.env.BREVO_SMTP_KEY || "",
    SMTP_HOST: process.env.SMTP_HOST || process.env.GMAIL_SMTP_HOST || "",
    SMTP_PORT: process.env.SMTP_PORT || process.env.GMAIL_SMTP_PORT || "",
    SMTP_SECURE:
      process.env.SMTP_SECURE || process.env.GMAIL_SMTP_SECURE || "",
    SMTP_USER: process.env.SMTP_USER || process.env.GMAIL_USER || "",
    SMTP_PASS: process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "",
    GMAIL_USER: process.env.GMAIL_USER || process.env.SMTP_USER || "",
    GMAIL_APP_PASSWORD:
      process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || "",
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || "",
    SMTP_FROM:
      process.env.SMTP_FROM ||
      process.env.GMAIL_USER ||
      process.env.BREVO_FROM_EMAIL ||
      process.env.SMTP_USER ||
      "",
    SMTP_FROM_NAME:
      process.env.SMTP_FROM_NAME ||
      process.env.GMAIL_FROM_NAME ||
      process.env.BREVO_FROM_NAME ||
      "AstraFloww",
  },
  async redirects() {
    return [
      {
        source: "/team",
        destination: "/#team",
        permanent: false,
      },

    ];
  },
};

export default nextConfig;
