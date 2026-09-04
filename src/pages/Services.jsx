import { usePageMeta } from '../hooks/usePageMeta'
import { seo, services } from '../data/content'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { capabilityIcons, getServiceIcon, IconContainer } from '../components/semanticIcons'
import img1 from "../assets/service_1.png";
import img2 from "../assets/service_2.png";
import ctavideo from "../assets/service_cta.mp4"

function DetailGrid({ detail }) {
  return (
    <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      {detail.map((d, i) => (
        <Reveal key={d.title} delay={i * 60} className="border-t border-line pt-5">
          <div className="flex items-center gap-3">
            <IconContainer size="small">
              {(() => { const Icon = capabilityIcons[i % capabilityIcons.length]; return <Icon size={16} strokeWidth={1.6} /> })()}
            </IconContainer>
            <h3 className="text-base font-semibold text-fg">{d.title}</h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-fg-2">{d.text}</p>
        </Reveal>
      ))}
    </div>
  )
}

function AreaList({ areas }) {
  return (
    <div className="grid gap-x-8 sm:grid-cols-2">
      {areas.map((area, i) => (
        <Reveal
          key={area}
          delay={i * 50}
          className="group flex items-center gap-3.5 border-t border-line py-4"
        >
          <span aria-hidden="true" className="text-primary/75">
            {(() => { const Icon = capabilityIcons[i % capabilityIcons.length]; return <Icon size={17} strokeWidth={1.6} /> })()}
          </span>
          <span className="font-medium text-fg">{area}</span>
        </Reveal>
      ))}
    </div>
  )
}

function ServiceGroup({ group, alt, image }) {
  const headingId = `service-${group.index}`
  const sameTitle = group.label === group.heading
  const ServiceIcon = getServiceIcon(group.label)
  return (
    <Section alt={alt} labelledby={headingId}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index={group.index}>{sameTitle ? 'Service' : group.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 flex items-start gap-4">
              <IconContainer>
                <ServiceIcon size={24} strokeWidth={1.6} />
              </IconContainer>
              <h2 id={headingId} className="pt-1 text-h2 text-fg">
                {group.heading}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-fg-2">{group.description}</p>
          </Reveal>
          {group.visual && (
            <Reveal delay={200}>
              <img src={image} alt={group.visual} className='h-full w-full object-cover' />
            </Reveal>
          )}
        </div>
        <div className="lg:col-span-7 lg:pt-2">
          {group.detail ? <DetailGrid detail={group.detail} /> : <AreaList areas={group.areas} />}
        </div>
      </div>
    </Section>
  )
}

export default function Services() {
  usePageMeta(seo.services)
  return (
    <>
      <PageHero
        label={services.hero.label}
        heading={services.hero.heading}
        description={services.hero.description}
      />
      {services.groups.map((group, i) => (
        <ServiceGroup key={group.index} group={group} alt={i % 2 === 1} image={i === 0 ? img1 : img2} />
      ))}
      <CTASection
        title={services.cta.heading}
        buttonText={services.cta.cta.label}
        to={services.cta.cta.to}
        backgroundVideo={ctavideo}
      />
    </>
  )
}
