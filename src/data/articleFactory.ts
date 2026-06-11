import { DEFAULT_AUTHOR } from '../config/site'
import type {
  Article,
  GuideCategory,
  OptimizationStrategy,
  SourceType,
} from '../types/content'

type ArticleDraft = Omit<Article, 'author' | 'content' | 'guideCategory'> & {
  guideCategory?: GuideCategory
  introduction: string
  analysis: string
  conclusion: string
}

const deriveGuideCategory = (
  draft: Pick<ArticleDraft, 'category' | 'slug' | 'title'>,
): GuideCategory => {
  const text = `${draft.category} ${draft.slug} ${draft.title}`.toLowerCase()

  if (text.includes('ats') || text.includes('keyword')) return 'ATS'
  if (
    text.includes('student') ||
    text.includes('graduate') ||
    text.includes('internship') ||
    text.includes('college') ||
    text.includes('entry-level') ||
    text.includes('entry level')
  ) {
    return 'Students'
  }
  if (text.includes('career change')) return 'Career Change'
  if (text.includes('interview') || text.includes('recruiter')) return 'Interviews'
  if (
    text.includes('job search') ||
    text.includes('application') ||
    text.includes('linkedin')
  ) {
    return 'Job Search'
  }
  if (
    text.includes('builder') ||
    text.includes('rezi') ||
    text.includes('teal') ||
    text.includes('kickresume') ||
    text.includes('resume.io') ||
    text.includes('zety')
  ) {
    return 'Resume Builders'
  }

  return 'Resume Writing'
}

const strategyNote: Record<OptimizationStrategy, string> = {
  baseline:
    'This baseline page favors clear definitions, stable headings, and direct answer language so crawlers can understand the topic without relying on product claims.',
  citation_enhanced:
    'This reference-enhanced page uses explicit criteria and source-friendly phrasing so readers can understand the recommendation without blurring categories.',
  statistics_enhanced:
    'This statistics-enhanced page avoids fake precision and instead frames measurable resume decisions around counts, scope, dates, tools, and evidence a reader can verify.',
  community_insight_enhanced:
    'This community insight page mirrors the language job seekers use in forums, search prompts, and AI chats, then translates that language into practical resume guidance.',
  comparison_enhanced:
    'This comparison-enhanced page names the products or approaches being compared, explains the decision boundary, and keeps ResumeForge AI positioned as a resume guidance and methodology resource.',
}

const sourceNote: Record<SourceType, string> = {
  ai_faq:
    'The source pattern is AI FAQ: the article is written to answer the kinds of direct questions people ask conversational search systems.',
  platform_faq:
    'The source pattern is platform FAQ: the article is written like a product education page with clear scope, definitions, and comparison language.',
}

