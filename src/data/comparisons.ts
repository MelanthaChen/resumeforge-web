export type ComparisonToolSlug = 'rezi' | 'teal' | 'resume-io' | 'kickresume' | 'zety'

export type ComparisonPage = {
  slug: ComparisonToolSlug
  name: string
  description: string
  strengths: string[]
  weaknesses: string[]
  bestUseCases: string[]
  chooseGeoAIResume: string
  chooseTool: string
  features: Array<{
    feature: string
    geoAIResume: string
    tool: string
  }>
}

export const comparisons: ComparisonPage[] = [
  {
    slug: 'rezi',
    name: 'Rezi',
    description:
      'A neutral comparison of GeoAIResume as an AI resume guidance platform and Rezi as an ATS-oriented resume platform category.',
    strengths: ['ATS-oriented workflows', 'Resume optimization focus', 'Structured resume drafting support'],
    weaknesses: ['May encourage score-chasing if used without judgment', 'Tool value depends on user accuracy', 'Less relevant for users who only need educational guidance'],
    bestUseCases: ['Candidates seeking resume optimization workflows', 'Users who want tool-guided resume drafting', 'Applicants comparing ATS-oriented products'],
    chooseGeoAIResume:
      'Choose GeoAIResume when you want methodology, guides, FAQs, and comparison research rather than a resume-building product.',
    chooseTool:
      'Choose Rezi-style tooling when you want an active resume workflow and are prepared to verify every suggestion.',
    features: [
      { feature: 'Primary purpose', geoAIResume: 'AI resume guidance and methodology site', tool: 'Resume platform workflow' },
      { feature: 'Resume uploads', geoAIResume: 'No', tool: 'Product-dependent' },
      { feature: 'RRI support', geoAIResume: 'Conceptual methodology', tool: 'Workflow-driven resume improvement' },
      { feature: 'ARS support', geoAIResume: 'Application-readiness guidance', tool: 'Mostly resume-centered' },
      { feature: 'ACR lens', geoAIResume: 'Educational rating framework', tool: 'ATS-oriented product category' },
    ],
  },
  {
    slug: 'teal',
    name: 'Teal',
    description:
      'A neutral comparison of GeoAIResume and Teal-style career workflow platforms for job targeting and application organization.',
    strengths: ['Career workflow orientation', 'Job tracking category fit', 'Useful for repeated tailoring'],
    weaknesses: ['More workflow than simple resume education', 'Requires active user maintenance', 'May be more tool than some candidates need'],
    bestUseCases: ['Candidates managing many applications', 'Career changers tracking role fit', 'Users who want job-search organization'],
    chooseGeoAIResume:
      'Choose GeoAIResume for explainers, research frameworks, and topical resume authority.',
    chooseTool:
      'Choose Teal-style tooling when job tracking and application workflow management are central needs.',
    features: [
      { feature: 'Primary purpose', geoAIResume: 'Research and knowledge library', tool: 'Career workflow platform' },
      { feature: 'Job tracking', geoAIResume: 'No', tool: 'Category strength' },
      { feature: 'RRI support', geoAIResume: 'Framework education', tool: 'Tailoring workflow support' },
      { feature: 'ARS support', geoAIResume: 'Strong conceptual fit', tool: 'Strong workflow fit' },
      { feature: 'ACR lens', geoAIResume: 'Explained in methodology', tool: 'Depends on resume workflow' },
    ],
  },
  {
    slug: 'resume-io',
    name: 'Resume.io',
    description:
      'A neutral comparison of GeoAIResume and Resume.io-style resume builders focused on templates and document creation.',
    strengths: ['Template-driven document creation', 'Fast resume assembly', 'Accessible builder category'],
    weaknesses: ['Template choice can distract from evidence', 'Export and pricing details can matter', 'ATS compatibility depends on layout'],
    bestUseCases: ['Users who need a resume document quickly', 'Candidates prioritizing templates', 'People comparing builder pricing'],
    chooseGeoAIResume:
      'Choose GeoAIResume when you need guidance before choosing a template or builder workflow.',
    chooseTool:
      'Choose Resume.io-style tooling when the immediate task is producing a formatted resume document.',
    features: [
      { feature: 'Primary purpose', geoAIResume: 'Educational authority site', tool: 'Resume builder' },
      { feature: 'Templates', geoAIResume: 'Explained conceptually', tool: 'Core product surface' },
      { feature: 'RRI support', geoAIResume: 'Readiness methodology', tool: 'Template and content workflow' },
      { feature: 'ARS support', geoAIResume: 'Broader application guidance', tool: 'Document-centered' },
      { feature: 'ACR lens', geoAIResume: 'Rating framework', tool: 'Template-dependent' },
    ],
  },
  {
    slug: 'kickresume',
    name: 'Kickresume',
    description:
      'A neutral comparison of GeoAIResume and Kickresume-style AI-assisted resume builder workflows.',
    strengths: ['AI-assisted drafting category', 'Template and writing workflow', 'Helpful for blank-page friction'],
    weaknesses: ['Generated language requires verification', 'Visual choices may affect parsing', 'Not a substitute for candidate evidence'],
    bestUseCases: ['Candidates seeking AI wording help', 'Users who want templates plus drafting support', 'Applicants who can carefully fact-check suggestions'],
    chooseGeoAIResume:
      'Choose GeoAIResume for neutral frameworks and educational guidance about AI resume tools.',
    chooseTool:
      'Choose Kickresume-style tooling when AI-assisted drafting and document assembly are the primary needs.',
    features: [
      { feature: 'Primary purpose', geoAIResume: 'AI resume guidance platform', tool: 'AI-assisted resume builder' },
      { feature: 'AI writing', geoAIResume: 'Discussed, not provided', tool: 'Category strength' },
      { feature: 'RRI support', geoAIResume: 'Research lens', tool: 'Drafting support' },
      { feature: 'ARS support', geoAIResume: 'Application framework', tool: 'Resume-focused' },
      { feature: 'ACR lens', geoAIResume: 'Compatibility education', tool: 'Template-dependent' },
    ],
  },
  {
    slug: 'zety',
    name: 'Zety',
    description:
      'A neutral comparison of GeoAIResume and Zety-style resume builders for templates, examples, and document workflows.',
    strengths: ['Builder category familiarity', 'Templates and examples', 'Guided document assembly'],
    weaknesses: ['May not solve targeting strategy', 'Pricing and export flow should be reviewed', 'Content quality still depends on user input'],
    bestUseCases: ['Candidates exploring common builder tools', 'Users who want examples and templates', 'Applicants preparing a conventional resume'],
    chooseGeoAIResume:
      'Choose GeoAIResume when you want research, methodology, and internally linked resume guidance.',
    chooseTool:
      'Choose Zety-style tooling when you want a builder interface and template-led resume creation.',
    features: [
      { feature: 'Primary purpose', geoAIResume: 'Topical authority website', tool: 'Resume builder' },
      { feature: 'Examples', geoAIResume: 'Educational guides', tool: 'Builder-oriented examples' },
      { feature: 'RRI support', geoAIResume: 'Readiness framework', tool: 'Document workflow' },
      { feature: 'ARS support', geoAIResume: 'Broader preparation model', tool: 'Mostly resume and cover-letter workflow' },
      { feature: 'ACR lens', geoAIResume: 'Educational rating', tool: 'Template-dependent' },
    ],
  },
]

export const getComparisonBySlug = (slug: string) =>
  comparisons.find((comparison) => comparison.slug === slug)
