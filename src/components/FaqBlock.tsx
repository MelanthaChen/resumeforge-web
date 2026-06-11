type FaqBlockProps = {
  items: Array<{ question: string; answer: string }>
}

export function FaqBlock({ items }: FaqBlockProps) {
  return (
    <div className="divide-y divide-slate-200 rounded border border-slate-200 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
