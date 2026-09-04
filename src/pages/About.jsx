import { usePageMeta } from '../hooks/usePageMeta'
import { seo, about } from '../data/content'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Crosshair from '../components/Crosshair'
import { valueIcons } from '../components/semanticIcons'
import img from "../assets/about_1.png"
import ctaimg from "../assets/about_cta.png"
import image from "../assets/approach.png"

function Overview() {
  const s = about.overview
  return (
    <Section labelledby="about-overview">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img src={img} alt="Image" className='h-full w-full object-cover' />
        </Reveal>
        <div>
          <Reveal>
            <SectionLabel index="01">Overview</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="about-overview" className="mt-6 text-h2 text-fg">
              {s.heading}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-4">
            {s.paragraphs.map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p className="text-fg-2">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function VisionMission() {
  return (
    <Section alt labelledby="about-vm">
      <h2 id="about-vm" className="sr-only">
        Vision and mission
      </h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {[about.vision, about.mission].map((panel, i) => (
          <Reveal
            key={panel.label}
            delay={i * 90}
            className="relative overflow-hidden rounded-card-lg border border-line bg-surface p-8 sm:p-10"
          >
            <Crosshair className="right-5 top-5" />
            <SectionLabel index={i === 0 ? '01' : '02'}>{panel.label}</SectionLabel>
            <h3 className="mt-6 text-h3 text-fg">{panel.heading}</h3>
            <p className="mt-4 text-body-lg leading-relaxed text-fg-2">{panel.content}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function CoreValues() {
  const s = about.coreValues
  return (
    <Section labelledby="about-values">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel index="02">{s.label}</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 id="about-values" className="mt-6 text-h2 text-fg">
            {s.heading}
          </h2>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {s.values.map((v, i) => {
          const Icon = valueIcons[i]
          return (
            <Reveal key={v.title} delay={i * 70} className="border-t border-line-strong pt-6">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="text-primary/75">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className="font-mono text-sm font-semibold text-fg-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-h3 text-fg">{v.title}</h3>
              </div>
              <p className="mt-3 text-fg-2">{v.text}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function Approach() {
  const s = about.approach

  return (
    <Section alt labelledby="about-approach">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left content */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="03">{s.label}</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <h2 id="about-approach" className="mt-6 text-h2 text-fg">
              {s.heading}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-md text-fg-2">
              {s.description}
            </p>
          </Reveal>
        </div>

        {/* Right image */}
        <div className="lg:col-span-7 lg:pt-2">
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-card-lg border border-line bg-surface">
                <img
                  src={image}
                  alt="Our approach"
                  className="block h-auto w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

function FutureOutlook() {
  const s = about.futureOutlook
  return (
    <Section labelledby="about-future">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel index="04">{s.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="about-future" className="mt-6 text-h2 text-fg">
              {s.heading}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-5 text-body-lg leading-relaxed text-fg-2">
            {s.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function About() {
  usePageMeta(seo.about)
  return (
    <>
      <PageHero
        label={about.hero.label}
        heading={about.hero.heading}
        description={about.hero.description}
      />
      <Overview />
      <VisionMission />
      <CoreValues />
      <Approach />
      <FutureOutlook />
      <CTASection
        title={about.cta.heading}
        buttonText={about.cta.cta.label}
        to={about.cta.cta.to}
        backgroundImage={ctaimg}
      />
    </>
  )
}
