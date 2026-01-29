# UX Strategy
## Elysian House — Experience Design

---

## 1. Core UX Philosophy

This website is not a funnel. It is a **threshold**.

The user experience must feel like:
- Walking into a quiet room after a loud day
- Opening a letter written specifically to you
- The moment before a meaningful conversation begins

**We are designing for presence, not conversion.**
(Conversion follows presence. It cannot be forced.)

---

## 2. Scroll Narrative — Home Page

The homepage is a single, continuous narrative. Each scroll section is a **beat** in a conversation.

### Beat 1: The Recognition
**Scroll position:** 0-15%

**Content:** Opening statement that names her inner experience.

**She feels:** "Wait. How do they know?"

**Design:** 
- Maximum negative space
- Single statement, large type
- No navigation distraction initially
- The page breathes

**Approved opening line:**
> "A quiet room for women who are ready to begin again."

---

### Beat 2: The Naming
**Scroll position:** 15-30%

**Content:** Expand on the recognition. Name the experience more fully.

**She feels:** "I've never heard anyone say this out loud."

**Design:**
- Still generous space
- Slightly smaller type
- Beginning of visual warmth (subtle color, image hint)

**Example direction:**
> "There's a season when everything works, but nothing fits anymore. When you're grateful and still hungry. When you're fine — and quietly disappearing."

---

### Beat 3: The Permission
**Scroll position:** 30-45%

**Content:** Release the shame. This is not failure.

**She feels:** "I'm allowed to want more."

**Design:**
- First significant visual moment (photograph or texture)
- Copy becomes more intimate
- Pace slows slightly

**Example direction:**
> "That restlessness isn't ingratitude. It's your next chapter trying to find you."

---

### Beat 4: The Invitation
**Scroll position:** 45-60%

**Content:** Introduce the gathering. What it is.

**She feels:** "What is this? Tell me more."

**Design:**
- Clear shift in section
- Event name appears
- Grounded, practical tone begins

**Example direction:**
> "Transform & Thrive is a gathering for women ready to bloom. Not a seminar. Not a performance. A room."

---

### Beat 5: The Essence
**Scroll position:** 60-75%

**Content:** What happens (without over-explaining).

**She feels:** "I can picture myself there."

**Design:**
- Simple structure (perhaps 3-4 short statements)
- Visual calm maintained
- No bullet-point overwhelm

**Example direction:**
> "We gather. We reflect. We witness each other. We leave different than we came."

---

### Beat 6: The Call
**Scroll position:** 75-90%

**Content:** The invitation to act.

**She feels:** "I want to be in that room."

**Design:**
- Primary CTA appears
- Strong but not aggressive
- Space around it (the button is not crowded)

**Copy direction:**
> "Request Your Invitation"

---

### Beat 7: The Continuity
**Scroll position:** 90-100%

**Content:** Brief introduction to Elysian House as ongoing.

**She feels:** "This is the beginning of something."

**Design:**
- Footer territory
- Secondary CTA (newsletter, follow)
- Quiet confidence

---

## 3. Emotional Pacing Model

```
                    Recognition
                         ↓
    CALM ─────────── Naming ───────────→ CURIOSITY
                         ↓
                    Permission
                         ↓
    CURIOSITY ────── Invitation ────────→ RESONANCE
                         ↓
                     Essence
                         ↓
    RESONANCE ──────── Call ───────────→ COMMITMENT
                         ↓
                    Continuity
                         ↓
    COMMITMENT ────── (Action) ─────────→ BELONGING
```

**Key principle:** Each emotional state must be fully achieved before transitioning to the next. Rushing creates resistance.

---

## 4. Friction Philosophy

### Where Friction is REMOVED

| Element | Why |
|---------|-----|
| Navigation | Minimal choices, clear paths |
| Form fields | Only essential (name, email, optional note) |
| Page load | Instant. No waiting. |
| Mobile experience | Touch-optimized, no pinching |
| CTA language | Invitational, not urgent |
| Information hierarchy | Never have to hunt |

### Where Friction is INTENTIONALLY KEPT

