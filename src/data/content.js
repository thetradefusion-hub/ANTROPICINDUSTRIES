/**
 * Single source of truth for all approved website copy.
 * Text is transcribed verbatim from the Final Website Content Specification.
 * Bracketed [placeholders] are preserved intentionally — do not replace with
 * invented information. CTA labels omit the trailing arrow (buttons render an
 * animated arrow icon).
 */

export const site = {
  legalName: 'Anthropic Industries Private Limited',
  brand: 'Anthropic Industries'
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Innovation', to: '/innovation' },
  { label: 'Contact', to: '/contact' }
]

export const seo = {
  home: {
    title: 'Anthropic Industries | Technology & Digital Solutions',
    description:
      'We design and develop software, AI, cloud, cybersecurity and enterprise technology solutions built around real business needs.'
  },
  about: {
    title: 'About | Anthropic Industries',
    description:
      'A technology-focused company working across software development, intelligent technologies, enterprise solutions and digital transformation.'
  },
  services: {
    title: 'Technology Services | Anthropic Industries',
    description:
      'Software development, AI and data, cloud and enterprise technology, cybersecurity and blockchain, digital transformation and IT-enabled services.'
  },
  industries: {
    title: 'Industries & Technology | Anthropic Industries',
    description:
      'Adaptable technology solutions designed around the workflows and opportunities of diverse industries, built to evolve and scale.'
  },
  innovation: {
    title: 'Innovation & R&D | Anthropic Industries',
    description:
      'Exploring emerging technologies, experimenting with new ideas and identifying opportunities for future digital products and intellectual property.'
  },
  contact: {
    title: 'Contact | Anthropic Industries',
    description:
      'Tell us about your business challenge, technology idea or digital transformation requirement and let’s explore the right approach.'
  },
  notFound: {
    title: 'Page Not Found | Anthropic Industries',
    description: 'The page you are looking for could not be found.'
  },
  privacyPolicy: {
    title: 'Privacy Policy | Anthropic Industries',
    description: 'Privacy Policy content for Anthropic Industries is pending approval.'
  },
  terms: {
    title: 'Terms & Conditions | Anthropic Industries',
    description: 'Terms & Conditions content for Anthropic Industries is pending approval.'
  }
}

/* Shared industry catalog (Industries page wording). */
const industries = [
  {
    title: 'Healthcare',
    description:
      'Digital technology solutions supporting connected workflows, information management and digital experiences.'
  },
  {
    title: 'Finance',
    description:
      'Technology solutions designed around secure, scalable and data-driven financial operations.'
  },
  {
    title: 'Education',
    description:
      'Digital platforms and technology solutions supporting learning, management and engagement.'
  },
  {
    title: 'Retail & E-commerce',
    description:
      'Digital commerce, customer experience and technology solutions for evolving retail operations.'
  },
  {
    title: 'Manufacturing',
    description:
      'Technology supporting automation, operational workflows and connected enterprise processes.'
  },
  {
    title: 'Logistics',
    description:
      'Digital solutions for coordination, tracking, operational visibility and process efficiency.'
  },
  {
    title: 'Real Estate',
    description:
      'Technology solutions supporting property workflows, digital platforms and business operations.'
  },
  {
    title: 'Startups & Enterprises',
    description:
      'Scalable technology approaches for organizations building, modernizing or expanding their digital capabilities.'
  }
]

