# Component Strategy
## Elysian House — Building Blocks

---

## 1. Component Philosophy

> "Build fewer components, but build them perfectly."

This is not a design system for scale. This is a focused component library for a single, exquisite website. Every component should feel inevitable — as if no other solution was possible.

### Principles
1. **Composition over configuration:** Components are simple and combine flexibly
2. **Content-first:** Components are shaped by content, not the reverse
3. **Semantic markup:** HTML structure matters for accessibility and SEO
4. **Variants are minimal:** One component shouldn't try to do everything

---

## 2. Core Reusable Components

These components appear across multiple pages.

### 2.1 Typography Components

#### `<Heading>`
Large editorial headlines.

```
Props:
- level: 1 | 2 | 3 (maps to h1, h2, h3)
- size: "display" | "section" | "subsection"

Behavior:
- Renders semantic heading tag
- Applies serif font
- Responsive sizing built-in
```

#### `<Text>`
Body copy with variants.

```
Props:
- size: "large" | "base" | "small"
- color: "primary" | "secondary"
- as: "p" | "span" | "div"

Behavior:
- Sans-serif font
- Appropriate line-height per size
- Max-width for readability when standalone
```

#### `<Caption>`
Small supporting text.

```
Usage: Image captions, form hints, metadata
Styling: Small size, secondary color
```

---

### 2.2 Layout Components

#### `<Section>`
Page section with consistent spacing.

```
Props:
- spacing: "default" | "large" | "small"
- background: "primary" | "secondary"

Behavior:
- Consistent vertical padding
- Optional background color shift
- Contains content within max-width
```

#### `<Container>`
Content width constraint.

```
Props:
- width: "full" | "content" | "narrow"

Behavior:
- full: 1200px max
- content: 960px max
- narrow: 720px max (for text)
- Horizontal padding for mobile
```

#### `<Stack>`
Vertical spacing utility.

```
Props:
- gap: "sm" | "md" | "lg" | "xl"

Behavior:
- Flexbox column with gap
- Consistent vertical rhythm
```

#### `<Spacer>`
Intentional vertical space.

```
Props:
- size: "sm" | "md" | "lg" | "xl" | "2xl"

Behavior:
- Renders empty div with height
- For intentional breathing room
```

---

### 2.3 Interactive Components

#### `<Button>`
Primary call-to-action.

```
Props:
- variant: "primary" | "secondary" | "ghost"
- size: "default" | "large"
- href: string (renders as link if provided)

Behavior:
- Primary: Solid background
- Secondary: Outline only
- Ghost: Text only with underline
- Generous padding
- Subtle hover state
```

#### `<Link>`
Inline or standalone link.

```
Props:
- href: string
- external: boolean

Behavior:
- Underline on hover
- External links open in new tab with proper rel
- No color change (matches text)
```

#### `<NavLink>`
Navigation-specific link.

```
Props:
- href: string
- active: boolean

Behavior:
- No underline by default
- Subtle indicator when active
- Hover state
```

---

### 2.4 Media Components

#### `<Image>`
Optimized image with proper loading.

```
Props:
- src: string
- alt: string (required)
- priority: boolean
- aspectRatio: "16/9" | "4/3" | "1/1" | "auto"

Behavior:
- Next.js Image optimization
- Lazy loading by default
- Subtle fade-in on load
- Placeholder blur if available
```

#### `<Figure>`
Image with optional caption.

```
Props:
- src, alt, etc (passed to Image)
- caption: string

Behavior:
- Semantic figure/figcaption markup
- Caption styled as Caption component
```

#### `<PortraitPlaceholder>`
Editorial portrait space with or without image.

```
Props:
- src: string | null (null renders placeholder state)
- alt: string
- name: string (for caption/attribution)
- size: "small" | "medium" | "large"

Behavior:
- When src is null: Renders elegant placeholder (subtle texture, warm tone)
- When src provided: Renders portrait with editorial treatment
- Aspect ratio: 3:4 (portrait orientation)
- Consistent crop rules regardless of source image

Editorial Treatment Rules:
- Desaturated warm color grading
- Soft vignette (optional, subtle)
- Never full-bleed; always contained with breathing room
- Caption below with name, styled as Caption component
- Small size: 120px width (host bio)
- Medium size: 240px width (about page)
- Large size: 360px width (future full portraits)

Placeholder State:
- Warm fog (#E8E4DF) background
- Subtle linen texture overlay
- No placeholder icon or text
- Reads as intentional negative space, not "missing image"
```

---

### 2.5 Form Components

#### `<Input>`
Text input field.

```
Props:
- label: string
- name: string
- type: "text" | "email"
- error: string
- required: boolean

Behavior:
- Label always visible above
- Subtle border styling
- Focus state with accent color
- Error message below with muted styling
```

#### `<Textarea>`
Multi-line text input.

```
Props:
- label: string
- name: string
- rows: number
- error: string

Behavior:
- Same styling as Input
- Resizable vertically only
```

#### `<Form>`
Form wrapper with submission handling.

```
Props:
- onSubmit: function
- children: React nodes

Behavior:
- Prevents default submission
- Handles loading state
- Manages form-level errors
```

---

## 3. Page-Specific Components

These components are used on specific pages only.

### 3.1 Home Page

#### `<Hero>`
Opening section with primary statement.

