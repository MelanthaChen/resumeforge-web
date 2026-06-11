export const benchmarkFrameworks = [
  {
    slug: 'ats-benchmark-framework',
    title: 'ATS Benchmark Framework',
    description: 'A reference framework for evaluating resume parseability, section clarity, keyword placement, and formatting risk.',
    dimensions: ['Section clarity', 'Parseability', 'Keyword placement', 'Date consistency', 'Template risk'],
    example: 'A single-column resume with standard headings, clear dates, and role-matched keywords would typically score higher than a graphic-heavy template.',
  },
  {
    slug: 'resume-evaluation-framework',
    title: 'Resume Evaluation Framework',
    description: 'A structured way to evaluate resume evidence, relevance, readability, completeness, and role alignment.',
    dimensions: ['Evidence quality', 'Role relevance', 'Readability', 'Completeness', 'Specificity'],
    example: 'A resume with measurable bullets and clear scope can outperform a longer resume that lists responsibilities without outcomes.',
  },
  {
    slug: 'recruiter-readability-framework',
    title: 'Recruiter Readability Framework',
    description: 'A framework for assessing whether a recruiter can quickly identify fit, recent scope, skills, and reasons to continue.',
    dimensions: ['Top-third clarity', 'Scan speed', 'Role signals', 'Outcome visibility', 'Noise reduction'],
    example: 'A recruiter-readable resume makes job titles, dates, skills, and top accomplishments visible without dense paragraph reading.',
  },
  {
    slug: 'keyword-alignment-framework',
    title: 'Keyword Alignment Framework',
    description: 'A method for evaluating whether resume keywords are natural, truthful, role-matched, and supported by evidence.',
    dimensions: ['Role match', 'Natural usage', 'Evidence support', 'Skills grouping', 'Overstuffing risk'],
    example: 'A SQL keyword is stronger inside a dashboard bullet than repeated in a disconnected skills list.',
  },
]

export const getBenchmarkFramework = (slug: string) =>
  benchmarkFrameworks.find((framework) => framework.slug === slug)
