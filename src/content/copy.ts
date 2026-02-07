/**
 * ELYSIAN HOUSE — Site Copy
 * 
 * All website copy in one place for easy editing.
 * This is the single source of truth for all text content.
 */

export const siteConfig = {
  name: "Elysian House",
  tagline: "A quiet room for women who are ready to begin again.",
  description:
    "Elysian House is a curated experiential brand creating gatherings for women at the moment between who they've been and who they're becoming.",
  url: "https://elysianhouse.com", // Update when domain is confirmed
  instagram: "https://instagram.com/elysianzita",
};

export const eventConfig = {
  name: "Transform & Thrive",
  subtitle: "A Gathering for Women Ready to Bloom",
  date: "February 28, 2026",
  location: "Dubai",
  venue: "Millennium Airport Hotel",
  time: "2:00 PM prompt",
  price: "Complimentary",
  capacity: "Limited gathering",
};

export const homePage = {
  hero: {
    headline: "A quiet room for women who are ready to begin again.",
  },
  
  narrative: {
    beat1: {
      // The Naming
      text: "There's a season when everything works, but nothing fits anymore. When you're grateful and still hungry. When you're fine, and quietly disappearing.",
    },
    beat2: {
      // The Permission
      text: "That restlessness isn't ingratitude. It's your next chapter trying to find you.",
    },
    beat3: {
      // The Invitation
      text: "You don't have to walk into it alone.",
    },
  },
  
  eventIntro: {
    headline: "Elysian House Event",
    subtitle: "A Gathering for Women Ready to Bloom",
    description:
      "Not a seminar. Not a performance. A room. A gathering for women who are tired of carrying everything alone, and ready to be witnessed, held, and reminded of who they're becoming.",
    date: "Feb 28 · Millennium Airport Hotel, Dubai",
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
  
  cta: {
    primary: "Request Your Invitation",
    secondary: "Learn more about the gathering",
  },
  
  closing: {
    headline: "This is Elysian House",
    text: "A place, a container, a recurring space women return to. This gathering is the first room. More will follow.",
  },
};

export const gatheringPage = {
  hero: {
    headline: "The Gathering",
    subtitle: "Transform & Thrive: A Gathering for Women Ready to Bloom",
  },
  
  whatItIs: {
    headline: "What this is",
    text: "Transform & Thrive is a curated, facilitated gathering, not a seminar, not a networking event, not a sales pitch. It's a room for women who are ready to step out of quiet survival and into intentional becoming. We come together to reflect, to witness, and to remember that we don't have to carry everything alone.",
  },
  
  whatHappens: {
    headline: "What happens",
    items: [
      {
        title: "Opening & grounding",
        text: "We arrive. We land in our bodies. We leave the noise outside.",
      },
      {
        title: "Guided reflection",
        text: "Facilitated prompts that invite you inward, not answers, but questions worth sitting with.",
      },
      {
        title: "Witnessed conversation",
        text: "Small-group sharing. You speak. Others listen. No advice. Just presence.",
      },
      {
        title: "Collective intention",
        text: "We close with something shared, a word, a breath, a quiet commitment to ourselves.",
      },
    ],
  },
  
  whoItsFor: {
    headline: "Who this is for",
    text: "This gathering is for women who feel the pull toward something more, even if they can't name it yet. Women whose lives look fine but feel different. Women who have been the strong one, the capable one, the one who holds it together. Women who are ready to be held, too.",
    notFor:
      "This is not for everyone. If you're looking for a quick fix, a motivational speech, or a room full of strangers exchanging business cards, this isn't it. This is slow. This is real. This is for women who are ready to show up.",
  },
  
  logistics: {
    headline: "Details",
    date: "February 28, 2026",
    time: "2:00 PM prompt",
    location: "Dubai",
    venue: "Millennium Airport Hotel",
    parking: "Free parking",
    duration: "Half-day gathering",
    price: "Complimentary",
    note: "This is a curated gathering with limited capacity. Requests are reviewed to ensure the room is held with intention.",
  },
};

export const aboutPage = {
  hero: {
    headline: "The House",
  },
  
  philosophy: {
    headline: "What Elysian House is",
    paragraphs: [
      "Elysian House is not a brand in the traditional sense. It's a container, a symbolic house that women return to when they're ready to meet themselves again.",
      "We exist for the moment between who you've been and who you're becoming. That tender, uncertain season when life still looks fine on the outside, but something inside is asking for more truth.",
      "This is not coaching. Not wellness. Not another self-help promise. It's a space. A gathering. A room where you don't have to explain yourself, because the other women in it understand without words.",
    ],
  },
  
  host: {
    headline: "The Host",
    name: "[Host name]", // To be filled in
    bio: "The woman behind Elysian House is not a guru. She's a convener, someone who builds rooms and invites others in. Her role is to hold the space, not to fill it. She's walking this path too; she just decided to build the room along the way.",
    // Photo to be added later
  },
  
  vision: {
    headline: "What's coming",
    text: "This gathering is the first room of Elysian House. But it won't be the last. We envision quarterly gatherings, intimate dinners, longer retreats, and eventually, a community of women who return to each other, season after season.",
  },
};

export const registerPage = {
  hero: {
    headline: "Request Your Invitation",
    subtitle:
      "This is a curated gathering. We review each request to ensure the room is held with intention.",
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
    consentLabel:
      "I understand this is a half day, free in-person session and accept to be a part of.",
    submitButton: "Request Invitation",
    submittingButton: "Sending...",
  },
  
  confirmation: {
    headline: "We've received your request",
    message:
      "Thank you for reaching out. We review each request personally, you'll hear from us soon.",
    nextSteps:
      "In the meantime, feel free to follow along on Instagram for reflections and updates.",
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

export const footer = {
  tagline: "A quiet room for women who are ready to begin again.",
  links: [
    { label: "The Gathering", href: "/gathering" },
    { label: "About", href: "/about" },
    { label: "Instagram", href: siteConfig.instagram, external: true },
  ],
  copyright: `© ${new Date().getFullYear()} Elysian House`,
  privacyLink: { label: "Privacy", href: "/privacy" },
};

export const navigation = {
  links: [
    { label: "The Gathering", href: "/gathering" },
    { label: "About", href: "/about" },
  ],
  cta: { label: "Request Invitation", href: "/register" },
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
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};
