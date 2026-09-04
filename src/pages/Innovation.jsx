import { usePageMeta } from '../hooks/usePageMeta'
import { seo, innovation } from '../data/content'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import ImagePlaceholder from '../components/ImagePlaceholder'
import SecondaryButton from '../components/SecondaryButton'
import Crosshair from '../components/Crosshair'
import { BrainCircuit, CloudCog, Database, Lightbulb, Settings2, ShieldCheck, Workflow } from 'lucide-react'
import image1 from '../assets/innovation_1.png'
import ctaimg from "../assets/innovation_cta.png"

const researchIcons = [BrainCircuit, BrainCircuit, Workflow, CloudCog, Database, Lightbulb]

function RnD() {
  const s = innovation.rnd
  return (
    <Section labelledby="innov-rnd">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionLabel index="01">Research & Development</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="innov-rnd" className="mt-6 text-h2 text-fg">
              {s.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-body-lg leading-relaxed text-fg-2">{s.description}</p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <img src={image1} alt="Image" className='h-full w-full object-cover'/>
        </Reveal>
      </div>
    </Section>
  )
}

function ResearchAreas() {
  const areas = innovation.researchAreas
  return (
    <Section alt labelledby="innov-areas">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel index="02">Focus Areas</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 id="innov-areas" className="mt-6 text-h2 text-fg">
            Where We Are Looking
          </h2>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((a, i) => {
          const Icon = researchIcons[i] || Settings2
          return (
            <Reveal
              key={a.title}
              delay={(i % 3) * 70}
              className="group relative overflow-hidden rounded-card border border-line bg-surface p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px w-full origin-left scale-x-0 bg-highlight transition-transform duration-500 ease-precise group-hover:scale-x-100"
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-fg-3 transition-colors group-hover:text-highlight">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="text-highlight transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
              </div>
              <h3 className="mt-4 text-h3 text-fg">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-2">{a.text}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function IdeasToInnovation() {
  const s = innovation.ideasToInnovation
  return (
    <Section labelledby="innov-ideas" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(var(--c-highlight) / 0.22), transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <SectionLabel index="03" className="justify-center">
            {s.heading}
          </SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 text-balance font-display text-h1 leading-[1.1] text-fg">
            {s.paragraphs[0]}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg leading-relaxed text-fg-2">
            {s.paragraphs[1]}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

function IpFutureProducts() {
  const s = innovation.ipFutureProducts
  return (
    <Section alt labelledby="innov-ip">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel index="04">Intellectual Property</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="innov-ip" className="mt-6 text-h2 text-fg">
              {s.heading}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={120}>
            <p className="text-body-lg leading-relaxed text-fg-2">{s.description}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

function Collaboration() {
  const s = innovation.collaboration
  return (
    <Section labelledby="innov-collab">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel index="05">{s.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="innov-collab" className="mt-6 text-h2 text-fg">
              {s.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-fg-2">{s.description}</p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8">
              <SecondaryButton to={s.cta.to}>{s.cta.label}</SecondaryButton>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <div className="grid sm:grid-cols-2">
            {s.areas.map((area, i) => (
              <Reveal
                key={area}
                delay={i * 70}
                className="group flex items-center gap-3.5 border-t border-line py-5"
              >
                <span aria-hidden="true" className="text-highlight/75">
                  <ShieldCheck size={17} strokeWidth={1.6} />
                </span>
                <span className="font-medium text-fg">{area}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function FutureProducts() {
  const s = innovation.futureProducts
  return (
    <Section alt labelledby="innov-future" className="overflow-hidden">
      <Crosshair className="left-8 top-10" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionLabel index="06" className="justify-center">
            Future Products
          </SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 id="innov-future" className="mt-6 text-h2 text-fg">
            {s.heading}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-2xl text-body-lg leading-relaxed text-fg-2">
            {s.description}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

export default function Innovation() {
  usePageMeta(seo.innovation)
  return (
    <>
      <PageHero
        label={innovation.hero.label}
        heading={innovation.hero.heading}
        description={innovation.hero.description}
        expressive
      />
      <RnD />
      <ResearchAreas />
      <IdeasToInnovation />
      <IpFutureProducts />
      <Collaboration />
      <FutureProducts />
      <CTASection
        title={innovation.cta.heading}
        description={innovation.cta.description}
        buttonText={innovation.cta.cta.label}
        to={innovation.cta.cta.to}
        backgroundImage={ctaimg}
      />
    </>
  )
}
