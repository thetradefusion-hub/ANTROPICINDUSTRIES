import Header from './Header'
import Footer from './Footer'

/**
 * Global shell: skip link, fixed header, routed page content, footer.
 * The header is fixed, so the main region gets top padding to clear it.
 */
export default function Layout({ children }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-h-screen pt-16 sm:pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
}
