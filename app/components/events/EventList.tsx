import { EventListProps } from '@/app/types/events';
import EventCard from './EventCard';

/**
 * EventList Component
 *
 * Renders a list of event cards based on category
 *
 * Desktop: Gap ~72px between cards
 * Mobile: Gap ~24px between cards
 */
export default function EventList({ events, category }: EventListProps) {
  // Filter events by category
  const filteredEvents = events.filter((event) => event.category === category);

  if (filteredEvents.length === 0) {
    return (
      <div
        role="tabpanel"
        id={`${category}-events-panel`}
        aria-labelledby={`${category}-events-tab`}
        className="text-center py-16"
      >
        <p className="text-[18px] lg:text-[30px] text-black">
          No {category} events at this time.
        </p>
      </div>
    );
  }

  return (
    <div
      role="tabpanel"
      id={`${category}-events-panel`}
      aria-labelledby={`${category}-events-tab`}
      className="flex flex-col gap-[24px] lg:gap-[72px] items-center w-full px-[20px] lg:px-[100px]"
    >
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
