import Container from './Container'
import Reveal from './Reveal'
import PrimaryButton from './PrimaryButton'
import BlueprintGrid from './BlueprintGrid'

/**
 * Closing call-to-action band. A deliberate, consistent dark panel across the
 * site — the one recurring bold moment. Adapts to dark theme by becoming an
 * elevated bordered surface so it never disappears against the page.
 *
 * Props: label?, title, description?, buttonText, to (default /contact)
 */
export default function CTASection({
  label,
  title,
  description,
  buttonText,
  to = '/contact',
  backgroundImage,
  backgroundVideo,
  backgroundVideoPoster,
  className = ''
}) {
  return (
    <section className={`px-5 pt-10 pb-14 sm:px-8 lg:px-12 ${className}`} aria-labelledby="cta-heading">
      <Container className="!px-0">
        <Reveal className="relative overflow-hidden rounded-card-lg bg-cta px-6 py-16 text-white dark:bg-surface-alt dark:border dark:border-line sm:px-14 sm:py-20">
           {!backgroundVideo && backgroundImage && (
              <img
                src={backgroundImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            {backgroundVideo && (
              <video
                src={backgroundVideo}
                poster={backgroundVideoPoster}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/55"
            />
          <BlueprintGrid className="relative z-10 opacity-20" />
          <div aria-hidden="true" className="flowline absolute inset-x-0 top-0" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            {label && <p className="eyebrow mb-5 text-white/55">{label}</p>}
            <h2 id="cta-heading" className="text-h1 text-white">
              {title}
            </h2>
            {description && (
              <p className="mt-5 max-w-2xl text-body-lg text-white/70">{description}</p>
            )}
            <div className="mt-9">
              <PrimaryButton
                to={to}
                size="lg"
                className="hover:!bg-white !text-white text-[12px] sm:!text-[16px]  hover:!text-primary-hover"
              >
                {buttonText}
              </PrimaryButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
