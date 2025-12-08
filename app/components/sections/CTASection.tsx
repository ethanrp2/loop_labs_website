import Button from '../ui/Button';

/**
 * CTA section component
 * Desktop: "Start Your AI Education Today"
 * Mobile: "Start your AI Education!"
 */
export default function CTASection() {
  return (
    <section id="enroll" className="bg-[var(--color-light-blue)] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 lg:gap-12 max-w-[1024px] mx-auto">
          {/* Heading */}
          <h2 className="text-h2 lg:text-h1 text-[var(--color-dark-blue)] font-bold text-center">
            <span className="lg:hidden">Start your AI Education!</span>
            <span className="hidden lg:inline">Start Your AI Education Today</span>
          </h2>

          {/* Decorative Line */}
          <div className="w-full max-w-[1482px] h-[2px] lg:h-[4px] bg-[var(--color-dark-blue)]/20" />

          {/* Subtitle */}
          <p className="text-subtitle lg:text-[32px] text-black text-center">
            Join &quot;XX+&quot; users on their AI education journey
          </p>

          {/* CTA Button */}
          <Button variant="outline">
            <span className="lg:hidden">Enroll Now</span>
            <span className="hidden lg:inline">Discover our Course</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