```
Structure:
- Full viewport height (or near)
- Centered content
- Primary headline
- Optional supporting text
- Scroll indicator (subtle)

NOT:
- A hero "image"
- A video background
- Multiple CTAs
```

#### `<ScrollSection>`
Content section that reveals on scroll.

```
Structure:
- Section wrapper
- Content with entrance animation
- Respects reduced-motion

Behavior:
- Fade-up animation when entering viewport
- Animation only triggers once
```

#### `<EventIntro>`
The gathering introduction block.

```
Structure:
- Event title
- Date/location (subtle)
- Brief description
- CTA

Styling:
- Clear visual hierarchy
- Distinct from narrative sections
```

#### `<Essence>`
What happens at the gathering.

```
Structure:
- 3-4 short statements
- Each on its own visual beat
- Not a bulleted list

Styling:
- Typography-forward
- Generous spacing between items
```

---

### 3.2 Gathering Page

#### `<DetailBlock>`
Structured information block.

```
Structure:
- Heading
- Body content
- Optional list

Usage:
- "What the gathering is"
- "What happens"
- "Who it's for"
```

#### `<Logistics>`
Practical event details.

```
Structure:
- Date
- Time
- Location
- Duration
- (Price: Free — stated simply)

Styling:
- Clean, scannable
- Not a table
- Clear hierarchy
```

---

### 3.3 About Page

#### `<Manifesto>`
Brand philosophy statement.

```
Structure:
- Long-form text
- May have pull quotes
- Typography-forward

Styling:
- Narrow container (readability)
- Generous paragraph spacing
```

#### `<HostBio>`
Minimal founder introduction.

```
Structure:
- Small image (optional)
- Brief bio (2-3 sentences)
- Not hero treatment

Styling:
- Secondary to brand content
- Intimate, not promotional
```

---

### 3.4 Register Page

#### `<RegistrationForm>`
The actual form.

```
Fields:
- Full name (required)
- Email (required)
- "What brings you to this gathering?" (optional, textarea, max 500 chars)
- "How did you hear about us?" (optional, single-select dropdown)
  Options: Instagram, Friend/word of mouth, Other
- Email consent checkbox (required): "I'd like to receive updates about this gathering and future Elysian House events"

Behavior:
- Validation on blur
- Submit button with loading state
- Success → Confirmation component
- Soft capacity handling: If capacity reached, redirect to waitlist flow

Backend Notes:
- Submissions feed curated RSVP system (not auto-confirm)
- Manual approval flow for capacity management
- No automated upsell or marketing sequences
```

#### `<Confirmation>`
Post-submission state.

```
Structure:
- Warm confirmation message
- What happens next
- Optional calendar add
- Soft secondary action (follow, share)

Styling:
- Celebratory but restrained
- Feels like arrival, not transaction complete
```

---

## 4. Layout Rules

### Global Layout
```
<Header />
<main>
  <Page content />
</main>
<Footer />
```

### Header
- Fixed or static (not sticky-aggressive)
- Logo/wordmark left
- Navigation right
- Mobile: Simplified, possibly expandable
- Height: ~80px desktop, ~64px mobile

### Footer
- Not cluttered
- Brand name
- Key links (About, Instagram, Privacy)
- Newsletter signup (optional, minimal)
- Copyright

### Page Structure
- Each page is a series of Sections
- Sections have consistent vertical rhythm
- Content is always constrained by Container

---

## 5. Responsive Behavior Philosophy

### Breakpoints
```
sm: 640px  (large phones)
md: 768px  (tablets)
lg: 1024px (small laptops)
xl: 1280px (desktops)
```

### Mobile-First Principles
1. **Design for mobile, enhance for desktop** — not the reverse
2. **No horizontal scroll ever**
3. **Touch targets minimum 44px**
4. **No hover-dependent functionality**
5. **Typography scales fluidly** — not just snaps at breakpoints

### What Changes at Breakpoints
- Typography size (slightly larger on desktop)
- Section padding (more generous on desktop)
- Grid columns (1 → 2 → 3 as appropriate)
- Navigation (simplified on mobile)
- Image sizes (art direction if needed)

### What Does NOT Change
- Core information hierarchy
- Emotional pacing
- Component functionality
- Content order (mostly)

---

## 6. State Management

### Component States
Each interactive component must handle:
- **Default:** Resting state
- **Hover:** Desktop cursor interaction
- **Focus:** Keyboard navigation (visible focus ring)
- **Active:** Being clicked/tapped
- **Disabled:** When interaction is blocked
- **Loading:** When waiting for response
- **Error:** When something is wrong
- **Success:** When action completed

### Global States
- **Form submission:** Loading indicator in button
- **Navigation:** Current page indicated
- **Scroll position:** For header behavior if any

---

## 7. Component Inventory Summary

| Category | Components |
|----------|------------|
| Typography | Heading, Text, Caption |
| Layout | Section, Container, Stack, Spacer |
| Interactive | Button, Link, NavLink |
| Media | Image, Figure, PortraitPlaceholder |
| Form | Input, Textarea, Form |
| Home | Hero, ScrollSection, EventIntro, Essence |
| Gathering | DetailBlock, Logistics |
| About | Manifesto, HostBio |
| Register | RegistrationForm, Confirmation |
| Global | Header, Footer |

**Total: ~26 components**

This is intentionally small. Each component will be crafted, not generated.

---

*Document version: 1.1*
*Status: Approved — Ready for implementation*
