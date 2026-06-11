export type SourceType = 'ai_faq' | 'platform_faq'

export type OptimizationStrategy =
  | 'baseline'
  | 'citation_enhanced'
  | 'statistics_enhanced'
  | 'community_insight_enhanced'
  | 'comparison_enhanced'

export type GuideCategory =
  | 'Resume Writing'
  | 'ATS'
  | 'Career Change'
  | 'Students'
  | 'Interviews'
  | 'Job Search'
  | 'Resume Builders'

export type Article = {
  slug: string
  title: string
  description: string
  category: string
  guideCategory: GuideCategory
  content: string
  author: string
  source_type: SourceType
  optimization_strategy: OptimizationStrategy
  publishedAt: string
  updatedAt: string
  readingTime: string
  relatedSlugs?: string[]
}
