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
    points: [
      {
        title: "A reflective space",
        description:
          "Elysian House is a reflective space for women who have been surviving, succeeding and carrying responsibilities, yet feel disconnected from themselves.",
        iconId: "home",
      },
      {
        title: "Curated gatherings & conversations",
        description:
          "Through curated gatherings, guided conversations and reflective experiences.",
        iconId: "circle",
      },
      {
        title: "Pause, reconnect & rebuild",
        description:
          "Elysian House helps women pause, reconnect and rebuild a life that feels aligned with who they truly are.",
        iconId: "leaf",
      },
    ],
  },

  coreThemes: {
    headline: "Core Conversation Themes",
    pillars: [
      {
        title: "Love & Relationships",
        description:
          "Emotional connection, boundaries, and conscious partnership.",
        iconId: "heart",
      },
      {
        title: "Healing & Transformation",
        description:
          "Emotional healing, breaking patterns, and rebuilding self-trust.",
        iconId: "leaf",
      },
      {
        title: "Personal Growth & Mindset",
        description:
          "Redefining success, navigating transitions, and living with intention.",
        iconId: "compass",
      },
      {
        title: "Body & Wellbeing",
        description:
          "Embodying presence, rest, and gentle self-care.",
        iconId: "sparkles",
      },
      {
        title: "Purpose & Meaning",
        description:
          "Clarifying values, calling, and what matters most.",
        iconId: "star",
      },
      {
        title: "Community & Belonging",
        description:
          "Sisterhood, being seen, and belonging.",
        iconId: "circle",
      },
      {
        title: "Creativity & Expression",
        description:
          "Reconnecting with play, voice, and authentic self-expression.",
        iconId: "sparkles",
      },
      {
        title: "Nature & Grounding",
        description:
          "Rooting in the body, seasons, and the natural world.",
        iconId: "leaf",
      },
      {
        title: "Legacy & Contribution",
        description:
          "What we pass on, impact, and leaving a meaningful imprint.",
        iconId: "star",
      },
      {
        title: "Rest & Restoration",
        description:
          "Slowing down, rest as practice, and sustainable energy.",
        iconId: "leaf",
      },
      {
        title: "Inner Wisdom & Intuition",
        description:
          "Listening within, trusting yourself, and living from clarity.",
        iconId: "star",
      },
      {
        title: "Voice & Visibility",
        description:
          "Being heard, taking up space, and showing up fully.",
        iconId: "sparkles",
      },
      {
        title: "Boundaries & Energy",
        description:
          "Honouring your limits, saying no, and protecting your peace.",
        iconId: "heart",
      },
      {
        title: "Life Transitions",
        description:
          "Navigating change, uncertainty, and new chapters with grace.",
        iconId: "compass",
      },
      {
        title: "Self-Compassion",
        description:
          "Kindness toward yourself, inner critic work, and worthiness.",
        iconId: "leaf",
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
        iconId: "calendar",
      },
      {
        title: "Inner Circles",
        description: "Small groups for deeper reflective discussions.",
        comingSoon: true,
        iconId: "users",
      },
      {
        title: "One-on-One Sessions",
        description: "Personal conversations to navigate life transitions.",
        comingSoon: true,
        iconId: "user",
      },
      {
        title: "Workshops",
        description: "Focused sessions on identity, boundaries and intention.",
        comingSoon: true,
        iconId: "book-open",
      },
      {
        title: "Day Retreats",
        description: "Half- or full-day reflective experiences in held space.",
        comingSoon: true,
        iconId: "sun",
      },
      {
        title: "Membership",
        description: "Ongoing access to circles, events and reflective resources.",
        comingSoon: true,
        iconId: "sparkles",
      },
    ],
  },

  essence: {
    headline: "What happens",
    items: [
      "We gather in a room designed for presence.",
      "We reflect, guided, not lectured.",
      "We witness each other, seen, not fixed.",
      "We leave different than we came.",
    ],
  },

  readOurArticles: {
    headline: "Read Our Articles",
    text: "Stories and reflections from past gatherings — moments of connection, healing and intention we're honoured to share.",
    cta: "Read Articles",
  },

  closing: {
    headline: "Join Us",
    text: "If the conversations resonate with you, join us at our next gathering.",
    cta: "View Upcoming Events",
  },
};

