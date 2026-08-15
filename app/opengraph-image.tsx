import { ImageResponse } from "next/og";

export const alt = "AstraFloww — We don't just market. We amplify.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F2F2F0",
          backgroundImage:
            "linear-gradient(#DADAD8 1px, transparent 1px), linear-gradient(90deg, #DADAD8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "16px solid #111111",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              color: "#FFFFFF",
              padding: "8px 20px",
              fontSize: "22px",
              fontWeight: 800,
              textTransform: "lowercase",
              letterSpacing: "-0.02em",
            }}
          >
            astrafloww
          </div>

          <div
            style={{
              backgroundColor: "#F0299B",
              color: "#FFFFFF",
              padding: "6px 16px",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              border: "2px solid #111111",
              boxShadow: "4px 4px 0 #111111",
            }}
          >
            Digital Agency
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.05,
              textTransform: "uppercase",
              color: "#111111",
              letterSpacing: "-0.02em",
            }}
          >
            <span>We don’t just market.</span>
            <span style={{ color: "#F0299B" }}>We amplify.</span>
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#111111",
              opacity: 0.75,
              fontWeight: 500,
              maxWidth: "800px",
            }}
          >
            Web Development · SEO · AI Automation · Brand Systems · DevOps
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "3px solid #111111",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            astrafloww.in
          </div>

          <div
            style={{
              backgroundColor: "#3DBE3D",
              color: "#111111",
              padding: "6px 14px",
              fontSize: "14px",
              fontWeight: 800,
              border: "2px solid #111111",
            }}
          >
            AVAILABLE WORLDWIDE
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
