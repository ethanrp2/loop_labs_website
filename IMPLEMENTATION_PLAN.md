# LOOPLABS Landing Page - Complete Implementation Plan

## Overview
Implement a fully responsive landing page for LOOPLABS based on Figma designs (Desktop: 1728px, Mobile: 393px). This plan establishes design tokens and responsive strategy accounting for significant layout differences between desktop and mobile views.

---

## Current State
- **Framework:** Next.js 16.0.7 with App Router
- **Styling:** Tailwind CSS v4 (using `@theme inline` syntax)
- **Language:** TypeScript enabled
- **Fonts:** Currently using Geist Sans/Mono (needs to switch to Inter)
- **Structure:** Basic setup with `/app/page.tsx`, `/app/layout.tsx`, `/app/globals.css`

---

## Design Analysis: Desktop vs Mobile

### Key Layout Differences

| Section | Desktop (1728px) | Mobile (393px) | Changes |
|---------|------------------|----------------|---------|
| **Hero** | Centered column, larger text | Centered column, smaller text | Font: 80px → 30px |
| **Secondary Nav** | Horizontal bar below hero | Horizontal bar below hero | Font: 30px → 20px |
| **About** | Image left, text right (2-col) | Image top, text bottom (stacked) | Layout reorder + contact links |
| **Contact Links** | Not visible in desktop design | Email + Instagram with icons | NEW in mobile |
| **Mission** | Dark blue bg, centered text | Dark blue bg, centered text | Font: 40px → 16px |
| **Why Matters** | Image left, text right (2-col) | Image top, text bottom (stacked) | Layout reorder |
| **CTA Section** | "Start Your AI Education Today" | "Start your AI Education!" | Different heading |
| **Reviews** | 2-column grid | Single column stack | Grid: 2 cols → 1 col |
| **Footer** | "FOOTER" text | "Footer" text | Simpler styling |

### Typography Scale Differences

| Element | Desktop | Mobile | Ratio |
|---------|---------|--------|-------|
| H1 (Hero) | 80px Bold | 30px Bold | 2.67x |
| H2 (Sections) | 50px Regular | 30px Bold | 1.67x |
| H3 (Nav) | 30px Regular | 20px Regular | 1.5x |
| Body Text | 30px Regular | 16px Regular | 1.875x |
| Button Text | 22px Bold | 16px Bold | 1.375x |
| Small Text | 20px Regular | 14px Regular | 1.43x |

### Mobile-Specific Features
1. **Hamburger Menu Icon** - Top-left navigation (3 lines icon)
2. **Contact Section in About** - Email link + Instagram link with icons
3. **Smaller Profile Images** - Reviews: 89px → 80px
4. **Tighter Spacing** - Padding: 120px → 20px (sides)
5. **Border Radius** - 40-50px → 20px for images

---

## Phase 1: Design System Foundation

### 1.1 Typography System - Inter Font

**File: `/app/layout.tsx`**

```typescript
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold only
});

export const metadata: Metadata = {
  title: "LOOPLABS - AI Education for Innovators",
  description: "Equipping young innovators with AI coursework, revolutionary ideas, and a backbone of integrity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### 1.2 Complete Design Tokens

**File: `/app/globals.css`**

```css
@import "tailwindcss";

/* ============================================
   COLOR PALETTE
   ============================================ */
:root {
  /* Brand Colors */
  --color-dark-blue: #191B58;
  --color-light-blue: #76C8E5;
  --color-purple: #4A1383;

  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray: #D9D9D9;
}

/* ============================================
   TAILWIND THEME CONFIGURATION
   ============================================ */
