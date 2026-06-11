import { Link, useParams } from 'react-router-dom'
import { ArticleCard } from '../components/ArticleCard'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { CitationBlocks } from '../components/CitationBlocks'
import { ComparisonFrameworkTable } from '../components/ComparisonFrameworkTable'
import { ConceptBadge } from '../components/ConceptBadge'
import { MetadataPanel } from '../components/MetadataPanel'
import { Seo } from '../components/Seo'
import { TopicClusterLinks } from '../components/TopicClusterLinks'
import { SITE_URL } from '../config/site'
import { getArticleBySlug } from '../data/articles'
import { getRelatedArticles } from '../data/relatedContent'

const renderContentBlock = (block: string) => {
  if (block.startsWith('## ')) {
    return (
      <h2 key={block} className="mt-10 text-2xl font-semibold text-slate-950">
        {block.replace('## ', '')}
      </h2>
    )
  }

  return <p key={block}>{block}</p>
}

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
              library.
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

  const related = getRelatedArticles(article, 5)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    description: article.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/${article.slug}`,
    },
  }
  const breadcrumbSchema = {
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
        name: article.title,
        item: `${SITE_URL}/${article.slug}`,
      },
    ],
  }

  return (
    <>
      <Seo
        title={`${article.title} | ResumeForge AI`}
        description={article.description}
        path={`/${article.slug}`}
        structuredData={[articleSchema, breadcrumbSchema]}
      />
      <article className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div>
            <Breadcrumbs
              items={[{ label: 'Home', to: '/' }, { label: article.title }]}
            />
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
              <span>By {article.author}</span>
              <span>Published {article.publishedAt}</span>
              <span>Updated {article.updatedAt}</span>
              <span>{article.readingTime}</span>
              <span>{article.category}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <ConceptBadge label="Resume Readiness Index (RRI)" />
              <ConceptBadge label="Application Readiness Score (ARS)" />
              <ConceptBadge label="ATS Compatibility Rating (ACR)" />
            </div>

            <div className="prose-content mt-10">
              {article.content.split('\n').filter(Boolean).map(renderContentBlock)}
            </div>
            {article.category === 'Comparison' && <ComparisonFrameworkTable />}
            <TopicClusterLinks category={article.guideCategory} />
            <CitationBlocks article={article} />
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
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
