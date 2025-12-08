// Event Data Types and Component Props

/**
 * Main event data structure
 */
export interface Event {
  id: string;
  name: string;
  date: string; // Format: "MM/DD/YY"
  description: string;
  location: string;
  locationUrl?: string; // Optional Google Maps link
  imageUrl: string; // Event card image path
  posterUrl?: string; // Featured event poster path (for hero section)
  category: 'upcoming' | 'past';
  featured?: boolean; // Is this the featured event in hero section?
}

/**
 * Props for EventHero component
 * Displays the featured event in hero section
 */
export interface EventHeroProps {
  event: Event; // The featured event to display
}

/**
 * Props for EventCard component
 * Individual event card in the list
 */
export interface EventCardProps {
  event: Event;
  className?: string;
}

/**
 * Props for EventList component
 * Container that renders list of event cards
 */
export interface EventListProps {
  events: Event[];
  category: 'upcoming' | 'past';
}

/**
 * Props for EventTabs component (Client Component)
 * Toggle between Upcoming and Past events
 */
export interface EventTabsProps {
  activeTab: 'upcoming' | 'past';
  onTabChange: (tab: 'upcoming' | 'past') => void;
}

/**
 * Props for LocationLink component
 * Reusable location link with map icon
 */
export interface LocationLinkProps {
  location: string;
  url?: string; // Optional Google Maps URL
  iconSize?: 'small' | 'large'; // 35px (mobile) or 85px (desktop)
  className?: string;
}
