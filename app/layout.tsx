import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bersihtuntas.id"),
  title: {
    default: "BersihTuntas | Sedot WC Profesional 24 Jam",
    template: "%s | BersihTuntas"
  },
  description:
    "BersihTuntas menyediakan layanan sedot WC profesional, cepat, bersih, dan transparan untuk rumah, kantor, restoran, pabrik, dan area Jabodetabek.",
  keywords: [
    "sedot WC",
    "sedot WC Jakarta",
    "sedot WC Jabodetabek",
    "septic tank cleaning",
    "WC mampet",
    "BersihTuntas"
  ],
  authors: [{ name: "BersihTuntas" }],
  creator: "BersihTuntas",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bersihtuntas.id",
    siteName: "BersihTuntas",
    title: "BersihTuntas | Sedot WC Profesional",
    description:
      "Layanan sedot WC cepat, bersih, dan profesional. Siap melayani rumah, kantor, restoran, pabrik, dan lingkungan Anda.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1708577580884-e23b50d4a205?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Armada layanan sedot WC profesional BersihTuntas"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BersihTuntas | Sedot WC Profesional",
    description:
      "Layanan sedot WC cepat, bersih, dan profesional untuk rumah, kantor, restoran, dan industri.",
    images: [
      "https://images.unsplash.com/photo-1708577580884-e23b50d4a205?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