@theme inline {
  /* === COLORS === */
  --color-primary: var(--color-dark-blue);
  --color-secondary: var(--color-light-blue);
  --color-accent: var(--color-purple);
  --color-text-primary: var(--color-black);
  --color-text-inverse: var(--color-white);
  --color-background: var(--color-white);

  /* === TYPOGRAPHY === */
  --font-inter: var(--font-inter);

  /* Desktop Font Sizes */
  --font-size-h1-desktop: 80px;
  --font-size-h2-desktop: 50px;
  --font-size-h3-desktop: 30px;
  --font-size-body-desktop: 30px;
  --font-size-medium-desktop: 25px;
  --font-size-button-desktop: 22px;
  --font-size-small-desktop: 20px;
  --font-size-subtitle-desktop: 32px;
  --font-size-large-desktop: 40px;

  /* Mobile Font Sizes */
  --font-size-h1-mobile: 30px;
  --font-size-h2-mobile: 24px;
  --font-size-h3-mobile: 20px;
  --font-size-body-mobile: 16px;
  --font-size-button-mobile: 16px;
  --font-size-small-mobile: 14px;
  --font-size-subtitle-mobile: 18px;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* Letter Spacing */
  --letter-spacing-button-desktop: 1.1px; /* 5% of 22px */
  --letter-spacing-button-mobile: 0.8px; /* 5% of 16px */
  --letter-spacing-normal: 0;

  /* Line Heights */
  --line-height-normal: 100%;

  /* === SPACING & LAYOUT === */

  /* Border Radius */
  --radius-sm-mobile: 20px;
  --radius-sm-desktop: 30px;
  --radius-md-desktop: 40px;
  --radius-lg: 50px;

  /* Container Widths */
  --container-max-desktop: 1728px;
  --container-max-mobile: 393px;
  --content-max-desktop: 1555px;

  /* Section Padding - Desktop */
  --section-padding-x-desktop: 120px;
  --section-padding-x-tablet: 60px;
  --section-padding-x-mobile: 20px;
  --section-padding-y: 10px;

  /* Spacing Scale */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 10px;
  --spacing-lg: 16px;
  --spacing-xl: 22px;
  --spacing-2xl: 24px;
  --spacing-3xl: 33px;
  --spacing-4xl: 46px;
  --spacing-5xl: 103px;

  /* === BREAKPOINTS === */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1728px;
}

/* ============================================
   RESPONSIVE TYPOGRAPHY
   ============================================ */

/* Mobile First - Default (up to 768px) */
:root {
  --font-size-h1: var(--font-size-h1-mobile);
  --font-size-h2: var(--font-size-h2-mobile);
  --font-size-h3: var(--font-size-h3-mobile);
  --font-size-body: var(--font-size-body-mobile);
  --font-size-button: var(--font-size-button-mobile);
  --font-size-small: var(--font-size-small-mobile);
  --font-size-subtitle: var(--font-size-subtitle-mobile);
  --letter-spacing-button: var(--letter-spacing-button-mobile);
  --section-padding-x: var(--section-padding-x-mobile);
  --radius-sm: var(--radius-sm-mobile);
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
  :root {
    --font-size-h1: 60px;
    --font-size-h2: 40px;
    --font-size-h3: 28px;
    --font-size-body: 24px;
    --font-size-button: 20px;
    --font-size-small: 18px;
    --section-padding-x: var(--section-padding-x-tablet);
  }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
  :root {
    --font-size-h1: var(--font-size-h1-desktop);
    --font-size-h2: var(--font-size-h2-desktop);
    --font-size-h3: var(--font-size-h3-desktop);
    --font-size-body: var(--font-size-body-desktop);
    --font-size-button: var(--font-size-button-desktop);
    --font-size-small: var(--font-size-small-desktop);
    --font-size-subtitle: var(--font-size-subtitle-desktop);
    --letter-spacing-button: var(--letter-spacing-button-desktop);
    --section-padding-x: var(--section-padding-x-desktop);
    --radius-sm: var(--radius-sm-desktop);
  }
}

/* ============================================
   GLOBAL STYLES
   ============================================ */

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-inter), system-ui, sans-serif;
  margin: 0;
  padding: 0;
}

/* ============================================
   UTILITY CLASSES
   ============================================ */

.container {
  max-width: var(--container-max-desktop);
  margin: 0 auto;
  padding: 0 var(--section-padding-x);
}

.section-spacing {
  padding-top: var(--section-padding-y);
  padding-bottom: var(--section-padding-y);
}

/* Typography Utilities */
.text-h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-normal);
}

.text-h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-normal);
}

.text-h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

.text-body {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

.text-button {
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-button);
  text-transform: uppercase;
}

/* ============================================
   DARK MODE (Optional - not in current design)
   ============================================ */
