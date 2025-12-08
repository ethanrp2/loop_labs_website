import Image from 'next/image';
import { LocationLinkProps } from '@/app/types/events';

/**
 * LocationLink Component
 *
 * Reusable location link with responsive map icon
 * - Desktop: 68x68px icon, 30px text, 23px gap
 * - Mobile: 35x35px icon, 16px text, 10px gap
 */
export default function LocationLink({
  location,
  url,
  iconSize = 'large',
  className = '',
}: LocationLinkProps) {
  // Icon sizes based on iconSize prop
  const iconSizeClasses = iconSize === 'large'
    ? 'size-[35px] lg:size-[40px]'
    : 'size-[35px]';

  // Text size and gap - responsive
  const textClasses = 'text-[14px] lg:text-[25px] font-normal leading-[100%] underline decoration-solid [text-underline-position:from-font]';
  const gapClasses = 'gap-[3px] lg:gap-[15px]';

  const content = (
    <>
      <div className={`relative shrink-0 ${iconSizeClasses}`}>
        <Image
          src="/images/icons/location_pin.png"
          alt="Location"
          fill
          className="object-contain"
        />
      </div>
      <span className={textClasses}>{location}</span>
    </>
  );

  const baseClasses = `flex items-center ${gapClasses} ${className}`;

  // If URL is provided, render as link
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} text-black hover:text-[var(--color-dark-blue)] transition-colors cursor-pointer`}
        aria-label={`View ${location} on map`}
      >
        {content}
      </a>
    );
  }

  // Otherwise render as div
  return (
    <div className={`${baseClasses} text-black`}>
      {content}
    </div>
  );
}
