# LOOPLABS Events Page - Implementation Plan

## Overview
Implement a fully responsive Events page for LOOPLABS based on Figma designs (Desktop: 1728px, Mobile: 393px). The page features a hero section with next event details, tabbed event listings (Upcoming/Past), and event cards. This plan accounts for significant layout differences between desktop and mobile views.

---

## Current State
- **Framework:** Next.js 16.0.7 with App Router
- **Styling:** Tailwind CSS v4 (using `@theme inline` syntax)
- **Language:** TypeScript enabled
- **Fonts:** Inter (400, 700 weights) - already configured in home page
- **Design Tokens:** Already established in `/app/globals.css`
- **Shared Components:** Navigation, Footer from home page can be reused

---

## Design Analysis: Desktop vs Mobile

### Key Layout Differences

| Section | Desktop (1728px) | Mobile (393px) | Changes |
|---------|------------------|----------------|---------|
| **Navigation** | Logo + text + horizontal links | Hamburger + logo + text | Layout: horizontal → hamburger |
| **Hero Heading** | 80px "Join us at our next event" | 30px "Join us for our next event" | Font: 80px → 30px, text differs |
| **Hero Layout** | Two-column (poster left, details right) | Stacked (details top, poster bottom) | Layout reorder |
| **Hero Poster** | 567x779px, left side | 354x487px, below details | Size & position change |
| **Event Name** | 50px Regular | 18px Regular | Font: 50px → 18px |
| **Map Icon** | 85x85px | 35x35px | Size: 85px → 35px |
| **Location Text** | 30px | 16px | Font: 30px → 16px |
| **Tab Buttons** | 489x91px, side-by-side | 167x48px, side-by-side | Size: 489x91 → 167x48 |
| **Tab Font** | 22px Bold, 1.1px tracking | 12px Bold, 0.6px tracking | Font: 22px → 12px |
| **Event Cards** | 1487x529px, horizontal layout | 353x212px, horizontal layout | Size reduction |
| **Card Image** | 305x418px | 141x172px | Size: 305x418 → 141x172 |
| **Card Name** | 50px Bold | 20px Bold | Font: 50px → 20px |
| **Card Date** | 30px Regular | 18px Regular | Font: 30px → 18px |
| **Card Gap** | 80px between image/content | 20px between image/content | Gap: 80px → 20px |
| **Footer** | "FOOTER" (50px) | "Footer" (20px) | Font: 50px → 20px |

### Typography Scale Differences

| Element | Desktop | Mobile | Ratio |
|---------|---------|--------|-------|
| Hero Heading | 80px Bold | 30px Bold | 2.67x |
| Event Name (Hero) | 50px Regular | 18px Regular | 2.78x |
| Tab Button | 22px Bold | 12px Bold | 1.83x |
| Card Event Name | 50px Bold | 20px Bold | 2.5x |
| Card Date | 30px Regular | 18px Regular | 1.67x |
| Location Link | 30px Regular | 16px Regular | 1.875x |
| Footer | 50px Regular | 20px Regular | 2.5x |
| Map Icon | 85px | 35px | 2.43x |

### Mobile-Specific Features
1. **Hamburger Menu** - Top-left navigation (3 lines icon)
2. **Smaller Logo** - 56x30.67px (vs 116x62px desktop)
3. **Stacked Hero Layout** - Details on top, poster below
4. **Compact Tab Buttons** - 167x48px (vs 489x91px desktop)
5. **Smaller Event Cards** - 353x212px with 20px padding
6. **Tighter Spacing** - Overall padding: 120px → 20px
7. **Border Radius Adjustment** - Poster: 40px → 20px

---

## Desktop Design Analysis (1728px)

### Page Layout Structure

| Section | Description | Key Elements |
|---------|-------------|--------------|
| **Navigation** | Same as home page | Logo, LOOPLABS text, Home/Events/Coursework links |
| **Hero Section** | Union gradient background | Featured event poster (left), event details (right) |
| **Tab Navigation** | Event category selector | "UPCOMING EVENTS" / "PAST EVENTS" buttons |
| **Event List** | Scrollable event cards | Multiple event cards with image, details, location |
| **Footer** | Same as home page | "FOOTER" text on dark background |

### Detailed Component Breakdown

#### 1. Hero Section (Featured Event)
- **Background:** Union gradient (reuse from home page)
- **Layout:** Two-column (40% poster / 60% details)
- **Left Column - Event Poster:**
  - Image: 567x779px
  - Border radius: 40px
  - Box shadow: 0px 4px 4px rgba(0,0,0,0.25)

