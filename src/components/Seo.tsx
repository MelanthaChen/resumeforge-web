import { useEffect } from 'react'

const SITE_URL = 'https://resumeforge.ai'

type SeoProps = {
  title: string
  description: string
  path: string
}

export function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    document.title = title

    const descriptionTag =
      document.querySelector<HTMLMetaElement>('meta[name="description"]') ??
      document.createElement('meta')
    descriptionTag.name = 'description'
    descriptionTag.content = description
    document.head.appendChild(descriptionTag)

    const canonicalTag =
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      document.createElement('link')
    canonicalTag.rel = 'canonical'
    canonicalTag.href = `${SITE_URL}${path}`
    document.head.appendChild(canonicalTag)
  }, [description, path, title])

  return null
}