@media (prefers-color-scheme: dark) {
  :root {
    /* Keep light theme for now - design doesn't specify dark mode */
  }
}
```

---

## Component Architecture

### Directory Structure

```
/app/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx              # Top nav (desktop horizontal, mobile hamburger)
│   │   ├── MobileMenu.tsx              # Hamburger menu drawer
│   │   ├── SecondaryNav.tsx            # Light blue pill navigation
│   │   └── Footer.tsx                  # Simple footer
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx             # Hero with title, subtitle, CTAs
│   │   ├── AboutSection.tsx            # About with image + contact (responsive)
│   │   ├── MissionSection.tsx          # Dark blue mission statement
│   │   ├── WhyItMattersSection.tsx     # Why matters with image (responsive)
│   │   ├── CTASection.tsx              # CTA with button
│   │   └── ReviewsSection.tsx          # Student reviews grid
│   │
│   ├── ui/
│   │   ├── Button.tsx                  # Reusable button (3 variants)
│   │   ├── ReviewCard.tsx              # Individual review card
│   │   ├── StarRating.tsx              # 5-star rating display
│   │   ├── SectionHeading.tsx          # Reusable headings
│   │   └── ContactLink.tsx             # Email/Instagram link with icon
│   │
│   └── shared/
│       ├── Logo.tsx                    # LOOPLABS logo + text
│       └── HamburgerIcon.tsx           # 3-line hamburger menu icon
│
├── constants/
│   └── images.ts                       # Image path constants
│
├── types/
│   └── components.ts                   # Shared TypeScript types
│
├── layout.tsx                          # Root layout
├── page.tsx                            # Home page (assembles sections)
└── globals.css                         # Design tokens
```

### Image Asset Organization

```
/public/images/
├── backgrounds/
│   ├── hero-background-desktop.png     # Union background (desktop)
│   └── hero-background-mobile.png      # Union background (mobile)
│
├── logos/
│   ├── looplabs-logo.png               # Main logo (56x30 mobile, 116x62 desktop)
│   └── looplabs-icon.png               # Icon only version
│
├── icons/
│   ├── email-icon.png                  # Email icon (29x29)
│   ├── instagram-icon.png              # Instagram icon (29x29)
│   └── hamburger.svg                   # Hamburger menu icon
│
├── about/
│   └── team-image.png                  # Team collaboration photo
│
├── why-matters/
│   └── classroom-image.png             # Classroom scene photo
│
├── reviews/
│   ├── profile-placeholder.png         # Default profile image
│   └── stars/
│       ├── star-filled.svg             # Filled star
│       ├── star-half.svg               # Half-filled star
│       └── star-empty.svg              # Empty star outline
│
└── decorations/
    ├── divider-line.svg                # Horizontal divider lines
    └── decorative-rect.png             # Decorative rectangles/shapes
```

---

## Responsive Layout Strategy

### 1. Navigation Component

**Desktop (1024px+):**
- Logo left, navigation links right (Home, Events, Coursework)
- Horizontal flexbox layout
- White text on transparent background
- Fixed or sticky positioning

**Mobile (< 1024px):**
- Logo left, hamburger icon right
- Hamburger opens slide-out or dropdown menu
- Smaller logo (56x30 vs 116x62)
- Compact spacing (23px padding)

### 2. Hero Section

**Desktop:**
- Background: Union gradient image
- H1: 80px "AI Education for Innovators"
- Body: 30px subtitle
- Two buttons: "DISCOVER OUR COURSE" (light blue), "ENROLL NOW" (white)
- Buttons side-by-side (483px each)

**Mobile:**
- Same background (mobile version)
- H1: 30px
- Body: 16px
- Two buttons stacked vertically (354px width)
- Tighter line spacing

### 3. Secondary Navigation

**Desktop:**
- Full-width bar: 1316px, height 65px
- Font: 30px
- Links: About (underlined), Mission, Enroll, Reviews

**Mobile:**
- Full-width bar: 394px, height 45px
- Font: 20px
- Same links, proportionally spaced

### 4. About Section

**Desktop:**
- Two-column grid (40% image / 60% text)
- Image: 504x504px, 40px border radius
- Heading: "Hi! We Are LOOPLABS" (80px)
- Body: 30px
- Horizontal divider line
- No contact links visible

**Mobile:**
- Stacked layout (image on top, text below)
- Image: 195x195px, 20px border radius
- Heading: 30px
- Body: 16px
- **NEW: Contact section below text**
  - Email link with icon (29px icon + "info@looplabsai.io")
  - Instagram link with icon (29px icon + "@Instagram")
  - Icons and text aligned horizontally (16px gap)

### 5. Mission Section

**Desktop:**
- Dark blue background (#191B58)
- White centered text
- Heading: "Our Mission" (80px)
- Body: 40px
- Max-width: 1280px
- Padding: 224px horizontal

**Mobile:**
- Same dark blue background
- Heading: 30px
- Body: 16px
- Padding: 20px horizontal
- Max-width: 353px

### 6. Why This Matters Section

**Desktop:**
- Two-column grid (image left / text right)
- Image: 682x427px, 40px radius
- Heading: "Why This Matters" (80px)
- Subheading: "AI Revolution Impact: How ChatGPT Changed Everything" (50px, styled)
- Body: 30px
- Horizontal divider above section

**Mobile:**
- Stacked layout (image on top, text below)
- Image: 353x194px, 20px radius
- Heading: 30px
- Subheading: 18px
- Body: 16px
- Divider line after subheading

### 7. CTA Section

**Desktop:**
- Light blue background (#76C8E5)
- Heading: "Start Your AI Education Today" (80px)
- Decorative horizontal line
- Subtitle: "Join XX+ users..." (32px)
- Single button: "DISCOVER OUR COURSE" (dark blue variant, 414px)

**Mobile:**
- Light blue background
- Heading: "Start your AI Education!" (24px) - **Different text!**
- Decorative shape/rectangle
- Subtitle: "Join XX+ users..." (18px)
- Single button: "ENROLL NOW" (354px width)

### 8. Reviews Section

**Desktop:**
- White background, rounded top corners (30px)
- Heading: "What Real Students are Saying" (64px)
- 2-column grid of ReviewCard components
- Profile images: 89x89px circles
- Name: 40px bold
- Date: 20px
- Review text: 25px
- Stars: 43px height

**Mobile:**
- White background, rounded top corners (20px)
- Heading: "Reviews" (24px) - **Simplified!**
- Single-column stack
- Profile images: 80x80px circles
- Name: 16px bold
- Date: 14px
- Review text: 14px
- Stars: 23px height

### 9. Footer

**Desktop:**
- Dark navy background
- "FOOTER" text (50px, centered)

**Mobile:**
- Dark navy background
- "Footer" text (20px, centered)
- Height: 56px

---

## Component Implementation Details

### Button Component Props

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean; // For mobile responsive
}

// Variants:
// - primary: Light blue bg (#76C8E5), black text
// - secondary: White bg, black text
// - outline: Dark blue bg (#191B58), white text
```

