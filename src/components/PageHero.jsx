import Container from './Container'
import SectionLabel from './SectionLabel'
import BlueprintGrid from './BlueprintGrid'
import Crosshair from './Crosshair'

/**
 * Inner-page hero shared by About, Services, Industries, Innovation and Contact.
 * Home has its own bespoke hero. `expressive` slightly warms the treatment for
 * the Innovation page (a soft accent wash) while staying within the system.
 *
 * Props: label, heading (string | string[]), description, expressive, children
 */
export default function PageHero({ label, heading, description, expressive = false, children }) {
  const lines = Array.isArray(heading) ? heading : [heading]
  return (
    <header className="relative overflow-hidden border-b border-line">
      <BlueprintGrid drift className="opacity-[0.5]" />
      {expressive && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgb(var(--c-highlight) / 0.28), transparent 70%)' }}
        />
      )}
      <Crosshair className="crosshair-pulse right-8 top-8" />
      <Container className="relative pb-16 pt-16 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
        <div className="max-w-4xl">
          {label && (
            <div className="hero-load-eyebrow">
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}
          <div className="hero-load-heading">
            <h1 className="mt-6 text-display text-fg">
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>
          {description && (
            <div className="hero-load-description">
              <p className="mt-6 max-w-2xl text-body-lg text-fg-2">{description}</p>
            </div>
          )}
          {children && (
            <div className="hero-load-cta">
              <div className="mt-9">{children}</div>
            </div>
          )}
        </div>
      </Container>
    </header>
  )
}
