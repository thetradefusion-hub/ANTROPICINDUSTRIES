import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from './icons'

/**
 * Light/dark toggle. Restrained bordered icon button — present but never
 * visually dominant. Announces the action it will perform.
 */
export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`group inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line text-fg-2 transition-colors duration-300 hover:border-line-strong hover:text-fg active:scale-90 ${className}`}
    >
      <span
        key={isDark ? 'dark' : 'light'}
        className="inline-flex enter-fade transition-transform duration-500 ease-precise group-hover:rotate-[40deg]"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  )
}
