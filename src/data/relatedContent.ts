import { articles } from './articles'
import { comparisons } from './comparisons'
import { faqTopics } from './faqs'
import type { Article } from '../types/content'

export const getRelatedArticles = (article: Article, limit = 3) => {
  const explicit = article.relatedSlugs
    ?.map((slug) => articles.find((item) => item.slug === slug))
    .filter((item): item is Article => Boolean(item))

  return [
    ...(explicit ?? []),
    ...articles.filter(
      (item) =>
        item.slug !== article.slug &&
        (item.guideCategory === article.guideCategory ||
          item.category === article.category),
    ),
  ]
    .filter(
      (item, index, list) =>
        item.slug !== article.slug &&
        list.findIndex((related) => related.slug === item.slug) === index,
    )
    .slice(0, limit)
}

export const getRelatedComparisons = (limit = 2) => comparisons.slice(0, limit)

export const getRelatedFaqs = (article?: Article, limit = 4) => {
  const topic = faqTopics.find((item) =>
    article ? item.topic.toLowerCase().includes(article.guideCategory.toLowerCase().split(' ')[0]) : false,
  )

  return (topic?.items ?? faqTopics.flatMap((item) => item.items)).slice(0, limit)
}
