import {
  BrainCircuit,
  Building2,
  Briefcase,
  BarChart3,
  CloudCog,
  Code2,
  Database,
  Factory,
  FileSearch,
  Gauge,
  GraduationCap,
  Grid3x3,
  Headset,
  HeartPulse,
  Landmark,
  Layers3,
  Lightbulb,
  MessageCircle,
  Monitor,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  ServerCog,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Target,
  Truck,
  Workflow,
  UsersRound
} from 'lucide-react'

export const serviceIcons = {
  'Software & Digital Product Development': Code2,
  'AI, Data & Automation': BrainCircuit,
  'AI, Data & Intelligent Technology': BrainCircuit,
  'Cloud & Enterprise Solutions': CloudCog,
  'Cloud & Enterprise Technology': CloudCog,
  'Cybersecurity & Blockchain': ShieldCheck,
  'Integration & Digital Transformation': Workflow,
  'Digital Transformation': Workflow,
  'IT-Enabled Services': Headset
}

export const industryIcons = {
  Healthcare: HeartPulse,
  Finance: Landmark,
  Education: GraduationCap,
  'Retail & E-commerce': ShoppingBag,
  Manufacturing: Factory,
  Logistics: Truck,
  'Real Estate': Building2,
  'Startups & Enterprises': Rocket
}

export const capabilityIcons = [Monitor, BrainCircuit, CloudCog, BarChart3, ShieldCheck, ServerCog]
export const whyIcons = [Briefcase, Layers3, RefreshCw, ShieldCheck]
export const transformationIcons = [Search, Target, Grid3x3, Code2, Gauge]
export const approachIcons = [Search, FileSearch, PenTool, Code2, Workflow, RefreshCw]
export const valueIcons = [Lightbulb, UsersRound, BarChart3, ShieldCheck]
export const contactStepIcons = [FileSearch, MessageCircle, Lightbulb]

export function getServiceIcon(title) {
  return serviceIcons[title] || Settings2
}

export function getIndustryIcon(title) {
  return industryIcons[title] || Building2
}

export function IconContainer({ children, size = 'card', className = '' }) {
  const sizeClass = size === 'small' ? 'h-8 w-8' : 'h-11 w-11'
  return (
    <span
      aria-hidden="true"
      className={`icon-container inline-flex shrink-0 items-center justify-center rounded-card border border-line bg-soft text-primary transition-colors duration-300 ${sizeClass} ${className}`}
    >
      {children}
    </span>
  )
}
