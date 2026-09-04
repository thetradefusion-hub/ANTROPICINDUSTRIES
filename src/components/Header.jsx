import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from './Container'
import ThemeToggle from './ThemeToggle'
import PrimaryButton from './PrimaryButton'
import BrandMark from './BrandMark'
import { Menu, Close } from './icons'
import { nav } from '../data/content'
import lightlogo from "../assets/light_logo.png"
import darklogo from "../assets/dark_logo.png"

function Brand({ onClick }) {

  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const image = isDark ? darklogo : lightlogo

  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-3 rounded-md"
      aria-label="Anthropic Industries — home"
    >
      <img src={image} alt="logo" className='h-12 w-50'/>

    </Link>
  )
}

// Sliding gradient underline that fills from the left on hover and stays lit
// on the active route.
const navLinkClass = ({ isActive }) =>
  [
    'relative py-1 text-sm font-medium transition-colors duration-200',
    'after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full',
    'after:bg-gradient-to-r after:from-primary after:to-highlight',
    'after:transition-all after:duration-300 after:ease-precise',
    isActive
      ? 'text-fg after:w-full'
      : 'text-fg-2 hover:text-fg after:w-0 hover:after:w-full'
  ].join(' ')

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const progressRef = useRef(null)

  // Combined scroll handler: toggles the condensed header state and drives the
  // top progress rail. rAF-throttled and writes the rail width imperatively so
  // scrolling never triggers a React re-render for the progress value.
  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      const y = window.scrollY
      setScrolled((prev) => {
        const next = y > 8
        return prev !== next ? next : prev
      })
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const ratio = max > 0 ? Math.min(y / max, 1) : 0
      if (progressRef.current) {
        progressRef.current.style.setProperty('--scroll', String(ratio))
      }
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`enter-down fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-precise ${
        scrolled || open
          ? 'border-b border-line bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      {/* Scroll progress rail */}
      <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden" aria-hidden="true">
        <div ref={progressRef} className="scroll-progress h-full w-full" />
      </div>

      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Brand />

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <PrimaryButton to="/contact" size="md">
              Let&apos;s Talk
            </PrimaryButton>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-line-strong active:scale-95"
            >
              {/* Keyed remount replays a quick fade so open/close never snaps abruptly. */}
              <span key={open ? 'close' : 'menu'} className="inline-flex enter-fade">
                {open ? <Close size={20} /> : <Menu size={20} />}
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t bg-bg/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-precise lg:hidden ${
          open ? 'max-h-[80vh] border-line opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col py-4">
            {nav.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                style={{ transitionDelay: open ? `${i * 45 + 70}ms` : '0ms' }}
                className={({ isActive }) =>
                  [
                    'flex items-center justify-between border-b border-line/70 py-3.5 text-base font-medium',
                    'transition-all duration-300 ease-precise',
                    open ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0',
                    isActive ? 'text-primary' : 'text-fg-2 hover:text-fg'
                  ].join(' ')
                }
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="text-fg-3">
                  ↗
                </span>
              </NavLink>
            ))}
            <div
              className="pt-5 transition-all duration-300 ease-precise"
              style={{
                transitionDelay: open ? `${nav.length * 45 + 90}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(6px)'
              }}
            >
              <PrimaryButton to="/contact" size="lg" className="w-full">
                Let&apos;s Talk
              </PrimaryButton>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  )
}
