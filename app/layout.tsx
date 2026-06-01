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
  applicationName: "BersihTuntas",
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
  verification: {
    google: "7G8AZP44j6FcDfLbOol-qUmHkZiHIptgyjs7Xbj5Ero"
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "BersihTuntas",
    title: "BersihTuntas | Sedot WC Profesional 24 Jam",
    description:
      "Layanan sedot WC cepat, bersih, dan profesional. Siap melayani rumah, kantor, restoran, pabrik, dan area Jabodetabek.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BersihTuntas - Sedot WC Profesional 24 Jam"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BersihTuntas | Sedot WC Profesional 24 Jam",
    description:
      "Layanan sedot WC cepat, bersih, dan profesional untuk rumah, kantor, restoran, pabrik, dan area Jabodetabek.",
    images: ["/twitter-image"]
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
