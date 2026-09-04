export default function BrandMark({ className = '', interactive = true }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-fg ${interactive ? 'transition-transform duration-300 ease-precise group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]' : ''} ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
        <path
          d="M8 23 L16 9 L24 23"
          stroke="rgb(var(--c-accent))"
          strokeWidth="2.25"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <line x1="11.5" y1="17.5" x2="20.5" y2="17.5" stroke="rgb(var(--c-bg))" strokeWidth="2.25" strokeLinecap="round" />
      </svg>
    </span>
  )
}