- **Right Column - Event Details:**
  - Heading: "Join us at our next event" (80px Bold, Dark Blue #191B58)
  - Horizontal divider line
  - Event name: 50px Regular
  - Date: 50px Regular (right-aligned)
  - Description: 30px Regular, 287px height
  - Location link: 30px Regular, underlined, with map icon (85x85px)

**Spacing:**
- Top margin: 556px from top
- Left poster position: 120px from left
- Right details: Centered width 1100px
- Gap between name and date: space-between
- Gap between elements: 18px vertical

#### 2. Tab Navigation
- **Container:** Light blue background (#76C8E5)
- **Height:** Full section 1680px
- **Tab Buttons:**
  - Width: 489px each
  - Height: 91px
  - Border radius: 50px
  - Gap between: 40px
  - Top position: 1493px from top
  - Centered horizontally

- **Active Tab (Upcoming Events):**
  - Background: Dark Blue (#191B58)
  - Text: White
  - Font: 22px Bold, uppercase, 1.1px letter-spacing

- **Inactive Tab (Past Events):**
  - Background: White
  - Text: Black
  - Font: 22px Bold, uppercase, 1.1px letter-spacing

#### 3. Event Card Component
- **Dimensions:** 1487px wide × 529px height
- **Layout:** Horizontal (image left, content right)
- **Border:** 1px solid Light Blue (#76C8E5)
- **Background:** White
- **Border radius:** 40px
- **Box shadow:** 0px 4px 4px rgba(0,0,0,0.25)
- **Position:** Left 120px

**Card Structure:**
- **Left - Event Image:**
  - Size: 305x418px
  - Background: Gray (#D9D9D9) placeholder
  - Border radius: 20px
  - Left margin: 86px (5.79%)
  - Bottom aligned

- **Right - Event Content:**
  - Width: 931px
  - Gap from image: 80px
  - **Top Row (Name + Date):**
    - Event Name: 50px Bold, Dark Blue (#191B58)
    - Date: 30px Regular, Black
    - Layout: space-between
  - **Description:**
    - Font: 30px Regular
    - Height: 144px
    - 3-line truncation
  - **Location Link:**
    - Map icon: 85x85px
    - Text: 30px Regular, underlined
    - Gap: 23px between icon and text

**Card Spacing:**
- First card: Top 1656px
- Second card: Top 2244px (588px gap)
- Third card: Top 2836px (592px gap)

#### 4. Footer
- **Reuse from home page**
- Position: Top 3147px
- Height: 148px
- Text: "FOOTER" (50px Regular, White, centered)

---

## Mobile Design Analysis (393px)

### Page Layout Structure

| Section | Description | Key Elements |
|---------|-------------|--------------|
| **Navigation** | Hamburger menu + logo | Hamburger icon (31x20px), logo (56x30.67px), LOOPLABS text (16px) |
| **Hero Section** | Union gradient background | Event details (top), event poster (bottom) - stacked |
| **Tab Navigation** | Compact event selector | "UP-COMING EVENTS" / "PAST EVENTS" buttons (167x48px) |
| **Event List** | Scrollable compact cards | Event cards 353x212px with horizontal layout |
| **Footer** | Same structure as home | "Footer" text (20px) on dark background |

### Detailed Component Breakdown (Mobile)

#### 1. Hero Section (Featured Event)
- **Background:** Union gradient (mobile version, 393x198px)
- **Layout:** Stacked vertical (details top, poster bottom)
- **Top - Event Details:**
  - Position: Top 149px, left 20px, width 353px
  - Heading: "Join us for our next event" (30px Bold, Dark Blue #191B58, 77px height)
  - Event name/date row: 18px Regular, space-between layout
  - Location link: 35px map icon + 16px text, 10px gap
  - Vertical gap: 6px between elements

- **Bottom - Event Poster:**
  - Size: 354x487px
  - Position: Top 311px, left 19px
  - Border radius: 20px
  - Box shadow: 0px 4px 4px rgba(0,0,0,0.25)

**Key Differences from Desktop:**
- Poster moved from left side to bottom
- Heading text: "Join us at our" → "Join us for our"
- Font size: 80px → 30px
- Poster size: 567x779px → 354x487px
- Border radius: 40px → 20px
- Map icon: 85px → 35px

#### 2. Tab Navigation (Mobile)
- **Container:** Light blue background (#76C8E5), height 567px
- **Position:** Top 898px
- **Tab Buttons:**
  - Width: 167px each
  - Height: 48px
  - Border radius: 50px
  - Position: Left 20px, gap ~10px
  - Side-by-side layout (fits 2 buttons in 393px width)

- **Active Tab ("UP-COMING EVENTS"):**
  - Background: Dark Blue (#191B58)
  - Text: White
  - Font: 12px Bold, uppercase, 0.6px letter-spacing

- **Inactive Tab ("PAST EVENTS"):**
  - Background: White
  - Text: Black
  - Font: 12px Bold, uppercase, 0.6px letter-spacing

**Key Differences from Desktop:**
- Button size: 489x91px → 167x48px
- Font size: 22px → 12px
- Letter spacing: 1.1px → 0.6px
- Still side-by-side (not stacked)

#### 3. Event Card Component (Mobile)
- **Dimensions:** 353px wide × 212px height
- **Layout:** Horizontal (image left, content right) - same as desktop
- **Background:** White
- **Border:** None visible (light blue border optional)
- **Border radius:** 20px
- **Box shadow:** 0px 4px 4px rgba(0,0,0,0.25)
- **Padding:** 20px all around
- **Position:** Centered (left ~20px)

**Card Structure:**
- **Left - Event Image:**
  - Size: 141x172px
  - Background: Gray (#D9D9D9) placeholder
  - Border radius: 10px
  - Left aligned

- **Right - Event Content:**
  - Width: 133px (remaining space after 141px image + 20px gap)
  - Vertical layout with space-between
  - **Top Section:**
    - Event Name: 20px Bold, Black
    - Date: 18px Regular, Black
    - Gap: 4px between name and date
  - **Bottom Section:**
    - Map icon: 35x35px
    - Location text: 16px Regular, underlined, Black
    - Gap: 10px between icon and text

**Card Spacing:**
- First card: Top 970px
- Second card: Top 1206px (236px gap)
- Internal gap between image/content: 20px
- Content top-to-bottom: space-between (172px height)

**Key Differences from Desktop:**
- Card size: 1487x529px → 353x212px
- Image size: 305x418px → 141x172px
- Content width: 931px → 133px
- Gap: 80px → 20px
- Event name: 50px → 20px
- Date: 30px → 18px
- Map icon: 85px → 35px
- Location text: 30px → 16px
- Border radius (image): 20px → 10px
- No description shown (removed for mobile)

#### 4. Footer (Mobile)
- **Reuse from home page**
- Position: Top 1399px
- Height: 56px
- Text: "Footer" (20px Regular, White, centered)

**Key Difference:** "FOOTER" → "Footer", 50px → 20px

---

## Typography Analysis (Desktop)

| Element | Font Size | Weight | Color | Special |
|---------|-----------|--------|-------|---------|
| Hero Heading | 80px | Bold | Dark Blue (#191B58) | Multi-line |
| Event Name (Hero) | 50px | Regular | Black | - |
| Event Date (Hero) | 50px | Regular | Black | Right-aligned |
| Description (Hero) | 30px | Regular | Black | Multi-line |
| Tab Button | 22px | Bold | White/Black | Uppercase, 1.1px tracking |
| Card Event Name | 50px | Bold | Dark Blue | - |
| Card Date | 30px | Regular | Black | - |
| Card Description | 30px | Regular | Black | 3-line max |
| Location Link | 30px | Regular | Black | Underlined |
| Navigation | 25px | Regular/Bold | White | Home underlined |
| Logo Text | 40px | Bold | White | Below logo |

### Typography Analysis (Mobile)

| Element | Font Size | Weight | Color | Special |
|---------|-----------|--------|-------|---------|
| Hero Heading | 30px | Bold | Dark Blue (#191B58) | Multi-line, 77px height |
| Event Name (Hero) | 18px | Regular | Black | - |
| Event Date (Hero) | 18px | Regular | Black | Right-aligned |
| Location Link (Hero) | 16px | Regular | Black | Underlined |
| Tab Button | 12px | Bold | White/Black | Uppercase, 0.6px tracking |
| Card Event Name | 20px | Bold | Black | - |
| Card Date | 18px | Regular | Black | - |
| Location Link (Card) | 16px | Regular | Black | Underlined |
| Navigation Logo Text | 16px | Bold | White | Below logo |
| Footer | 20px | Regular | White | Centered |

---

## Color Palette (Already in globals.css)

- **Dark Blue:** #191B58 (primary, headings, active tab)
- **Light Blue:** #76C8E5 (secondary, background, borders)
- **Purple:** #4A1383 (accent - not used on Events page)
- **White:** #FFFFFF (backgrounds, text)
- **Black:** #000000 (text)
- **Gray:** #D9D9D9 (image placeholders)

---

## Component Architecture

### Directory Structure (New Files)

```
/app/
├── events/
│   └── page.tsx                       # Events page route
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx             # ✅ Reuse from home
│   │   └── Footer.tsx                 # ✅ Reuse from home
│   │
│   ├── events/
│   │   ├── EventHero.tsx              # Featured event hero section
│   │   ├── EventTabs.tsx              # Upcoming/Past tabs (client component)
│   │   ├── EventCard.tsx              # Individual event card
│   │   ├── EventList.tsx              # List of event cards
│   │   └── LocationLink.tsx           # Location with map icon
│   │
│   └── ui/
│       └── Button.tsx                 # ✅ Reuse from home (tab variant)
│
├── constants/
│   └── events.ts                      # Event data constants (mock data)
│
├── types/
│   └── events.ts                      # Event TypeScript interfaces
│
└── globals.css                        # ✅ Already configured
```

### Image Asset Organization (New Assets)

```
/public/images/
├── backgrounds/
│   └── hero-background-desktop.png    # ✅ Reuse Union from home
│
├── icons/
│   └── map-icon.png                   # Map location icon (85x85)
│
├── events/
│   ├── posters/
│   │   ├── event-poster-featured.png  # Featured event poster (567x779)
│   │   ├── event-1.png                # Event card image (305x418)
│   │   ├── event-2.png                # Event card image (305x418)
│   │   └── event-3.png                # Event card image (305x418)
│   │
│   └── placeholder-event.png          # Gray placeholder (305x418)
│
└── decorations/
    └── divider-line.svg               # ✅ Reuse from home
```

---

## TypeScript Interfaces

### Event Data Structure

```typescript
// /app/types/events.ts

export interface Event {
  id: string;
  name: string;
  date: string; // Format: "MM/DD/YY"
  description: string;
  location: string;
  locationUrl?: string; // Optional Google Maps link
  imageUrl: string;
  posterUrl?: string; // For featured event
  category: 'upcoming' | 'past';
  featured?: boolean; // Is this the featured event in hero?
}

export interface EventCardProps {
  event: Event;
  className?: string;
}

export interface EventListProps {
  events: Event[];
  category: 'upcoming' | 'past';
}

export interface EventTabsProps {
  activeTab: 'upcoming' | 'past';
  onTabChange: (tab: 'upcoming' | 'past') => void;
}

export interface LocationLinkProps {
  location: string;
  url?: string;
  iconSize?: 'small' | 'large'; // 29px or 85px
}
```

---

## Component Implementation Details

### 1. EventHero Component

**Purpose:** Display featured upcoming event with poster and details

**Props:**
```typescript
interface EventHeroProps {
  event: Event; // Featured event
}
```

**Layout:**
- Full-width section with Union gradient background
- Navigation at top (reused component)
- Two-column grid (desktop)
- Event poster: 567x779px, 40px border radius, shadow
- Event details: 1100px width, centered
- Heading: "Join us at our next event" (80px)
- Divider line
- Name/Date row (space-between)
- Description (287px height)
- Location link with map icon

**Responsive Notes (Mobile < 1024px):**
- Layout: Two-column → Stacked (details top, poster bottom)
- Heading: "Join us at our" → "Join us for our", 80px → 30px
- Poster: 567x779px → 354x487px, border radius 40px → 20px
- Event name/date: 50px → 18px
- Location text: 30px → 16px, icon 85px → 35px
- No divider line on mobile
- No description in hero (only in desktop)

---

### 2. EventTabs Component (Client Component)

**Purpose:** Toggle between Upcoming and Past events

**Props:**
```typescript
interface EventTabsProps {
  activeTab: 'upcoming' | 'past';
  onTabChange: (tab: 'upcoming' | 'past') => void;
}
```

**State:**
- Client Component (needs useState)
- Active state determines styling

**Desktop Styling:**
- Container: Centered, flex gap 40px
- Each button: 489x91px, 50px border radius
- Active: Dark blue bg, white text
- Inactive: White bg, black text
- Font: 22px Bold, uppercase, 1.1px tracking

**Mobile Styling (< 1024px):**
- Container: Left 20px, flex gap ~10px
- Each button: 167x48px, 50px border radius
- Active: Dark blue bg, white text
- Inactive: White bg, black text
- Font: 12px Bold, uppercase, 0.6px tracking
- **Still side-by-side** (not stacked)

---

### 3. EventCard Component

**Purpose:** Display individual event in list

**Props:**
```typescript
interface EventCardProps {
  event: Event;
  className?: string;
}
```

**Desktop Layout:**
- 1487x529px card
- White background, light blue border
- 40px border radius, shadow
- Horizontal layout: image (305x418) + content (931px)
- Gap: 80px between image and content
- Content sections:
  - Name (50px Bold) + Date (30px Regular) - space-between
  - Description (30px Regular, 144px height, 3-line clamp)
  - Location link with icon (85px icon + 30px text)

**Mobile Layout (< 1024px):**
- 353x212px card
- White background, 20px border radius, shadow
- **Still horizontal layout** (image left, content right)
- Image: 141x172px, 10px border radius
- Content: 133px width
- Gap: 20px between image and content
- Content sections:
  - Name (20px Bold) + Date (18px Regular) - 4px gap, stacked
  - Location link with icon (35px icon + 16px text) - bottom aligned
  - **No description** on mobile
- Vertical alignment: space-between (172px height)

---

### 4. EventList Component

**Purpose:** Render list of event cards based on category

**Props:**
```typescript
interface EventListProps {
  events: Event[];
  category: 'upcoming' | 'past';
}
```

**Desktop:**
- Vertical stack of EventCard components
- Gap: ~588px between cards
- Filter events by category

**Mobile (< 1024px):**
- Vertical stack of EventCard components
- Gap: ~236px between cards
- Filter events by category
- Container padding: 20px horizontal

---

### 5. LocationLink Component

**Purpose:** Reusable location link with map icon

**Props:**
```typescript
interface LocationLinkProps {
  location: string;
  url?: string;
  iconSize?: 'small' | 'large'; // 29px (mobile) or 85px (desktop)
}
```

**Desktop Styling:**
- Flex row, gap 23px
- Map icon: 85x85px
- Text: 30px Regular, underlined, black
- Optional href for Google Maps

**Mobile Styling (< 1024px):**
- Flex row, gap 10px
- Map icon: 35x35px
- Text: 16px Regular, underlined, black
- Optional href for Google Maps

---

## Responsive Strategy

### Breakpoint Definition
- **Desktop:** `min-width: 1024px` (1728px design)
- **Mobile:** `max-width: 1023px` (393px design)
- **Tablet:** Use mobile layout (no separate tablet design provided)

### Desktop Layout (≥ 1024px)
- Navigation: Horizontal layout with links
- Hero: Two-column (poster left 40%, details right 60%)
- Poster: 567x779px, left 120px
- Hero Heading: 80px "Join us at our next event"
- Event Name/Date: 50px
- Description: 30px (shown)
- Tabs: Side-by-side 489x91px, font 22px
- Event Cards: Horizontal 1487x529px, image 305x418px
- Map Icon: 85px
- Location: 30px
- Padding: 120px sides
- Footer: "FOOTER" 50px

### Mobile Layout (< 1024px)
- Navigation: Hamburger menu + logo
- Hero: Stacked (details top, poster bottom)
- Poster: 354x487px, centered, border radius 20px
- Hero Heading: 30px "Join us for our next event"
- Event Name/Date: 18px
- **No description** in hero
- Tabs: Side-by-side 167x48px, font 12px
- Event Cards: Horizontal 353x212px, image 141x172px
- **No description** in cards
- Map Icon: 35px
- Location: 16px
- Padding: 20px sides
- Footer: "Footer" 20px

### Key Responsive Changes Summary
| Feature | Desktop | Mobile | Implementation |
|---------|---------|--------|----------------|
| Hero Layout | Two-column | Stacked | `flex-col` on mobile |
| Hero Text | "at our" | "for our" | Conditional text |
| Description | Shown | Hidden | `hidden lg:block` |
| Poster Size | 567x779px | 354x487px | Responsive width/height |
| Typography | 80/50/30px | 30/20/18px | `text-[30px] lg:text-[80px]` |
| Tab Buttons | 489x91px | 167x48px | Responsive width/height |
| Card Size | 1487x529px | 353x212px | Full width mobile |
| Map Icon | 85px | 35px | `size-[35px] lg:size-[85px]` |
| Padding | 120px | 20px | `px-5 lg:px-[120px]` |

---

## Mock Data Structure

### Sample Events Data

```typescript
// /app/constants/events.ts

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    name: 'Event name',
    date: 'mm/dd/yy',
    description: 'Description: Lorem ipsum dolor sit amet. In eveniet sunt et officiis ipsa est consequatur obcaecati qui rerum nihil id fugiat corporis. Ad velit consequuntur At animi enim ab repellat enim sit optio tempore qui enim',
    location: 'Location',
    locationUrl: 'https://maps.google.com',
    imageUrl: '/images/events/posters/event-poster-featured.png',
    posterUrl: '/images/events/posters/event-poster-featured.png',
    category: 'upcoming',
    featured: true,
  },
  {
    id: '2',
    name: 'Event Name',
    date: 'MM/DD/YY',
    description: 'Description: Lorem ipsum dolor sit amet. In eveniet sunt et officiis ipsa est consequatur obcaecati qui rerum nihil id fugiat corporis. Ad velit consequuntur At animi enim ab repellat enim sit optio tempore qui enim',
    location: 'Location',
    imageUrl: '/images/events/event-1.png',
    category: 'upcoming',
  },
  {
    id: '3',
    name: 'Event Name',
    date: 'MM/DD/YY',
    description: 'Description: Lorem ipsum dolor sit amet. In eveniet sunt et officiis ipsa est consequatur obcaecati qui rerum nihil id fugiat corporis. Ad velit consequuntur At animi enim ab repellat enim sit optio tempore qui enim',
    location: 'Location',
    imageUrl: '/images/events/event-2.png',
    category: 'upcoming',
  },
  {
    id: '4',
    name: 'Event Name',
    date: 'MM/DD/YY',
    description: 'Description: Lorem ipsum dolor sit amet. In eveniet sunt et officiis ipsa est consequatur obcaecati qui rerum nihil id fugiat corporis. Ad velit consequuntur At animi enim ab repellat enim sit optio tempore qui enim',
    location: 'Location',
    imageUrl: '/images/events/event-3.png',
    category: 'upcoming',
  },
  // Add past events later
];

export const getFeaturedEvent = (): Event | undefined =>
  MOCK_EVENTS.find(event => event.featured);

export const getEventsByCategory = (category: 'upcoming' | 'past'): Event[] =>
  MOCK_EVENTS.filter(event => event.category === category);
```

---

## Page Route Structure

### Events Page Route

**File:** `/app/events/page.tsx`

```typescript
import { Metadata } from 'next';
import Navigation from '@/app/components/layout/Navigation';
import Footer from '@/app/components/layout/Footer';
import EventHero from '@/app/components/events/EventHero';
import EventTabs from '@/app/components/events/EventTabs';
import EventList from '@/app/components/events/EventList';
import { getFeaturedEvent, getEventsByCategory } from '@/app/constants/events';

export const metadata: Metadata = {
  title: 'Events - LOOPLABS',
  description: 'Join us at our upcoming AI education events and workshops.',
};

export default function EventsPage() {
  const featuredEvent = getFeaturedEvent();

  return (
    <main className="relative min-h-screen bg-white">
      {/* Hero Section with Featured Event */}
      {featuredEvent && <EventHero event={featuredEvent} />}

      {/* Event List Section with Tabs */}
      <section className="relative bg-[#76C8E5] py-[72px]">
        {/* Tabs and Event List will be here */}
        <EventTabsSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
```

---

## Design Token Updates

### Additional CSS Variables Needed

**File:** `/app/globals.css` (additions only)

```css
/* ============================================
   EVENTS PAGE SPECIFIC TOKENS
   ============================================ */
@theme inline {
  /* Event Card Dimensions - Desktop */
  --event-card-width-desktop: 1487px;
  --event-card-height-desktop: 529px;
  --event-card-image-width-desktop: 305px;
  --event-card-image-height-desktop: 418px;
  --event-card-gap-desktop: 80px;
  --event-card-border-radius-desktop: 40px;

  /* Event Card Dimensions - Mobile */
  --event-card-width-mobile: 353px;
  --event-card-height-mobile: 212px;
  --event-card-image-width-mobile: 141px;
  --event-card-image-height-mobile: 172px;
  --event-card-gap-mobile: 20px;
  --event-card-border-radius-mobile: 20px;
  --event-card-image-border-radius-mobile: 10px;

  /* Event Poster Dimensions - Desktop */
  --event-poster-width-desktop: 567px;
  --event-poster-height-desktop: 779px;
  --event-poster-border-radius-desktop: 40px;

  /* Event Poster Dimensions - Mobile */
  --event-poster-width-mobile: 354px;
  --event-poster-height-mobile: 487px;
  --event-poster-border-radius-mobile: 20px;

  /* Tab Button Dimensions - Desktop */
  --tab-button-width-desktop: 489px;
  --tab-button-height-desktop: 91px;
  --tab-button-gap-desktop: 40px;
  --tab-button-font-desktop: 22px;
  --tab-button-tracking-desktop: 1.1px;

  /* Tab Button Dimensions - Mobile */
  --tab-button-width-mobile: 167px;
  --tab-button-height-mobile: 48px;
  --tab-button-gap-mobile: 10px;
  --tab-button-font-mobile: 12px;
  --tab-button-tracking-mobile: 0.6px;

  /* Icon Sizes */
  --icon-map-size-desktop: 85px;
  --icon-map-size-mobile: 35px;
  --icon-hamburger-width: 31px;
  --icon-hamburger-height: 20px;

  /* Typography - Desktop */
  --hero-heading-desktop: 80px;
  --hero-event-name-desktop: 50px;
  --hero-location-desktop: 30px;
  --card-name-desktop: 50px;
  --card-date-desktop: 30px;

  /* Typography - Mobile */
  --hero-heading-mobile: 30px;
  --hero-event-name-mobile: 18px;
  --hero-location-mobile: 16px;
  --card-name-mobile: 20px;
  --card-date-mobile: 18px;

  /* Event List Spacing */
  --event-card-spacing-desktop: 588px;
  --event-card-spacing-mobile: 236px;

  /* Container Padding */
  --container-padding-desktop: 120px;
  --container-padding-mobile: 20px;
}
```

---

## Implementation Phases

### Phase 1: Setup & Types ✅
1. Create `/app/types/events.ts` - Event interfaces
2. Create `/app/constants/events.ts` - Mock event data
3. Update `/app/globals.css` - Add events-specific tokens

### Phase 2: Reusable Components
4. Update `/app/components/ui/Button.tsx` - Add tab variant
5. Create `/app/components/events/LocationLink.tsx` - Location link with icon

### Phase 3: Events Components
6. Create `/app/components/events/EventHero.tsx` - Featured event hero
7. Create `/app/components/events/EventCard.tsx` - Event card component
8. Create `/app/components/events/EventTabs.tsx` - Tab navigation (client)
9. Create `/app/components/events/EventList.tsx` - Event list container

### Phase 4: Page Assembly
10. Create `/app/events/page.tsx` - Events page route
11. Download/create event images - Posters and card images
12. Test desktop layout at 1728px

### Phase 5: Mobile Responsive Implementation ✅
13. Add responsive classes to EventHero component
14. Add responsive classes to EventTabs component
15. Add responsive classes to EventCard component
16. Add responsive classes to LocationLink component
17. Update Navigation for mobile hamburger menu
18. Test at 393px (mobile) and 768px (tablet)
19. Verify layout switching at 1024px breakpoint

### Phase 6: Polish & Testing
17. Cross-device testing
18. Performance optimization
19. Accessibility audit
20. State management for tab switching

---

## Critical Measurements

### Desktop (1728px)

### Layout Positions
- Navigation top: 56px
- Hero section top: 398px (poster), 556px (content)
- Poster left: 120px
- Content centered: 1100px width
- Tab section top: 1493px
- First event card top: 1656px
- Second event card top: 2244px
- Third event card top: 2836px
- Footer top: 3147px

### Gaps & Spacing
- Hero content vertical gap: 18px
- Tab buttons gap: 40px
- Event card internal gap: 80px
- Between event cards: ~588px

### Border Radius
- Event poster: 40px
- Tab buttons: 50px
- Event cards: 40px
- Event card images: 20px

### Shadows
- Event poster: `0px 4px 4px rgba(0,0,0,0.25)`
- Event cards: `0px 4px 4px rgba(0,0,0,0.25)`

### Mobile (393px)

### Layout Positions
- Navigation top: 39px
- Hero details top: 149px, left 20px
- Hero poster top: 311px, left 19px
- Tab section top: 898px, left 20px
- First event card top: 970px
- Second event card top: 1206px
- Footer top: 1399px

### Gaps & Spacing
- Hero content vertical gap: 6px
- Tab buttons gap: ~10px
- Event card internal gap: 20px
- Between event cards: ~236px
- Container padding: 20px horizontal

### Border Radius
- Event poster: 20px
- Tab buttons: 50px
- Event cards: 20px
- Event card images: 10px

### Shadows
- Event poster: `0px 4px 4px rgba(0,0,0,0.25)`
- Event cards: `0px 4px 4px rgba(0,0,0,0.25)`

---

## Navigation Integration

### Update Navigation Active State

The navigation component should highlight "Events" when on `/events` page:

```typescript
// /app/components/layout/Navigation.tsx
// Update to detect current route and apply underline to active link
```

---

## Accessibility Considerations

### Semantic HTML
- Use `<nav>` for navigation
- Use `<main>` for main content
- Use `<article>` for event cards
- Use `<h1>` for hero heading
- Use `<h2>` for event names

### ARIA Labels
- Tab buttons: `aria-selected`, `role="tab"`
- Tab panel: `role="tabpanel"`
- Location links: `aria-label="View location on map"`

### Keyboard Navigation
- Tab focus states for buttons
- Enter/Space to activate tabs
- Focus management when switching tabs

---

## Success Criteria

### Desktop Implementation ✓
- [ ] Events page renders at `/events` route
- [ ] Navigation highlights "Events" link
- [ ] Hero section displays featured event correctly
- [ ] Event poster: 567x779px with 40px radius
- [ ] Hero content: 1100px width, properly spaced
- [ ] Tabs: 489px each, correct active/inactive styling
- [ ] Tab switching works (client state management)
- [ ] Event cards: 1487x529px with correct layout
- [ ] Event card images: 305x418px, 20px radius
- [ ] Location links: Map icon + underlined text
- [ ] Typography matches design (80px, 50px, 30px, 22px)
- [ ] Colors match: Dark Blue, Light Blue, White, Black
- [ ] Spacing matches Figma (18px, 40px, 80px, 588px)
- [ ] Footer reused from home page
- [ ] No horizontal scroll
- [ ] All shadows render correctly

### Mobile Implementation ✓
- [ ] Mobile layout renders at < 1024px breakpoint
- [ ] Navigation shows hamburger menu on mobile
- [ ] Hero layout stacks (details top, poster bottom)
- [ ] Hero heading: "Join us for our next event" (30px)
- [ ] Event poster: 354x487px with 20px radius
- [ ] Hero description hidden on mobile
- [ ] Tabs: 167x48px each, 12px font, 0.6px tracking
- [ ] Event cards: 353x212px with correct mobile layout
- [ ] Event card images: 141x172px, 10px radius
- [ ] Card description hidden on mobile
- [ ] Location icon: 35px on mobile
- [ ] Typography scales correctly (30/20/18/16/12px)
- [ ] Padding: 20px sides on mobile
- [ ] Footer: "Footer" (20px) on mobile
- [ ] No horizontal scroll on mobile
- [ ] Smooth transitions between breakpoints

---

## Next Steps

**READY TO IMPLEMENT:**
1. ✅ Desktop design analyzed (1728px)
2. ✅ Mobile design analyzed (393px)
3. ✅ Responsive strategy defined
4. ✅ Component architecture planned
5. ✅ Design tokens specified

**IMPLEMENTATION ORDER:**
1. Phase 1: Setup & Types (events interfaces, constants, tokens)
2. Phase 2: Reusable Components (Button variants, LocationLink)
3. Phase 3: Events Components (Hero, Card, Tabs, List)
4. Phase 4: Page Assembly (events route, images, desktop testing)
5. Phase 5: Mobile Responsive (add responsive classes, test breakpoints)
6. Phase 6: Polish & Testing (cross-device, performance, accessibility)

**READY FOR USER APPROVAL:**
- Review plan and confirm approach
- Clarify any questions (see Questions section below)
- Proceed with implementation

---

## Technical Notes

- **Reuse home page components:** Navigation, Footer, Button, design tokens
- **Client Components:** Only EventTabs (needs state), all else Server Components
- **Image Optimization:** Use Next.js `<Image>` for photos
- **Tab State:** Could be upgraded to URL params later (`/events?tab=upcoming`)
- **Event Data:** Mock data for now, easy to replace with CMS/API later
- **Responsive Approach:** Mobile-first CSS with Tailwind responsive classes
- **TypeScript:** Strict mode, all interfaces defined
- **Accessibility:** ARIA roles for tabs, keyboard navigation
- **Conditional Content:** Hero and card descriptions hidden on mobile only

---

## Questions for User (Before Implementation)

1. Should event data come from a CMS, or is mock data sufficient for now?
2. Should tab state persist in URL (`/events?tab=past`)?
3. Do we need pagination for event lists (many events)?
4. Should location links open Google Maps in new tab?
5. Is there a "View Details" or individual event page needed?
6. Should past events have different styling (grayed out)?

---

## Summary

This comprehensive implementation plan covers the full Events page for LOOPLABS with complete specifications for both desktop (1728px) and mobile (393px) designs. The plan includes:

- ✅ Detailed design analysis with desktop vs mobile comparisons
- ✅ Complete component architecture with TypeScript interfaces
- ✅ Responsive strategy with specific breakpoints and implementations
- ✅ Design tokens for all dimensions, typography, and spacing
- ✅ Implementation phases broken down into actionable steps
- ✅ Success criteria for both desktop and mobile
- ✅ Critical measurements and accessibility considerations

**Key Implementation Notes:**
- Hero layout changes from two-column to stacked on mobile
- Descriptions are hidden on mobile (hero and cards)
- Event cards maintain horizontal layout on both desktop and mobile (not stacked)
- Tab buttons remain side-by-side on mobile (smaller size)
- Typography scales significantly (2-3x smaller on mobile)
- Border radius adjustments (40px → 20px for posters, 20px → 10px for card images)

**Ready for implementation** - All specifications complete, awaiting user approval to proceed.
