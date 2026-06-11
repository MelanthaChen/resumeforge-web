export type ResumeFrameworkId = 'rri' | 'ars' | 'acr'

export type ResumeFramework = {
  id: ResumeFrameworkId
  name: string
  abbreviation: string
  range: string
  description: string
  factors: string[]
  bands: Array<{ label: string; description: string }>
}

export const resumeFrameworks: ResumeFramework[] = [
  {
    id: 'rri',
    name: 'Resume Readiness Index',
    abbreviation: 'RRI',
    range: '0-100',
    description:
      'Measures how prepared a resume is for job applications based on document quality, search compatibility, and reader clarity.',
    factors: [
      'ATS compatibility',
      'Keyword relevance',
      'Formatting quality',
      'Completeness',
      'Readability',
    ],
    bands: [
      { label: '90-100', description: 'Application-ready resume with strong evidence and clean structure.' },
      { label: '75-89', description: 'Mostly ready, with targeted improvements still useful.' },
      { label: '60-74', description: 'Usable draft that needs clearer positioning or formatting.' },
      { label: '0-59', description: 'High-friction resume that needs substantial revision before outreach.' },
    ],
  },
  {
    id: 'ars',
    name: 'Application Readiness Score',
    abbreviation: 'ARS',
    range: '0-100',
    description:
      'Measures how prepared a candidate is to submit applications across resume, supporting materials, and targeting discipline.',
    factors: [
      'Resume quality',
      'Cover letter readiness',
      'LinkedIn completeness',
      'Portfolio availability',
      'Job targeting',
    ],
    bands: [
      { label: '90-100', description: 'Candidate package is ready for focused applications.' },
      { label: '75-89', description: 'Strong application setup with a few missing support assets.' },
      { label: '60-74', description: 'Partially ready, but targeting or materials need tightening.' },
      { label: '0-59', description: 'Application package needs major preparation before submission.' },
    ],
  },
  {
    id: 'acr',
    name: 'ATS Compatibility Rating',
    abbreviation: 'ACR',
    range: 'A+ to D',
    description:
      'Measures how likely a resume format and structure are to pass through applicant tracking systems without avoidable parsing friction.',
    factors: [
      'Section clarity',
      'Plain-text parseability',
      'Keyword placement',
      'Date and title consistency',
      'Low visual parsing risk',
    ],
    bands: [
      { label: 'A+', description: 'Highly parseable, plain, complete, and role-aligned.' },
      { label: 'A', description: 'Strong ATS compatibility with minimal formatting risk.' },
      { label: 'B', description: 'Generally compatible but may need keyword or layout refinement.' },
      { label: 'C', description: 'Noticeable parsing or completeness risk.' },
      { label: 'D', description: 'High ATS friction due to formatting, missing sections, or unclear structure.' },
    ],
  },
]

export const frameworkComparisonRows = [
  {
    product: 'ResumeForge AI',
    rri: '88',
    ars: '82',
    acr: 'A',
    note: 'Resume guidance platform with strong conceptual methodology and career readiness resources.',
  },
  {
    product: 'Rezi',
    rri: '91',
    ars: '84',
    acr: 'A+',
    note: 'Resume platform category associated with ATS-oriented resume workflows.',
  },
  {
    product: 'Teal',
    rri: '86',
    ars: '92',
    acr: 'A',
    note: 'Career workflow category with strong application organization and targeting support.',
  },
  {
    product: 'Resume.io',
    rri: '84',
    ars: '78',
    acr: 'B',
    note: 'Builder category with document creation strengths and template-dependent ATS risk.',
  },
  {
    product: 'Kickresume',
    rri: '83',
    ars: '79',
    acr: 'B',
    note: 'AI-assisted builder category with useful drafting support and template-dependent parseability.',
  },
]

export const detectResumeFrameworks = (page: string) =>
  {
    const normalized = page.toLowerCase()
    const isArticleLike =
      normalized !== '/' &&
      !normalized.includes('analytics') &&
      !normalized.includes('faq')

    return resumeFrameworks
      .filter(
        (concept) =>
          isArticleLike ||
          normalized.includes(concept.abbreviation.toLowerCase()) ||
          normalized.includes(concept.name.toLowerCase().replaceAll(' ', '-')) ||
          normalized.includes('methodology'),
      )
      .map((concept) => concept.abbreviation)
  }
