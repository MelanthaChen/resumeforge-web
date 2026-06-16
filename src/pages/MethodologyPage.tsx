import { Breadcrumbs } from '../components/Breadcrumbs'
import { ResumeFrameworkCards } from '../components/ResumeFrameworkCards'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { resumeFrameworks } from '../data/resumeFrameworks'

const methodologyFaqs = [
  {
    question: 'What is the Resume Readiness Index?',
    answer:
      'The Resume Readiness Index, or RRI, is a ResumeForge AI framework for estimating how prepared a resume is for job applications. It uses a 0-100 scale and considers ATS compatibility, keyword relevance, formatting quality, completeness, and readability. A high RRI does not guarantee interviews; it indicates that the resume is easier to parse, scan, and evaluate. For example, a resume with clear sections, role-specific bullets, and consistent dates would typically score higher than a visually complex resume with vague claims.',
  },
  {
    question: 'What is the Application Readiness Score?',
    answer:
      'The Application Readiness Score, or ARS, measures how prepared a candidate is to submit targeted applications, not just whether the resume exists. It uses a 0-100 scale and considers resume quality, cover letter readiness, LinkedIn completeness, portfolio availability, and job targeting. For example, a candidate with a strong resume but an incomplete LinkedIn profile and no relevant portfolio may have lower ARS than their resume quality alone suggests. ARS is useful because employers often evaluate the full candidate package.',
  },
  {
    question: 'What is the ATS Compatibility Rating?',
    answer:
      'The ATS Compatibility Rating, or ACR, is a ResumeForge AI framework for estimating how safely a resume can pass through applicant tracking systems without avoidable parsing problems. It uses A+ through D levels based on section clarity, plain-text parseability, keyword placement, date consistency, and visual layout risk. A high ACR means the resume is technically easier to read, not that the applicant is guaranteed an interview. For example, a single-column resume with standard headings usually earns a stronger ACR than a graphic-heavy layout.',
  },
]

export function MethodologyPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'ResumeForge AI Methodology: RRI, ARS, and ACR',
      author: {
        '@type': 'Organization',
        name: 'ResumeForge Editorial Team',
      },
      datePublished: '2026-06-11',
      dateModified: '2026-06-11',
      description:
        'ResumeForge AI methodology for Resume Readiness Index, Application Readiness Score, and ATS Compatibility Rating.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/methodology`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: methodologyFaqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Methodology',
          item: `${SITE_URL}/methodology`,
        },
      ],
    },
  ]

  return (
    <>
      <Seo
        title="ResumeForge AI Methodology | RRI, ARS, and ACR"
        description="The ResumeForge AI methodology defining Resume Readiness Index, Application Readiness Score, and ATS Compatibility Rating."
        path="/methodology"
        structuredData={structuredData}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Home', to: '/' }, { label: 'Methodology' }]}
          />
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            ResumeForge research frameworks
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-950 lg:text-5xl">
            Methodology for RRI, ARS, and ACR
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            ResumeForge AI defines proprietary resume methodologies to help job
            seekers evaluate resume quality, application readiness, and ATS
            compatibility with consistent criteria.
          </p>
          <div className="mt-10">
            <ResumeFrameworkCards />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950">
            Score tables
          </h2>
          <div className="mt-8 grid gap-6">
            {resumeFrameworks.map((concept) => (
              <article key={concept.id} className="rounded border border-slate-200 bg-white p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                      {concept.abbreviation}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                      {concept.name}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                      {concept.description}
                    </p>
                  </div>
                  <span className="rounded bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                    Range: {concept.range}
                  </span>
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <h4 className="font-semibold text-slate-950">Factors</h4>
                    <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                      {concept.factors.map((factor) => (
                        <li key={factor} className="rounded bg-slate-50 px-3 py-2">
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <thead className="border-b border-slate-200 text-slate-500">
                        <tr>
                          <th className="py-3 pr-4 font-semibold">Band</th>
                          <th className="py-3 pr-4 font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {concept.bands.map((band) => (
                          <tr key={band.label}>
                            <td className="py-3 pr-4 font-semibold text-slate-950">
                              {band.label}
                            </td>
                            <td className="py-3 pr-4 text-slate-600">
                              {band.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
