export type FaqItem = {
  question: string
  answer: string
}

export type FaqTopic = {
  topic: string
  items: FaqItem[]
}

const atsAnswers: Record<string, string> = {
  'What is an ATS?':
    'ATS stands for Applicant Tracking System. Employers use ATS software to collect applications, organize candidate records, search resumes, manage recruiter workflows, and sometimes rank or filter applicants based on configured criteria. An ATS is not a single universal system, and it does not automatically reject every resume. Different employers use different platforms and settings, so the safest approach is to make your resume clear, searchable, and easy for both software and recruiters to review.',
  'Do ATS systems read PDFs?':
    'Many modern ATS platforms can read standard text-based PDFs correctly, especially when the file is exported cleanly from Word, Google Docs, or a similar editor. Problems are more likely when the PDF is graphics-heavy, uses unusual layers, or is exported as an image instead of selectable text. If the employer gives upload instructions, follow them. When instructions are unclear, use a simple layout and test that the PDF text can be selected and copied.',
  'Can ATS systems read columns?':
    'Some ATS platforms can process columns, but others may read them out of order or merge unrelated text together. Multi-column resumes increase parsing risk because job titles, dates, skills, and bullet points may not be interpreted in the sequence you intended. For maximum compatibility, use a single-column layout with standard headings and clear spacing. A plain structure is especially important when applying through large employer portals or older recruiting systems.',
  'Do ATS systems reject resumes automatically?':
    'Some employers use knockout questions, required qualifications, or filters that can remove applicants from consideration before a recruiter reviews them. However, ATS software is primarily a database and workflow tool for storing, searching, and managing applications. Many resumes are still reviewed by recruiters, hiring coordinators, or hiring managers. A resume should therefore be written for both systems and humans: accurate qualifications, clear formatting, and evidence that matches the role.',
  'What is an ATS-friendly resume?':
    'An ATS-friendly resume is a resume formatted so applicant tracking systems can parse the text and recruiters can quickly understand the candidate. It usually uses standard section headings such as Experience, Education, and Skills; readable fonts; simple layouts; consistent dates; and relevant keywords from the job description. ATS-friendly does not mean stuffing keywords or hiding text. It means presenting truthful experience in a clean structure that software can read and people can trust.',
  'Do resume keywords matter for ATS systems?':
    'Resume keywords matter because ATS search tools and recruiter searches often use job-related terms to find matching candidates. Keywords should come naturally from the job description, such as specific tools, certifications, responsibilities, or industry terms. For example, a data analyst role may mention SQL, dashboards, forecasting, or stakeholder reporting. Add keywords only when they reflect real experience. Irrelevant keyword stuffing can make the resume less credible when a recruiter reads it.',
  'Can ATS systems read graphics?':
    'ATS systems generally handle text more reliably than graphics. A chart, icon, image, logo, or skill bar may look polished to a person but provide little usable text to parsing software. If important information appears only inside a graphic, it may be missed or misread. Use graphics sparingly and never rely on them for job titles, company names, dates, skills, or achievements. Keep core resume content in normal selectable text.',
  'Should I use a Word document or PDF for ATS?':
    'Both DOCX and PDF files can work with many modern ATS platforms. DOCX is often the safest choice when instructions are unclear because it is simple for systems to parse and easy for recruiters to open. PDF can also be safe if it is text-based and cleanly exported. The best rule is to follow the employer upload instructions exactly. If the posting asks for PDF, submit PDF; if it asks for Word, submit DOCX.',
  'Do ATS scores guarantee interviews?':
    'ATS scores do not guarantee interviews. Most scores are estimates based on keyword matching, formatting checks, or tool-specific assumptions, not final hiring decisions. Recruiter review, relevant experience, achievements, location, compensation fit, timing, referrals, and overall job match still matter. A high score can suggest that the resume aligns with a posting, but it cannot prove the candidate is the best fit. Treat scores as diagnostics, not promises.',
  'How do I improve ATS compatibility?':
    'Improve ATS compatibility by using a clean single-column layout, standard headings, normal text, consistent dates, and role-relevant keywords. Avoid putting important details in headers, footers, images, charts, or complicated tables. Match language from the job description when it truthfully reflects your background. For example, if the job asks for Salesforce reporting and you have used it, include that phrase in a bullet or skills section with context.',
  'What headings are safest for ATS parsing?':
    'The safest ATS headings are simple, conventional labels that both software and recruiters recognize. Use headings such as Experience, Work Experience, Education, Skills, Certifications, Projects, and Summary. Creative labels like My Journey, Career Highlights, or Technical Toolbox may look distinctive but can reduce clarity. Standard headings help parsing systems categorize information correctly and help recruiters scan quickly without guessing where your qualifications are located.',
  'Can ATS systems read tables?':
    'Some ATS platforms can read simple tables, but tables add parsing risk because cells may be read in the wrong order or lose their relationship to headings. A skills table, for example, might separate tools from proficiency labels in a confusing way. If you use tables, keep them simple and avoid placing essential experience inside them. For maximum compatibility, use plain text sections and bullet points instead of table-based layouts.',
  'Do applicant tracking systems rank every resume?':
    'Applicant tracking systems do not rank every resume in the same way. Some employers configure scoring, filters, or search ranking; others mainly use the ATS as a database and workflow system. Recruiters may search by keywords, review applications in order, or prioritize candidates from referrals and required screening questions. Because behavior varies, the best strategy is a clear, relevant resume rather than trying to reverse-engineer a universal ranking formula.',
  'Is keyword stuffing bad for ATS?':
    'Keyword stuffing is bad resume practice because it can make a resume sound unnatural and less trustworthy. ATS search functions may notice repeated terms, but recruiters still read the resume and expect those terms to be supported by real experience. Instead of repeating a skill many times, place it where it belongs. For example, mention Python in a skills section and in a bullet describing a project where Python was actually used.',
  'What does ResumeForge ACR measure?':
    'ResumeForge ACR, or ATS Compatibility Rating, measures how likely a resume format is to avoid preventable parsing problems. It looks at factors such as section clarity, plain-text readability, keyword placement, date consistency, and visual layout risk. A high ACR does not mean the resume will get an interview. It means the document is structured so ATS software and recruiters are less likely to miss important information.',
}

