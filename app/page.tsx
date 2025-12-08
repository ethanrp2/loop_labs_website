'use client';

import { useState } from 'react';
import Navigation from './components/layout/Navigation';
import SecondaryNav from './components/layout/SecondaryNav';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MissionSection from './components/sections/MissionSection';
import WhyItMattersSection from './components/sections/WhyItMattersSection';
import CTASection from './components/sections/CTASection';
import ReviewsSection from './components/sections/ReviewsSection';
import EnrollmentModal from './components/ui/EnrollmentModal';

export default function Home() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const openEnrollModal = () => setIsEnrollModalOpen(true);
  const closeEnrollModal = () => setIsEnrollModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection onEnrollClick={openEnrollModal} />

      {/* Secondary Navigation */}
      <SecondaryNav />

      {/* About Section */}
      <AboutSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Why It Matters Section */}
      <WhyItMattersSection />

      {/* CTA Section */}
      <CTASection onEnrollClick={openEnrollModal} />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isEnrollModalOpen} onClose={closeEnrollModal} />
    </div>
  );
}
