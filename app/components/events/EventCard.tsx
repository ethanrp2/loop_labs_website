import Image from 'next/image';
import { EventCardProps } from '@/app/types/events';
import LocationLink from './LocationLink';

/**
 * EventCard Component
 *
 * Displays individual event information with image, name, date, description, and location
 *
 * Desktop: 1487x529px, horizontal layout, image 305x418px, 80px gap
 * Mobile: 353x212px, horizontal layout, image 141x172px, 20px gap
 *
 * Description is hidden on mobile
 */
export default function EventCard({ event, className = '' }: EventCardProps) {
  return (
    <article
      className={`
        relative bg-white rounded-[20px] lg:rounded-[40px]
        shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
        w-full max-w-[353px] lg:max-w-[1487px]
        h-auto lg:h-[529px]
        mx-auto
        ${className}
      `}
    >
      <div className="flex gap-[20px] lg:gap-[80px] items-end p-[20px] lg:p-[56px_86px]">
        {/* Event Image */}
        <div className="relative shrink-0 w-[141px] h-[172px] lg:w-[305px] lg:h-[418px] rounded-[10px] lg:rounded-[20px] overflow-hidden bg-[var(--color-gray)]">
          <Image
            src={event.imageUrl}
            alt={event.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Event Content */}
        <div className="flex flex-col justify-between h-[172px] lg:h-[362px] flex-1">
          {/* Top Section - Name and Date */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[4px] lg:gap-0">
            <h3 className="font-bold text-[20px] lg:text-[50px] leading-[100%] text-black lg:text-center">
              {event.name}
            </h3>
            <p className="font-normal text-[18px] lg:text-[30px] leading-[100%] text-black lg:text-center whitespace-nowrap">
              {event.date}
            </p>
          </div>

          {/* Middle Section - Description (Desktop only) */}
          <p className="hidden lg:block font-normal text-[25px] leading-[100%] text-black h-[144px] overflow-hidden line-clamp-3">
            {event.description}
          </p>

          {/* Bottom Section - Location */}
          <LocationLink
            location={event.location}
            url={event.locationUrl}
            iconSize="large"
          />
        </div>
      </div>
    </article>
  );
}