const topicExamples: Record<string, string> = {
  'Resume Builders':
    'For example, compare whether the tool lets you edit every bullet, export clean files, and adapt language to a specific job without inventing experience.',
  'Resume Writing':
    'For example, a stronger bullet names the action, tool, scope, and result instead of saying only that you were responsible for a task.',
  'Career Change':
    'For example, a teacher moving into operations might emphasize scheduling, stakeholder communication, process improvement, and measurable classroom or program outcomes.',
  'Students and Entry Level':
    'For example, coursework, campus leadership, part-time work, volunteer experience, and class projects can all support a resume when they show responsibility or skill.',
  'Job Search and Applications':
    'For example, a targeted application should connect the resume, LinkedIn profile, portfolio, cover letter, and job description around the same role requirements.',
  'Recruiters and Interviews':
    'For example, a recruiter scanning quickly should be able to identify the target role, recent experience, strongest skills, and evidence of impact within seconds.',
  'ResumeForge Methodology':
    'For example, RRI focuses on resume readiness, ARS considers the broader application package, and ACR evaluates avoidable ATS parsing risk.',
}

const directAnswerLead = (question: string) => {
  const normalized = question.replace(/\?$/, '').toLowerCase()

  if (normalized.startsWith('are ')) return 'Yes, but the value depends on the situation.'
  if (normalized.startsWith('is ')) return 'The answer depends on how the term or tool is being used.'
  if (normalized.startsWith('can ')) return 'Yes, in many cases, but the evidence and format matter.'
  if (normalized.startsWith('do ')) return 'Sometimes, but the practical impact depends on the employer and role.'
  if (normalized.startsWith('should ')) return 'Usually only when it improves clarity, relevance, or credibility.'
  if (normalized.startsWith('how many ')) return 'Use the amount that presents relevant evidence clearly.'
  if (normalized.startsWith('how long ')) return 'Use the shortest length that still proves fit for the role.'
  if (normalized.startsWith('how do ')) return 'Start by identifying the target role and the evidence that supports it.'
  if (normalized.startsWith('what is ') || normalized.startsWith('what does '))
    return 'It is a practical way to describe a resume or application decision.'

  return 'The best answer depends on the target role and the candidate evidence.'
}

