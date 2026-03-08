/**
 * ELYSIAN HOUSE — Site Copy
 * 
 * All website copy in one place for easy editing.
 * This is the single source of truth for all text content.
 */

export const siteConfig = {
  name: "Elysian House",
  tagline:
    "A reflective space for women navigating identity, healing and intentional living.",
  description:
    "Elysian House is a reflective space for women who have been surviving, succeeding and carrying responsibilities, yet feel disconnected from themselves. Through curated gatherings, guided conversations and reflective experiences, Elysian House helps women pause, reconnect and rebuild a life that feels aligned with who they truly are.",
  url: "https://elysianhouse.com",
  instagram: "https://instagram.com/elysianzita",
};

export const homePage = {
  hero: {
    headline:
      "Elysian House",
    subline:
      "A reflective space for women navigating identity, healing and intentional living.",
    description:
      "Where conversations help women reconnect with who they truly are.",
    cta: "Explore Upcoming Events",
  },

  whatIs: {
    headline: "What is Elysian House",
    paragraphs: [
      "Elysian House is a reflective space for women who have been surviving, succeeding and carrying responsibilities, yet feel disconnected from themselves.",
      "Through curated gatherings, guided conversations and reflective experiences, Elysian House helps women pause, reconnect and rebuild a life that feels aligned with who they truly are.",
    ],
  },

  coreThemes: {
    headline: "Core Conversation Themes",
    pillars: [
      {
        title: "Love & Relationships",
        description:
          "Exploring emotional connection, boundaries and conscious partnership.",
      },
      {
        title: "Healing & Transformation",
        description:
          "Conversations around emotional healing, breaking patterns and rebuilding self-trust.",
      },
      {
        title: "Personal Growth & Mindset",
        description:
          "Redefining success, navigating life transitions and living with intention.",
      },
    ],
  },

  howWomenExperience: {
    headline: "How Women Experience Elysian House",
    offerings: [
      {
        title: "Curated Events",
        description: "Guided conversations and community gatherings.",
        comingSoon: false,
      },
      {
        title: "Inner Circles",
        description: "Small groups for deeper reflective discussions.",
        comingSoon: true,
      },
      {
        title: "One-on-One Reflection Sessions",
        description:
          "Personal conversations to navigate life transitions.",
        comingSoon: true,
      },
    ],
  },

  closing: {
    headline: "Join Us",
    text: "If the conversations resonate with you, join us at our next gathering.",
    cta: "View Upcoming Events",
  },
};

export const eventsPage = {
  hero: {
    headline: "Events",
  },

  upcoming: {
    headline: "Upcoming Events",
    events: [
      {
        title: "Transform & Thrive",
        subtitle: "A Gathering for Women Ready to Bloom",
        date: "March 2026",
        location: "Dubai",
        description:
          "A gathering of women exploring identity, alignment and the courage to live intentionally.",
        ctaLabel: "Reserve Your Seat",
        ctaHref: "#",
      },
    ],
  },

  past: {
    headline: "Past Events",
    events: [
      {
        title: "Transform & Thrive",
        date: "February 28, 2026",
        summary:
          "A gathering of women exploring identity, alignment and the courage to live intentionally.",
        images: ["/images/Group of 2 IMG.jpg"],
        testimonial: null,
      },
    ],
  },
};

export const navigation = {
  links: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
  ],
  cta: null,
};

export const footer = {
  tagline: siteConfig.tagline,
  links: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Instagram", href: siteConfig.instagram, external: true },
  ],
  copyright: `© ${new Date().getFullYear()} Elysian House`,
  privacyLink: { label: "Privacy", href: "/privacy" },
};

export const metadata = {
  title: {
    default: "Elysian House",
    template: "%s | Elysian House",
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

// Legacy exports kept for existing pages that haven't been removed yet
export const eventConfig = {
  name: "Transform & Thrive",
  subtitle: "A Gathering for Women Ready to Bloom",
  date: "March 2026",
  location: "Dubai",
  venue: "Dubai",
  time: "TBD",
  price: "TBD",
  capacity: "Limited gathering",
};

export const gatheringPage = {
  hero: {
    headline: "The Gathering",
    subtitle: "Transform & Thrive: A Gathering for Women Ready to Bloom",
  },
  whatItIs: {
    headline: "What this is",
    text: "Transform & Thrive is a curated, facilitated gathering.",
  },
  whatHappens: {
    headline: "What happens",
    items: [] as { title: string; text: string }[],
  },
  whoItsFor: {
    headline: "Who this is for",
    text: "",
    notFor: "",
  },
  logistics: {
    headline: "Details",
    date: "March 2026",
    time: "TBD",
    location: "Dubai",
    venue: "Dubai",
    parking: "",
    duration: "",
    price: "TBD",
    note: "",
  },
};

export const aboutPage = {
  hero: { headline: "The House" },
  philosophy: {
    headline: "What Elysian House is",
    paragraphs: [] as string[],
  },
  host: {
    headline: "The Host",
    name: "[Host name]",
    bio: "",
  },
  vision: {
    headline: "What's coming",
    text: "",
  },
};

export const registerPage = {
  hero: {
    headline: "Request Your Invitation",
    subtitle: "This is a curated gathering.",
  },
  form: {
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone number",
    phonePlaceholder: "+971 XX XXX XXXX",
    hopingLabel: "What are you hoping to get out of this session?",
    hopingPlaceholder: "Share your intentions for this gathering. (Optional)",
    anythingLabel: "Anything you'd like us to know before we meet?",
    anythingPlaceholder: "Any details that would help us prepare for you. (Optional)",
    contactLabel: "How would you like to be contacted for more details?",
    contactOptions: [
      { value: "whatsapp", label: "WhatsApp" },
      { value: "telephone", label: "Telephone" },
      { value: "email", label: "Email" },
    ],
    consentLabel: "I understand this is a half day, free in-person session and accept to be a part of.",
    submitButton: "Request Invitation",
    submittingButton: "Sending...",
  },
  confirmation: {
    headline: "We've received your request",
    message: "Thank you for reaching out.",
    nextSteps: "In the meantime, feel free to follow along on Instagram for reflections and updates.",
  },
  errors: {
    nameRequired: "Please enter your name",
    emailRequired: "Please enter your email",
    emailInvalid: "Please enter a valid email address",
    phoneRequired: "Please enter your phone number",
    consentRequired: "Please confirm you understand and accept",
    generic: "Something went wrong. Please try again.",
  },
};
