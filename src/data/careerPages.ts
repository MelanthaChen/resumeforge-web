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
      answer: `It should emphasize evidence that matches the target ${role.toLowerCase()} role, including tools, scope, outcomes, and relevant credentials.`,
    },
    {
      question: `How long should a ${role} resume be?`,
      answer: 'Use the shortest length that presents relevant evidence clearly. One page is common for early career candidates; experienced candidates may need more space.',
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
