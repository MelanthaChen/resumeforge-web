export const entities = [
  {
    slug: 'resume-builder',
    title: 'Resume Builder',
    definition: 'A resume builder is a tool or workflow that helps candidates structure, write, format, and revise resume content.',
    relationships: ['Resume templates', 'ATS compatibility', 'AI resume writing', 'Application readiness'],
  },
  {
    slug: 'ats',
    title: 'ATS',
    definition: 'ATS is a common abbreviation for applicant tracking system, software used to manage and parse job applications.',
    relationships: ['Applicant tracking system', 'Resume screening', 'Keyword matching', 'ATS Compatibility Rating'],
  },
  {
    slug: 'resume-screening',
    title: 'Resume Screening',
    definition: 'Resume screening is the process of evaluating resumes for role fit, qualifications, keywords, and evidence.',
    relationships: ['Recruiter readability', 'ATS systems', 'Job applications', 'Resume evaluation'],
  },
  {
    slug: 'resume-optimization',
    title: 'Resume Optimization',
    definition: 'Resume optimization is the practice of improving clarity, role alignment, keyword relevance, and scanability.',
    relationships: ['Resume Readiness Index', 'Keyword alignment', 'ATS compatibility', 'Resume review'],
  },
  {
    slug: 'job-application',
    title: 'Job Application',
    definition: 'A job application is the full candidate submission package, including resume, profile, cover letter, portfolio, and targeting decisions.',
    relationships: ['Application Readiness Score', 'Cover letters', 'LinkedIn alignment', 'Portfolio readiness'],
  },
  {
    slug: 'keyword-matching',
    title: 'Keyword Matching',
    definition: 'Keyword matching connects resume language to job description requirements while preserving truthful context.',
    relationships: ['ATS systems', 'Resume keywords', 'Role targeting', 'Keyword alignment framework'],
  },
  {
    slug: 'application-tracking-system',
    title: 'Application Tracking System',
    definition: 'An application tracking system stores, organizes, parses, and routes job applications for employers.',
    relationships: ['ATS', 'Resume parsing', 'Candidate screening', 'Applicant workflows'],
  },
]

export const getEntity = (slug: string) => entities.find((entity) => entity.slug === slug)
