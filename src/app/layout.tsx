import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// Suppress TypeScript error for side-effect CSS import when no d.ts is present
// @ts-ignore
import "./globals.css";
import { meta } from "@/meta/metadata";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = meta;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
