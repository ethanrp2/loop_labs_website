import Button from '@/app/components/ui/Button';
import { CourseHeroSectionProps } from '@/app/types/courses';

/**
 * Hero section for coursework page
 * Background is handled by CourseworkNav's SVG
 * This section contains the title and CTA button
 */
export default function CourseHeroSection({
  title,
  ctaText,
  ctaHref,
  onCtaClick,
}: CourseHeroSectionProps) {
  return (
    <section className="relative z-10 min-h-[450px] lg:min-h-[650px] flex items-end justify-center pb-[40px] lg:pb-[60px]">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-[40px] lg:gap-[68px] px-[20px]">
        <h1 className="text-[20px] lg:text-[75px] text-white text-center max-w-[353px] lg:max-w-[1157px] leading-[120%] lg:leading-[100%]">
          {/* First line */}
          <span className="font-bold block">
            {title.bold}
          </span>
          {/* Second line */}
          <span className="font-normal block">
            {title.regular}
          </span>
        </h1>

        {/* Button - Different text mobile vs desktop */}
        <Button
          variant="primary"
          href={onCtaClick ? undefined : ctaHref}
          onClick={onCtaClick}
          className="!h-[54px] lg:!h-[65px]"
        >
          <span className="lg:hidden">DISCOVER OUR COURSES</span>
          <span className="hidden lg:inline">{ctaText}</span>
        </Button>
      </div>
    </section>
  );
}
