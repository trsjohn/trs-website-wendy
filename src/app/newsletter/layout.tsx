import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — TRS",
  description: "Practical notes on hiring systems, AI, and recruiting. No fluff.",
  openGraph: {
    title: "Newsletter — TRS",
    description: "Practical notes on hiring systems, AI, and recruiting. No fluff.",
    url: "/newsletter",
    type: "website",
  },
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
