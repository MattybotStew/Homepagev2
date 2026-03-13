# Children's Museum of Atlanta — Playful Homepage Redesign

## Project context
Redesign the homepage of the Children's Museum of Atlanta (childrensmuseum.org).
The live site already has a strong foundation: Nunito font throughout, SVG wave 
lines in the hero, a scrolling marquee ticker, decorative blob shapes, wave section 
dividers, and scroll-triggered fade-ins. The goal is not to rebuild from scratch — 
it is to amplify what's already working and fix the specific gaps identified below.

## Brand
- **Primary font:** Nunito — push ALL display headings to weight 900 (Black). 
  Body text Nunito 400. UI labels Nunito 600.
- **Colors:** Orange #F7941E · Teal #00ADBD · Navy #1D3E6B · 
  Cream/warm white #FDF6EE · Dark navy footer #1D3E6B
- **Tone:** Joyful, warm, energetic, family-first. Every visual decision should 
  feel like it was made for a curious 7-year-old AND their parent.

---

## Section-by-section redesign brief

### 1. Global nav bar
- Sticky top bar with teal background (#00ADBD), white nav links in Nunito 700
- Logo left, nav links center, "Donate" + "Memberships" + "Buy Tickets" pill 
  buttons right
- Above the nav: a slim announcement bar in navy (#1D3E6B) with white text showing 
  today's hours — keep this exactly as-is, it works

### 2. Hero section
- Full-bleed photo background (family/kids at museum)
- Large headline: "Experience Possibility Through Play" in Nunito Black 900, 
  white, left-aligned, very large (clamp 56px–96px)
- Two animated SVG wave lines sit between headline lines:
  - Line 1: orange #F7941E, sits after "Possibility"  
  - Line 2: teal #00ADBD, sits after "Play"
  - **Animation:** Each wave independently pulses using scale(1 → 1.3 → 1), 
    orange at 2.2s infinite, teal at 2.8s infinite — offset so they breathe 
    out of phase with each other
- Subheading below: Nunito 400, white, ~18px
- Two CTA buttons: "Buy Tickets" (orange fill) + "Memberships" (teal fill), 
  large pill shape, Nunito 700
- **Hero text entrance:** Each line of the headline fades in top-to-bottom with 
  a staggered delay (150ms between lines), translateY(20px → 0) + opacity(0 → 1), 
  duration 0.5s, cubic-bezier(0.22, 1, 0.36, 1) easing
- Top-right: floating "Opening Times Today" card widget — white card, teal 
  accent, slides down on load with slideDown keyframe

### 3. Scrolling marquee strip
- Full-width dark navy (#1D3E6B) strip between hero and next section
- White text, Nunito 700: "Downtown Atlanta 🌀 Open Today 10am–3:30pm 🌀 
  Tickets from $17.95" repeating
- Scrolls left continuously at 40s duration, infinite loop
- Keep exactly as-is — this section is working well

### 4. Planning Your Visit
- White background section
- Large decorative "C" letterform watermark in #F7941E at ~8% opacity 
  behind the content grid
- Section heading: "Planning Your Visit? We've Got You Covered" — 
  Nunito 900, navy #1D3E6B, very large
- 4-column card grid below: Hours & What to Expect · Tickets & Pricing · 
  Getting There · Be a Member
- **Card treatment:** White cards, 1px light border, 24px radius, generous padding
- **Card hover state:** translateY(-6px) + scale(1.02) + 
  box-shadow 0 12px 32px rgba(0,0,0,0.1), transition 0.2s ease — 
  THIS IS CRITICAL, all cards must have hover lift states
- Each card has a teal or orange accent icon, Nunito 700 heading, 
  Nunito 400 body, and a pill CTA button at the bottom

### 5. Explore Our Exhibits
- White background
- Section heading left-aligned: "Explore Our Exhibits: The Power of Play" — 
  Nunito 900, navy
- Subtext right-aligned, Nunito 400, muted navy
- Large peach/cream blob shape (#FDF0E0) behind this section as a 
  decorative background element
- Colorful illustrated walking character (striped figure) floats near 
  the heading — add a gentle bob animation: 
  translateY(0 → -10px → 0), 3s ease-in-out infinite
- Photo card grid below (3 cards, varied sizes): rounded corners 24px, 
  overlay text at bottom of each card (category pill + title)
- **Card hover state:** scale(1.04) + brightness(1.05), transition 0.25s ease
- CTA link below grid: "Click something. Be curious. Come back for more →" 
  in Nunito 700 teal, underline on hover

### 6. Don't Miss These Special Experiences
- Warm cream background (#FDF6EE) full section
- Large teal diagonal bar shape in top-right corner as decoration
- Section heading: "Don't Miss These Special Experiences" — Nunito 900, navy
- Filter pill tabs: Featured · This Week · Members-Only · Free Events · 
  Workshops · Seasonal · Special Events
  - Active tab: teal fill, white text · Inactive: white fill, navy border
- 3-column event card grid:
  - Each card: white bg, 20px radius, photo top with orange date badge 
    overlaid ("FEB 10 | 10AM–11:30AM" — orange bg, white Nunito 700)
  - Title: Nunito 800, navy · Description: Nunito 400, muted
  - "What to Expect" checklist with teal checkmark icons
  - Two buttons per card: "See Full Schedule" (outlined orange) + 
    bookmark icon button
  - **Hover state:** translateY(-4px) + shadow lift, transition 0.2s

### 7. What Families Are Saying
- White background
- Centered heading: "What Families Are Saying" — Nunito 900, navy, 
  very large display size
- 4 testimonial cards in a row (carousel with dot pagination):
  - White card, 20px radius, subtle shadow
  - Gold star rating (5 stars) at top in #F7941E
  - Quote text: Nunito 400, navy, italic
  - Name: Nunito 700, navy · Location: Nunito 400, muted
- Carousel auto-advances every 6s with a smooth crossfade transition
- Navigation dots below: active dot is teal pill, inactive are gray circles

### 8. Visit More, Pay Less (Pricing)
- White background
- Centered heading: "Visit More, Pay Less" — Nunito 900, navy, large
- Subtext: "Family membership pays for itself in just 3 visits" — Nunito 400
- **Two pricing cards side by side:**

  **Single Visit card:**
  - Background: cream #FDF6EE
  - Price: "$17.95/person" — Nunito 900, orange #F7941E, very large
  - "Family of 4: $71.80" — Nunito 600, muted navy, small
  - Description: Nunito 400, navy
  - CTA button: "Buy Tickets Now" — full-width orange fill pill, Nunito 700

  **Membership card (FEATURED — must visually dominate):**
  - Background: FULL TEAL #00ADBD — white text throughout
  - "Best Value" badge: orange #F7941E pill, rotated -2deg, Nunito 800, 
    positioned top-right corner of card
  - Price: "$149/year" — Nunito 900, white, very large
  - "Family of 4 covered · Pays for itself in 3 visits" — Nunito 600, 
    white at 85% opacity
  - CTA button: "Become a Member" — full-width white fill, teal text, Nunito 700
  - Card should be slightly taller and more prominent than the Single Visit card

- Both cards: 24px radius, hover lift translateY(-6px) + shadow, 0.2s ease

### 9. Make Play Possible for All (CTA banner)
- Full-bleed dark photo background (kids playing)
- Wave SVG divider at top of section (white wave cutting into the section)
- Heading: "Make Play Possible for All" — Nunito 900, white, large, left-aligned
- Body copy: Nunito 400, white, ~16px
- Two CTA buttons: "Buy Tickets" (orange) + "Memberships" (teal outline, white text)

### 10. Follow the Fun (Instagram feed)
- White background
- Centered heading: "Follow the Fun" — Nunito 900, navy
- Subtext with @childrensmuseumofatlanta teal link
- Masonry-style photo grid (6 images), some with overlaid event cards 
  (e.g. "Celebrate Holi" card, "Special Guest" bubble)
- Images: 16px radius, hover scale(1.04) transition 0.2s

### 11. Footer
- Upper footer: white background
  - Logo left · Email signup ("Enter your email" input + "Stay In The Loop!" 
    orange pill button) right
  - Thin divider line below
  - 4-column link nav: VISIT · EXPLORE · SUPPORT · CONNECT — 
    Nunito 700 column headers in navy, Nunito 400 links in muted navy
- Lower footer: **NAVY #1D3E6B** (NOT black) background
  - White copyright text left: "Copyright © 2026 Children's Museum of Atlanta"
  - Social icons right: Facebook · Instagram · X — teal circular outline icons

---

## Animation system (apply globally)
```css
/* Scroll reveal — all section content */
@keyframes enter {
  from { opacity: 0; transform: translateY(35px); }
  to   { opacity: 1; transform: translateY(0); }
}
.reveal {
  animation: enter 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* Stagger child cards by 80ms each */

/* Wave pulse — hero SVG lines */
@keyframes grow {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.3); }
}
.wave-orange { animation: grow 2.2s ease-in-out infinite; }
.wave-teal   { animation: grow 2.8s ease-in-out infinite; }

/* Character bob — illustrated figure */
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
.character { animation: bob 3s ease-in-out infinite; }

/* Marquee strip */
@keyframes scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-25%); }
}
.marquee { animation: scroll 40s linear infinite; }

/* Universal card hover */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}
```

## What NOT to change
- The overall page structure and section order — it works
- The scrolling marquee strip — already perfect
- The Instagram grid concept — keep it
- The 4-column footer nav — keep it
- The opening times announcement bar — keep it
- The "Planning Your Visit" 4-card grid layout — keep layout, improve hover states