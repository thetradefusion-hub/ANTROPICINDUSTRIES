import { usePageMeta } from '../hooks/usePageMeta'
import { seo } from '../data/content'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import BlueprintGrid from '../components/BlueprintGrid'
import Crosshair from '../components/Crosshair'

export default function NotFound() {
  usePageMeta(seo.notFound)
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <BlueprintGrid className="opacity-[0.5]" />
      <Crosshair className="right-10 top-16" />
      <Crosshair className="left-10 bottom-16" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel className="justify-center">Error 404</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 font-mono text-hero leading-none text-fg">404</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-4 text-h1 text-fg">Page Not Found</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-body-lg text-fg-2">
              The page you’re looking for doesn’t exist or may have moved. Let’s get you back on track.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <PrimaryButton to="/" size="lg">
                Back to Home
              </PrimaryButton>
              <SecondaryButton to="/contact" size="lg">
                Contact Us
              </SecondaryButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
