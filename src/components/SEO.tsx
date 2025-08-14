"use client";
import { DefaultSeo } from "next-seo";

export function SEO() {
  return (
    <DefaultSeo
      titleTemplate="%s | TRS"
      defaultTitle="TRS — AI-enabled recruiting, human-first"
      description="High-signal recruiting for startups: AI + human judgment."
      openGraph={{ type: "website", url: "https://trs.example", siteName: "TRS" }}
    />
  );
}


