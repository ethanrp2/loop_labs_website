import Button from '../ui/Button';

interface CTASectionProps {
  onEnrollClick?: () => void;
}

/**
 * CTA section component
 * Desktop: "Start Your AI Education Today"
 * Mobile: "Start your AI Education!"
 */
export default function CTASection({ onEnrollClick }: CTASectionProps) {
  return (
    <section id="enroll" className="bg-[var(--color-light-blue)] pt-16 lg:pt-24 pb-8 lg:pb-12 -mt-[20px] lg:-mt-[30px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 lg:gap-12 max-w-[1024px] mx-auto">
          {/* Heading */}
          <h2 className="text-h2 lg:text-h1 text-[var(--color-dark-blue)] font-bold text-center">
            <span className="lg:hidden">Start your AI Education!</span>
            <span className="hidden lg:inline">Start Your AI Education Today</span>
          </h2>

          {/* Decorative Line */}
          <div className="w-full max-w-[1482px] h-[2px] lg:h-[4px] bg-black/20" />

          {/* Subtitle */}
          <p className="text-subtitle lg:text-[32px] text-black text-center">
            Join 500+ users on their AI education journey
          </p>

          {/* CTA Buttons - Different actions for mobile vs desktop */}
          {/* Mobile: Enroll Now opens modal */}
          <Button variant="outline" onClick={onEnrollClick} className="lg:hidden">
            Enroll Now
          </Button>
          {/* Desktop: Discover our Course navigates to coursework page */}
          <Button variant="outline" href="/coursework" className="hidden lg:inline-flex">
            Discover our Course
          </Button>
        </div>
      </div>
    </section>
  );
}