export const home = {
  hero: {
    eyebrow: 'Technology • Innovation • Digital Transformation',
    heading: ['Engineering the Future', 'with Intelligent Technology'],
    description:
      'We design and develop digital solutions that help businesses turn ideas, challenges and opportunities into scalable technology. From software and applications to AI, cloud and enterprise solutions, we bring technology and business thinking together to create solutions built around real requirements.',
    primaryCta: { label: 'Start a Project', to: '/contact' },
    secondaryCta: { label: 'Explore Our Services', to: '/services' },
    visual: 'Digital infrastructure'
  },
  capabilities: {
    heading: 'Technology Built Around Your Business',
    description:
      'From software engineering and cloud technologies to artificial intelligence, data, cybersecurity and enterprise solutions, our capabilities span the technologies businesses need to build, modernize and evolve digitally.',
    items: [
      'Software Development',
      'AI & Machine Learning',
      'Cloud Solutions',
      'Data & Analytics',
      'Cybersecurity',
      'Enterprise Solutions'
    ]
  },
  intro: {
    label: 'Who We Are',
    heading: 'Technology That Moves Businesses Forward',
    paragraphs: [
      'We are a technology-focused company developing software, digital platforms and technology solutions for evolving business needs.',
      'Our capabilities cover software development, web and mobile applications, artificial intelligence, machine learning, cloud technologies, data analytics, cybersecurity, enterprise solutions and digital transformation.',
      'We approach technology with a practical focus: understand the requirement, identify the right approach and build solutions designed for usability, scalability and long-term value.'
    ],
    cta: { label: 'Discover Our Capabilities', to: '/about' },
    visual: 'Technology & engineering'
  },
  services: {
    label: 'What We Do',
    heading: 'Technology Solutions for a Digital World',
    description:
      'From initial ideas to implementation and ongoing improvement, we provide technology capabilities tailored to different business requirements.',
    items: [
      {
        index: '01',
        title: 'Software & Digital Product Development',
        description:
          'Custom software, web applications and mobile experiences designed around business processes, users and operational requirements.',
        items: [
          'Custom Software Development',
          'Web Applications',
          'Mobile Applications',
          'UI/UX & Product Development',
          'Testing & Maintenance',
          'Customization & Integration'
        ]
      },
      {
        index: '02',
        title: 'AI, Data & Automation',
        description:
          'Technology solutions that use artificial intelligence, machine learning and data to support automation, analysis and informed decision-making.',
        items: ['Artificial Intelligence', 'Machine Learning', 'Data Analytics', 'Intelligent Automation']
      },
      {
        index: '03',
        title: 'Cloud & Enterprise Solutions',
        description:
          'Modern technology solutions designed to support connected, scalable and adaptable business operations.',
        items: ['Cloud Solutions', 'ERP Solutions', 'Enterprise Applications', 'IT Infrastructure']
      },
      {
        index: '04',
        title: 'Cybersecurity & Blockchain',
        description:
          'Technology approaches focused on security, resilience, transparency and responsible digital infrastructure.',
        items: ['Cybersecurity', 'IT Security', 'Blockchain Solutions']
      },
      {
        index: '05',
        title: 'Integration & Digital Transformation',
        description:
          'Connect systems, modernize processes and use technology to create more efficient digital operations.',
        items: ['System Integration', 'Process Automation', 'Digital Transformation', 'Workflow Modernization']
      }
    ]
  },
  whyChooseUs: {
    label: 'Our Approach',
    heading: 'Built for Complexity. Designed for Scale.',
    intro:
      'Every business has different processes, priorities and technology challenges. Our approach begins with understanding those requirements before determining the technology solution.',
    points: [
      {
        index: '01',
        title: 'Business First',
        description:
          'We start with business requirements, workflows and objectives rather than forcing a predefined technology solution.'
      },
      {
        index: '02',
        title: 'End-to-End Capability',
        description:
          'From planning and design to development, implementation and ongoing support, our capabilities can span the technology lifecycle.'
      },
      {
        index: '03',
        title: 'Designed to Evolve',
        description:
          'We focus on solutions that can adapt as requirements, users and business operations change.'
      },
      {
        index: '04',
        title: 'Security & Reliability',
        description:
          'Security, performance, reliability and maintainability are considered throughout the solution lifecycle.'
      }
    ]
  },
  industries: {
    label: 'Industries',
    heading: 'Technology for Diverse Business Needs',
    description:
      'Technology requirements vary from industry to industry. We develop adaptable solutions around the workflows, operational needs and digital opportunities of different sectors.',
    // Home uses the "financial workflows" wording for Finance.
    items: industries.map((i) =>
      i.title === 'Finance'
        ? {
            ...i,
            description:
              'Technology solutions designed around secure, scalable and data-driven financial workflows.'
          }
        : i
    )
  },
  digitalTransformation: {
    label: 'Digital Transformation',
    heading: 'Transform Your Business. Digitally.',
    paragraphs: [
      'Digital transformation is more than adopting new technology. It is about improving how systems, processes, people and data work together.',
      'We help organizations explore opportunities for modernization, automation, integration and digital experiences through practical technology solutions.'
    ],
    process: [
      { index: '01', title: 'Assess', text: 'Understand the current challenge.' },
      { index: '02', title: 'Strategize', text: 'Define the appropriate technology direction.' },
      { index: '03', title: 'Design', text: 'Translate requirements into usable digital experiences.' },
      { index: '04', title: 'Develop', text: 'Build and integrate the solution.' },
      { index: '05', title: 'Optimize', text: 'Refine the solution as needs evolve.' }
    ],
    cta: { label: 'Talk to Our Technology Team', to: '/contact' }
  },
  innovationTeaser: {
    label: 'Looking Beyond Today',
    heading: 'Exploring What Technology Can Make Possible',
    description:
      'Our technology vision extends beyond today’s solutions. We aim to explore emerging technologies, develop new digital capabilities and identify opportunities for proprietary technology and future products.',
    areas: [
      'Artificial Intelligence',
      'Machine Learning',
      'Automation',
      'Cloud Technologies',
      'Data Technologies',
      'Emerging Digital Technologies'
    ],
    cta: { label: 'Explore Innovation', to: '/innovation' }
  },
  finalCta: {
    heading: 'Have a Technology Challenge in Mind?',
    description:
      'Whether you are planning a new digital product, modernizing an existing system or exploring a technology opportunity, let’s start with the requirement.',
    cta: { label: 'Let’s Build Something Remarkable', to: '/contact' }
  }
}

