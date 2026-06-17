import { FaqBlock } from '../components/FaqBlock'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { faqs, faqTopics } from '../data/faqs'

export function FaqPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
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
          name: 'FAQ',
          item: `${SITE_URL}/faq`,
        },
      ],
    },
  ]

  return (
    <>
      <Seo
        title="FAQ | GeoAIResume"
        description="Answers about GeoAIResume, ATS resume guidance, resume examples, application readiness, and GeoAIResume methodologies."
        path="/faq"
        structuredData={structuredData}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Frequently asked questions
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            GeoAIResume FAQ
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Clear answers about what this site is, what it intentionally does
            not do, and how its resume guidance is organized.
          </p>
          <div className="mt-10 grid gap-8">
            {faqTopics.map((topic) => (
              <section key={topic.topic}>
                <h2 className="mb-4 text-2xl font-semibold text-slate-950">
                  {topic.topic}
                </h2>
                <FaqBlock items={topic.items} />
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
