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
          backgroundColor: "#F4F8FC",
          backgroundImage:
            "linear-gradient(#D1DCF9 1px, transparent 1px), linear-gradient(90deg, #D1DCF9 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "16px solid #0F041A",
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
              backgroundColor: "#0F041A",
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
              backgroundColor: "#7C6DF6",
              color: "#FFFFFF",
              padding: "6px 16px",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              border: "2px solid #0F041A",
              boxShadow: "4px 4px 0 #0F041A",
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
              color: "#0F041A",
              letterSpacing: "-0.02em",
            }}
          >
            <span>We don’t just market.</span>
            <span style={{ color: "#7C6DF6" }}>We amplify.</span>
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#0F041A",
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
            borderTop: "3px solid #0F041A",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0F041A",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            astrafloww.in
          </div>

          <div
            style={{
              backgroundColor: "#D1DCF9",
              color: "#0F041A",
              padding: "6px 14px",
              fontSize: "14px",
              fontWeight: 800,
              border: "2px solid #0F041A",
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
