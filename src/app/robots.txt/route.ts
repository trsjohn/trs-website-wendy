export async function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://trs.example/sitemap.xml`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}