### Navigation Component States

```typescript
// Desktop: Horizontal links
// Mobile: Hamburger menu with slide-out drawer
// State: isOpen (boolean) for mobile menu
```

### AboutSection Contact Links (Mobile Only)

```typescript
interface ContactLinkProps {
  icon: string; // image path
  href: string;
  text: string;
  type: 'email' | 'instagram';
}

// Only rendered on mobile (<1024px)
// Two links: Email + Instagram
// Icon size: 29x29px
// Text size: 16px bold, dark blue color
```

### ReviewCard Component

```typescript
interface ReviewCardProps {
  name: string;
  profileImage: string;
  rating: number; // 1-5
  date: string; // e.g., "Dec 2025"
  review: string;
}

// Responsive sizing:
// Desktop: 89px profile, 40px name, 25px review
// Mobile: 80px profile, 16px name, 14px review
```

---

## Responsive Breakpoint Strategy

### Breakpoint Definitions

```css
/* Mobile First Approach */
/* xs: 0-639px     - Mobile phones */
/* sm: 640-767px   - Large phones */
/* md: 768-1023px  - Tablets */
/* lg: 1024-1279px - Small laptops */
/* xl: 1280-1727px - Laptops */
/* 2xl: 1728px+    - Desktop (design width) */
```

### Layout Changes by Breakpoint

| Component | Mobile (< 768px) | Tablet (768-1023px) | Desktop (1024px+) |
|-----------|------------------|---------------------|-------------------|
| Navigation | Hamburger | Hamburger | Horizontal |
| Hero Buttons | Stacked | Stacked | Side-by-side |
| About | Stacked | Stacked | 2-column |
| Why Matters | Stacked | Stacked | 2-column |
| Reviews | 1 column | 2 columns | 2 columns |
| Contact Links | Visible | Visible | Hidden |

---

## Critical Files & Implementation Order

### Phase 1: Foundation (DAY 1)
1. ✅ `/app/globals.css` - Complete design token system
2. ✅ `/app/layout.tsx` - Inter font configuration

### Phase 2: Core UI Components (DAY 1-2)
3. `/app/components/ui/Button.tsx` - Reusable button with 3 variants
4. `/app/components/ui/ContactLink.tsx` - Email/Instagram link (mobile)
5. `/app/components/shared/Logo.tsx` - LOOPLABS logo component
6. `/app/components/shared/HamburgerIcon.tsx` - Menu icon (mobile)

### Phase 3: Layout Components (DAY 2-3)
7. `/app/components/layout/Navigation.tsx` - Responsive navigation
8. `/app/components/layout/MobileMenu.tsx` - Hamburger menu drawer
9. `/app/components/layout/SecondaryNav.tsx` - Pill-shaped nav bar
10. `/app/components/layout/Footer.tsx` - Simple footer

