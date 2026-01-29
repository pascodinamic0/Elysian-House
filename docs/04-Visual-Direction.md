# Visual Direction Document
## Elysian House — Design Language

---

## 1. Design Philosophy

> "Restraint is confidence. Space is invitation. Every element earns its place."

This is not a website that tries to impress. It is a website that allows the visitor to arrive.

### Guiding Principles

**1. Editorial over Commercial**
The visual language borrows from magazines like Kinfolk and The Gentlewoman — where design serves content, never competes with it.

**2. Warmth without Sweetness**
The palette is warm but never saccharine. Think terracotta, not pink. Linen, not cream. Stone, not beige.

**3. Negative Space as Content**
White space is not "empty" — it is breathing room. It signals that we are not desperate for attention.

**4. Typography as Voice**
Type choices carry emotional weight. A serif headline is not decoration — it is tone of voice.

**5. Photography as Witness**
Images show women in moments, not poses. Light matters more than faces. Imperfection is intentional.

---

## 2. Color System

### Philosophy
Colors are chosen for emotional truth, not trend. The palette evokes:
- Natural materials (stone, clay, linen, dried florals)
- Morning light in a quiet room
- The warmth of being held without being overwhelmed

### Primary Palette

| Name | Hex | Usage | Emotion |
|------|-----|-------|---------|
| **Stone** | `#2C2825` | Primary text, headings | Grounded, serious, warm |
| **Linen** | `#F7F5F2` | Primary background | Calm, spacious, soft |
| **Clay** | `#C4A98C` | Accents, highlights | Warm, natural, inviting |

### Supporting Palette

| Name | Hex | Usage | Emotion |
|------|-----|-------|---------|
| **Fog** | `#E8E4DF` | Section backgrounds, cards | Subtle separation |
| **Dusk** | `#8B7E74` | Secondary text, captions | Quiet, supporting |
| **Petal** | `#D4B5A0` | Hover states, soft accents | Gentle, feminine (not girly) |

### Functional Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Ink** | `#1A1817` | High contrast when needed |
| **Error** | `#9B4D4D` | Form errors (muted red) |
| **Success** | `#6B7B6B` | Confirmation states (muted green) |

### Color Rules
- Never use pure black (`#000000`) or pure white (`#FFFFFF`)
- Background-to-text contrast must meet WCAG AA (4.5:1 minimum)
- Accent colors appear sparingly — their rarity creates impact
- No gradients except extremely subtle background washes
- No neon, no saturated colors, no "tech" palette

---

## 3. Typography System

