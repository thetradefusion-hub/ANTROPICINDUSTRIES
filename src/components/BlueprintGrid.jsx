/**
 * Decorative blueprint grid layer. Absolutely positioned, non-interactive,
 * hidden from assistive tech. Fades at the edges via a mask in index.css.
 * Pass `drift` to slowly pan the grid (used on heroes); it loops seamlessly
 * over one 44px cell and is disabled under reduced-motion.
 */
export default function BlueprintGrid({ className = '', drift = false }) {
  return (
    <div
      aria-hidden="true"
      className={`blueprint pointer-events-none absolute inset-0 ${drift ? 'grid-drift' : ''} ${className}`}
    />
  )
}
