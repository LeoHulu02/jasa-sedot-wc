import { ImageResponse } from "next/og";

import { company } from "@/lib/site-data";

export const runtime = "edge";
export const alt = "BersihTuntas - Sedot WC Profesional 24 Jam";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #07163a 0%, #1e40af 55%, #eff6ff 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(147, 197, 253, 0.28)"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.12)"
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 88,
                height: 88,
                borderRadius: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                color: "#1d4ed8",
                fontSize: 48,
                fontWeight: 900
              }}
            >
              B
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 46, fontWeight: 900, letterSpacing: -1 }}>
                {company.name}
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#bfdbfe" }}>
                {company.tagline}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 860 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                borderRadius: 999,
                padding: "14px 24px",
                background: "rgba(255, 255, 255, 0.16)",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                fontSize: 22,
                fontWeight: 800
              }}
            >
              Layanan Sedot WC 24 Jam
            </div>
            <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.02, letterSpacing: -3 }}>
              WC Mampet? Kami Bereskan Sampai Tuntas!
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.35, color: "#dbeafe" }}>
              Cepat, bersih, profesional, dan siap melayani rumah, kantor, restoran, pabrik,
              serta area Jabodetabek.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                borderRadius: 24,
                padding: "18px 26px",
                background: "white",
                color: "#1e3a8a",
                fontSize: 26,
                fontWeight: 900
              }}
            >
              Hubungi: {company.phone}
            </div>
            <div style={{ fontSize: 22, color: "#bfdbfe", fontWeight: 700 }}>
              Harga mulai Rp350.000
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
