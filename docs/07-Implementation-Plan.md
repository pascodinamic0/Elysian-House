# Implementation Plan
## Elysian House — Technical Architecture & Build Order

---

## 1. Technology Stack

### Core Framework
- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript** (strict mode)

### Styling
- **Tailwind CSS** (utility-first, design tokens)
- **CSS Variables** (for theme values)
- No CSS-in-JS (unnecessary complexity)

### Animation
- **Framer Motion** (lightweight, for scroll reveals and micro-interactions)
- CSS transitions for simple hover states

### Forms
- **React Hook Form** (lightweight validation)
- Server actions or API route for submission

### Email Integration
- **ConvertKit** (or similar) via API
- Simple integration, no heavy SDK

### Deployment
- **Vercel** (zero-config Next.js deployment)
- Preview deployments for review

### Analytics (Minimal)
- **Vercel Analytics** or **Plausible** (privacy-respecting)
- No Google Analytics (heavy, intrusive)

---

## 2. Project Architecture

```
/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── page.tsx                # Home page
│   ├── gathering/
│   │   └── page.tsx            # Event details page
│   ├── about/
│   │   └── page.tsx            # Brand story page
│   ├── register/
│   │   └── page.tsx            # Registration page
│   ├── globals.css             # Global styles, Tailwind base
│   └── api/
│       └── register/
│           └── route.ts        # Registration API endpoint
│
├── components/
│   ├── ui/                     # Core reusable components
│   │   ├── heading.tsx
│   │   ├── text.tsx
│   │   ├── button.tsx
│   │   ├── link.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── image.tsx
│   │   ├── section.tsx
│   │   ├── container.tsx
│   │   ├── stack.tsx
│   │   └── spacer.tsx
│   │
│   ├── layout/                 # Global layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── nav.tsx
│   │
│   ├── home/                   # Home page specific
│   │   ├── hero.tsx
│   │   ├── scroll-section.tsx
│   │   ├── event-intro.tsx
│   │   └── essence.tsx
│   │
│   ├── gathering/              # Gathering page specific
│   │   ├── detail-block.tsx
│   │   └── logistics.tsx
│   │
│   ├── about/                  # About page specific
│   │   ├── manifesto.tsx
│   │   └── host-bio.tsx
│   │
│   └── register/               # Register page specific
│       ├── registration-form.tsx
│       └── confirmation.tsx
│
├── lib/
│   ├── utils.ts                # Utility functions (cn, etc.)
│   ├── fonts.ts                # Font configuration
│   └── email.ts                # Email service integration
│
├── hooks/
│   ├── use-scroll-reveal.ts    # Scroll animation hook
│   └── use-reduced-motion.ts   # Accessibility hook
│
├── content/
│   └── copy.ts                 # All site copy in one place
│
├── public/
│   ├── images/                 # Optimized images
│   └── fonts/                  # Self-hosted fonts (if any)
│
├── tailwind.config.ts          # Design token configuration
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 3. Design Token System (Tailwind)

### tailwind.config.ts

```typescript
const config = {
  theme: {
    extend: {
      colors: {
        // Primary palette
        stone: '#2C2825',
        linen: '#F7F5F2',
        clay: '#C4A98C',
        // Supporting
        fog: '#E8E4DF',
        dusk: '#8B7E74',
        petal: '#D4B5A0',
        // Functional
        ink: '#1A1817',
        error: '#9B4D4D',
        success: '#6B7B6B',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display scale
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        // Body scale
        'body-lg': ['1.375rem', { lineHeight: '1.65' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
        'body-sm': ['1rem', { lineHeight: '1.7' }],
        // Small scale
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        // Section spacing
        'section-sm': '4rem',
        'section': '6rem',
        'section-lg': '8rem',
        'section-xl': '10rem',
      },
      maxWidth: {
        'content': '60rem',      // 960px
        'narrow': '45rem',       // 720px
        'site': '75rem',         // 1200px
      },
      transitionDuration: {
        'reveal': '400ms',
        'hover': '200ms',
      },
    },
  },
}
```

---

## 4. Build Order

### Phase A: Foundation (Days 1-2)

**Objective:** Project setup, design system foundation, no visible pages yet.

1. **Project initialization**
   - Create Next.js project with TypeScript
   - Configure Tailwind with design tokens
   - Set up folder structure
   - Configure ESLint/Prettier

2. **Font setup**
   - Select and configure fonts (likely: Canela/similar serif + Inter/similar sans)
   - Create font loading strategy
   - Define CSS variables

3. **Base styles**
   - Reset/normalize
   - Global typography
   - Focus states
   - Selection colors

4. **Core utilities**
   - `cn()` utility for class merging
   - Reduced motion hook
   - Scroll reveal hook (basic)

---

### Phase B: Core UI Components (Days 3-4)

**Objective:** All reusable components built and documented.

5. **Typography components**
   - `<Heading>` with all variants
   - `<Text>` with all variants
   - `<Caption>`

6. **Layout components**
   - `<Section>`
   - `<Container>`
   - `<Stack>`
   - `<Spacer>`

7. **Interactive components**
   - `<Button>` with variants
   - `<Link>` with variants
   - `<Input>` with validation
   - `<Textarea>`

8. **Media components**
   - `<Image>` wrapper for Next.js Image
   - `<Figure>` with caption

---

### Phase C: Global Layout (Days 5-6)

**Objective:** Header, footer, page shell complete.

9. **Header**
   - Wordmark/logo
   - Navigation
   - Mobile responsive
   - Scroll behavior (if any)

10. **Footer**
    - Minimal content
    - Links
    - Copyright
    - Newsletter (optional)

11. **Root layout**
    - Metadata
    - Font loading
    - Global structure

---

### Phase D: Home Page (Days 7-10)

**Objective:** Complete home page experience.

12. **Hero section**
    - Opening statement: **"A quiet room for women who are ready to begin again."**
    - Breathing room (generous negative space)
    - Scroll indicator (subtle)
    - **Architecture note:** Hero component must support two modes:
      - **Text-forward (launch):** Typography-only with subtle texture/abstract imagery
      - **Photo-enhanced (future):** Full-bleed portrait with text overlay when photography is available
    - Layout uses CSS Grid to allow seamless swap between modes without refactoring

13. **Narrative sections**
    - Beat 1-3: Recognition, Naming, Permission
    - Scroll reveal animation
    - Typography pacing

14. **Event introduction**
    - Event name reveal
    - Brief description
    - First CTA appearance

15. **Essence section**
    - What happens statements
    - Visual rhythm

16. **Closing section**
    - Primary CTA (prominent)
    - Brand continuity tease
    - Transition to footer

---

### Phase E: Secondary Pages (Days 11-13)

**Objective:** All pages complete.

17. **Gathering page**
    - What/who/why sections
    - Logistics block
    - CTA integration

18. **About page**
    - Manifesto/philosophy
    - Host bio (minimal)
    - Vision section

19. **Register page**
    - Form component
    - Validation
    - Submission handling
    - Confirmation state

---

### Phase F: Integration (Days 14-15)

**Objective:** Backend connections, real functionality.

20. **Registration API**
    - Form submission endpoint
    - Email service integration
    - Error handling

21. **Email confirmation**
    - Triggered on successful registration
    - Matches brand tone

22. **Analytics**
    - Basic tracking setup
    - Privacy-respecting

---

### Phase G: Motion & Polish (Days 16-18)

**Objective:** Animation refinement, interaction polish.

23. **Scroll animations**
    - Tune timing and easing
    - Test on devices
    - Reduced motion handling

24. **Micro-interactions**
    - Button hover states
    - Link interactions
    - Form focus states

25. **Page transitions**
    - If any (keep minimal)
    - Loading states

---

### Phase H: Testing & Refinement (Days 19-21)

**Objective:** Quality assurance, performance, accessibility.

26. **Cross-browser testing**
    - Safari, Chrome, Firefox
    - Mobile Safari, Chrome
    - Edge cases

27. **Performance audit**
    - Lighthouse scores
    - Image optimization
    - Font loading
    - Core Web Vitals

28. **Accessibility audit**
    - Keyboard navigation
    - Screen reader testing
    - Color contrast
    - Focus management

29. **Content review**
    - Copy check
    - Link check
    - Form testing
    - Error states

---

### Phase I: Launch Preparation (Days 22-24)

**Objective:** Production ready.

30. **SEO**
    - Meta tags
    - Open Graph
    - Sitemap
    - Robots.txt

31. **Domain & DNS**
    - Domain configuration
    - SSL certificate
    - Redirects if needed

32. **Final review**
    - Stakeholder walkthrough
    - Final copy changes
    - Go-live checklist

---

## 5. Key Technical Decisions

### Why App Router?
- Server components for faster initial load
- Streaming and suspense for perceived performance
- Built-in layouts for consistent structure
- Server actions for form handling

### Why Tailwind?
- Design tokens map directly to utility classes
- Consistent spacing and sizing
- Rapid development without context switching
- Small bundle when purged

### Why Framer Motion?
- Declarative animation API
- Built-in scroll triggers
- Respects reduced motion
- Production-proven, performant

### Why NOT a CMS?
- Content is minimal and doesn't change frequently
- Content file (`copy.ts`) provides single source of truth
- No client overhead
- Maximum performance

---

## 6. Quality Gates

### Before any PR is merged:
- [ ] TypeScript: No errors, strict mode
- [ ] Lint: No warnings
- [ ] Build: Successful
- [ ] Responsive: Tested at 375px, 768px, 1280px
- [ ] Accessibility: Focus states, alt text, contrast
- [ ] Performance: Lighthouse > 90 all categories

### Before launch:
- [ ] All pages complete
- [ ] All forms functional
- [ ] Email integration tested
- [ ] Mobile thoroughly tested
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] SEO configured
- [ ] Analytics working
- [ ] Domain configured
- [ ] Stakeholder approval

---

## 7. Risk Mitigation

### Risk: Typography font loading issues
**Mitigation:** Use `font-display: swap`, provide system font fallback, test thoroughly.

### Risk: Animation performance on mobile
**Mitigation:** Use GPU-accelerated properties only, test on real devices, respect reduced motion.

### Risk: Form submission failures
**Mitigation:** Graceful error handling, loading states, user feedback, server-side validation.

### Risk: Content changes close to launch
**Mitigation:** All copy in single file, clear change process, buffer time in timeline.

### Risk: Scope creep
**Mitigation:** PRD defines non-goals explicitly, any new requests evaluated against guardrails.

---

## 8. Post-Launch

### Immediate (Week 1)
- Monitor analytics
- Watch for errors
- Gather feedback
- Fix any issues

### Short-term (Month 1)
- Assess registration conversion
- Review user behavior
- Optimize if needed
- Document learnings

### Long-term
- Event photography integration
- Archive past events
- Community features (future)
- Editorial content (future)

---

*Document version: 1.1*
*Status: Approved — Ready for implementation*
