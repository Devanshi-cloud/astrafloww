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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">
            Your Name *
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--signal-pink)] focus:ring-1 focus:ring-[var(--signal-pink)] transition-colors"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-rose-400 font-mono">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--signal-pink)] focus:ring-1 focus:ring-[var(--signal-pink)] transition-colors"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-400 font-mono">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Service & Phone Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">
            Service Required *
          </label>
          <select
            {...register("service")}
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl bg-[#140824] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--signal-pink)] focus:ring-1 focus:ring-[var(--signal-pink)] transition-colors"
          >
            <option value="" disabled className="text-white/40">
              Select capability...
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s} className="bg-[#0F041A] text-white">
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-rose-400 font-mono">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">
            Phone / WhatsApp (Optional)
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--signal-pink)] focus:ring-1 focus:ring-[var(--signal-pink)] transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">
          Project Brief / Message *
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your goals, current bottlenecks, and target timeline..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--signal-pink)] focus:ring-1 focus:ring-[var(--signal-pink)] transition-colors resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-400 font-mono">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Feedback States */}
      {submitState === "success" && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
          ✓ Inquiry received. An AstraFloww partner will review and respond within 24 hours.
        </div>
      )}

      {submitState === "error" && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
          ✕ {errorMessage || "Could not submit inquiry. Please email us directly."}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitState === "loading"}
        className="w-full py-3.5 px-6 rounded-full bg-[var(--signal-pink)] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:bg-[#6c5ce7] shadow-lg flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
      >
        <span>
          {submitState === "loading" ? "Transmitting Inquiry..." : "Send Project Inquiry"}
        </span>
        <span className="text-base">&rarr;</span>
      </button>
    </form>
  );
}
