import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

const STORAGE_KEY = 'ai-theme'

function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const current = document.documentElement.getAttribute('data-theme')
    if (current === 'dark' || current === 'light') return current
  }
  return 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  // Apply theme to <html> and persist.
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.style.colorScheme = theme
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* storage unavailable — theme still applies for this session */
      }
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
