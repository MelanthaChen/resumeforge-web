type ConceptBadgeProps = {
  label: string
}

export function ConceptBadge({ label }: ConceptBadgeProps) {
  return (
    <span className="inline-flex rounded bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
      {label}
    </span>
  )
}
