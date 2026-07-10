import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Livelab — inteligência para lives que vendem";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f6f2",
          color: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 48, fontWeight: 700 }}>
          livelab<span style={{ color: "#e8673c" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#6b6b6b", fontSize: 24, letterSpacing: 4 }}>
            LIVE COMMERCE
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 920,
            }}
          >
            A inteligência por trás das lives que vendem.
          </div>
        </div>
        <div style={{ color: "#e8673c", fontSize: 24 }}>
          Audiência, engajamento e vendas em tempo real.
        </div>
      </div>
    ),
    size
  );
}
