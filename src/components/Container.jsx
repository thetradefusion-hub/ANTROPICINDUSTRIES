/**
 * Centered content column with consistent responsive gutters.
 * Max width 1280px (max-w-content in the Tailwind config).
 */
export default function Container({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`mx-auto w-full max-w-content px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  )
}
