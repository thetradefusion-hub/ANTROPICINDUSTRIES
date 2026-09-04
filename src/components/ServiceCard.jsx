import { capabilityIcons, getServiceIcon, IconContainer } from './semanticIcons'

/**
 * Service offering. Rendered as an editorial row/card, not a busy icon tile.
 * The numeric index comes from the content (services are an indexed catalog);
 * `items` lists the sub-capabilities as a clean wrapped list.
 */
export default function ServiceCard({ index, title, description, items = [], className = '' }) {
  const ServiceIcon = getServiceIcon(title)

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface p-7 transition-all duration-300 ease-precise hover:-translate-y-1 hover:border-line-strong hover:shadow-card sm:p-8 ${className}`}
    >
      <span aria-hidden="true" className="sheen" />

      <div className="relative z-10 mb-5 flex items-baseline justify-between">
        {index != null && (
          <span className="font-mono text-sm font-semibold text-fg-3 transition-colors duration-300 group-hover:text-primary">
            {index}
          </span>
        )}
        <span
          aria-hidden="true"
          className="h-px w-10 origin-right scale-x-100 bg-line-strong transition-all duration-300 group-hover:w-14 group-hover:bg-primary"
        />
      </div>

      <div className="relative z-10 mb-5 flex items-start gap-4">
        <IconContainer>
          <ServiceIcon size={24} strokeWidth={1.6} />
        </IconContainer>
        <h3 className="pt-1 text-h3 text-fg">{title}</h3>
      </div>
      <p className="relative z-10 mt-3 text-[0.98rem] leading-relaxed text-fg-2">{description}</p>

      {items.length > 0 && (
        <ul className="relative z-10 mt-6 grid gap-x-6 gap-y-2 border-t border-line pt-5 sm:grid-cols-2">
          {items.map((item, i) => {
            const ItemIcon = capabilityIcons[i % capabilityIcons.length]
            return (
            <li key={item} className="flex items-start gap-2.5 text-sm text-fg-2">
              <span aria-hidden="true" className="mt-0.5 text-primary/70">
                <ItemIcon size={15} strokeWidth={1.7} />
              </span>
              <span>{item}</span>
            </li>
            )
          })}
        </ul>
      )}
    </article>
  )
}
