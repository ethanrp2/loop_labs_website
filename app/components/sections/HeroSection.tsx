import Button from '../ui/Button';

/**
 * Hero section component
 * Background is handled by Navigation's curved image
 * This section contains the title and CTA buttons
 * Matches CourseHeroSection sizing for layout
 */
export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-[450px] lg:min-h-[650px] flex items-end justify-center pb-[40px] lg:pb-[60px]">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-[40px] lg:gap-[68px] px-[20px]">
        <div className="flex flex-col items-center text-center max-w-[353px] lg:max-w-[1004px] gap-4 lg:gap-7">
          {/* Heading */}
          <h1 className="text-[20px] lg:text-[75px] text-white font-bold leading-[120%] lg:leading-[100%]">
            AI Education for Innovators
          </h1>

          {/* Subtitle */}
          <p className="text-body text-white font-normal">
            Empowering the next generation with AI skills, creative thinking, and ethical foundations.
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
