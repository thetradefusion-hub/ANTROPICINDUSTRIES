/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Theme-driven tokens. Values are RGB channels defined as CSS variables
        // in index.css so both themes are explicitly designed (never auto-inverted)
        // and Tailwind opacity modifiers (e.g. bg-surface/60) still work.
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        'bg-2': 'rgb(var(--c-bg-2) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        'surface-alt': 'rgb(var(--c-surface-alt) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--c-primary) / <alpha-value>)',
          hover: 'rgb(var(--c-primary-hover) / <alpha-value>)'
        },
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        soft: 'rgb(var(--c-soft) / <alpha-value>)',
        highlight: 'rgb(var(--c-highlight) / <alpha-value>)',
        cta: 'rgb(var(--c-cta) / <alpha-value>)',
        violet: 'rgb(var(--c-violet) / <alpha-value>)',
        fg: {
          DEFAULT: 'rgb(var(--c-fg) / <alpha-value>)',
          2: 'rgb(var(--c-fg-2) / <alpha-value>)',
          3: 'rgb(var(--c-fg-3) / <alpha-value>)'
        },
        line: {
          DEFAULT: 'rgb(var(--c-line) / <alpha-value>)',
          strong: 'rgb(var(--c-line-strong) / <alpha-value>)'
        },
        success: 'rgb(var(--c-success) / <alpha-value>)',
        warning: 'rgb(var(--c-warning) / <alpha-value>)',
        error: 'rgb(var(--c-error) / <alpha-value>)',
        info: 'rgb(var(--c-info) / <alpha-value>)'
      },
      fontFamily: {
        display: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      },
      fontSize: {
        // Fluid, responsive scale — large headings never overflow on mobile.
        hero: ['clamp(2.75rem, 4.4vw + 1.4rem, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        display: ['clamp(2.4rem, 3.4vw + 1rem, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['clamp(2.1rem, 2.6vw + 0.9rem, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem, 1.6vw + 0.9rem, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        h3: ['clamp(1.3rem, 0.6vw + 1.05rem, 1.6rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-lg': ['clamp(1.05rem, 0.3vw + 1rem, 1.18rem)', { lineHeight: '1.65' }],
        label: ['0.72rem', { lineHeight: '1', letterSpacing: '0.22em' }]
      },
      borderRadius: {
        card: '16px',
        'card-lg': '18px'
      },
      maxWidth: {
        content: '80rem' // 1280px
      },
      boxShadow: {
        subtle: '0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.10)',
        card: '0 1px 2px rgb(15 23 42 / 0.05), 0 18px 40px -24px rgb(15 23 42 / 0.16)',
        lift: '0 2px 4px rgb(15 23 42 / 0.06), 0 30px 60px -28px rgb(15 23 42 / 0.22)'
      },
      transitionTimingFunction: {
        precise: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
    }
  },
  plugins: []
}
