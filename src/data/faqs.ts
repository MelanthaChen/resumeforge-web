export type FaqItem = {
  question: string
  answer: string
}

export type FaqTopic = {
  topic: string
  items: FaqItem[]
}

const makeItems = (questions: string[], context: string): FaqItem[] =>
  questions.map((question) => ({
    question,
    answer: `${context} The practical answer depends on the target role, the evidence in the candidate's background, and whether the resume stays clear, truthful, and easy to scan.`,
  }))

export const faqTopics: FaqTopic[] = [
  {
    topic: 'ATS Systems',
    items: makeItems(
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