| Element | Why |
|---------|-----|
| No price displayed aggressively | It's free, but we don't lead with that — value first |
| Limited event details | Enough to trust, not enough to fully "know" — mystery is premium |
| No testimonials block | Absence of social proof = confidence in offering |
| No countdown timer | Urgency signals desperation |
| No "only X spots left" | Exclusivity is felt, not stated |
| Pace of scroll | Slower reveals require patience — filters for alignment |

---

## 5. Mobile-First Considerations

80%+ of traffic will come from Instagram. Mobile is not a "responsive version" — it is the primary experience.

### Mobile-Specific UX Decisions

1. **Thumb-zone CTA:** Primary button always reachable
2. **Scroll momentum:** Content reveals feel natural, not choppy
3. **Type scale:** Large enough to read without zooming
4. **Touch targets:** Minimum 44px, generous spacing
5. **No hover states as primary interaction:** Everything works on tap
6. **Image optimization:** Fast load, appropriate compression
7. **Sticky elements:** Subtle, never obstructing content

---

## 6. Microinteractions & Motion Philosophy

### What motion should feel like:
- A breath, not a bounce
- Emerging, not appearing
- Intentional, not decorative

### Motion principles:
1. **Entrance:** Elements fade-up gently (200-400ms, ease-out)
2. **Scroll:** Parallax is subtle or absent (no carnival effects)
3. **Hover:** Minimal — slight opacity or underline shift
4. **Transitions:** Page transitions are instant or imperceptibly smooth
5. **Loading:** Content loads progressively, no skeleton screens

### What to AVOID:
- Bouncing elements
- Sliding carousels
- Animated gradients
- Particle effects
- Scroll-jacking
- Anything that makes the user wait

---

## 7. Accessibility Commitments

### WCAG AA Compliance (minimum):
- Color contrast ratios met
- All images have alt text
- Keyboard navigation works
- Focus states visible
- No content locked behind motion
- Reduced motion preference respected

### Beyond compliance:
- Reading level appropriate (no jargon)
- Line lengths optimized (50-75 characters)
- Generous line height
- No autoplay video or audio

---

## 8. Error States & Edge Cases

### Form Errors
- Inline, gentle language ("Please enter your email" not "Invalid input")
- Never lose user's entered data
- Clear how to fix

### Empty States
- If waitlist is full: Warm message + newsletter option
- If event has passed: Archive state with "next gathering" tease

### Slow Connection
- Critical content loads first (text before images)
- Placeholder is subtle (no garish loading spinners)

---

## 9. Post-Conversion Experience

The experience doesn't end at form submission. The post-registration journey is part of the brand experience.

### Confirmation Screen (Immediate)
- Warm, personal message: "We've received your request. You'll hear from us soon."
- Clear next steps: Mention that this is a curated gathering with manual review
- No immediate upsell or "share with friends" pressure
- Option to add tentative calendar hold (subtle)
- Feels like arrival, not transaction

### Email Journey (Approved Flow)

**Email 1: Confirmation (Immediate)**
- Subject line: Invitation tone, not transactional (e.g., "We received your request")
- Tone: Letter, not receipt
- Content: Acknowledge her, set expectation for next contact
- No branding overload, no footer links to "other events"

**Email 2: Pre-Event (7–10 days before)**
- Subject line: Warm, anticipatory
- Content:
  - Logistical details (time, venue, what to expect)
  - Brief "what to bring" (nothing physical — just openness)
  - Optional: tone-setting reflection or question to sit with before arriving
- Tone: Intimate preparation, not hype

**Email 3: Gentle Reminder (48 hours before, optional)**
- Subject line: Simple, calming
- Content: Short, confirming details, expressing anticipation
- Tone: Brief, not anxious ("We're looking forward to gathering with you")
- No pressure, no "don't forget!" energy

### What We Are NOT Sending
- ❌ Countdown sequences
- ❌ "You won't want to miss this" urgency
- ❌ Upsell to other offerings
- ❌ Request for social shares
- ❌ Post-event sales funnel

---

*Document version: 1.1*
*Status: Approved — Ready for implementation*