export const eventsPage = {
  hero: {
    headline: "Upcoming events",
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
        ctaHref: "/gathering",
      },
    ],
  },

  past: {
    headline: "Past Events",
    events: [
      {
        title: "Transform & Thrive",
        subtitle: "A Gathering for Women Ready to Bloom",
        date: "February 28, 2026",
        location: "Dubai",
        summary:
          "A gathering of women exploring identity, alignment and the courage to live intentionally. An intimate day of workshops, circle sharing and connection.",
        highlights: [
          "Morning intention-setting and breathwork",
          "Identity and alignment workshops",
          "Closing circle and integration",
        ],
        images: ["/images/Group of 2 IMG.jpg"],
        testimonial: null,
      },
    ],
  },
};

/** Articles (blog-style stories from past events) — not in navbar, linked from home and footer */
export const articlesPage = {
  hero: {
    headline: "Stories from the House",
    subline: "Reflections and moments from past gatherings.",
  },
  list: {
    headline: "Articles",
    empty: "No articles yet. Check back after our next gathering.",
  },
};

export const articles = [
  {
    slug: "transform-thrive-february-2026",
    title: "Transform & Thrive — February 2026",
    subtitle: "A day of intention, alignment and connection",
    date: "March 2, 2026",
    excerpt:
      "An intimate gathering of women in Dubai explored identity, alignment and the courage to live intentionally. Here's what unfolded.",
    image: "/images/Group of 2 IMG.jpg",
    content: `We gathered on a late February morning in Dubai — a small circle of women ready to pause and reflect.

The room was set for presence: simple, warm, with space to breathe. We began with grounding and intention-setting. No ice-breakers; instead, a shared commitment to show up as we were.

Through the morning we moved through guided conversations on identity and alignment. What does it mean to live in alignment when you've been surviving rather than choosing? The circle held both vulnerability and clarity. We didn't fix each other; we witnessed.

Workshops wove in breathwork and reflective writing. By the closing circle, the room felt different — lighter, more honest. Women left with a sense of being seen and a clearer thread to pull on.

This is what Elysian House is for: not answers, but the space to ask the questions that matter. We're grateful to everyone who showed up.`,
  },
  {
    slug: "why-we-gather",
    title: "Why We Gather",
    subtitle: "On creating space for women to reconnect",
    date: "February 15, 2026",
    excerpt:
      "A short reflection on why Elysian House exists and what we hope happens when women come together in a reflective space.",
    image: null as string | null,
    content: `So many women we meet have been surviving, succeeding and carrying — and somewhere along the way, the connection to themselves has faded.

Elysian House exists to create a pause. A room where you're not performing, not fixing, not hustling. Where the only job is to show up and reflect.

We don't lecture. We facilitate. We hold space for the conversations that often don't get airtime: identity, healing, boundaries, intention. The stuff that shapes a life.

When women gather with that intention, something shifts. Not because we have the answers, but because we make room for the questions. That's why we gather.`,
  },
];

export const navigation = {
  links: [
    { label: "Home", href: "/" },
    { label: "The Gathering", href: "/gathering" },
    { label: "Events", href: "/events" },
  ],
  cta: null,
};

export const footer = {
  tagline: siteConfig.tagline,
  links: [
    { label: "Home", href: "/" },
    { label: "The Gathering", href: "/gathering" },
    { label: "Events", href: "/events" },
    { label: "Articles", href: "/articles" },
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
    subline: "One space, one afternoon — from arrival to closing.",
    items: [
      { title: "Arrival & grounding", text: "We open the space with a short grounding practice and intention-setting so everyone can arrive fully." },
      { title: "Guided conversations", text: "Facilitated circles and prompts around identity, alignment and living with intention — no lecturing, only reflection and sharing." },
      { title: "Workshops & practices", text: "Breathwork, reflective exercises and small-group discussions to deepen what emerges." },
      { title: "Closing circle", text: "We close with integration and a shared moment of witnessing before you leave." },
    ] as { title: string; text: string }[],
  },
  whoItsFor: {
    kicker: "For you",
    headline: "Is this for you?",
    text: "Women who have been surviving, succeeding and carrying responsibilities yet feel disconnected from themselves. If you're ready to pause, reconnect and explore a life that feels aligned with who you truly are, this gathering is for you.",
    notFor: "This is not a therapy session or a substitute for professional support. It is a reflective, community space.",
  },
  logistics: {
    headline: "Details",
    date: "March 2026",
    time: "TBD",
    location: "Dubai",
    venue: "Dubai",
    parking: "Details shared after registration.",
    duration: "Half day",
    price: "TBD",
    note: "This is a curated gathering. Request your invitation to receive full details.",
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