export const about = {
  hero: {
    label: 'About the Company',
    heading: ['Technology With Purpose.', 'Innovation With Direction.'],
    description:
      'We are a technology-focused company working across software development, intelligent technologies, enterprise solutions and digital transformation. Our goal is to create practical technology solutions around the needs of the businesses and organizations we work with.'
  },
  overview: {
    heading: 'Building Technology Around Real Business Needs',
    paragraphs: [
      'Businesses today operate in an environment where technology, data and digital experiences are increasingly connected. We aim to help organizations navigate that environment through thoughtfully designed technology solutions.',
      'Our capabilities span software and application development, AI and machine learning, cloud technologies, data analytics, cybersecurity, enterprise solutions and system integration.',
      'Rather than approaching every requirement with the same solution, we focus on understanding the business context and selecting an approach appropriate to the challenge.'
    ],
    visual: 'Architectural systems'
  },
  vision: {
    label: 'Our Vision',
    heading: 'To Make Technology More Meaningful',
    content:
      'To contribute to a future where technology makes businesses more connected, intelligent, adaptable and capable of creating lasting value.'
  },
  mission: {
    label: 'Our Mission',
    heading: 'Turning Business Needs Into Technology Solutions',
    content:
      'To design and deliver practical technology solutions that connect business needs with modern digital capabilities while encouraging innovation, responsible technology adoption and continuous improvement.'
  },
  coreValues: {
    label: 'What Guides Us',
    heading: 'Principles Behind Our Work',
    values: [
      {
        title: 'Innovation',
        text: 'Explore new ideas, technologies and approaches to solve evolving challenges.'
      },
      {
        title: 'Customer Focus',
        text: 'Understand requirements, priorities and business context before defining solutions.'
      },
      {
        title: 'Excellence',
        text: 'Strive for thoughtful engineering, usability and continuous improvement.'
      },
      {
        title: 'Integrity',
        text: 'Communicate responsibly, work transparently and build relationships around trust.'
      }
    ]
  },
  approach: {
    label: 'How We Work',
    heading: 'From Understanding to Execution',
    description:
      'Good technology begins with a clear understanding of the problem. Our approach is built around connecting business objectives with technology decisions at every stage.',
    steps: ['Understand', 'Plan', 'Design', 'Build', 'Integrate', 'Evolve']
  },
  futureOutlook: {
    label: 'Looking Ahead',
    heading: 'Building Toward What’s Next',
    paragraphs: [
      'As technology continues to evolve, we see opportunities to expand our capabilities across intelligent systems, automation, cloud technologies, digital products and technology research.',
      'Our longer-term direction includes exploring new technology products, research initiatives and intellectual property opportunities as those capabilities develop.'
    ]
  },
  cta: {
    heading: 'Let’s Create What’s Next',
    cta: { label: 'Explore Our Services', to: '/services' }
  }
}

