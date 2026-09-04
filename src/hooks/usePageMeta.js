import { useEffect } from 'react'

const SITE_NAME = 'Anthropic Industries'
const SITE_URL = import.meta.env.VITE_SITE_URL || window.location.origin
const OG_IMAGE = import.meta.env.VITE_OG_IMAGE

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Per-route document metadata: unique title, meta description and Open Graph tags.
 * Keeps SEO concerns out of page components and consistent across routes.
 */
export function usePageMeta({ title, description }) {
  useEffect(() => {
    const canonical = document.head.querySelector('link[rel="canonical"]') || document.head.appendChild(document.createElement('link'))
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', `${SITE_URL}${window.location.pathname}`)
    if (title) document.title = title
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    if (title) {
      setMeta('property', 'og:title', title)
      setMeta('property', 'og:site_name', SITE_NAME)
      setMeta('property', 'og:url', `${SITE_URL}${window.location.pathname}`)
      setMeta('name', 'twitter:title', title)
    }
    setMeta('name', 'twitter:description', description)
    if (OG_IMAGE) {
      setMeta('property', 'og:image', OG_IMAGE)
      setMeta('name', 'twitter:image', OG_IMAGE)
    }
  }, [title, description])
}
