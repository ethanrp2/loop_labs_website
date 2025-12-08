// x'use client';

import { useEffect, useRef } from 'react';
import { EnrollmentModalProps } from '@/app/types/components';

/**
 * Enrollment form modal component
 * Desktop: Centered modal with max-width 1133px
 * Mobile: Bottom sheet style with rounded top corners
 */
export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle body scroll lock and focus management
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      // Focus first input after a brief delay for animation
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTabKey);
    return () => modal.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enrollment-modal-title"
        className="fixed inset-0 z-50 flex items-end lg:items-center justify-center p-0 lg:p-4"
      >
        <div
          className="
            bg-white w-full relative
            rounded-t-[20px] lg:rounded-[20px]
            lg:max-w-[900px]
            px-6 py-5 lg:px-12 lg:py-6
          "
        >
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close enrollment form"
            className="
              absolute top-3 right-4 lg:top-5 lg:right-6
              text-[22px] lg:text-[36px] font-black
              text-black hover:opacity-70
              focus:outline-none focus:ring-2 focus:ring-[var(--color-dark-blue)] rounded
              transition-opacity
            "
          >
            X
          </button>

          {/* Title */}
          <h2
            id="enrollment-modal-title"
            className="
              text-[22px] lg:text-[36px] font-bold
              text-[var(--color-dark-blue)]
              mb-3 lg:mb-4
              pr-10
            "
          >
            Sign Up for a Course
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 lg:gap-3">
            {/* Parent/Guardian Name */}
            <div className="relative">
              <label htmlFor="parentName" className="sr-only">
                Parent/Guardian Name (required)
              </label>
              <input
                ref={firstInputRef}
                type="text"
                id="parentName"
                name="parentName"
                placeholder="Parent/Guardian Name *"
                required
                aria-required="true"
                className="
                  w-full h-[42px] lg:h-[48px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[12px] lg:rounded-[18px]
                  px-4 lg:px-5
                  text-[14px] lg:text-[16px] text-black
                  placeholder:text-black
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-light-blue)]
                "
              />
            </div>

            {/* Child Name */}
            <div className="relative">
              <label htmlFor="childName" className="sr-only">
                Child Name (required)
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                placeholder="Child Name *"
                required
                aria-required="true"
                className="
                  w-full h-[42px] lg:h-[48px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[12px] lg:rounded-[18px]
                  px-4 lg:px-5
                  text-[14px] lg:text-[16px] text-black
                  placeholder:text-black
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-light-blue)]
                "
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email (required)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                required
                aria-required="true"
                className="
                  w-full h-[42px] lg:h-[48px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[12px] lg:rounded-[18px]
                  px-4 lg:px-5
                  text-[14px] lg:text-[16px] text-black
                  placeholder:text-black
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-light-blue)]
                "
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label htmlFor="phone" className="sr-only">
                Phone Number (required)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number *"
                required
                aria-required="true"
                className="
                  w-full h-[42px] lg:h-[48px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[12px] lg:rounded-[18px]
                  px-4 lg:px-5
                  text-[14px] lg:text-[16px] text-black
                  placeholder:text-black
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-light-blue)]
                "
              />
            </div>

            {/* Student Level */}
            <div className="relative">
              <label htmlFor="studentLevel" className="sr-only">
                Student Level (required)
              </label>
              <select
                id="studentLevel"
                name="studentLevel"
                required
                aria-required="true"
                defaultValue=""
                className="
                  w-full h-[42px] lg:h-[48px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[12px] lg:rounded-[18px]
                  px-4 lg:px-5
                  text-[14px] lg:text-[16px] text-black
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-light-blue)]
                  bg-white appearance-none cursor-pointer
                "
              >
                <option value="" disabled>Student Level *</option>
                <option value="sprouts">Loop Lab Sprouts (Grades K-2)</option>
                <option value="junior">LoopLabs Junior (Grades 3-5)</option>
                <option value="explorers">LoopLabs Explorers (Grades 6-8)</option>
                <option value="innovators">LoopLabs Innovators (Grades 9-12)</option>
                <option value="launch">LoopLabs Launch (College+)</option>
              </select>
              {/* Dropdown arrow */}
              <div className="absolute right-4 lg:right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label htmlFor="message" className="sr-only">
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={3}
                className="
                  w-full min-h-[80px] lg:min-h-[100px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[12px] lg:rounded-[18px]
                  px-4 lg:px-5 py-2.5
                  text-[14px] lg:text-[16px] text-black
                  placeholder:text-black
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-light-blue)]
                  resize-none
                "
              />
            </div>

            {/* Required Fields Note - Desktop only */}
            <p className="hidden lg:block text-[14px] text-black tracking-[0.6px]">
              *Marks a Required Field
            </p>

            {/* Submit Button */}
            <div className="flex justify-center mt-2 lg:mt-3">
              <button
                type="submit"
                className="
                  w-full lg:w-[280px]
                  h-[44px] lg:h-[48px]
                  bg-[var(--color-light-blue)]
                  rounded-full
                  text-[14px] lg:text-[16px] font-bold text-black uppercase
                  tracking-[0.8px] lg:tracking-[1px]
                  hover:bg-[#5fb5d1]
                  focus:outline-none focus:ring-4 focus:ring-[var(--color-light-blue)]/50
                  transition-colors
                "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