export const services = {
  hero: {
    label: 'Our Services',
    heading: 'Technology Solutions Built Around Your Business',
    description:
      'From software development to artificial intelligence, cloud, cybersecurity and enterprise technology, we bring together capabilities to address diverse digital requirements.'
  },
  groups: [
    {
      index: '01',
      label: 'Software & Digital Product Development',
      heading: 'Software & Digital Product Development',
      description:
        'We design and develop software solutions around business workflows, user requirements and product objectives. From individual applications to broader digital platforms, our development capabilities can support different stages of the product lifecycle.',
      visual: 'Product engineering',
      detail: [
        { title: 'Custom Software Development', text: 'Solutions designed around specific business requirements.' },
        { title: 'Web Applications', text: 'Responsive, scalable applications for digital operations and customer experiences.' },
        { title: 'Mobile Applications', text: 'Mobile experiences designed for different business and user needs.' },
        { title: 'UI/UX & Product Development', text: 'Interfaces and digital experiences focused on usability and product objectives.' },
        { title: 'Testing & Maintenance', text: 'Quality-focused testing, maintenance and ongoing technical support.' },
        { title: 'Customization & Integration', text: 'Adapt and connect technology systems around existing business processes.' }
      ]
    },
    {
      index: '02',
      label: 'AI, Data & Intelligent Technology',
      heading: 'Intelligence From Data. Automation Through Technology.',
      description:
        'AI, machine learning and data technologies are creating new possibilities for business operations and decision-making. We explore these technologies to develop solutions that can support automation, analytics and intelligent digital experiences.',
      areas: ['Artificial Intelligence', 'Machine Learning', 'Data Analytics', 'Intelligent Automation', 'Data-driven Applications']
    },
    {
      index: '03',
      label: 'Cloud & Enterprise Technology',
      heading: 'Connected Technology for Modern Operations',
      description:
        'Modern businesses rely on systems that can connect applications, data and operations. Our cloud and enterprise technology capabilities are focused on building technology environments that can adapt to changing business requirements.',
      areas: ['Cloud Solutions', 'ERP Solutions', 'Enterprise Applications', 'System Integration', 'IT Infrastructure', 'Business Process Technology']
    },
    {
      index: '04',
      label: 'Cybersecurity & Blockchain',
      heading: 'Technology Designed With Security in Mind',
      description:
        'Security is an important consideration across modern digital systems. We explore technology solutions that support secure applications, infrastructure and business data while addressing evolving digital requirements.',
      visual: 'Secure infrastructure',
      detail: [
        { title: 'Cybersecurity', text: 'Security-focused approaches for applications, systems and digital environments.' },
        { title: 'IT Security', text: 'Technology practices supporting infrastructure and information protection.' },
        { title: 'Blockchain Solutions', text: 'Blockchain-based approaches for use cases where transparency, traceability or decentralized architectures may provide value.' }
      ]
    },
    {
      index: '05',
      label: 'Digital Transformation',
      heading: 'Modernize. Connect. Transform.',
      description:
        'We help organizations explore opportunities to modernize legacy processes, connect systems, automate repetitive activities and create more effective digital workflows.',
      areas: ['Process Automation', 'System Integration', 'Digital Platforms', 'Workflow Modernization', 'Enterprise Technology']
    },
    {
      index: '06',
      label: 'IT-Enabled Services',
      heading: 'Technology-Powered Business Operations',
      description:
        'Technology can support more than software products. Our broader IT-enabled service capabilities can help organizations explore technology-supported operational and business processes.',
      detail: [
        { title: 'Software Support', text: 'Application support, maintenance and technical assistance.' },
        { title: 'Business Process Support', text: 'Technology-enabled support for selected business processes.' },
        { title: 'BPO / KPO Services', text: 'Business and knowledge process support where applicable.' },
        { title: 'Customer Support', text: 'Technology-enabled communication and support operations.' },
        { title: 'Business Process Automation', text: 'Automation opportunities for repetitive and technology-driven workflows.' }
      ]
    }
  ],
  cta: {
    heading: 'Have a Requirement? Let’s Discuss It.',
    cta: { label: 'Start a Conversation', to: '/contact' }
  }
}

