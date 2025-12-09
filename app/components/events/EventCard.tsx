'use client';

import { useState, useEffect } from 'react';
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

  return (
    <>
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
          {/* Event Image - Clickable */}
          <button
            onClick={() => setIsImageExpanded(true)}
            className="relative shrink-0 w-[141px] h-[172px] lg:w-[305px] lg:h-[418px] rounded-[10px] lg:rounded-[20px] overflow-hidden bg-[var(--color-gray)] cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Expand event flyer"
          >
            <Image
              src={event.imageUrl}
              alt={event.name}
              fill
              className="object-cover"
            />
          </button>

          {/* Event Content */}
          <div className="flex flex-col justify-between h-[172px] lg:h-[362px] flex-1">
            {/* Top Section - Name and Date */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[4px] lg:gap-0">
              <h3 className="font-bold text-[20px] lg:text-[50px] leading-[100%] text-black text-left">
                {event.name}
              </h3>
              <p className="font-normal text-[18px] lg:text-[30px] leading-[120%] lg:leading-[100%] text-black lg:text-center lg:whitespace-nowrap">
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
    </>
  );
}
