/**
 * Minimal outline icon set. Icons are used only where they carry meaning
 * (navigation, theme, contact channels, status) — never as decoration.
 * All inherit currentColor and a consistent 1.6 stroke.
 */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

function Svg({ size = 20, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path {...base} d="M5 12h14" />
    <path {...base} d="M13 6l6 6-6 6" />
  </Svg>
)

export const ArrowUpRight = (p) => (
  <Svg {...p}>
    <path {...base} d="M7 17L17 7" />
    <path {...base} d="M8 7h9v9" />
  </Svg>
)

export const Menu = (p) => (
  <Svg {...p}>
    <path {...base} d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
)

export const Close = (p) => (
  <Svg {...p}>
    <path {...base} d="M6 6l12 12M18 6L6 18" />
  </Svg>
)

export const ChevronDown = (p) => (
  <Svg {...p}>
    <path {...base} d="m6 9 6 6 6-6" />
  </Svg>
)

export const Sun = (p) => (
  <Svg {...p}>
    <circle {...base} cx="12" cy="12" r="4" />
    <path {...base} d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Svg>
)

export const Moon = (p) => (
  <Svg {...p}>
    <path {...base} d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </Svg>
)

export const Check = (p) => (
  <Svg {...p}>
    <path {...base} d="M4 12.5l5 5 11-11" />
  </Svg>
)

export const Mail = (p) => (
  <Svg {...p}>
    <rect {...base} x="3" y="5" width="18" height="14" rx="2" />
    <path {...base} d="M4 7l8 6 8-6" />
  </Svg>
)

export const Phone = (p) => (
  <Svg {...p}>
    <path
      {...base}
      d="M6 3h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z"
    />
  </Svg>
)

export const MapPin = (p) => (
  <Svg {...p}>
    <path {...base} d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
    <circle {...base} cx="12" cy="10" r="2.5" />
  </Svg>
)

export const AlertCircle = (p) => (
  <Svg {...p}>
    <circle {...base} cx="12" cy="12" r="9" />
    <path {...base} d="M12 7v6" />
    <circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none" />
  </Svg>
)

export const Spinner = ({ size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...rest}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.4" />
    <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
)
