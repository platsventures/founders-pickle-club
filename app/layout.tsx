import type { Metadata } from "next";
import { Archivo, DM_Mono } from "next/font/google";
import SaascoAnalytics from "@/lib/SaascoAnalytics";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Founders Pickle Club",
  description:
    "Where Aotearoa's founders, operators, and builders rally together on the court. All skill levels welcome.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${dmMono.variable} antialiased`}>
        {children}
        <SaascoAnalytics />
      </body>
    </html>
  );
}
