import { useRef, useState } from 'react'
import { contact } from '../data/content'
import { Check, AlertCircle, Spinner, ChevronDown } from './icons'
import PrimaryButton from './PrimaryButton'

const API_BASE = import.meta.env.VITE_API_BASE || '/api'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
  website: '' // honeypot — must stay empty
}

function validate(data) {
  const errors = {}
  if (!data.fullName.trim() || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.'
  }
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!data.service) {
    errors.service = 'Please select the service you need.'
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Please share a little more about your requirement (at least 10 characters).'
  }
  return errors
}

const fieldBase =
  'w-full rounded-card border bg-surface px-4 py-3 text-fg placeholder:text-fg-3/60 ' +
  'transition-colors duration-200 focus:outline-none'

function fieldClasses(hasError) {
  return `${fieldBase} ${hasError ? 'border-error focus:border-error' : 'border-line focus:border-primary'}`
}

function Field({ id, label, required, error, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-error">
          <AlertCircle size={15} />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const { form } = contact
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState('')
  const formRef = useRef(null)
  const successRef = useRef(null)

  function update(key) {
    return (e) => {
      setData((d) => ({ ...d, [key]: e.target.value }))
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  function focusFirstError(errs) {
    const first = Object.keys(errs)[0]
    if (first && formRef.current) {
      const el = formRef.current.querySelector(`[name="${first}"]`)
      if (el) el.focus()
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors)
      return
    }

    setStatus('submitting')
    setServerMessage('')

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        setStatus('success')
        setData(initialData)
        requestAnimationFrame(() => successRef.current?.focus())
        return
      }

      let payload = {}
      try {
        payload = await res.json()
      } catch {
        /* ignore non-JSON */
      }

      if (res.status === 400 && payload.errors) {
        setErrors(payload.errors)
        setStatus('idle')
        focusFirstError(payload.errors)
        return
      }

      setStatus('error')
      setServerMessage(
        payload.message ||
          (res.status === 429
            ? 'Too many attempts right now. Please try again in a little while.'
            : 'Something went wrong sending your enquiry. Please try again.')
      )
    } catch {
      setStatus('error')
      setServerMessage(
        'We could not reach the server. Please check your connection and try again.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        className="rounded-card-lg border border-line bg-surface p-8 sm:p-10"
        role="status"
        aria-live="polite"
        tabIndex={-1}
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-soft text-primary">
          <Check size={22} />
        </span>
        <h3 className="mt-6 text-h3 text-fg">Thank you — your enquiry is on its way.</h3>
        <p className="mt-3 text-fg-2">
          We’ve received your details and will review your requirement shortly. You’ll hear from us
          using the contact information you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="link-underline mt-6 text-sm font-medium text-primary"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === 'submitting'}
      className="rounded-card-lg border border-line bg-surface p-6 sm:p-8"
    >
      <h3 className="text-h3 text-fg">{form.heading}</h3>
      <p className="mt-3 text-sm leading-relaxed text-fg-2">{form.description}</p>

      <div className="mt-8 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="fullName" label="Full Name" required error={errors.fullName}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              value={data.fullName}
              onChange={update('fullName')}
              className={fieldClasses(errors.fullName)}
              aria-required="true"
              required
              aria-invalid={errors.fullName ? 'true' : undefined}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
          </Field>
          <Field id="companyName" label="Company Name" error={errors.companyName}>
            <input
              id="companyName"
              name="companyName"
              type="text"
              autoComplete="organization"
              value={data.companyName}
              onChange={update('companyName')}
              className={fieldClasses(errors.companyName)}
              aria-invalid={errors.companyName ? 'true' : undefined}
              aria-describedby={errors.companyName ? 'companyName-error' : undefined}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="email" label="Email Address" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={update('email')}
              className={fieldClasses(errors.email)}
              aria-required="true"
              required
              aria-invalid={errors.email ? 'true' : undefined}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </Field>
          <Field id="phone" label="Phone Number" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={data.phone}
              onChange={update('phone')}
              className={fieldClasses(errors.phone)}
              aria-invalid={errors.phone ? 'true' : undefined}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
          </Field>
        </div>

        <Field id="service" label="Service Required" required error={errors.service}>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={data.service}
              onChange={update('service')}
              className={`${fieldClasses(errors.service)} appearance-none pr-10`}
              aria-required="true"
              required
              aria-invalid={errors.service ? 'true' : undefined}
              aria-describedby={errors.service ? 'service-error' : undefined}
            >
              <option value="" disabled>
                Select a service…
              </option>
              {form.serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-fg-3" />
          </div>
        </Field>

        <Field id="budget" label="Project Budget" error={errors.budget}>
          <input
            id="budget"
            name="budget"
            type="text"
            value={data.budget}
            onChange={update('budget')}
            placeholder="Optional"
            className={fieldClasses(errors.budget)}
            aria-invalid={errors.budget ? 'true' : undefined}
            aria-describedby={errors.budget ? 'budget-error' : undefined}
          />
        </Field>

        <Field id="message" label="Message" required error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={data.message}
            onChange={update('message')}
            className={`${fieldClasses(errors.message)} resize-y`}
            aria-required="true"
            required
            aria-invalid={errors.message ? 'true' : undefined}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
        </Field>

        {/* Honeypot — hidden from users, catches naive bots */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={update('website')}
          />
        </div>
      </div>

      {status === 'error' && (
        <p
          role="alert"
          className="mt-6 flex items-start gap-2 rounded-card border border-error/40 bg-error/5 p-4 text-sm text-error"
        >
          <AlertCircle size={17} className="mt-0.5 shrink-0" />
          <span>{serverMessage}</span>
        </p>
      )}

      <p className="mt-6 text-xs leading-relaxed text-fg-3">{form.privacy}</p>

      <div className="mt-6">
        <PrimaryButton
          type="submit"
          size="lg"
          showArrow={status !== 'submitting'}
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <span className="inline-flex items-center gap-2">
              <Spinner size={18} className="animate-spin" />
              Sending…
            </span>
          ) : (
            form.submit
          )}
        </PrimaryButton>
      </div>
    </form>
  )
}
