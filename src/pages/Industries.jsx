import { usePageMeta } from '../hooks/usePageMeta'
import { seo, industriesPage } from '../data/content'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import IndustryCard from '../components/IndustryCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import img1 from "../assets/industries_1.png"
import ctaimg from "../assets/industry_cta.png"
import {
  Code2,
  Smartphone,
  Cloud,
  BrainCircuit,
  Database,
  ServerCog,
} from 'lucide-react'

function IndustriesGrid() {
  const s = industriesPage.industries
  return (
    <Section labelledby="ind-grid">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel index="01">Industries</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 id="ind-grid" className="mt-6 text-h2 text-fg">
            {s.heading}
          </h2>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {s.items.map((ind, i) => (
          <Reveal key={ind.title} delay={(i % 4) * 60}>
            <IndustryCard title={ind.title} description={ind.description} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

const technologyIcons = {
  'Web development': Code2,
  'Mobile': Smartphone,
  'Cloud': Cloud,
  'Data & AI': BrainCircuit,
  'Databases': Database,
  'DevOps & Infrastructure': ServerCog,
}

function TechCapabilities() {
  const cap = industriesPage.techCapabilities
  const stack = industriesPage.techStack

  return (
    <Section alt labelledby="ind-tech">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left column */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="02">{cap.label}</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <h2 id="ind-tech" className="mt-6 text-h2 text-fg">
              {cap.heading}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 text-fg-2">
              {cap.description}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 rounded-card border border-dashed border-line-strong bg-bg/60 p-4 text-sm leading-relaxed text-fg-3">
              {stack.note}
            </p>
          </Reveal>

          {/* Technical capability index */}
          <Reveal delay={260}>
            <div className="mt-8 border-t border-line pt-5">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[0.6rem] text-fg-3">
                  TECHNOLOGY AREAS
                </span>

                <span className="font-mono text-xs text-fg-3">
                  {String(stack.categories.length).padStart(2, '0')}
                </span>
              </div>

              <div className="mt-4 space-y-0">
                {stack.categories.map((cat, i) => (
                  <div
                    key={cat.name}
                    className="group flex items-center gap-3 border-b border-line py-3"
                  >
                    <span className="font-mono text-[0.65rem] text-primary/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="h-px w-4 bg-line-strong transition-all duration-300 group-hover:w-6 group-hover:bg-primary" />

                    <span className="text-sm font-medium text-fg-2 transition-colors duration-300 group-hover:text-primary">
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            {stack.categories.map((cat, i) => {
              const Icon = technologyIcons[cat.name] || Code2

              return (
                <Reveal
                  key={cat.name}
                  delay={i * 70}
                  className="group"
                >
                  <article className="relative h-full overflow-hidden rounded-card border border-line bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
                    
                    {/* Technical corner detail */}
                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-5 h-5 w-5 border-r border-t border-line-strong transition-colors duration-300 group-hover:border-primary/60"
                    />

                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-bg text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-soft-blue group-hover:scale-105">
                          <Icon
                            size={21}
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <span className="font-mono text-[0.62rem] font-semibold tracking-[0.14em] text-primary/70">
                            {String(i + 1).padStart(2, '0')}
                          </span>

                          <h3 className="mt-1 text-base font-semibold text-fg transition-colors duration-300 group-hover:text-primary">
                            {cat.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px flex-1 bg-line" />
                      <span className="h-1.5 w-1.5 rounded-full bg-line-strong transition-colors duration-300 group-hover:bg-primary" />
                    </div>

                    {/* Technologies */}
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {cat.candidates.map((c) => (
                        <li
                          key={c}
                          className="rounded-md border border-dashed border-line-strong bg-bg/40 px-2.5 py-1.5 text-xs text-fg-3 transition-all duration-300 group-hover:border-line-strong group-hover:text-fg-2"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom technical indicator */}
                    <div className="mt-6 flex items-center justify-between">
                      <span className="eyebrow text-[0.52rem] text-fg-3/70">
                        TECHNOLOGY AREA
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex items-center gap-1.5 text-[0.6rem] font-medium text-fg-3 transition-colors duration-300 group-hover:text-primary"
                      >
                        Explore
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

function BuiltForScale() {
  const s = industriesPage.builtForScale
  return (
    <Section labelledby="ind-scale">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionLabel index="03">Built for Scale</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="ind-scale" className="mt-6 text-h2 text-fg">
              {s.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-body-lg leading-relaxed text-fg-2">{s.description}</p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <img src={img1} alt="Image" className='h-full w-full object-cover'/>
        </Reveal>
      </div>
    </Section>
  )
}

export default function Industries() {
  usePageMeta(seo.industries)
  return (
    <>
      <PageHero
        label={industriesPage.hero.label}
        heading={industriesPage.hero.heading}
        description={industriesPage.hero.description}
      />
      <IndustriesGrid />
      <TechCapabilities />
      <BuiltForScale />
      <CTASection
        title={industriesPage.cta.heading}
        buttonText={industriesPage.cta.cta.label}
        to={industriesPage.cta.cta.to}
        backgroundImage={ctaimg}
      />
    </>
  )
}
