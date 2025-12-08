'use client';

import { useState } from 'react';

import Footer from '@/app/components/layout/Footer';
import PlainNav from '@/app/components/layout/PlainNav';
import EventHero from '@/app/components/events/EventHero';
import EventTabs from '@/app/components/events/EventTabs';
import EventList from '@/app/components/events/EventList';
import { getFeaturedEvent, MOCK_EVENTS } from '@/app/constants/events';

/**
 * Events Page
 *
 * Displays featured event in hero section and list of upcoming/past events
 * with tab navigation
 */
export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const featuredEvent = getFeaturedEvent();

  return (
    <main className="relative min-h-screen bg-white">
      {/* Navigation */}
      <PlainNav />

      {/* Hero Section with Featured Event */}
      {featuredEvent && <EventHero event={featuredEvent} />}

      {/* Event List Section with Light Blue Background */}
      <section className="relative bg-[var(--color-light-blue)] py-[26px] lg:py-[72px] min-h-[567px] rounded-b-[20px] lg:rounded-b-[30px] shadow-lg">
        <div className="mb-[24px] lg:mb-[72px]">
          <EventTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <EventList events={MOCK_EVENTS} category={activeTab} />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
