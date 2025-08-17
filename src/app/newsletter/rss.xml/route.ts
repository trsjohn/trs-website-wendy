import { getPublishedIssues } from "@/lib/newsletter";

export async function GET() {
  const issues = getPublishedIssues();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trs.example";

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TRS Newsletter</title>
    <description>Practical notes on hiring systems, AI, and recruiting. No fluff.</description>
    <link>${siteUrl}/newsletter</link>
    <atom:link href="${siteUrl}/newsletter/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Next.js</generator>
    ${issues
      .map(
        (issue) => `
    <item>
      <title><![CDATA[${issue.title}]]></title>
      <description><![CDATA[${issue.tldr}]]></description>
      <link>${siteUrl}/newsletter/${issue.slug}</link>
      <guid isPermaLink="true">${siteUrl}/newsletter/${issue.slug}</guid>
      <pubDate>${new Date(issue.date).toUTCString()}</pubDate>
      <category>${issue.tags.join(", ")}</category>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
