"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Spaceship from "@/components/pixel-icon/spaceship";
import PixelCloud from "@/components/pixel-icon/cloud";
import PixelStar from "@/components/pixel-icon/star";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pixel-grid-bg relative overflow-hidden"
      style={{
        minHeight: "100vh",
        paddingTop: "60px", // nav height
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--signal-pink)",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "2px",
                  backgroundColor: "var(--signal-pink)",
                }}
              />
              We don’t just market. We amplify.
            </motion.p>

            {/* Headline */}
            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                color: "var(--ink)",
                marginBottom: "1.5rem",
              }}
            >
              We Build
              <br />
              <span style={{ color: "var(--signal-pink)" }}>Brands</span> That
              <br />
              Actually Flow.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "var(--ink)",
                opacity: 0.7,
                maxWidth: "420px",
                marginBottom: "2.5rem",
              }}
            >
              From web development to AI-powered solutions — we craft digital
              experiences that convert, scale, and impress.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary justify-center text-center w-full sm:w-auto" id="hero-cta-primary">
                Let&apos;s Start! &rarr;
              </Link>
              <a href="#work" className="btn-outline justify-center text-center w-full sm:w-auto" id="hero-cta-secondary">
                View Work
              </a>
            </motion.div>
          </div>

          {/* Right: Mascot + doodles */}
          <motion.div
            className="hidden md:flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              height: "420px",
            }}
          >
            {/* Background pink block */}
            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "280px",
                backgroundColor: "var(--signal-pink)",
                border: "3px solid var(--ink)",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />

            {/* Spaceship — floating animation */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ position: "relative", zIndex: 2 }}
            >
              <Spaceship size={180} color="var(--ink)" accentColor="var(--cloud-white)" />
            </motion.div>

            {/* Cloud doodles */}
            <motion.div
              style={{ position: "absolute", top: "20px", left: "10px", zIndex: 1 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <PixelCloud size={56} color="var(--ink)" />
            </motion.div>
            <motion.div
              style={{ position: "absolute", bottom: "30px", right: "20px", zIndex: 3 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <PixelCloud size={40} color="var(--cloud-white)" />
            </motion.div>

            {/* Star accents */}
            <PixelStar
              size={12}
              color="var(--signal-green)"
              className="absolute"
              style={{ top: "60px", right: "40px" } as React.CSSProperties}
            />
            <PixelStar
              size={8}
              color="var(--ink)"
              className="absolute"
              style={{ bottom: "80px", left: "40px" } as React.CSSProperties}
            />
            <PixelStar
              size={16}
              color="var(--signal-pink)"
              className="absolute"
              style={{ top: "100px", left: "20px" } as React.CSSProperties}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2"
          style={{ transform: "translateX(-50%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "var(--ink)",
              opacity: 0.4,
              textTransform: "lowercase",
            }}
          >
            scroll ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
