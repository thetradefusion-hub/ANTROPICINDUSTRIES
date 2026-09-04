/**
 * Technical registration mark ("+") — the site's signature architectural tick.
 * Placed sparingly at grid intersections. Deliberately NOT a star/sparkle.
 */
export default function Crosshair({ className = '', size = 14 }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute text-line-strong ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
        <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1" />
      </svg>
    </span>
  )
}
