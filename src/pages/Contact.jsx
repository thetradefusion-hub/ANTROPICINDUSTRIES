import { usePageMeta } from '../hooks/usePageMeta'
import { seo, contact } from '../data/content'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { Mail, Phone, MapPin } from '../components/icons'
import { contactStepIcons } from '../components/semanticIcons'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si'


const socialLinks = [
  { label: 'LinkedIn', Icon: FaLinkedinIn },
  { label: 'Facebook', Icon: SiFacebook },
  { label: 'Instagram', Icon: SiInstagram },
  { label: 'X', Icon: SiX }
]


function ContactInfo() {
  const info = contact.info
  const rows = [
    { icon: Mail, label: 'Email', value: info.email },
    { icon: Phone, label: 'Phone', value: info.phone },
    { icon: MapPin, label: 'Address', value: info.address }
  ]
  return (
    <div className="lg:sticky lg:top-28">
      <Reveal>
        <SectionLabel index="01">{contact.hero.label}</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-6 text-h2 text-fg">{info.heading}</h2>
      </Reveal>

      <dl className="mt-8 space-y-6">
        {rows.map((row, i) => {
          const Icon = row.icon
          return (
            <Reveal as="div" key={row.label} delay={120 + i * 60} className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-card border border-line bg-surface text-primary">
                <Icon size={18} />
              </span>
              <div>
                <dt className="eyebrow text-[0.6rem] text-fg-3">{row.label}</dt>
                <dd className="mt-1 text-fg">{row.value}</dd>
              </div>
            </Reveal>
          )
        })}
      </dl>

      <Reveal delay={300}>
        <div className="mt-8 border-t border-line pt-6">
          <p className="eyebrow text-[0.6rem] text-fg-3">Social</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map(({ label, Icon }) => (
              <li
                key={label}
                className="rounded-md px-2.5 py-1 text-xs text-fg-3"
              >
                <a
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-strong text-fg-3 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary hover:text-primary"
                >
                  <Icon size={22} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs italic text-fg-3/80">{info.note}</p>
        </div>
      </Reveal>
    </div>
  )
}

function WhatNext() {
  const s = contact.whatNext
  return (
    <Section alt labelledby="contact-next">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel index="02">Process</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 id="contact-next" className="mt-6 text-h2 text-fg">
            {s.heading}
          </h2>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {s.steps.map((step, i) => {
          const Icon = contactStepIcons[i]
          return (
            <Reveal
              key={step.index}
              delay={i * 80}
              className="group rounded-card border border-line bg-surface p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-semibold text-primary">{step.index}</span>
                <span aria-hidden="true" className="text-primary/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
              </div>
              <h3 className="mt-4 text-h3 text-fg">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-2">{step.text}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

export default function Contact() {
  usePageMeta(seo.contact)
  return (
    <>
      <PageHero
        label={contact.hero.label}
        heading={contact.hero.heading}
        description={contact.hero.description}
      />
      <Section labelledby="contact-form-region">
        <h2 id="contact-form-region" className="sr-only">
          Contact information and enquiry form
        </h2>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Section>
      <WhatNext />
    </>
  )
}
