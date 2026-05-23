import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Стоматология АПЕКС в Южном Бутово";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1E3A5F",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.02em" }}>
          АПЕКС
        </div>
        <div style={{ fontSize: 36, color: "#D7E3EC", marginTop: 12 }}>
          Стоматология · Южное Бутово
        </div>
        <div style={{ fontSize: 24, color: "#7BA3C0", marginTop: 28 }}>
          ★ 5.0 · 281 отзыв · +7 (495) 157-27-70
        </div>
      </div>
    ),
    { ...size }
  );
}