export const industriesPage = {
  hero: {
    label: 'Industries & Technology',
    heading: 'Technology Designed Around Your Industry',
    description:
      'Different industries have different workflows, challenges and opportunities. We approach technology with the flexibility to adapt solutions around those requirements.'
  },
  industries: {
    heading: 'Technology for Diverse Business Needs',
    items: industries
  },
  techCapabilities: {
    label: 'Technology Expertise',
    heading: 'Technology That Powers Our Solutions',
    description:
      'We work with modern technology approaches selected according to project requirements, architecture, scalability and business objectives.'
  },
  techStack: {
    // Content rule: only display confirmed technologies. None are confirmed yet,
    // so each category shows a placeholder and clearly labels the source list as
    // a candidate list pending confirmation.
    note:
      'Only confirmed technologies are shown. Confirmed stacks are pending, so the lists below are a candidate reference — not a claim of expertise — until verified.',
    placeholder: '[Confirmed technologies]',
    categories: [
      { name: 'Web development', candidates: ['React', 'Next.js', 'Angular', 'Vue'] },
      // { name: 'Backend', candidates: ['Node.js', 'Python', 'Java', '.NET'] },
      { name: 'Mobile', candidates: ['React Native', 'Flutter', 'Native Android', 'iOS'] },
      { name: 'Cloud', candidates: ['AWS', 'Microsoft Azure', 'Google Cloud'] },
      { name: 'Data & AI', candidates: ['Python', 'Machine Learning', 'Data Analytics', 'Generative AI'] },
      { name: 'Databases', candidates: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
      { name: 'DevOps & Infrastructure', candidates: ['Docker', 'Kubernetes', 'CI/CD'] }
    ]
  },
  builtForScale: {
    heading: 'Technology That Can Evolve With Your Business',
    description:
      'Technology requirements change as organizations grow. We consider scalability, maintainability, integration and future requirements when shaping technology solutions, helping create a foundation that can evolve alongside the business.',
    visual: 'Scalable systems'
  },
  cta: {
    heading: 'Have a Digital Challenge?',
    cta: { label: 'Tell Us About It', to: '/contact' }
  }
}

export const innovation = {
  hero: {
    label: 'R&D • Emerging Technology • Future Products',
    heading: 'Innovating Beyond Today',
    description:
      'Technology is constantly changing. Our innovation direction focuses on exploring emerging technologies, experimenting with new ideas and identifying opportunities to create digital solutions for future business needs.'
  },
  rnd: {
    heading: 'Exploring Emerging Technologies',
    description:
      'Our research and development direction focuses on understanding emerging technologies and exploring how they may create practical opportunities for future digital solutions.',
    visual: 'Applied research'
  },
  researchAreas: [
    { title: 'Artificial Intelligence', text: 'Exploring intelligent technologies and their potential applications across digital systems.' },
    { title: 'Machine Learning', text: 'Investigating data-driven approaches for automation, prediction and intelligent applications.' },
    { title: 'Automation', text: 'Exploring ways technology can simplify repetitive processes and improve digital workflows.' },
    { title: 'Cloud Computing', text: 'Exploring scalable and adaptable approaches to modern digital infrastructure.' },
    { title: 'Data Technologies', text: 'Understanding how data can support better systems, insights and decision-making.' },
    { title: 'Emerging Digital Technologies', text: 'Exploring new technology directions as they mature and create practical opportunities.' }
  ],
  ideasToInnovation: {
    heading: 'From Ideas to Digital Possibilities',
    paragraphs: [
      'Innovation begins with a question: what could technology make possible?',
      'We aim to explore ideas that can evolve from concepts into software products, technology solutions or new digital capabilities. As these initiatives mature, they may create opportunities for proprietary products, intellectual property and technology licensing.'
    ]
  },
  ipFutureProducts: {
    heading: 'Building for the Future',
    description:
      'Our longer-term technology direction includes exploring proprietary software, new technology products and intellectual property opportunities. These initiatives are intended to support the development of differentiated technology capabilities over time.'
  },
  collaboration: {
    label: 'Partnerships',
    heading: 'Let’s Build the Future Together',
    description:
      'Technology innovation often happens through collaboration. We are open to exploring technology partnerships, strategic alliances, implementation collaborations and research opportunities that create meaningful possibilities for all parties involved.',
    areas: ['Technology Partnerships', 'Strategic Alliances', 'Implementation Partnerships', 'Research Collaborations'],
    cta: { label: 'Explore Collaboration', to: '/contact' }
  },
  futureProducts: {
    heading: 'The Next Generation of Technology',
    description:
      'As our research and development capabilities evolve, we intend to explore opportunities to create technology products and digital solutions that address emerging business and market needs.'
  },
  cta: {
    heading: 'Have an Idea Worth Exploring?',
    description: 'Let’s start a conversation around the technology behind it.',
    cta: { label: 'Talk to Us', to: '/contact' }
  }
}

export const contact = {
  hero: {
    label: 'Contact Us',
    heading: 'Let’s Build Something Remarkable',
    description:
      'Have a business challenge, technology idea or digital transformation requirement? Tell us what you’re working on and let’s explore the right technology approach.'
  },
  info: {
    heading: 'Let’s Start a Conversation',
    email: 'connect@anthropicindustries.com',
    phone: '+91 6265110058',
    address: 'Max street, Delhi 400001',
    socials: ['[LinkedIn URL]', '[Facebook URL]', '[Instagram URL]', '[X URL]'],
    note: 'Only display social platforms for which official company accounts exist.'
  },
  form: {
    heading: 'Tell Us About Your Requirement',
    description:
      'Share a few details about your requirement. Our team can review the information and connect with you to discuss the next steps.',
    privacy:
      'By submitting this form, you agree that the information provided may be used to respond to your enquiry.',
    submit: 'Send Enquiry',
    serviceOptions: [
      'Software Development',
      'Web Application',
      'Mobile Application',
      'AI & Machine Learning',
      'Cloud Solutions',
      'Cybersecurity',
      'Blockchain',
      'ERP & Enterprise Solutions',
      'Data & Analytics',
      'System Integration',
      'Digital Transformation',
      'IT-Enabled Services',
      'Other'
    ]
  },
  whatNext: {
    heading: 'What Happens Next?',
    steps: [
      { index: '01', title: 'We Review', text: 'We review the information you’ve shared about your requirement.' },
      { index: '02', title: 'We Connect', text: 'We get in touch to understand the requirement in greater detail.' },
      { index: '03', title: 'We Explore', text: 'Together, we explore potential technology approaches and next steps.' }
    ]
  }
}

export const legal = {
  privacyPolicy: {
    heading: 'Privacy Policy',
    message: 'Approved privacy policy content is pending and will be published here once available.'
  },
  terms: {
    heading: 'Terms & Conditions',
    message: 'Approved terms and conditions content is pending and will be published here once available.'
  }
}

export const footer = {
  tagline:
    'A technology-focused company developing software, digital platforms and technology solutions for evolving business needs.',
  columns: {
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Industries', to: '/industries' },
      { label: 'Innovation', to: '/innovation' },
      { label: 'Contact', to: '/contact' }
    ],
    capabilities: [
      'Software Development',
      'AI & ML',
      'Cloud Solutions',
      'Cybersecurity',
      'Enterprise Solutions',
      'Digital Transformation'
    ],
    legal: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms' }
    ]
  },
  copyright: '© 2026 Anthropic Industries Private Limited. All Rights Reserved.'
}
