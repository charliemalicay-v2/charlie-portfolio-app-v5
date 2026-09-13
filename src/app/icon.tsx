import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Matches the navbar monogram: "CM." in cyan-accented type on the site's ink-dark background. */
export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <span
          style={{
            fontSize: 17,
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
