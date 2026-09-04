import { usePageMeta } from '../hooks/usePageMeta'
import { seo, home } from '../data/content'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import ServiceCard from '../components/ServiceCard'
import IndustryCard from '../components/IndustryCard'
import CTASection from '../components/CTASection'
import ImagePlaceholder from '../components/ImagePlaceholder'
import BlueprintGrid from '../components/BlueprintGrid'
import Crosshair from '../components/Crosshair'
import { capabilityIcons, transformationIcons, whyIcons, IconContainer } from '../components/semanticIcons'
import img from "../assets/hero.png";
import img2 from "../assets/home_2.png"
import ctaimg from "../assets/home_cta.png"

function Hero() {
  const h = home.hero
  return (
    <section className="relative overflow-hidden border-b border-line">
      <BlueprintGrid drift className="opacity-[0.55]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(var(--c-soft)), transparent 68%)' }}
      />
      <Container className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-16 lg:min-h-[38rem] lg:grid-cols-12 lg:gap-8">
          {/* Left: type-led composition */}
          <div className="lg:col-span-7">
            <p className="hero-load-eyebrow eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-fg-3">
              <span aria-hidden="true" className="h-px w-8 bg-primary" />
              {h.eyebrow}
            </p>
            <h1 className="hero-load-heading mt-7 text-[40px] sm:text-[65px] leading-[60px] text-fg">
              {h.heading.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-load-description mt-7 max-w-xl text-body-lg text-fg-2">{h.description}</p>
            <div className="hero-load-cta mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton to={h.primaryCta.to} size="lg">
                {h.primaryCta.label}
              </PrimaryButton>
              <SecondaryButton to={h.secondaryCta.to} size="lg">
                {h.secondaryCta.label}
              </SecondaryButton>
            </div>
          </div>

          {/* Right: architectural visual */}
          <div className="lg:col-span-5">
            <div className="hero-load-visual relative aspect-[3/4]">
              <img src={img} alt="hero" className='h-full w-full object-cover'/>
              {/* Blueprint dimension annotation */}
              <div className="absolute -bottom-4 -left-4 hidden items-center gap-3 rounded-full border border-line bg-surface px-4 py-2 shadow-subtle sm:flex">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="eyebrow text-[0.6rem] text-fg-2">Engineered systems</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Capabilities() {
  const c = home.capabilities
  return (
    <Section labelledby="cap-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="01">Capabilities</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="cap-heading" className="mt-6 text-h2 text-fg">
              {c.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-md text-fg-2">{c.description}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {c.items.map((item, i) => {
              const Icon = capabilityIcons[i]
              return (
                <Reveal
                  key={item}
                  delay={i * 60}
                  className="group flex items-center gap-4 border-t border-line py-5"
                >
                  <span className="font-mono text-sm font-semibold text-fg-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true" className="text-primary/75">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="text-lg font-medium text-fg transition-colors group-hover:text-primary">
                    {item}
                  </span>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Intro() {
  const s = home.intro
  return (
    <Section alt labelledby="intro-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <SectionLabel index="02">{s.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="intro-heading" className="mt-6 text-h2 text-fg">
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
          <Reveal delay={300}>
            <div className="mt-8">
              <SecondaryButton to={s.cta.to}>{s.cta.label}</SecondaryButton>
            </div>
          </Reveal>
        </div>
        <Reveal className="order-1 lg:order-2">
          <img src={img2} alt="image2" className='h-full w-full' />
        </Reveal>
      </div>
    </Section>
  )
}

function CoreServices() {
  const s = home.services
  return (
    <Section labelledby="svc-heading">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel index="03">{s.label}</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 id="svc-heading" className="mt-6 text-h2 text-fg">
            {s.heading}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-fg-2">{s.description}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {s.items.map((svc, i) => (
          <Reveal
            key={svc.index}
            delay={i * 70}
            className={i === s.items.length - 1 ? 'lg:col-span-2' : ''}
          >
            <ServiceCard
              index={svc.index}
              title={svc.title}
              description={svc.description}
              items={svc.items}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function WhyChooseUs() {
  const s = home.whyChooseUs
  return (
    <Section alt labelledby="why-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel index="04">{s.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="why-heading" className="mt-6 text-h2 text-fg">
              {s.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-fg-2">{s.intro}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {s.points.map((p, i) => {
              const Icon = whyIcons[i]
              return (
                <Reveal key={p.index} delay={i * 70} className="border-t border-line-strong pt-6">
                  <div className="flex items-center gap-4">
                    <IconContainer size="small">
                      <Icon size={17} strokeWidth={1.6} />
                    </IconContainer>
                    <span className="font-mono text-2xl font-semibold text-primary">{p.index}</span>
                    <h3 className="text-h3 text-fg">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-fg-2">{p.description}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Industries() {
  const s = home.industries
  return (
    <Section labelledby="ind-heading">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel index="05">{s.label}</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 id="ind-heading" className="mt-6 text-h2 text-fg">
            {s.heading}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-fg-2">{s.description}</p>
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

function DigitalTransformation() {
  const s = home.digitalTransformation
  return (
    <Section alt labelledby="dx-heading" className="overflow-hidden">
      <Crosshair className="crosshair-pulse left-8 top-10" />
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="06">{s.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="dx-heading" className="mt-6 text-h2 text-fg">
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
          <Reveal delay={280}>
            <div className="mt-8">
              <PrimaryButton to={s.cta.to}>{s.cta.label}</PrimaryButton>
            </div>
          </Reveal>
        </div>

        {/* Process — a genuine sequence, so the numbering is meaningful */}
        <div className="lg:col-span-7">
          <ol className="relative">
            {s.process.map((step, i) => {
              const Icon = transformationIcons[i]
              return (
                <Reveal
                  as="li"
                  key={step.index}
                  delay={i * 70}
                  className="flex gap-5 border-l border-line pb-8 pl-6 last:pb-0 sm:gap-6"
                >
                  <span className="absolute -left-px flex" style={{ top: `${i * 0}px` }} />
                  <div className="-ml-[calc(1.5rem+1px)] mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary bg-bg text-primary">
                    <Icon size={14} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <div className="pt-0.5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold text-fg-3">{step.index}</span>
                      <span className="eyebrow text-fg">{step.title}</span>
                    </div>
                    <p className="mt-2 text-fg-2">{step.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </Section>
  )
}

function InnovationTeaser() {
  const s = home.innovationTeaser
  return (
    <Section labelledby="innov-heading" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(var(--c-highlight) / 0.2), transparent 70%)' }}
      />
      <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel index="07">{s.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="innov-heading" className="mt-6 text-h2 text-fg">
              {s.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-lg text-fg-2">{s.description}</p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8">
              <SecondaryButton to={s.cta.to}>{s.cta.label}</SecondaryButton>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={120}>
            <ul className="flex flex-wrap gap-2.5">
              {s.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-fg-2"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

export default function Home() {
  usePageMeta(seo.home)
  return (
    <>
      <Hero />
      <Capabilities />
      <Intro />
      <CoreServices />
      <WhyChooseUs />
      <Industries />
      <DigitalTransformation />
      <InnovationTeaser />
      <CTASection
        title={home.finalCta.heading}
        description={home.finalCta.description}
        buttonText={home.finalCta.cta.label}
        to={home.finalCta.cta.to}
        backgroundImage={ctaimg}
      />
    </>
  )
}
