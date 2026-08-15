"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";

const SERVICES = [
  "Web Development",
  "SEO",
  "UI/UX Design",
  "AI Development",
  "DevOps",
  "Other",
];

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Something went wrong");
      }
      setSubmitState("success");
      trackEvent("booking_submitted", {
        service: data.service,
        has_phone: !!data.phone,
      });
      reset();
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: "13px",
    color: "var(--ink)",
    backgroundColor: "var(--paper)",
    border: "2px solid var(--ink)",
    padding: "0.75rem 1rem",
    outline: "none",
    transition: "box-shadow 100ms",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-ibm-plex-mono), monospace",
    fontSize: "10px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--ink)",
    marginBottom: "0.4rem",
    fontWeight: 600,
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "var(--font-ibm-plex-mono), monospace",
    fontSize: "10px",
    color: "var(--signal-pink)",
    marginTop: "0.25rem",
    letterSpacing: "0.04em",
  };

  if (submitState === "success") {
    return (
      <div
        style={{
          backgroundColor: "var(--signal-green)",
          border: "2px solid var(--ink)",
          padding: "3rem 2rem",
          boxShadow: "6px 6px 0 var(--ink)",
          textAlign: "center",
        }}
      >
        {/* Pixel checkmark */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
          style={{ marginBottom: "1rem", imageRendering: "pixelated" }}
        >
          <rect x="4" y="4" width="40" height="40" fill="var(--ink)" />
          <rect x="8" y="24" width="8" height="8" fill="var(--signal-green)" />
          <rect x="16" y="32" width="8" height="8" fill="var(--signal-green)" />
          <rect x="24" y="16" width="8" height="8" fill="var(--signal-green)" />
          <rect x="32" y="8" width="8" height="8" fill="var(--signal-green)" />
        </svg>
        <p
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "1.25rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--ink)",
            marginBottom: "0.5rem",
          }}
        >
          Message Sent!
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            color: "rgba(17,17,17,0.7)",
          }}
        >
          We&apos;ll be in touch within 24 hours.
        </p>
        <button
          onClick={() => setSubmitState("idle")}
          className="btn-outline"
          style={{ marginTop: "1.5rem", fontSize: "11px" }}
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      {/* Honeypot - hidden from humans */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        {...register("website")}
      />

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" style={labelStyle}>
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your name"
            style={{
              ...inputStyle,
              boxShadow: errors.name ? "0 0 0 2px var(--signal-pink)" : "none",
            }}
            {...register("name")}
          />
          {errors.name && (
            <p style={errorStyle}>{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" style={labelStyle}>
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            style={{
              ...inputStyle,
              boxShadow: errors.email
                ? "0 0 0 2px var(--signal-pink)"
                : "none",
            }}
            {...register("email")}
          />
          {errors.email && (
            <p style={errorStyle}>{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone + Service row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" style={labelStyle}>
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+91 98765 43210"
            style={inputStyle}
            {...register("phone")}
          />
        </div>
        <div>
          <label htmlFor="contact-service" style={labelStyle}>
            Service *
          </label>
          <select
            id="contact-service"
            style={{
              ...inputStyle,
              appearance: "none",
              cursor: "pointer",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M0 0h4v4H0zM4 4h4v4H4z' fill='%23111111'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              paddingRight: "2.5rem",
              boxShadow: errors.service
                ? "0 0 0 2px var(--signal-pink)"
                : "none",
            }}
            {...register("service")}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p style={errorStyle}>{errors.service.message}</p>
          )}
        </div>
      </div>

      {/* Preferred time */}
      <div>
        <label htmlFor="contact-time" style={labelStyle}>
          Preferred Date / Time (optional)
        </label>
        <input
          id="contact-time"
          type="text"
          placeholder="e.g. Weekdays after 6pm IST"
          style={inputStyle}
          {...register("preferredTime")}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" style={labelStyle}>
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your project..."
          style={{
            ...inputStyle,
            resize: "vertical",
            boxShadow: errors.message
              ? "0 0 0 2px var(--signal-pink)"
              : "none",
          }}
          {...register("message")}
        />
        {errors.message && (
          <p style={errorStyle}>{errors.message.message}</p>
        )}
      </div>

      {/* Error toast */}
      {submitState === "error" && (
        <div
          role="alert"
          style={{
            backgroundColor: "var(--signal-pink)",
            color: "var(--cloud-white)",
            border: "2px solid var(--ink)",
            padding: "0.75rem 1rem",
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.04em",
            boxShadow: "4px 4px 0 var(--ink)",
          }}
        >
          ✗ {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        id="contact-submit-button"
        className="btn-primary w-full sm:w-auto text-center justify-center"
        disabled={submitState === "loading"}
        style={{
          opacity: submitState === "loading" ? 0.7 : 1,
          cursor: submitState === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {submitState === "loading" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
