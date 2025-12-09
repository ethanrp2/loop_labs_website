import { Event } from '@/app/types/events';

/**
 * Mock event data for development
 * Replace with CMS or API data in production
 */
export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    name: 'AI Prompt Engineering',
    date: 'Feb 16th, 10AM - 12PM',
    description:
      'An AI Prompt Engineering class for students to learn how AI works through creative, hands-on projects. Kids explore robotics, coding, and art while building real prompt-engineering skills. Registration due Feb 9th.',
    location: 'Sharon Elementary School',
    locationUrl: 'https://maps.app.goo.gl/u6in1qynXQdvjnsu8',
    imageUrl: '/images/events/prompt_engineering_flyer.png',
    posterUrl: '/images/events/prompt_engineering_flyer.png',
    category: 'upcoming',
    featured: true,
  },
  {
    id: '2',
    name: 'LoopLabs Launch',
    date: 'Aug 18 - 22',
    description:
      'LoopLabs Launch is a short, hands-on bootcamp for college students to learn practical AI skills like prompt engineering, agentic systems, product design, and startup thinking, taught by experienced industry experts with a focus on real-world impact.',
    location: '1506 Stelton Road, Piscataway, NJ',
    locationUrl: 'https://maps.google.com/?q=1506+Stelton+Road,+Piscataway,+NJ',
    imageUrl: '/images/events/cover_event.png',
    posterUrl: '/images/events/cover_event.png',
    category: 'past',
    featured: false,
  },
  // {
  //   id: '2',
  //   name: 'Event Name',
  //   date: 'MM/DD/YY',
  //   description:
  //     'Description: Lorem ipsum dolor sit amet. In eveniet sunt et officiis ipsa est consequatur obcaecati qui rerum nihil id fugiat corporis. Ad velit consequuntur At animi enim ab repellat enim sit optio tempore qui enim',
  //   location: 'Location',
  //   locationUrl: 'https://maps.google.com',
  //   imageUrl: '/images/events/event-1.svg',
  //   category: 'upcoming',
  // },
  // {
  //   id: '3',
  //   name: 'Event Name',
  //   date: 'MM/DD/YY',
  //   description:
  //     'Description: Lorem ipsum dolor sit amet. In eveniet sunt et officiis ipsa est consequatur obcaecati qui rerum nihil id fugiat corporis. Ad velit consequuntur At animi enim ab repellat enim sit optio tempore qui enim',
  //   location: 'Location',
  //   locationUrl: 'https://maps.google.com',
  //   imageUrl: '/images/events/event-2.svg',
  //   category: 'upcoming',
  // },
  // {
  //   id: '4',
  //   name: 'Event Name',
  //   date: 'MM/DD/YY',
  //   description:
  //     'Description: Lorem ipsum dolor sit amet. In eveniet sunt et officiis ipsa est consequatur obcaecati qui rerum nihil id fugiat corporis. Ad velit consequuntur At animi enim ab repellat enim sit optio tempore qui enim',
  //   location: 'Location',
  //   locationUrl: 'https://maps.google.com',
  //   imageUrl: '/images/events/event-3.svg',
  //   category: 'upcoming',
  // },
  // Past events can be added here with category: 'past'
];

/**
 * Get the featured event for the hero section
 * @returns The featured event or undefined if none exists
 */
export const getFeaturedEvent = (): Event | undefined => {
  return MOCK_EVENTS.find((event) => event.featured);
};

/**
 * Get events filtered by category
 * @param category - 'upcoming' or 'past'
 * @returns Array of events matching the category
 */
export const getEventsByCategory = (category: 'upcoming' | 'past'): Event[] => {
  return MOCK_EVENTS.filter((event) => event.category === category);
};

/**
 * Get all events
 * @returns All events
 */
export const getAllEvents = (): Event[] => {
  return MOCK_EVENTS;
};
