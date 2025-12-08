import Image from 'next/image';
import { EventHeroProps } from '@/app/types/events';
import LocationLink from './LocationLink';

/**
 * EventHero Component
 *
 * Displays the featured event in a hero section (only event ID 1)
 *
 * Desktop: Two-column layout (poster left 567x779px, details right 1100px width)
 * Mobile: Stacked layout (details top, poster bottom 354x487px)
 *
 * Key differences:
 * - Desktop: "Join us at our next event" (80px)
 * - Mobile: "Join us for our next event" (30px)
 * - Description hidden on mobile
 * - Divider line hidden on mobile
 */
export default function EventHero({ event }: EventHeroProps) {
  // Only display event ID 1
  if (event.id !== '1') {
    return null;
  }

  return (
    <section className="relative w-full">
      {/* Content Container */}
      <div className="w-full px-[20px] lg:px-[120px] pt-[80px] lg:pt-[100px]">
        {/* Desktop: Two-column layout, Mobile: Stacked */}
        <div className="flex flex-col lg:flex-row lg:gap-[80px] lg:items-stretch">
          {/* Mobile: Event Details First, Desktop: Event Poster First */}

          {/* Event Details - Shows first on mobile, second on desktop */}
          <div className="flex flex-col w-full lg:w-[1100px] lg:order-2 mb-[24px] lg:mb-0">
            {/* Top content with fixed gaps */}
            <div className="flex flex-col gap-[6px] lg:gap-[18px]">
              {/* Heading */}
              <h1 className="font-bold text-[50px] lg:text-[70px] leading-[100%] text-[var(--color-dark-blue)] lg:text-black">
                <span className="hidden lg:inline">Join us at our</span>
                <span className="lg:hidden">Join us for our</span>
                <br />
                next event
              </h1>

              {/* Divider Line - Desktop only */}
              <div className="hidden lg:block w-full h-0 border-t-2 border-[var(--color-dark-blue)]" />

              {/* Event Name and Date */}
              <div className="flex items-center justify-between font-normal text-[18px] lg:text-[30px] leading-[100%] text-black whitespace-nowrap mt-[12px] lg:mt-0">
                <p>LoopLabs Launch</p>
                <p>Aug 18 - 22</p>
              </div>
            </div>

            {/* Description - Desktop only, grows to fill space */}
            <p className="hidden lg:block font-normal text-[20px] leading-[140%] text-black flex-grow overflow-hidden mt-[18px]">
              {event.description}
            </p>

            {/* Location Link - pushes to bottom on desktop */}
            <div className="mt-[6px] lg:mt-[18px]">
              <LocationLink
                location="1506 Stelton Road, Piscataway, NJ"
                url={event.locationUrl}
                iconSize="large"
              />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[20px] lg:rounded-[30px] mx-20 lg:mx-0 h-[350px] lg:h-[500px] w-auto lg:w-[380px] flex-shrink-0">
            <Image
              src={event.posterUrl || event.imageUrl}
              alt={`${event.name} poster`}
              fill
              className="object-cover object-top"
              priority
            />
          </div>

        </div>
      </div>

      {/* Add bottom spacing */}
      <div className="h-[80px] lg:h-[120px]" />
    </section>
  );
}
