import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Apple touch icon generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: "#2C2825",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F7F5F2",
          fontFamily: "Georgia, serif",
          letterSpacing: "2px",
          fontWeight: 400,
        }}
      >
        EH
      </div>
    ),
    {
      ...size,
    }
  );
}
