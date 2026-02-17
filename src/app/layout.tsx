import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CallCopilot.io — AI Sales Coach, Live on Every Call",
  description:
    "CallCopilot listens to your sales calls in real-time and coaches you through MEDDPICC, objection handling, and next-best questions — so you win more deals.",
  keywords: [
    "AI sales coach",
    "MEDDPICC",
    "real-time coaching",
    "sales enablement",
    "call coaching",
    "objection handling",
  ],
  openGraph: {
    title: "CallCopilot.io — AI Sales Coach, Live on Every Call",
    description:
      "Real-time AI coaching that adapts to your methodology and helps your team execute flawlessly on every call.",
    url: "https://callcopilot.io",
    siteName: "CallCopilot.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CallCopilot.io — AI Sales Coach, Live on Every Call",
    description:
      "Real-time AI coaching that adapts to your methodology and helps your team execute flawlessly on every call.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
