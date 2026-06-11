import { FaqBlock } from '../components/FaqBlock'
import { Seo } from '../components/Seo'
import { faqs } from '../data/faqs'

export function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ | ResumeForge AI"
        description="Answers about ResumeForge AI, its GEO experiment purpose, and its local-only analytics approach."
        path="/faq"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Frequently asked questions
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            ResumeForge AI FAQ
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Clear answers about what this site is, what it intentionally does
            not do, and how its GEO experiment content is organized.
          </p>
          <div className="mt-10">
            <FaqBlock items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