### Phase 4: Section Components (DAY 3-5)
11. `/app/components/sections/HeroSection.tsx` - Hero with CTAs
12. `/app/components/sections/AboutSection.tsx` - About with contact (responsive)
13. `/app/components/sections/MissionSection.tsx` - Mission statement
14. `/app/components/sections/WhyItMattersSection.tsx` - Why matters (responsive)
15. `/app/components/sections/CTASection.tsx` - CTA with button
16. `/app/components/ui/ReviewCard.tsx` - Review card component
17. `/app/components/ui/StarRating.tsx` - Star rating
18. `/app/components/sections/ReviewsSection.tsx` - Reviews grid

### Phase 5: Page Assembly (DAY 5-6)
19. `/app/page.tsx` - Assemble all sections
20. `/app/constants/images.ts` - Image path constants
21. `/public/images/*` - Download and organize all images

### Phase 6: Responsive Testing & Polish (DAY 6-7)
22. Cross-device testing (375px, 768px, 1024px, 1728px)
23. Fix layout issues
24. Performance optimization
25. Accessibility audit

---

## Mobile-Specific Implementation Notes

### 1. Contact Links in About Section
- **Only visible on mobile** (< 1024px)
- Two links with icons:
  - Email: `info@looplabsai.io` with email icon
  - Instagram: `@Instagram` with Instagram icon
- Layout: Vertical stack with 8px gap
- Each link: Horizontal flex (icon + text, 16px gap)
- Icon size: 29x29px
- Text: 16px bold, dark blue color (#191B58)

### 2. Different CTA Headings
- Desktop: "Start Your AI Education Today"
- Mobile: "Start your AI Education!"
- Ensure conditional rendering or use responsive classes

### 3. Different Review Section Heading
- Desktop: "What Real Students are Saying"
- Mobile: "Reviews"
- Much simpler on mobile

### 4. Image Size Scaling
All images need both desktop and mobile sizes:
- Hero background: Different aspect ratios
- About image: 504px → 195px
- Why Matters image: 682x427px → 353x194px
- Profile images: 89px → 80px
- Border radius: 40-50px → 20px

### 5. Hamburger Menu Implementation
- Client Component (needs state)
- useState for open/close
- Slide-in animation from right or top
- Backdrop overlay when open
- Close on link click or backdrop click

---

## Success Criteria

### Phase 1 (Design Tokens) ✓
- [ ] Inter font loads (400, 700 weights)
- [ ] All CSS custom properties defined
- [ ] Responsive typography works (30px → 16px on mobile)
- [ ] Color variables accessible
- [ ] `npm run dev` runs without errors

### Full Implementation ✓
- [ ] All sections render correctly on desktop (1728px)
- [ ] All sections render correctly on mobile (393px)
- [ ] Navigation transforms to hamburger on mobile
- [ ] Contact links only visible on mobile
- [ ] Images scale appropriately
- [ ] Typography scales smoothly across breakpoints
- [ ] Buttons resize and stack properly
- [ ] Reviews switch from 2-col to 1-col layout
- [ ] Smooth scroll behavior works
- [ ] No horizontal scroll at any breakpoint
- [ ] Lighthouse score > 90
- [ ] No accessibility violations

---

## Next Steps

**IMMEDIATE (Phase 1):**
1. ✅ Update `/app/globals.css` with complete design token system
2. ✅ Update `/app/layout.tsx` to use Inter font
3. ✅ Test responsive typography at different breakpoints
4. ✅ Verify CSS variables in DevTools

**STOP after Phase 1 and await approval.**

---

## Technical Notes

- **Mobile-first approach:** Start with mobile styles, add desktop enhancements via `min-width` media queries
- **Tailwind v4:** Uses `@theme inline` syntax, not JS config
- **Image optimization:** Use Next.js `<Image>` for photos, `<img>` for SVGs
- **Client Components:** Only for Navigation (hamburger state), all else Server Components
- **TypeScript:** Strict mode, define all prop interfaces
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation
- **Performance:** Lazy load below-fold images, optimize font loading

---

## Design Token Summary

### Colors
- Dark Blue: `#191B58` (primary)
- Light Blue: `#76C8E5` (secondary)
- Purple: `#4A1383` (accent)
- White: `#FFFFFF`
- Black: `#000000`
- Gray: `#D9D9D9`

### Typography Scale
**Desktop → Mobile**
- H1: 80px → 30px
- H2: 50px → 24px
- H3: 30px → 20px
- Body: 30px → 16px
- Button: 22px → 16px
- Small: 20px → 14px

### Spacing
- Section Padding X: 120px → 60px → 20px
- Border Radius: 40-50px → 20px
- Image Sizes: ~500px → ~200px
- Button Width: 483px → 354px

---

*This plan accounts for all differences between desktop and mobile Figma designs, ensuring a fully responsive implementation.*
