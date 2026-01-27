import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: "#2C2825",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F7F5F2",
          fontFamily: "Georgia, serif",
          letterSpacing: "0.5px",
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
