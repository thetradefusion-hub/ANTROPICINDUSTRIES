import { getIndustryIcon, IconContainer } from './semanticIcons'

/**
 * Industry entry. Industries are a catalog (not a sequence), so there is no
 * numeric index here by design — the sector name leads, backed by a hairline
 * keyline that activates on hover.
 */
export default function IndustryCard({ title, description, className = '' }) {
  const IndustryIcon = getIndustryIcon(title)

  return (
    <article
      className={`group relative overflow-hidden rounded-card border border-line bg-surface p-6 transition-all duration-300 ease-precise hover:-translate-y-1 hover:border-line-strong hover:bg-surface-alt hover:shadow-card sm:p-7 ${className}`}
    >
      <span aria-hidden="true" className="sheen" />
      <div className="relative z-10 mb-5 flex items-center justify-between">
        <IconContainer>
          <IndustryIcon size={24} strokeWidth={1.6} />
        </IconContainer>
        <span aria-hidden="true" className="h-px w-16 bg-line transition-all duration-500 ease-precise group-hover:w-20 group-hover:bg-primary" />
      </div>
      <h3 className="relative z-10 font-display text-lg font-semibold tracking-tight text-fg transition-transform duration-300 ease-precise group-hover:translate-x-1">
        {title}
      </h3>
      <p className="relative z-10 mt-2.5 text-sm leading-relaxed text-fg-2">{description}</p>
    </article>
  )
}
