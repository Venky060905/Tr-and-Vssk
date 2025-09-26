export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://tr-vssk.vercel.app/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  )
}
