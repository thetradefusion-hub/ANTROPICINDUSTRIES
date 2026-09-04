import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import { Spinner } from './components/icons'
import LegalPlaceholder from './pages/LegalPlaceholder'
import { legal } from './data/content'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
          <h1 className="text-h2 text-fg">Something went wrong</h1>
          <p className="mt-4 text-fg-2">Please return home and try again.</p>
          <a href="/" className="mt-7 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white">Return Home</a>
        </div>
      )
    }
    return this.props.children
  }
}

// Home is eager for an instant first paint; other routes are code-split.
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Industries = lazy(() => import('./pages/Industries'))
const Innovation = lazy(() => import('./pages/Innovation'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Minimal fallback — keeps layout height stable, no long loading screen.
function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <Spinner size={28} className="animate-spin text-primary" />
      <span className="sr-only">Loading</span>
    </div>
  )
}

// Keying the wrapper on pathname replays a restrained opacity/vertical fade
// on every route change. Reduced-motion users get it instantly.
function RoutedViews() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="route-view">
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<LegalPlaceholder {...legal.privacyPolicy} />} />
          <Route path="/terms" element={<LegalPlaceholder {...legal.terms} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <ErrorBoundary>
            <RoutedViews />
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
