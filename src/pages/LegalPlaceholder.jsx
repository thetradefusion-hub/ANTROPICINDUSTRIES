import { usePageMeta } from '../hooks/usePageMeta'
import Container from '../components/Container'
import { seo } from '../data/content'

export default function LegalPlaceholder({ heading, message }) {
  const meta = heading === 'Privacy Policy' ? seo.privacyPolicy : seo.terms
  usePageMeta(meta)

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-fg-3">Legal</p>
          <h1 className="mt-6 text-display text-fg">{heading}</h1>
          <p className="mt-6 text-body-lg text-fg-2">{message}</p>
        </div>
      </Container>
    </section>
  )
}