import { useEffect } from 'react'
import { SITE_NAME, SITE_URL } from '../config/site'

type SeoProps = {
  title: string
  description: string
  path: string
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>
}

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  const tag =
    document.querySelector<HTMLMetaElement>(selector) ??
    document.createElement('meta')

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value)
  })

  document.head.appendChild(tag)
}

export function Seo({ title, description, path, structuredData }: SeoProps) {
  useEffect(() => {
    document.title = title

    const url = `${SITE_URL}${path}`

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: url,
    })

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: structuredData ? 'article' : 'website',
    })

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary',
    })

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    })

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })

    const canonicalTag =
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      document.createElement('link')
    canonicalTag.rel = 'canonical'
    canonicalTag.href = url
    document.head.appendChild(canonicalTag)

    document
      .querySelectorAll<HTMLScriptElement>('script[data-resumeforge-schema]')
      .forEach((tag) => tag.remove())

    const schemaEntries = Array.isArray(structuredData)
      ? structuredData
      : structuredData
        ? [structuredData]
        : []

    schemaEntries.unshift({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    })

    schemaEntries.forEach((schema) => {
      const schemaTag = document.createElement('script')
      schemaTag.type = 'application/ld+json'
      schemaTag.dataset.resumeforgeSchema = 'true'
      schemaTag.textContent = JSON.stringify(schema)
      document.head.appendChild(schemaTag)
    })
  }, [description, path, structuredData, title])

  return null
}
