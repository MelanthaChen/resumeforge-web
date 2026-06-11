import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { articles } from '../data/articles'
import { benchmarkFrameworks } from '../data/benchmarkFrameworks'
import { comparisons } from '../data/comparisons'
import { entities } from '../data/entities'
import { resumeExamples } from '../data/examples'
import { programmaticLandingPages } from '../data/programmaticLandingPages'
import { researchFrameworks } from '../data/research'

const groups = [
  {
    title: 'Resume Builder Guides',
    links: programmaticLandingPages.map((page) => ({ label: page.title, to: `/${page.slug}` })),
  },
  {
    title: 'ATS Guides',
    links: articles
      .filter((article) => article.guideCategory === 'ATS')
      .map((article) => ({ label: article.title, to: `/${article.slug}` })),
  },
  {
    title: 'Resume Examples',
    links: resumeExamples.map((example) => ({ label: example.title, to: `/examples/${example.slug}` })),
  },
  {
    title: 'Career Guides',
    links: articles
      .filter((article) => ['Career Change', 'Job Search', 'Students'].includes(article.guideCategory))
      .slice(0, 24)
      .map((article) => ({ label: article.title, to: `/${article.slug}` })),
  },
  {
    title: 'Resume Comparisons',
    links: comparisons.map((comparison) => ({ label: `ResumeForge AI vs ${comparison.name}`, to: `/compare/${comparison.slug}` })),
  },
  {
    title: 'Research Frameworks',
    links: researchFrameworks.map((framework) => ({ label: framework.name, to: `/research/${framework.slug}` })),
  },
  {
    title: 'ResumeForge Methodology',
    links: [
      { label: 'Methodology', to: '/methodology' },
      { label: 'Research Terminology', to: '/research/terminology' },
      { label: 'Benchmarks', to: '/benchmarks' },
      ...benchmarkFrameworks.map((framework) => ({ label: framework.title, to: `/benchmarks/${framework.slug}` })),
      ...entities.map((entity) => ({ label: entity.title, to: `/entities/${entity.slug}` })),
    ],
  },
]

export function HubPage() {
  return (
    <>
      <Seo
        title="GEO Content Hub | ResumeForge AI"
        description="Central discovery hub for ResumeForge AI guides, examples, benchmarks, research frameworks, entities, and methodology pages."
        path="/hub"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            GEO content hub
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            ResumeForge central discovery hub
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            A crawlable map of ResumeForge AI research, benchmarks, examples,
            guides, comparisons, methodology, and entity reference pages.
          </p>
          <div className="mt-10 grid gap-6">
            {groups.map((group) => (
              <section key={group.title} className="rounded border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold text-slate-950">{group.title}</h2>
                  <span className="rounded bg-white px-3 py-1 text-sm font-semibold text-slate-600">
                    {group.links.length} pages
                  </span>
                </div>
                <div className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                  {group.links.map((link) => (
                    <Link key={link.to} to={link.to} className="text-sm font-semibold text-emerald-700">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
