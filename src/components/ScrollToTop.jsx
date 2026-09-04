import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll position on route change so each page starts at the top,
 * while leaving in-page hash links alone.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}
