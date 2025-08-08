import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProjectCoPilot from "../components/ProjectCoPilot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fixer Digital Agent - Revolutionary AI Website Optimization",
  description: "The world's most advanced AI-powered website optimization platform. Quantum deep scanning, multifold ROI guarantee, PhD-level analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ProjectCoPilot />
      </body>
    </html>
  );
}
