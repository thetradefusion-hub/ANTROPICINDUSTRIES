import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Container from './Container'
import { site, footer, contact } from '../data/content'
import BrandMark from './BrandMark'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si'
import lightlogo from "../assets/light_logo.png"
import darklogo from "../assets/dark_logo.png"

const colLink = 'text-sm text-fg-2 transition-colors duration-200 hover:text-primary'
const socialLinks = [
  { label: 'LinkedIn', Icon: FaLinkedinIn },
  { label: 'Facebook', Icon: SiFacebook },
  { label: 'Instagram', Icon: SiInstagram },
  { label: 'X', Icon: SiX }
]

export default function Footer() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const image = isDark ? darklogo : lightlogo

  return (
    <footer className="border-t border-line bg-surface-alt">
      <Container className="py-10 lg:py-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3" aria-label="Anthropic Industries — home">
              <img src={image} alt="logo" className='h-15 w-60'/>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-2">{footer.tagline}</p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <nav aria-label="Company">
              <h2 className="eyebrow mb-4 text-fg-3">Company</h2>
              <ul className="space-y-2.5">
                {footer.columns.company.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} end={item.to === '/'} className={colLink}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="eyebrow mb-4 text-fg-3">Capabilities</h2>
              <ul className="space-y-2.5">
                {footer.columns.capabilities.map((label) => (
                  <li key={label}>
                    <Link to="/services" className={colLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow mb-4 text-fg-3">Connect</h2>
              <ul className="space-y-2.5 text-sm text-fg-2">
                {/* Placeholders preserved until official details are supplied. */}
                <li className="text-fg-3">{contact.info.email}</li>
                <li className="text-fg-3">{contact.info.phone}</li>
                <li>
                  <ul className="flex items-center gap-2.5" aria-label="Social media">
                    {socialLinks.map(({ label, Icon }) => (
                      <li key={label}>
                        <a
                          href="#"
                          aria-label={label}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line-strong text-fg-3 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary hover:text-primary"
                        >
                          <Icon size={15} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-sm text-fg-3 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li className="font-mono text-xs uppercase tracking-[0.14em] text-fg-3/80">
              {site.legalName}
            </li>
            {footer.columns.legal.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-fg-3/80 transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
