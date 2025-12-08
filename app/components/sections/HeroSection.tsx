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
      className="
        relative
        min-h-screen
        flex flex-col
        justify-end          /* Push content to the bottom */
        bg-[var(--color-dark-blue)]
        overflow-hidden
        pb-20 lg:pb-28       /* 👈 Controls spacing from the bottom */
      "
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
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f6f]/20 to-[var(--color-dark-blue)]/30" />
      </div>

      {/* Content and Buttons grouped together at bottom */}
      <div className="relative z-10 flex flex-col items-center container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-[1004px] mx-auto gap-8 lg:gap-7 mb-8 lg:mb-10">
          {/* Heading */}
          <h1 className="text-h1 text-white font-bold">
            AI Education for Innovators
          </h1>

          {/* Subtitle */}
          <p className="text-body text-white font-normal max-w-[1004px] lg:max-w-none">
            Equipping young innovators with AI coursework, revolutionary ideas, and a backbone of integrity through comprehensive artificial intelligence education at LoopLabs.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 w-full lg:w-auto">
          <Button variant="primary" fullWidth={false}>
            Discover our Course
          </Button>
          <Button variant="secondary" fullWidth={false}>
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  );
}
