import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Larger variant of icon.tsx for iOS home-screen bookmarks. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e100f",
        }}
      >
        <span
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#f5f4f0",
            fontFamily: "sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          CM
          <span style={{ color: "#4dd8d0" }}>.</span>
        </span>
      </div>
    ),
    { ...size },
  );
}
