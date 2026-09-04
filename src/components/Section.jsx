import Container from './Container'

/**
 * Standard section rhythm: generous, consistent vertical space with an optional
 * alternate surface. Keeps whitespace even across the whole site.
 *
 * Props:
 *   alt        - use the alternate surface background
 *   bare       - skip the inner Container (section controls its own layout)
 *   labelledby - id of the heading that labels this section
 */
export default function Section({
  as: Tag = 'section',
  alt = false,
  bare = false,
  id,
  labelledby,
  className = '',
  containerClassName = '',
  children
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledby}
      className={`relative py-20 lg:py-16 ${alt ? 'bg-surface-alt' : ''} ${className}`}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </Tag>
  )
}
