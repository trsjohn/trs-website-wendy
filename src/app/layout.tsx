import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import { Toasts } from "@/components/Toasts";

export const metadata: Metadata = {
  title: "TRS Recruiting Engine",
  description:
    "TRS blends AI, automation, and high-touch recruiting to help startups hire faster and better.",
  metadataBase: new URL("https://trs.example"), // TODO: update on deploy
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    title: "TRS Recruiting Engine",
    description:
      "TRS blends AI, automation, and high-touch recruiting to help startups hire faster and better.",
    url: "https://trs.example", // TODO: update on deploy
    siteName: "TRS",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TRS Recruiting Engine",
    description:
      "TRS blends AI, automation, and high-touch recruiting to help startups hire faster and better.",
  },
};

// Body: Plus Jakarta Sans (modern, clean). Headings: Sora (bold, futuristic)
const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const headingFont = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${bodyFont.className}`}
    >
      <body className="min-h-screen bg-neutral-950 text-neutral-100">
        <Toasts />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