### Philosophy
Typography is the primary design element. It must feel:
- Editorial (like a magazine you'd save)
- Warm (not cold or corporate)
- Readable (generous sizing and spacing)
- Intentional (every weight and size has purpose)

### Type Scale

#### Display (Headlines)
**Font:** Serif with character (e.g., Freight Display, Canela, or similar)
- Hero: 48-72px / mobile: 32-40px
- Section: 36-48px / mobile: 28-32px
- Weight: Regular or Light (never Bold)
- Letter-spacing: Slight negative (-0.02em)

#### Body
**Font:** Clean sans-serif (e.g., Inter, Söhne, or similar)
- Large body: 20-22px / mobile: 18px
- Regular body: 18px / mobile: 16px
- Small: 14-16px / mobile: 14px
- Weight: Regular (400) or Medium (500)
- Line-height: 1.6-1.7 for body text

#### Functional
**Font:** Same sans-serif as body
- Navigation: 14-16px, medium weight
- Buttons: 16px, medium weight
- Captions: 12-14px, regular weight

### Type Rules
- Maximum line length: 65-75 characters
- Paragraph spacing: 1.5em minimum
- Never use all-caps except for rare, intentional moments
- Headlines are sentence case, not Title Case
- No decorative or script fonts
- No font weights heavier than Medium (500)

---

## 4. Spacing & Rhythm

### Philosophy
Generous spacing signals confidence and premium positioning. Cramped layouts signal desperation.

### Spacing Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 8px | Tight internal spacing |
| `sm` | 16px | Component internal spacing |
| `md` | 24px | Between related elements |
| `lg` | 48px | Between sections (mobile) |
| `xl` | 80px | Between sections (desktop) |
| `2xl` | 120px | Major section breaks |
| `3xl` | 160px | Hero/opening breathing room |

### Rhythm Rules
- Sections have consistent vertical rhythm
- Desktop sections: 120-160px vertical padding
- Mobile sections: 64-80px vertical padding
- Content never touches viewport edges (minimum 24px mobile, 48px desktop)
- Related elements are closer; unrelated elements are further

### Grid System
- 12-column grid for desktop
- Content maximum width: 1200px
- Text maximum width: 720px (for readability)
- Generous margins (not edge-to-edge content)

---

## 5. Motion Philosophy

### Guiding Principle
> "Motion should feel like breathing — present but unnoticed."

### Motion Values
- **Duration:** 200-400ms for micro-interactions, 400-600ms for reveals
- **Easing:** Ease-out for entrances, ease-in-out for transitions
- **Direction:** Elements emerge upward (growth metaphor)

### What Motion Does
- Reveals content as user scrolls (subtle fade + translate)
- Provides feedback on interaction (hover, focus)
- Creates continuity between states (page transitions if any)

### What Motion Does NOT Do
- Draw attention to itself
- Make the user wait
- Create visual noise
- Animate continuously (no loops, no particles)
- Override scroll behavior

### Motion Specifications

| Interaction | Duration | Easing | Transform |
|-------------|----------|--------|-----------|
| Scroll reveal | 400ms | ease-out | opacity 0→1, translateY 20px→0 |
| Hover (buttons) | 200ms | ease-out | opacity shift or subtle background |
| Hover (links) | 150ms | ease-out | underline reveal |
| Page transition | 300ms | ease-in-out | opacity crossfade (if used) |

### Accessibility
- All motion respects `prefers-reduced-motion`
- Content is never hidden behind motion (no scroll-jacking)
- Motion never required to understand content

---

## 6. Photography & Imagery

### Philosophy
Images show the feeling, not the event. They are windows, not advertisements.

### What IS Allowed
- Women in natural moments (not posed)
- Hands, shoulders, silhouettes (partial figures)
- Natural light (morning, golden hour)
- Texture (linen, paper, stone, dried flowers)
- Quiet spaces (empty chairs, soft interiors)
- Imperfect moments (motion blur, grain is acceptable)
- Editorial styling (The Gentlewoman, Kinfolk aesthetic)

### What is NOT Allowed
- Stock photos of any kind
- Women laughing in groups
- Hands-in-the-air empowerment poses
- Corporate headshots
- Overly styled "Instagram" aesthetic
- Candles, crystals, or spiritual clichés
- Perfect skin, perfect lighting
- Diverse-for-the-sake-of-diverse casting

### Image Treatment
- Slightly desaturated (not full color, not black & white)
- Warm color grading
- Soft contrast
- May have subtle grain
- Never heavy filters or overlays

### Image Sizing
- Full-bleed images used sparingly
- Most images are contained, with generous padding
- Images never fight with text for attention

---

## 7. Wordmark & Brand Identity

### Philosophy
The Elysian House identity is typographic, not illustrative. The wordmark is a carefully set typographic lockup — not a logo in the traditional sense. It should feel like the masthead of a magazine, not a startup badge.

### Primary Wordmark (Horizontal)
```
ELYSIAN HOUSE
```
- Font: Display serif (same as headlines)
- Weight: Regular or Light
- Letter-spacing: Slightly tracked (+0.05em to +0.1em)
- Case: All caps (exception to headline rule — brand mark only)
- Minimum width: 160px
- Clear space: 1x cap height on all sides

### Stacked Wordmark (Vertical)
```
ELYSIAN
HOUSE
```
- Same typographic treatment as horizontal
- Line height: Tight (0.9-1.0)
- Use when horizontal space is limited
- Minimum width: 100px

### Abbreviated Mark (Favicon / Small Use)
```
EH
```
- Ligature or monogram treatment
- Same serif typeface
- Works at 16x16, 32x32, 48x48
- For favicon, app icon, small social avatars
- May include subtle container (circle or square) in Fog color

### Wordmark Color Usage
| Context | Treatment |
|---------|-----------|
| On Linen background | Stone (#2C2825) |
| On Stone background | Linen (#F7F5F2) |
| On Fog background | Stone (#2C2825) |
| On photography | Linen with subtle shadow if needed |

### Wordmark Rules
- Never distort, rotate, or add effects
- Never use a different typeface
- Never add taglines directly attached to the wordmark
- Never use the wordmark smaller than minimum size
- Always maintain clear space
- The wordmark is not a button (don't add hover effects to it directly; the clickable area can extend beyond)

### What We Are NOT Creating
- An illustrated logo
- A symbol or icon mark
- A badge or emblem
- Multiple color variations
- A "fun" or "playful" lockup

The wordmark is quiet confidence in typographic form.

---

## 8. Iconography & Graphic Elements

### Philosophy
Less is more. Every graphic element must earn its place.

### What IS Allowed
- Simple line icons (navigation, arrows) — stroke only, no fill
- Subtle dividers (thin lines, generous spacing)
- Minimal decorative elements (a single line, a dot)

### What is NOT Allowed
- Icon libraries (no Font Awesome, no Heroicons)
- Illustrated elements
- Blobs, shapes, or "design system" graphics
- Emojis in interface
- Decorative borders or frames
- Badges or stamps

### If Icons Are Needed
- Custom drawn or carefully selected
- 1px stroke weight
- Match text color
- Used only when truly necessary (navigation, functional)

---

## 9. Component Styling Principles

### Buttons
- Primary: Solid background (Stone), Linen text
- Hover: Subtle shift (darker background or opacity)
- Padding: Generous (16px 32px minimum)
- Border-radius: Subtle (4px) or none
- Never: Drop shadows, gradients, icons in buttons

### Forms
- Input fields: Minimal styling, bottom border or subtle full border
- Focus state: Border color change (Clay)
- Labels: Above inputs, clear hierarchy
- Error states: Inline, muted red text
- Never: Floating labels, placeholder-as-label

### Cards (if used)
- Subtle background difference (Fog on Linen)
- Generous internal padding
- No drop shadows
- No borders or very subtle borders

### Links
- Underline on hover (not on default)
- No color change (or very subtle)
- Inline links match text color with underline

---

## 10. Do / Don't Summary

### DO
- Use space generously
- Let typography lead
- Keep color palette tight
- Make motion invisible
- Use photography as atmosphere
- Maintain editorial restraint

### DON'T
- Fill every space
- Add decorative elements
- Use trendy color combinations
- Add motion for motion's sake
- Use photography as proof
- Sacrifice clarity for aesthetics

---

## 11. Reference Mood (Energy, Not Imitation)

| Reference | What to Extract |
|-----------|-----------------|
| **Kinfolk** | Editorial pacing, typography confidence, negative space |
| **The Gentlewoman** | Warm authority, unstyled beauty, intellectual tone |
| **Aesop** | Product confidence, quiet luxury, restraint |
| **Soho House** | Membership energy without exclusivity theater |
| **Airbnb Editorial** | Human stories over product, photographic intimacy |
| **Apple** | Hierarchy clarity, motion subtlety, obsessive details |

---

*Document version: 1.1*
*Status: Approved — Ready for implementation*
