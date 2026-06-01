import OpenGraphImage from "./opengraph-image";

export const runtime = "edge";
export const alt = "BersihTuntas - Sedot WC Profesional 24 Jam";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function TwitterImage() {
  return OpenGraphImage();
}
