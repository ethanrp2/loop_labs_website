'use client';

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
        className="fixed inset-0 z-50 flex items-end lg:items-center justify-center"
      >
        <div
          className="
            bg-white w-full max-h-[90vh] overflow-y-auto relative
            rounded-t-[20px] lg:rounded-[30px]
            lg:max-w-[1133px] lg:mx-4
            px-6 py-8 lg:px-20 lg:py-12
          "
        >
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close enrollment form"
            className="
              absolute top-4 right-4 lg:top-8 lg:right-8
              text-[25px] lg:text-[50px] font-black
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
              text-[30px] lg:text-[64px] font-bold
              text-[var(--color-dark-blue)]
              mb-6 lg:mb-10
              pr-10
            "
          >
            Sign Up for a Course
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-6">
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
                  w-full h-[51px] lg:h-[70px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[15px] lg:rounded-[30px]
                  lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                  px-4 lg:px-6
                  text-[16px] lg:text-[30px] text-black
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
                  w-full h-[51px] lg:h-[70px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[15px] lg:rounded-[30px]
                  lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                  px-4 lg:px-6
                  text-[16px] lg:text-[30px] text-black
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
                  w-full h-[51px] lg:h-[70px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[15px] lg:rounded-[30px]
                  lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                  px-4 lg:px-6
                  text-[16px] lg:text-[30px] text-black
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
                  w-full h-[51px] lg:h-[70px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[15px] lg:rounded-[30px]
                  lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                  px-4 lg:px-6
                  text-[16px] lg:text-[30px] text-black
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
              <input
                type="text"
                id="studentLevel"
                name="studentLevel"
                placeholder="Student Level *"
                required
                aria-required="true"
                className="
                  w-full h-[51px] lg:h-[70px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[15px] lg:rounded-[30px]
                  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                  px-4 lg:px-6
                  text-[16px] lg:text-[30px] text-black
                  placeholder:text-black
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-light-blue)]
                "
              />
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
                rows={4}
                className="
                  w-full min-h-[132px] lg:min-h-[180px]
                  border border-[#76c8e5] lg:border-2
                  rounded-[15px] lg:rounded-[30px]
                  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                  px-4 lg:px-6 py-4
                  text-[16px] lg:text-[30px] text-black
                  placeholder:text-black
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-light-blue)]
                  resize-none
                "
              />
            </div>

            {/* Required Fields Note - Desktop only */}
            <p className="hidden lg:block text-[24px] text-black tracking-[1.2px] mt-2">
              *Marks a Required Field
            </p>

            {/* Submit Button */}
            <div className="flex justify-center mt-4 lg:mt-6">
              <button
                type="submit"
                className="
                  w-full lg:w-[438px]
                  h-[55px] lg:h-[65px]
                  bg-[var(--color-light-blue)]
                  rounded-full
                  text-[16px] lg:text-[22px] font-bold text-black uppercase
                  tracking-[0.8px] lg:tracking-[1.1px]
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
