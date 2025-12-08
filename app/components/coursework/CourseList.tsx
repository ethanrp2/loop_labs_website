import CourseCard from './CourseCard';
import { CourseListProps } from '@/app/types/courses';

/**
 * Course list container
 * Maps courses and alternates image positioning for visual rhythm
 */
export default function CourseList({ courses, onEnrollClick }: CourseListProps) {
  return (
    <section className="relative z-10 bg-white pt-[20px] lg:pt-[40px] pb-[35px] lg:pb-[120px] px-[20px] lg:px-[120px] rounded-b-[20px] lg:rounded-b-[30px] shadow-lg">
      <div className="max-w-[1555px] mx-auto flex flex-col gap-[55px] lg:gap-[93px]">
        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
            onEnrollClick={onEnrollClick}
          />
        ))}
      </div>
    </section>
  );
}
