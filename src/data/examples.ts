export type ResumeExample = {
  slug: string
  title: string
  role: string
  summary: string
  sections: string[]
  bullets: string[]
  atsTips: string[]
}

export const resumeExamples: ResumeExample[] = [
  {
    slug: 'software-engineer',
    title: 'Software Engineer Resume Example',
    role: 'Software Engineer',
    summary: 'Backend-focused engineer with experience building reliable APIs, internal tools, and cloud services.',
    sections: ['Summary', 'Technical Skills', 'Experience', 'Projects', 'Education'],
    bullets: ['Built API monitoring workflows that reduced incident triage time by 28%.', 'Improved deployment reliability by adding automated integration checks.'],
    atsTips: ['Use exact technologies from the role when accurate.', 'Keep project names text-based and easy to parse.'],
  },
  {
    slug: 'data-analyst',
    title: 'Data Analyst Resume Example',
    role: 'Data Analyst',
    summary: 'Analyst experienced in SQL reporting, dashboard design, stakeholder requests, and operational metrics.',
    sections: ['Summary', 'Skills', 'Analytics Experience', 'Projects', 'Education'],
    bullets: ['Created weekly revenue dashboard used by sales leadership for pipeline reviews.', 'Cleaned and joined customer data sources to improve churn analysis quality.'],
    atsTips: ['Include SQL, BI tools, and statistics terms in context.', 'Name business metrics supported by the analysis.'],
  },
  {
    slug: 'product-manager',
    title: 'Product Manager Resume Example',
    role: 'Product Manager',
    summary: 'Product manager with experience translating user research into roadmap decisions and measurable launches.',
    sections: ['Summary', 'Product Experience', 'Selected Launches', 'Skills', 'Education'],
    bullets: ['Led onboarding experiment that increased activation by 14%.', 'Prioritized roadmap tradeoffs using customer interviews and usage data.'],
    atsTips: ['Use terms like roadmap, experimentation, discovery, adoption, and stakeholders when truthful.', 'Clarify product scope and metric ownership.'],
  },
  {
    slug: 'marketing',
    title: 'Marketing Resume Example',
    role: 'Marketing Specialist',
    summary: 'Marketing professional with campaign, content, lifecycle, and performance reporting experience.',
    sections: ['Summary', 'Marketing Skills', 'Experience', 'Campaigns', 'Education'],
    bullets: ['Launched lifecycle email campaign that improved trial conversion by 9%.', 'Produced SEO briefs that increased qualified organic traffic.'],
    atsTips: ['Include channel-specific terms such as SEO, lifecycle, paid social, or CRM.', 'Tie campaign work to measurable outcomes.'],
  },
  {
    slug: 'recent-graduate',
    title: 'Recent Graduate Resume Example',
    role: 'Recent Graduate',
    summary: 'Recent graduate with internship, project, leadership, and coursework experience aligned to entry-level roles.',
    sections: ['Education', 'Projects', 'Internship Experience', 'Leadership', 'Skills'],
    bullets: ['Built capstone dashboard analyzing public health data trends.', 'Coordinated student organization event with 120 attendees.'],
    atsTips: ['Use coursework only when relevant to the role.', 'Make projects read like evidence, not class descriptions.'],
  },
  {
    slug: 'internship',
    title: 'Internship Resume Example',
    role: 'Internship Candidate',
    summary: 'Internship candidate with academic projects, campus leadership, and early professional experience.',
    sections: ['Education', 'Relevant Projects', 'Experience', 'Activities', 'Skills'],
    bullets: ['Analyzed survey results and presented recommendations to faculty team.', 'Supported customer intake process during part-time service role.'],
    atsTips: ['Include target internship keywords naturally.', 'Keep the format simple and one page when possible.'],
  },
]

export const getResumeExample = (slug: string) =>
  resumeExamples.find((example) => example.slug === slug)
