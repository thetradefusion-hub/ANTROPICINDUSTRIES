import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll wrapper. A clean entrance (fade + directional move),
 * triggered once when the element enters the viewport. Decorative only:
 * reduced-motion users get the content immediately (handled in index.css),
 * and if IntersectionObserver is unavailable the content shows right away.
 *
 * Props:
 *   as        - element/tag to render (default 'div')
 *   variant   - 'up' (default) | 'left' | 'right' | 'scale' | 'fade'
 *   delay     - stagger in ms
 *   className - passthrough classes
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal={shown ? 'in' : ''}
      data-reveal-variant={variant !== 'up' ? variant : undefined}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
