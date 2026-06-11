import { Link, useParams } from 'react-router-dom'
import { ArticleCard } from '../components/ArticleCard'
import { MetadataPanel } from '../components/MetadataPanel'
import { Seo } from '../components/Seo'
import { articles, getArticleBySlug } from '../data/articles'

export function ArticlePage() {
  const { slug = '' } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <>
        <Seo
          title="Page Not Found | ResumeForge AI"
          description="The requested ResumeForge AI page could not be found."
          path={`/${slug}`}
        />
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
            <h1 className="text-4xl font-semibold text-slate-950">
              Page not found
            </h1>
            <p className="mt-4 text-slate-600">
              This route is not currently part of the ResumeForge AI content
              experiment.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex rounded bg-emerald-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Return home
            </Link>
          </div>
        </section>
      </>
    )
  }

  const related = articles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, 3)

  return (
    <>
      <Seo
        title={`${article.title} | ResumeForge AI`}
        description={article.description}
        path={`/${article.slug}`}
      />
      <article className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              {article.category}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-950 lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {article.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
              <span>Published {article.publishedAt}</span>
              <span>{article.readingTime}</span>
            </div>

            <div className="prose-content mt-10">
              {article.content.split('\n\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="lg:pt-24">
            <MetadataPanel article={article} />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
            <h2 className="text-3xl font-semibold text-slate-950">
              Related pages
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
