import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { cn } from "./components/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aforshow",
  description: "A spanish programming event of the community making talks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={cn(dmSans.className, "text-white")}>{children}</body>
    </html>
  );
}
