import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const siteUrl = 'https://resumeforge-web-six.vercel.app'
const defaultLastmod = '2026-06-11'

const articlesPath = resolve(root, 'src/data/articles.ts')
const expandedArticlesPath = resolve(root, 'src/data/expandedArticles.ts')
const examplesPath = resolve(root, 'src/data/examples.ts')
const careerPagesPath = resolve(root, 'src/data/careerPages.ts')
const programmaticPath = resolve(root, 'src/data/programmaticLandingPages.ts')
const benchmarkFrameworksPath = resolve(root, 'src/data/benchmarkFrameworks.ts')
const entitiesPath = resolve(root, 'src/data/entities.ts')
const sitemapPath = resolve(root, 'public/sitemap.xml')
const source = `${await readFile(articlesPath, 'utf8')}\n${await readFile(
  expandedArticlesPath,
  'utf8',
)}`
const examplesSource = await readFile(examplesPath, 'utf8')
const careerSource = await readFile(careerPagesPath, 'utf8')
const programmaticSource = await readFile(programmaticPath, 'utf8')
const benchmarkFrameworksSource = await readFile(benchmarkFrameworksPath, 'utf8')
const entitiesSource = await readFile(entitiesPath, 'utf8')

const articleUrls = [...source.matchAll(/slug:\s*'([^']+)'/g)]
  .map((match) => {
    const localSource = source.slice(match.index ?? 0, (match.index ?? 0) + 1200)
    const updatedAt = localSource.match(/updatedAt:\s*'([^']+)'/)?.[1]

    return {
      loc: `/${match[1]}`,
      lastmod: updatedAt ?? defaultLastmod,
    }
  })
  .filter(
    (url, index, list) => list.findIndex((item) => item.loc === url.loc) === index,
  )

const urls = [
  { loc: '/', lastmod: defaultLastmod },
  { loc: '/faq', lastmod: defaultLastmod },
  { loc: '/guides', lastmod: defaultLastmod },
  { loc: '/hub', lastmod: defaultLastmod },
  { loc: '/research', lastmod: defaultLastmod },
  { loc: '/research/terminology', lastmod: defaultLastmod },
  { loc: '/research/rri', lastmod: defaultLastmod },
  { loc: '/research/acr', lastmod: defaultLastmod },
  { loc: '/research/ars', lastmod: defaultLastmod },
  { loc: '/benchmarks', lastmod: defaultLastmod },
  ...[...benchmarkFrameworksSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => ({
    loc: `/benchmarks/${match[1]}`,
    lastmod: defaultLastmod,
  })),
  { loc: '/entities', lastmod: defaultLastmod },
  ...[...entitiesSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => ({
    loc: `/entities/${match[1]}`,
    lastmod: defaultLastmod,
  })),
  { loc: '/examples', lastmod: defaultLastmod },
  { loc: '/methodology', lastmod: defaultLastmod },
  { loc: '/compare/rezi', lastmod: defaultLastmod },
  { loc: '/compare/teal', lastmod: defaultLastmod },
  { loc: '/compare/resume-io', lastmod: defaultLastmod },
  { loc: '/compare/kickresume', lastmod: defaultLastmod },
  { loc: '/compare/zety', lastmod: defaultLastmod },
  ...[...examplesSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => ({
    loc: `/examples/${match[1]}`,
    lastmod: defaultLastmod,
  })),
  ...[...careerSource.matchAll(/makeCareer\('([^']+)'/g)].map((match) => ({
    loc: `/resume/${match[1]}`,
    lastmod: defaultLastmod,
  })),
  ...[...programmaticSource.matchAll(/\[\s*'([^']+)',\s*'[^']+'/g)].map((match) => ({
    loc: `/best-resume-builder-for-${match[1]}`,
    lastmod: defaultLastmod,
  })),
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
