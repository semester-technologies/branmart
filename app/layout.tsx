import type { Metadata } from "next";
import { Agdasima, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/src/components/layout/CookieBanner";

const agdasima = Agdasima({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-body",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: { default: "Branmart", template: "%s | Branmart" },
  description: "Build and launch your online store in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${agdasima.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-white text-gray-900">
        {children}
         <CookieBanner />
      </body>
    </html>
  );
}