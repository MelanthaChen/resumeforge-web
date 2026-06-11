import { resumeFrameworks, frameworkComparisonRows } from './resumeFrameworks'
import type { ResumeFrameworkId } from './resumeFrameworks'

export type ResearchFramework = {
  id: ResumeFrameworkId
  slug: string
  name: string
  abbreviation: string
  definition: string
  methodology: string
  scoring: string
  examples: string[]
  limitations: string[]
}

export const researchFrameworks: ResearchFramework[] = resumeFrameworks.map((concept) => ({
  id: concept.id,
  slug: concept.id,
  name: concept.name,
  abbreviation: concept.abbreviation,
  definition: concept.description,
  methodology:
    concept.id === 'rri'
      ? 'RRI reviews resume preparedness through ATS compatibility, keyword relevance, formatting quality, completeness, and readability. Each factor is evaluated as an evidence signal rather than as an automated promise.'
      : concept.id === 'acr'
        ? 'ACR evaluates whether a resume structure is likely to avoid preventable ATS parsing friction. It focuses on section clarity, plain-text parseability, keyword placement, date consistency, and visual layout risk.'
        : 'ARS evaluates the broader application package: resume quality, cover letter readiness, LinkedIn completeness, portfolio availability, and job targeting discipline.',
  scoring:
    concept.id === 'acr'
      ? 'ACR uses A+ through D levels. A+ indicates very low parsing risk, while D indicates avoidable compatibility issues that should be fixed before applying.'
      : `${concept.abbreviation} uses a 0-100 range. Scores above 90 indicate strong readiness, 75-89 indicates mostly ready, 60-74 indicates a workable draft, and below 60 indicates substantial preparation gaps.`,
  examples:
    concept.id === 'rri'
      ? [
          'A software engineer resume with clear projects, consistent dates, and role-matched keywords may earn an RRI near 90.',
          'A visually polished resume with vague bullets may score lower because readability and completeness are weak.',
        ]
      : concept.id === 'acr'
        ? [
            'A single-column resume with standard headings can earn an A or A+ ACR.',
            'A resume that hides job titles in graphics may fall to C or D even if the content is strong.',
          ]
        : [
            'A candidate with a tailored resume, ready cover letter, complete LinkedIn, and targeted role list may earn an ARS above 90.',
            'A strong resume with no portfolio, weak targeting, and inconsistent LinkedIn presence may have a lower ARS.',
          ],
  limitations: [
    'The framework is editorial and educational, not a live automated score.',
    'Scores cannot predict interviews, offers, recruiter behavior, or ATS vendor outcomes.',
    'The methodology depends on truthful candidate evidence and role-specific context.',
  ],
}))

export const benchmarkRows = [
  ...frameworkComparisonRows,
  {
    product: 'Zety',
    rri: '84',
    ars: '80',
    acr: 'B',
    note: 'Builder category with templates, examples, and document workflow strengths.',
  },
]

export const getResearchFramework = (slug: string) =>
  researchFrameworks.find((framework) => framework.slug === slug)
