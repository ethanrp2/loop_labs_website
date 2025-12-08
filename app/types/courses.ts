/**
 * Course Data Structure
 */
export interface Course {
  id: string;
  title: string; // "Loop Lab Sprouts"
  subtitle: string; // "Recommended for Grades K-2"
  description: string; // Full course description
  imageUrl: string; // Course image path
  curriculum: string; // Detailed curriculum (shown in Learn More expansion)
  enrollLink: string; // Link for ENROLL NOW! button
}

export interface CourseHeroSectionProps {
  title: {
    bold: string;
    regular: string;
  };
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  backgroundImage: string;
}

export interface CourseSectionHeaderProps {
  title: string;
}

export interface CourseCardProps {
  course: Course;
  imagePosition: 'left' | 'right';
  className?: string;
  onEnrollClick?: () => void;
}

export interface CourseListProps {
  courses: Course[];
  onEnrollClick?: () => void;
}
