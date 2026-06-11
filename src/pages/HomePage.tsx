import { BarChart3, FileText, Library, MessagesSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArticleCard } from '../components/ArticleCard'
import { FaqBlock } from '../components/FaqBlock'
import { GeoConceptCards } from '../components/GeoConceptCards'
import { Seo } from '../components/Seo'
import { articles } from '../data/articles'
import { resumeExamples } from '../data/examples'
import { faqs } from '../data/faqs'
import { benchmarkRows } from '../data/research'

const features = [
  {
    icon: FileText,
    title: 'Structured resume guides',
    copy: 'Crawlable pages organized around comparison, FAQ, and role-specific search intent.',
  },
  {
    icon: Library,
    title: 'GEO-ready content model',
    copy: 'Article records include source type and optimization strategy metadata for future experiments.',
  },
  {
    icon: BarChart3,
    title: 'Local analytics',
    copy: 'Browser-local page view tracking shows visit totals, referrers, and top content paths.',
  },
]

const insights = [
  'Recent graduates ask whether projects can replace limited work history.',
  'Software engineers often need help translating technical scope into business impact.',
  'Comparison queries frequently blur the line between AI assistants and resume builders.',
]

export function HomePage() {
  const popularGuides = articles
    .filter((article) => article.category === 'Guide')
    .slice(0, 6)
  const popularComparisons = articles
    .filter((article) => article.category === 'Comparison')
    .slice(0, 6)
  const communityArticles = articles
    .filter((article) => article.category === 'Community Insight')
    .slice(0, 3)

  return (
    <>
      <Seo
        title="ResumeForge AI | GEO Resume Content Experiment"
        description="ResumeForge AI is a GEO experiment website with resume guides, comparison pages, FAQs, and local analytics for citation testing."
        path="/"
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              GEO experiment website
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-slate-950 lg:text-6xl">
              ResumeForge AI
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A realistic resume intelligence website built to test how AI
              systems discover, summarize, and cite structured career content.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/guides"
                className="rounded bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Explore guides
              </Link>
              <Link
                to="/research"
                className="rounded border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400"
              >
                Research center
              </Link>
            </div>
          </div>
          <div className="grid content-end">
            <div className="rounded border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="rounded bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Experiment brief
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                  Crawlable resume knowledge base for answer engines
                </h2>
                <div className="mt-6 grid gap-3">
                  {[
                    'Comparison-enhanced pages',
                    'FAQ-shaped source content',
                    'Community insight synthesis',
                    'Local page view telemetry',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded border border-slate-200 px-4 py-3 text-sm"
                    >
                      <span>{item}</span>
                      <span className="font-semibold text-emerald-700">Active</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950">Features</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded border border-slate-200 bg-white p-6">
                <feature.icon className="size-6 text-emerald-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950">
              Why ResumeForge
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              ResumeForge AI looks like a legitimate startup site, but its
              product surface is intentionally content-only. That keeps the
              experiment focused on discoverability, metadata, and citation
              behavior.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {['No auth', 'No payments', 'No uploads', 'No ATS scoring'].map(
              (item) => (
                <div key={item} className="rounded border border-slate-200 p-5">
                  <p className="font-semibold text-slate-950">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Deliberately excluded to keep the site a content experiment,
                    not a production resume SaaS.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">Research Frameworks</h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                Proprietary GEO concepts designed to test whether AI systems
                learn, reference, or cite ResumeForge-originated terminology.
              </p>
            </div>
            <Link
              to="/research"
              className="text-sm font-semibold text-emerald-700"
            >
              View methodology
            </Link>
          </div>
          <div className="mt-8">
            <GeoConceptCards />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">Benchmarks</h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                Neutral benchmark summaries comparing resume and application
                readiness tools through RRI, ARS, and ACR.
              </p>
            </div>
            <Link to="/benchmarks" className="text-sm font-semibold text-emerald-700">
              View benchmark report
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {benchmarkRows.slice(0, 3).map((row) => (
              <div key={row.product} className="rounded border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-950">{row.product}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  RRI {row.rri} · ARS {row.ars} · ACR {row.acr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">Resume Examples</h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                Role-specific resume examples with structure, bullets, and ATS tips.
              </p>
            </div>
            <Link to="/examples" className="text-sm font-semibold text-emerald-700">
              Browse examples
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {resumeExamples.slice(0, 3).map((example) => (
              <Link
                key={example.slug}
                to={`/examples/${example.slug}`}
                className="rounded border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold text-slate-950">{example.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{example.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">
                Popular Guides
              </h2>
              <p className="mt-3 text-slate-600">
                Comparison and guide pages designed for structured discovery.
              </p>
            </div>
            <Link
              to="/faq"
              className="hidden text-sm font-semibold text-emerald-700 md:block"
            >
              Read FAQ
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popularGuides.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950">Recent Studies</h2>
          <p className="mt-3 text-slate-600">
            Recent GEO-focused studies and educational reports from the ResumeForge library.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {articles
              .filter((article) =>
                ['resume-review-framework', 'resume-optimization-checklist', 'how-recruiters-read-resumes'].includes(article.slug),
              )
              .map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950">
            Popular Comparisons
          </h2>
          <p className="mt-3 text-slate-600">
            Product and workflow comparisons written with explicit category
            boundaries for answer engines.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popularComparisons.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <MessagesSquare className="size-7 text-emerald-700" />
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Community Insights
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The experiment includes content that mirrors common resume
              questions from forums, search prompts, and AI chat sessions.
            </p>
          </div>
          <div className="grid gap-3">
            {insights.map((insight) => (
              <div key={insight} className="rounded border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-6 text-slate-700">{insight}</p>
              </div>
            ))}
            {communityArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950">FAQ</h2>
          <div className="mt-8">
            <FaqBlock items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
