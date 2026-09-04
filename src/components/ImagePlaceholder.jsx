import Crosshair from './Crosshair'
import BlueprintGrid from './BlueprintGrid'

/**
 * Image placeholder that preserves the intended dimensions, aspect ratio and
 * visual hierarchy so layouts don't shift when real photography is supplied.
 *
 * To drop in a real asset later, pass `src` (and `alt`); everything else stays
 * the same. `priority` marks the primary hero image for eager/high-priority load.
 *
 * Props:
 *   label     - what the final image depicts (e.g. "Digital infrastructure")
 *   ratio     - aspect ratio string, e.g. "16 / 9", "4 / 3", "1 / 1"
 *   src, alt  - optional real image
 *   priority  - eager-load + high fetch priority (hero only)
 *   tone      - "default" | "primary" (adds a soft blue wash)
 */
export default function ImagePlaceholder({
  label = 'Image',
  ratio = '16 / 9',
  src,
  alt = '',
  priority = false,
  tone = 'default',
  className = ''
}) {
  const frame = `group relative overflow-hidden rounded-card-lg border border-line bg-surface-alt ${className}`

  if (src) {
    return (
      <div className={frame} style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-precise group-hover:scale-[1.04]"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={priority ? 'high' : 'auto'}
        />
        <span aria-hidden="true" className="scanline" />
      </div>
    )
  }

  return (
    <div
      className={frame}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${label} (image placeholder)`}
    >
      {tone === 'primary' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{ background: 'var(--grad-soft)' }}
        />
      )}
      <BlueprintGrid className="opacity-60 transition-transform duration-[1200ms] ease-precise group-hover:scale-[1.06]" />
      <span aria-hidden="true" className="scanline" />

      {/* Corner registration marks */}
      <Crosshair className="left-3 top-3 -translate-x-1/2 -translate-y-1/2 transition-colors duration-500 group-hover:text-primary" />
      <Crosshair className="right-3 top-3 translate-x-1/2 -translate-y-1/2 transition-colors duration-500 group-hover:text-primary" />
      <Crosshair className="left-3 bottom-3 -translate-x-1/2 translate-y-1/2 transition-colors duration-500 group-hover:text-primary" />
      <Crosshair className="right-3 bottom-3 translate-x-1/2 translate-y-1/2 transition-colors duration-500 group-hover:text-primary" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="font-mono text-sm font-semibold tracking-tight text-fg-2">{label}</span>
        <span className="eyebrow text-[0.62rem] text-fg-3">
          Image placeholder · {ratio.replace(/\s/g, '')}
        </span>
      </div>
    </div>
  )
}
