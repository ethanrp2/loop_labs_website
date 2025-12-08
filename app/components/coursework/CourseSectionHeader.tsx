import { CourseSectionHeaderProps } from '@/app/types/courses';

/**
 * Section header for coursework page
 * Centered title with responsive typography
 */
export default function CourseSectionHeader({ title }: CourseSectionHeaderProps) {
  return (
    <div className="relative z-10 bg-white pt-[40px] lg:pt-[80px] pb-[20px] lg:pb-[40px] px-[20px] lg:px-[120px]">
      <h2 className="text-[26px] lg:text-[65px] font-bold text-[var(--color-dark-blue)] text-center leading-[100%]">
        {title}
      </h2>
      {/* Decorative line divider on mobile */}
      <div className="mt-[7px] h-[2px] bg-[var(--color-dark-blue)] w-full mx-auto lg:hidden" />
    </div>
  );
}
