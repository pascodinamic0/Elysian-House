import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Elysian House — A quiet room for women who are ready to begin again.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// OG Image generation
export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F7F5F2",
          padding: "80px",
        }}
      >
        {/* Subtle texture overlay simulation */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#E8E4DF",
            opacity: 0.3,
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "32px",
            position: "relative",
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              fontSize: 24,
              fontFamily: "Georgia, serif",
              color: "#8B7E74",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            ELYSIAN HOUSE
          </div>
          
          {/* Main headline */}
          <div
            style={{
              fontSize: 64,
              fontFamily: "Georgia, serif",
              color: "#2C2825",
              lineHeight: 1.15,
              maxWidth: "900px",
              textAlign: "center",
            }}
          >
            A quiet room for women who are ready to begin again.
          </div>
          
          {/* Event info */}
          <div
            style={{
              fontSize: 20,
              fontFamily: "system-ui, sans-serif",
              color: "#8B7E74",
              marginTop: "16px",
            }}
          >
            Transform & Thrive · February 28, 2026 · Dubai
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
