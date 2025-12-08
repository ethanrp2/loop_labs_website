'use client';

import { EventTabsProps } from '@/app/types/events';

/**
 * EventTabs Component (Client Component)
 *
 * Toggle between Upcoming and Past events
 *
 * Desktop: 270x70px buttons, 22px font, 20px gap
 * Mobile: 167x48px buttons, 12px font, 10px gap
 *
 * Side-by-side layout on both desktop and mobile
 */
export default function EventTabs({ activeTab, onTabChange }: EventTabsProps) {
  const buttonBaseClasses = `
    flex items-center justify-center
    rounded-[50px]
    uppercase
    whitespace-nowrap
    leading-[100%]
    transition-all duration-200
    cursor-pointer
    focus:outline-none focus:ring-4 focus:ring-offset-2
    w-[167px] h-[48px] text-[12px] tracking-[0.6px] font-bold
    lg:w-[400px] lg:h-[70px] lg:text-[22px] lg:tracking-normal lg:font-normal
  `;

  const activeClasses = `
    bg-[var(--color-dark-blue)] text-white
    hover:bg-[#0f1340]
    focus:ring-[var(--color-dark-blue)]/50
  `;

  const inactiveClasses = `
    bg-white text-black
    hover:bg-gray-50
    focus:ring-gray-300
  `;

  return (
    <div
      className="flex gap-[10px] lg:gap-[40px] items-center justify-center"
      role="tablist"
      aria-label="Event categories"
    >
      <button
        role="tab"
        aria-selected={activeTab === 'upcoming'}
        aria-controls="upcoming-events-panel"
        onClick={() => onTabChange('upcoming')}
        className={`${buttonBaseClasses} ${
          activeTab === 'upcoming' ? activeClasses : inactiveClasses
        }`}
      >
        Up-coming events
      </button>

      <button
        role="tab"
        aria-selected={activeTab === 'past'}
        aria-controls="past-events-panel"
        onClick={() => onTabChange('past')}
        className={`${buttonBaseClasses} ${
          activeTab === 'past' ? activeClasses : inactiveClasses
        }`}
      >
        Past Events
      </button>
    </div>
  );
}
