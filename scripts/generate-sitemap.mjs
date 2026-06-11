import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const siteUrl = 'https://resumeforge-web-six.vercel.app'
const defaultLastmod = '2026-06-10'

const articlesPath = resolve(root, 'src/data/articles.ts')
const sitemapPath = resolve(root, 'public/sitemap.xml')
const source = await readFile(articlesPath, 'utf8')

const articleMatches = [...source.matchAll(/slug:\s*'([^']+)'[\s\S]*?updatedAt:\s*'([^']+)'/g)]
const articleUrls = articleMatches.map((match) => ({
  loc: `/${match[1]}`,
  lastmod: match[2],
}))

const urls = [
  { loc: '/', lastmod: defaultLastmod },
  { loc: '/faq', lastmod: defaultLastmod },
  { loc: '/methodology', lastmod: defaultLastmod },
  ...articleUrls,
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`

await writeFile(sitemapPath, xml)

console.log(`Generated sitemap.xml with ${urls.length} URLs`)