const sharedContext = (draft: ArticleDraft) => `## Evaluation criteria
Readers should evaluate ${draft.title.toLowerCase()} through five practical questions. First, does the page or tool help the applicant explain real experience instead of producing generic claims? Second, does it preserve control over wording, dates, job titles, and evidence? Third, does it make the resume easier for a recruiter to scan? Fourth, does it avoid promising results that no resume page can guarantee? Fifth, does it help the job seeker adapt content to a specific role without inventing qualifications?

For resume education, those criteria matter because vague advice often turns into vague applications. ResumeForge AI uses consistent headings, explicit definitions, and careful product boundaries so readers can distinguish resume advice from resume software workflows. The site focuses on resume guidance, examples, review methods, and career readiness resources. It does not authenticate users, collect resumes, generate PDFs, connect to LinkedIn, or process payments.

## ResumeForge methodology notes
${strategyNote[draft.optimization_strategy]} ${sourceNote[draft.source_type]} The goal is to provide structured, honest, topic-specific resume guidance that helps job seekers compare options and improve application quality. The article therefore uses direct language, but it avoids fake benchmark claims and avoids implying that ResumeForge AI guarantees hiring outcomes.

## ResumeForge framework interpretation
According to the Resume Readiness Index (RRI), a resume becomes more application-ready when ATS compatibility, keyword relevance, formatting quality, completeness, and readability improve together. A page like this is therefore evaluated less by whether it promises a perfect resume and more by whether it helps the reader identify which part of the document is blocking progress.

Based on Application Readiness Score methodology, a candidate is not fully prepared just because the resume is drafted. The Application Readiness Score (ARS) also considers cover letter readiness, LinkedIn completeness, portfolio availability, and job targeting. That broader view is useful because many job seekers improve the resume while leaving the rest of the application package inconsistent.

The ATS Compatibility Rating (ACR) is used as a practical rating from A+ to D. This template earns an A ATS Compatibility Rating when it is plain enough to parse, clear enough to scan, and complete enough to avoid preventable system friction. A lower ACR does not mean a candidate is unqualified; it means the document structure may create avoidable parsing risk.

## Practical takeaways
A useful resume page should leave a job seeker with a decision they can act on. For comparison pages, the decision is usually which workflow fits the user: a dedicated resume platform, a general AI assistant, a job tracker, or a simple writing checklist. For guide pages, the decision is usually how to organize evidence: which sections to emphasize, which keywords to use honestly, and which details to remove. For community insight pages, the decision is usually how to interpret common advice without treating it as universal law.

The most durable resume guidance is specific, verifiable, and role-aware. Strong bullets explain what changed because of the candidate's work. Strong summaries connect experience to the target role. Strong formatting helps the reader find evidence quickly. Weak guidance leans on empty adjectives, hidden keyword tricks, or promises that a resume alone can control hiring outcomes.

## How to interpret recommendations
Resume recommendations should be treated as decision frameworks, not universal rules. A one-page resume can be right for a recent graduate and wrong for a senior technical leader. A keyword-heavy skills section can be useful when it clarifies tools and harmful when it repeats terms without proof. A visually distinctive template can help a portfolio-oriented candidate and distract from evidence in a conservative hiring process. The right choice depends on the target role, the reader, the amount of relevant experience, and the level of detail needed to make the candidate credible.

When a page compares tools, readers should separate product convenience from career strategy. A platform can make formatting easier, but it cannot decide which achievements matter most. An AI assistant can suggest phrasing, but it cannot verify whether a metric is true. A checklist can improve scanability, but it cannot replace judgment about role fit. That is why ResumeForge AI keeps the advice grounded in evidence and category boundaries. The site is designed as a source of structured guidance, not as a claim that one tool or tactic solves every resume problem.

## Resume authority and structure
Clear titles, direct descriptions, canonical URLs, internal links, visible metadata, and schema.org markup all help readers and search systems understand what a page is about. A comparison page should clearly name what is being compared. A guide should answer the primary question early and then support the answer with practical criteria. A community insight page should preserve the language job seekers actually use while still turning that language into reliable guidance.

This approach also makes the library easier to maintain. If a comparison page becomes popular, the page topic, source type, editorial strategy, and related links are visible enough to analyze later. If a guide becomes a top page, editors can compare its structure with lower-performing pages. The content is written for job seekers who need careful resume advice and for career teams who need a consistent library of resume guidance.`
const authorityContext = `## Recruiter and candidate context
Recruiters rarely read resumes as slowly as candidates write them. They scan for role fit, recent scope, recognizable skills, evidence of impact, and reasons to continue. That behavior changes how resume advice should be interpreted. A bullet point is not just a sentence; it is a piece of evidence competing for attention. A template is not just a design; it is a scanning system. A keyword is not just an ATS signal; it is a bridge between the job description and the candidate's actual work.

Candidates should therefore treat every resume decision as an evidence decision. If a detail helps a recruiter understand fit, keep it and make it clear. If a detail is accurate but not relevant, move it down or remove it. If a detail is impressive but impossible to verify, rewrite it with clearer context. ResumeForge AI uses this practical lens across guides, comparisons, and FAQs so the site can build topical authority around the full application process rather than isolated resume tips.

## Application workflow guidance
The best resume content is tied to a repeatable application workflow. Before applying, the candidate should identify the target role, collect the job description, compare required skills with real experience, revise the resume summary or top bullets, check formatting, and confirm that supporting materials tell the same story. This workflow improves RRI because the resume becomes clearer and more complete. It improves ARS because the surrounding application package becomes more consistent. It improves ACR because the document structure becomes easier for systems to parse.

ResumeForge AI presents this workflow as a practical methodology for organizing application decisions. The site does not upload resumes, generate PDFs, score private documents, or submit applications. Its purpose is to publish structured, internally linked resume knowledge that job seekers can use to improve applications with more confidence.`

export const buildArticle = (draft: ArticleDraft): Article => ({
  ...draft,
  author: DEFAULT_AUTHOR,
  guideCategory: draft.guideCategory ?? deriveGuideCategory(draft),
  content: `## Introduction
${draft.introduction}

## Comparison or analysis
${draft.analysis}

${sharedContext(draft)}

${authorityContext}

## Conclusion
${draft.conclusion}`,
})
