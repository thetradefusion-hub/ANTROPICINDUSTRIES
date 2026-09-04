import { Link } from 'react-router-dom'
import { ArrowRight } from './icons'

/**
 * Chooses the right element: internal route (to) -> Link, external (href) -> a,
 * otherwise a real <button>. Keeps semantics and keyboard behavior correct.
 */
function Pressable({ to, href, children, className, ...rest }) {
  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}

const shared =
  'group relative overflow-hidden inline-flex items-center justify-center rounded-full font-medium ' +
  'transition-all duration-300 ease-precise focus-visible:outline-2 disabled:opacity-60 disabled:pointer-events-none'

export default function PrimaryButton({ children, showArrow = true, size = 'md', className = '', ...rest }) {
  const pad = size === 'lg' ? 'px-7 py-3.5 text-[0.98rem]' : 'px-6 py-3 text-sm'
  return (
    <Pressable
      className={`${shared} ${pad} bg-primary text-white shadow-subtle hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lift active:translate-y-0 ${className}`}
      {...rest}
    >
      <span aria-hidden="true" className="sheen" />
      <span className="relative z-10 inline-flex items-center gap-2.5">
        <span>{children}</span>
        {showArrow && (
          <ArrowRight
            size={18}
            className="transition-transform duration-300 ease-precise group-hover:translate-x-1"
          />
        )}
      </span>
    </Pressable>
  )
}

export function SecondaryButton({ children, showArrow = true, size = 'md', className = '', ...rest }) {
  const pad = size === 'lg' ? 'px-7 py-3.5 text-[0.98rem]' : 'px-6 py-3 text-sm'
  return (
    <Pressable
      className={`${shared} ${pad} border border-line-strong bg-surface/70 text-fg hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:bg-surface hover:shadow-card ${className}`}
      {...rest}
    >
      <span aria-hidden="true" className="sheen" />
      <span className="relative z-10 inline-flex items-center gap-2.5">
        <span>{children}</span>
        {showArrow && (
          <ArrowRight
            size={18}
            className="transition-transform duration-300 ease-precise group-hover:translate-x-1"
          />
        )}
      </span>
    </Pressable>
  )
}