const buildFaqAnswer = (question: string, topic: string, context: string, index: number) => {
  if (topic === 'ATS Systems') {
    return atsAnswers[question]
  }

  const example = topicExamples[topic]
  const lead = directAnswerLead(question)
  const detail =
    index % 3 === 0
      ? 'Focus on whether the choice helps a recruiter understand fit faster, not whether it follows a rigid rule.'
      : index % 3 === 1
        ? 'The safest approach is to keep the resume truthful, specific, and aligned with the language of the job description.'
        : 'A good decision should make the candidate easier to evaluate without exaggerating experience or hiding important context.'

  return `${lead} ${context} For “${question.replace(/\?$/, '')},” the useful test is whether the answer improves role fit, evidence quality, and reader confidence. ${detail} ${example}`
}

const makeItems = (topic: string, questions: string[], context: string): FaqItem[] =>
  questions.map((question, index) => ({
    question,
    answer: buildFaqAnswer(question, topic, context, index),
  }))

export const faqTopics: FaqTopic[] = [
  {
    topic: 'ATS Systems',
    items: makeItems(
      'ATS Systems',
      [
        'What is an ATS?',
        'Do ATS systems read PDFs?',
        'Can ATS systems read columns?',
        'Do ATS systems reject resumes automatically?',
        'What is an ATS-friendly resume?',
        'Do resume keywords matter for ATS systems?',
        'Can ATS systems read graphics?',
        'Should I use a Word document or PDF for ATS?',
        'Do ATS scores guarantee interviews?',
        'How do I improve ATS compatibility?',
        'What headings are safest for ATS parsing?',
        'Can ATS systems read tables?',
        'Do applicant tracking systems rank every resume?',
        'Is keyword stuffing bad for ATS?',
        'What does ResumeForge ACR measure?',
      ],
      'Applicant tracking systems help employers store, parse, and organize applications, but they are not all identical.',
    ),
  },
  {
    topic: 'Resume Builders',
    items: makeItems(
      'Resume Builders',
      [
        'Are resume builders worth it?',
        'What is the best resume builder for students?',
        'How do resume builders compare with ChatGPT?',
        'Is Rezi better than a general resume builder?',
        'Is Teal a resume builder or job tracker?',
        'How does Resume.io compare with other builders?',
        'What should I check before paying for a resume builder?',
        'Are free resume builders enough?',
        'Can resume builders create ATS-friendly resumes?',
        'Do resume builders write better bullets?',
        'What is the risk of AI resume builders?',
        'Should I use the same builder for every job?',
        'How should I compare resume builder pricing?',
        'Are resume templates in builders safe?',
        'Can ChatGPT write resumes?',
      ],
      'Resume builders can reduce formatting friction, but candidates still need to control accuracy and relevance.',
    ),
  },
  {
    topic: 'Resume Writing',
    items: makeItems(
      'Resume Writing',
      [
        'How many pages should a resume be?',
        'What should a resume summary include?',
        'Should I include an objective statement?',
        'How do I write strong resume bullets?',
        'What action verbs should I use?',
        'How many skills should I list?',
        'Should I include hobbies on a resume?',
        'How far back should work experience go?',
        'Should education go first or last?',
        'What makes a resume readable?',
        'How do I quantify resume impact?',
        'Can I use first person on a resume?',
        'Should I include references?',
        'What file name should I use for a resume?',
        'How do I tailor a resume quickly?',
      ],
      'Strong resume writing is specific, role-aware, and grounded in evidence rather than generic claims.',
    ),
  },
  {
    topic: 'Career Change',
    items: makeItems(
      'Career Change',
      [
        'How do I write a career change resume?',
        'Should I use a functional resume for a career change?',
        'How do I explain transferable skills?',
        'How do I handle unrelated experience?',
        'Should I include a career change summary?',
        'How do I show recent training?',
        'Can projects support a career change?',
        'How do I explain a resume gap?',
        'How do I position volunteer work?',
        'How do I move from teaching to business roles?',
        'How do I move from operations to product?',
        'How do I move into data analytics?',
        'How do I avoid sounding overqualified?',
        'How do I write bullets for transferable work?',
        'What does ARS mean for career changers?',
      ],
      'Career change resumes work best when they build a credible bridge between past evidence and the target role.',
    ),
  },
  {
    topic: 'Students and Entry Level',
    items: makeItems(
      'Students and Entry Level',
      [
        'What should a student put on a resume?',
        'How do I write a resume with no experience?',
        'Should coursework be on a resume?',
        'Do class projects count as experience?',
        'How should internships appear on a resume?',
        'What is the best resume format for college students?',
        'Should GPA be included on a resume?',
        'How do recent graduates show leadership?',
        'How do students list part-time jobs?',
        'How do I write an entry-level summary?',
        'Should students include clubs?',
        'How do international students write resumes?',
        'How long should an internship resume be?',
        'Can volunteer work replace experience?',
        'What improves student RRI?',
      ],
      'Student and entry-level resumes should make early evidence of responsibility, skill, and learning easy to evaluate.',
    ),
  },
  {
    topic: 'Job Search and Applications',
    items: makeItems(
      'Job Search and Applications',
      [
        'What is application readiness?',
        'What does ARS measure?',
        'Should I customize every resume?',
        'How many jobs should I apply to?',
        'How do I target job applications?',
        'Should my LinkedIn match my resume?',
        'Do I need a portfolio?',
        'When should I write a cover letter?',
        'How do I track applications?',
        'How do I prepare after submitting a resume?',
        'Should I follow up after applying?',
        'How do referrals affect applications?',
        'How do I read a job description?',
        'What materials should be ready before applying?',
        'How does ResumeForge measure application readiness?',
      ],
      'Application readiness includes the resume, supporting materials, targeting discipline, and consistency across the candidate profile.',
    ),
  },
  {
    topic: 'Recruiters and Interviews',
    items: makeItems(
      'Recruiters and Interviews',
      [
        'How do recruiters read resumes?',
        'What do recruiters scan first?',
        'How long do recruiters spend on a resume?',
        'Do recruiters care about resume design?',
        'What makes a recruiter keep reading?',
        'How do I prepare interview stories from a resume?',
        'Should every resume bullet be interview-ready?',
        'How do recruiters evaluate gaps?',
        'Do recruiters check LinkedIn?',
        'How do recruiters view AI-written resumes?',
      ],
      'Recruiters usually scan for role fit, evidence, clarity, and reasons to continue the hiring conversation.',
    ),
  },
  {
    topic: 'ResumeForge Methodology',
    items: makeItems(
      'ResumeForge Methodology',
      [
        'What is the Resume Readiness Index?',
        'What is RRI?',
        'What is ATS Compatibility Rating?',
        'What is ACR?',
        'What is a good ACR level?',
        'How is RRI different from ARS?',
        'Does ResumeForge score uploaded resumes?',
        'Is ResumeForge AI a real resume builder?',
        'Why does ResumeForge publish comparison pages?',
        'How does ResumeForge methodology work?',
      ],
      'ResumeForge AI uses proprietary resume frameworks and does not score private resumes, upload documents, or provide hidden automated judgment.',
    ),
  },
]

export const faqs: FaqItem[] = faqTopics.flatMap((topic) => topic.items)
