import Button from '../ui/Button';
import Image from 'next/image';
import { hero } from '@/app/constants/images';

/**
 * Hero section component
 * Desktop: H1 (80px), Body (30px), buttons side-by-side
 * Mobile: H1 (30px), Body (16px), buttons stacked
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[var(--color-dark-blue)] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero.background}
          alt="LOOPLABS Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f6f]/70 to-[var(--color-dark-blue)]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 lg:py-40">
        <div className="flex flex-col items-center text-center max-w-[1004px] mx-auto gap-8 lg:gap-12">
          {/* Heading */}
          <h1 className="text-h1 text-white font-bold">
            AI Education for Innovators
          </h1>

          {/* Subtitle */}
          <p className="text-body text-white font-normal max-w-[1004px] lg:max-w-none">
            Equipping young innovators with AI coursework, revolutionary ideas, and a backbone of integrity through comprehensive artificial intelligence education at LoopLabs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto mt-4">
            <Button variant="primary" fullWidth={false}>
              Discover our Course
            </Button>
            <Button variant="secondary" fullWidth={false}>
              Enroll Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Line (Mobile) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[351px] h-[2px] bg-white/20 lg:hidden" />
    </section>
  );
}
