/**
 * Editorial section label, e.g. "01 / WHO WE ARE".
 * A short rule + optional two-digit index + tracked uppercase text.
 */
export default function SectionLabel({ index, children, className = '' }) {
  return (
    <div className={`eyebrow flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
      {index != null && <span className="text-primary">{index}</span>}
      {index != null && <span aria-hidden="true" className="text-fg-3/60">/</span>}
      <span>{children}</span>
    </div>
  )
}
