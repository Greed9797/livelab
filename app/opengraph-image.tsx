import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { wordmarkSvg } from "@/components/brand/livelab-logo";
import { SYMBOL_PATH } from "@/components/brand/livelab-symbol";

export const alt = "LiveLab: sua marca vende em live sem montar estúdio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const svgUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const symbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#FE5105" fill-rule="evenodd" d="${SYMBOL_PATH}"/></svg>`;

// Mesmo par do site (OFL, arquivos em assets/fonts): Geist Bold no título, Instrument Serif itálica no destaque.
export default async function OpenGraphImage() {
  const [geistBold, serifItalic] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Geist-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/InstrumentSerif-Italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#070707",
          color: "#EFEFEF",
          display: "flex",
          fontFamily: "Geist",
          height: "100%",
          position: "relative",
          width: "100%",
        }}
      >
        <img
          src={svgUri(symbol)}
          width={620}
          height={620}
          alt=""
          style={{ position: "absolute", right: -150, top: 5 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px",
            width: 760,
          }}
        >
          <img src={svgUri(wordmarkSvg("#EFEFEF"))} width={285} height={80} alt="" />
          {/* Satori não quebra texto corrido entre spans; as linhas vão explícitas. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
              Sua marca
              <span style={{ fontFamily: "Instrument Serif", fontStyle: "italic", fontWeight: 400, letterSpacing: -1.5 }}>
                vende
              </span>
            </div>
            <div style={{ display: "flex" }}>em live sem</div>
            <div style={{ display: "flex" }}>
              montar estúdio<span style={{ color: "#FE5105" }}>.</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: "rgba(239,239,239,0.6)", fontSize: 26 }}>
            <div style={{ width: 12, height: 12, borderRadius: 12, background: "#FE5105" }} />
            grupolivelab.com.br
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
        { name: "Instrument Serif", data: serifItalic, weight: 400, style: "italic" },
      ],
    }
  );
}
