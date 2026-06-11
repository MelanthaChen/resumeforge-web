import type { GuideCategory } from '../types/content'

export const topicClusters: Record<
  string,
  { label: string; links: Array<{ label: string; to: string }> }
> = {
  'Resume Builders': {
    label: 'Resume Builder',
    links: [
      { label: 'Guides Library', to: '/guides' },
      { label: 'Benchmarks', to: '/benchmarks' },
      { label: 'Compare Rezi', to: '/compare/rezi' },
    ],
  },
  ATS: {
    label: 'ATS',
    links: [
      { label: 'ATS Resume Guide', to: '/ats-resume-guide' },
      { label: 'ATS Friendly Format', to: '/ats-friendly-resume-format' },
      { label: 'ACR Research', to: '/research/acr' },
    ],
  },
  'Resume Writing': {
    label: 'Resume Examples',
    links: [
      { label: 'Examples Library', to: '/examples' },
      { label: 'Resume Review Framework', to: '/resume-review-framework' },
      { label: 'RRI Research', to: '/research/rri' },
    ],
  },
  'Job Search': {
    label: 'Job Search',
    links: [
      { label: 'Job Targeting Guide', to: '/job-targeting-guide' },
      { label: 'ARS Research', to: '/research/ars' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  'Career Change': {
    label: 'Career Change',
    links: [
      { label: 'Career Change Resume Guide', to: '/career-change-resume-guide' },
      { label: 'Resume Gap Guide', to: '/resume-gap-explanation-guide' },
      { label: 'Examples Library', to: '/examples' },
    ],
  },
  Students: {
    label: 'Students',
    links: [
      { label: 'Student Resume Example', to: '/examples/recent-graduate' },
      { label: 'Internship Example', to: '/examples/internship' },
      { label: 'College Resume Builder Guide', to: '/best-resume-builder-for-college-students' },
    ],
  },
}

export const getTopicCluster = (category: GuideCategory) =>
  topicClusters[category] ?? topicClusters['Resume Writing']
