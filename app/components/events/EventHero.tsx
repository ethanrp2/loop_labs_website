'use client';

import { useState, useEffect } from 'react';
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
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isImageExpanded) {
        setIsImageExpanded(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isImageExpanded]);

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
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between font-normal text-[18px] lg:text-[30px] leading-[100%] text-black mt-[12px] lg:mt-0 gap-[4px] lg:gap-0">
                <p className="lg:whitespace-nowrap">{event.name}</p>
                <p className="lg:whitespace-nowrap">{event.date}</p>
              </div>
            </div>

            {/* Description - Desktop only, grows to fill space */}
            <p className="hidden lg:block font-normal text-[20px] leading-[140%] text-black flex-grow overflow-hidden mt-[18px]">
              {event.description}
            </p>

            {/* Location Link - pushes to bottom on desktop */}
            <div className="mt-[6px] lg:mt-[18px]">
              <LocationLink
                location={event.location}
                url={event.locationUrl}
                iconSize="large"
              />
            </div>
          </div>

          {/* Clickable Poster Image */}
          <button
            onClick={() => setIsImageExpanded(true)}
            className="relative overflow-hidden rounded-[20px] lg:rounded-[30px] mx-20 lg:mx-0 h-[350px] lg:h-[500px] w-auto lg:w-[380px] flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Expand event flyer"
          >
            <Image
              src={event.posterUrl || event.imageUrl}
              alt={`${event.name} poster`}
              fill
              className="object-cover object-top"
              priority
            />
          </button>
        </div>
      </div>

      {/* Add bottom spacing */}
      <div className="h-[80px] lg:h-[120px]" />

      {/* Expanded Image Modal */}
      {isImageExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsImageExpanded(false)}
              className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close expanded image"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Expanded Image */}
            <Image
              src={event.posterUrl || event.imageUrl}
              alt={`${event.name} poster expanded`}
              width={600}
              height={800}
              className="rounded-[20px] object-contain max-h-[90vh] w-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
