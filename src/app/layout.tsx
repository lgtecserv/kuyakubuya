import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { SITE_CONFIG } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "KuyaKubuya Moçambique — Viagens, Entregas e Fretes com Conforto",
    template: "%s | KuyaKubuya Moçambique",
  },
  description:
    "Plataforma moçambicana de mobilidade urbana, Mototáxi, Txopela, Carro, Delivery e Fretes em Maputo, Matola e arredores. Conduza ou viaje com segurança.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    siteName: SITE_CONFIG.brandName,
    title: "KuyaKubuya — Viaja com conforto em Moçambique",
    description:
      "Peça Mototáxi, Txopela, Carro, Delivery ou Frete em segundos com acompanhamento em tempo real e PIN de embarque.",
    url: "/",
    images: ["/brand/icon-kk.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KuyaKubuya — Viaja com conforto em Moçambique",
    description:
      "Peça Mototáxi, Txopela, Carro, Delivery ou Frete em segundos com acompanhamento em tempo real e PIN de embarque.",
    images: ["/brand/icon-kk.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-MZ"
      className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#0b1c30]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
