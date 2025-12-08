import Navigation from './components/layout/Navigation';
import SecondaryNav from './components/layout/SecondaryNav';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MissionSection from './components/sections/MissionSection';
import WhyItMattersSection from './components/sections/WhyItMattersSection';
import CTASection from './components/sections/CTASection';
import ReviewsSection from './components/sections/ReviewsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Secondary Navigation */}
      <SecondaryNav />

      {/* About Section */}
      <AboutSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Why It Matters Section */}
      <WhyItMattersSection />

      {/* CTA Section */}
      <CTASection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
