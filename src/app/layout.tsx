import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import { Toasts } from "@/components/Toasts";
import { Bebas_Neue, DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "TRS | Recruiting",
    template: "%s | TRS",
  },
  description:
    "Full-service recruiting and executive search partner for technical companies in cybersecurity, defense, infrastructure, and deep tech. GTM, engineering, and specialized, hard to fill roles.",
  metadataBase: new URL("https://trsolutions.io"),
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
    title: "TRS | Recruiting",
    description:
      "Full-service recruiting and executive search partner for technical companies in cybersecurity, defense, infrastructure, and deep tech. GTM, engineering, and specialized, hard to fill roles.",
    url: "https://trsolutions.io",
    siteName: "TRS",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TRS | Recruiting",
    description:
      "Full-service recruiting and executive search partner for technical companies in cybersecurity, defense, infrastructure, and deep tech. GTM, engineering, and specialized, hard to fill roles.",
  },
};



const headingFont = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


// Body: Plus Jakarta Sans (modern, clean). Headings: Sora (bold, futuristic)
// const bodyFont = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-body",
// });

// const headingFont = Sora({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["600", "700", "800"],
//   variable: "--font-heading",
// });

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
