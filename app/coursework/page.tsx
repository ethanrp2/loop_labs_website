'use client';

import { useState } from 'react';
import CourseworkNav from '@/app/components/coursework/CourseworkNav';
import CourseHeroSection from '@/app/components/coursework/CourseHeroSection';
import CourseSectionHeader from '@/app/components/coursework/CourseSectionHeader';
import CourseList from '@/app/components/coursework/CourseList';
import Footer from '@/app/components/layout/Footer';
import EnrollmentModal from '@/app/components/ui/EnrollmentModal';
import { getAllCourses } from '@/app/constants/courses';

export default function CourseworkPage() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const courses = getAllCourses();

  const openEnrollModal = () => setIsEnrollModalOpen(true);
  const closeEnrollModal = () => setIsEnrollModalOpen(false);

  return (
    <main className="relative min-h-screen">
      <CourseworkNav />
      <CourseHeroSection
        title={{
          bold: 'AI Learning Programs: \n',
          regular: 'Blueprint for AI Mastery',
        }}
        ctaText="ENROLL NOW"
        onCtaClick={openEnrollModal}
        backgroundImage="/images/coursework/hero-background.jpg"
      />
      <CourseSectionHeader title="Explore our Courses" />
      <CourseList courses={courses} onEnrollClick={openEnrollModal} />
      <Footer />

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isEnrollModalOpen} onClose={closeEnrollModal} />
    </main>
  );
}
