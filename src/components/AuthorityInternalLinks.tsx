import { Link } from 'react-router-dom'

const groups = [
  {
    title: 'Related Articles',
    links: [
      { label: 'Resume Optimization Checklist', to: '/resume-optimization-checklist' },
      { label: 'Resume Review Framework', to: '/resume-review-framework' },
      { label: 'ATS Friendly Resume Format', to: '/ats-friendly-resume-format' },
    ],
  },
  {
    title: 'You May Also Like',
    links: [
      { label: 'Guides Library', to: '/guides' },
      { label: 'Resume Examples', to: '/examples' },
      { label: 'Content Hub', to: '/hub' },
    ],
  },
  {
    title: 'Research References',
    links: [
      { label: 'Resume Readiness Index', to: '/research/rri' },
      { label: 'ATS Compatibility Rating', to: '/research/acr' },
      { label: 'Application Readiness Score', to: '/research/ars' },
    ],
  },
  {
    title: 'Comparison Guides',
    links: [
      { label: 'Compare Rezi', to: '/compare/rezi' },
      { label: 'Compare Teal', to: '/compare/teal' },
      { label: 'Benchmark Library', to: '/benchmarks' },
    ],
  },
  {
    title: 'Framework References',
    links: [
      { label: 'Research Terminology', to: '/research/terminology' },
      { label: 'Entity Library', to: '/entities' },
      { label: 'Methodology', to: '/methodology' },
    ],
  },
]

export function AuthorityInternalLinks() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {group.title}
            </h2>
            <div className="mt-3 grid gap-2 text-sm">
              {group.links.map((link) => (
                <Link key={link.to} to={link.to} className="font-semibold text-emerald-700">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
