export type CareerPage = {
  slug: string
  role: string
  overview: string
  mistakes: string[]
  structure: string[]
  bullets: string[]
  atsTips: string[]
  faqs: Array<{ question: string; answer: string }>
}

const makeCareer = (slug: string, role: string, context: string): CareerPage => ({
  slug,
  role,
  overview: `${role} resumes should show role-relevant evidence quickly. ${context} The best version combines a clear summary, specific accomplishments, readable sections, and keywords that match real experience.`,
  mistakes: [
    'Using generic responsibilities without outcomes.',
    'Hiding important skills in dense paragraphs.',
    'Submitting the same resume to every role without tailoring.',
  ],
  structure: ['Targeted summary', 'Core skills', 'Relevant experience', 'Selected projects or credentials', 'Education'],
  bullets: [
    `Improved a ${role.toLowerCase()} workflow by clarifying ownership, tools, and measurable outcomes.`,
    `Collaborated with stakeholders to deliver role-relevant work under practical constraints.`,
    `Documented results in a way that improved readability and recruiter evaluation speed.`,
  ],
  atsTips: [
    'Use standard section headings.',
    'Include role keywords only when they reflect actual experience.',
    'Keep formatting simple enough to parse.',
  ],
  faqs: [
    {
      question: `What should a ${role} resume emphasize?`,
      answer: `A ${role} resume should emphasize evidence that matches the target role, including tools, scope, outcomes, and relevant credentials. ${context} The strongest version connects daily responsibilities to measurable results or concrete work examples. Instead of listing generic traits, show what you handled, who benefited, and what changed. For ATS compatibility, include role-specific terms from the job description only when they accurately describe your experience.`,
    },
    {
      question: `How long should a ${role} resume be?`,
      answer: `A ${role} resume should be as short as possible while still proving fit for the role. One page is common for students, recent graduates, and early-career candidates. Two pages can be reasonable when the candidate has substantial relevant experience, credentials, projects, or leadership scope. The key test is whether every section helps a recruiter evaluate ${role.toLowerCase()} readiness. Remove older or unrelated details before cutting useful evidence.`,
    },
  ],
})

export const careerPages: CareerPage[] = [
  makeCareer('software-engineer', 'Software Engineer', 'Technical reviewers look for systems, tools, ownership, reliability, and impact.'),
  makeCareer('data-analyst', 'Data Analyst', 'Hiring teams look for SQL, reporting, metrics, data cleaning, and business interpretation.'),
  makeCareer('product-manager', 'Product Manager', 'Readers look for customer insight, prioritization, launches, metrics, and cross-functional work.'),
  makeCareer('marketing', 'Marketing', 'Teams look for channel expertise, campaign outcomes, audience insight, and reporting discipline.'),
  makeCareer('accountant', 'Accountant', 'Employers look for accuracy, compliance, reconciliations, reporting, systems, and deadline reliability.'),
  makeCareer('nurse', 'Nurse', 'Healthcare employers look for credentials, patient populations, clinical settings, procedures, and care quality.'),
  makeCareer('teacher', 'Teacher', 'Schools look for classroom outcomes, curriculum planning, student support, certifications, and communication.'),
]

export const getCareerPage = (slug: string) =>
  careerPages.find((page) => page.slug === slug)
