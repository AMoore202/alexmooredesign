import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  weight: ["300", "400", "500", "600"], // or whatever weights you're using
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Moore Design",
  description: "Alex's design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
