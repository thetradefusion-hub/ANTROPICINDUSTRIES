/**
 * Section heading. Defaults to an <h2> at the fluid h2 scale; `size` and `as`
 * let pages keep a correct heading hierarchy while adjusting visual weight.
 */
const sizeClasses = {
  hero: 'text-hero',
  display: 'text-display',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3'
}

export default function SectionHeading({ as: Tag = 'h2', size = 'h2', className = '', children }) {
  return <Tag className={`${sizeClasses[size] || sizeClasses.h2} ${className}`}>{children}</Tag>
}
