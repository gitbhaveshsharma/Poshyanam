import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://poshyanam.com"),
  title: {
    default: "Poshyanam | Fortified Nut-Based Nutrition Spread for Kids",
    template: "%s | Poshyanam",
  },
  description:
    "India's first fortified nut-based nutrition spread for children, made with cashews, almonds, pistachios, walnuts, dates, and figs.",
  keywords: [
    "Poshyanam",
    "kids nutrition spread",
    "fortified nut spread",
    "no refined sugar",
    "children nutrition India",
  ],
  authors: [{ name: "Poshyanam" }],
  creator: "Poshyanam",
  openGraph: {
    title: "Poshyanam | Complete Nourishment in Every Bite",
    description:
      "Fortified nut-based nutrition spread for children with real nuts, dates, figs, and no refined sugar.",
    url: "https://poshyanam.com",
    siteName: "Poshyanam",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poshyanam | Complete Nourishment in Every Bite",
    description:
      "Natural, fortified nutrition spreads for growing children.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3F6B3C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
