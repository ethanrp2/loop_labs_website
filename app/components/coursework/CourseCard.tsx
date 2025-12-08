'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import { CourseCardProps } from '@/app/types/courses';

/**
 * Course card with expandable Learn More section
 * Desktop: Horizontal layout with alternating image position
 * Mobile: Vertical layout with image on top
 */
export default function CourseCard({ course, imagePosition, className = '', onEnrollClick }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`
        flex flex-col items-center
        w-[320px] mx-auto
        gap-[14px]
        lg:flex-row lg:bg-white lg:rounded-[30px]
        lg:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
        lg:p-[40px] lg:max-w-[1100px] lg:w-full
        lg:gap-[50px] lg:items-start
        ${imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}
        ${className}
      `}
    >
      {/* Image */}
      <div className="relative w-[280px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-[20px] lg:rounded-[30px] overflow-hidden shrink-0">
        <Image
          src={course.imageUrl}
          fill
          className="object-cover"
          alt={course.title}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[8px] lg:gap-[14px] w-full lg:flex-1">
        <h3 className="text-[18px] lg:text-[36px] font-bold text-[var(--color-dark-blue)] leading-[115%] lg:leading-[100%] text-center lg:text-left">
          {course.title}
        </h3>
        <p className="text-[14px] lg:text-[20px] italic text-black leading-[128%] lg:leading-[100%] text-center lg:text-left">
          {course.subtitle}
        </p>
        <p className="text-[14px] lg:text-[18px] text-black leading-[150%] lg:leading-[140%] text-center lg:text-left">
          {course.description}
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col gap-0 lg:gap-[27px] w-full mt-[5px] lg:mt-0">
          {/* Learn More Expandable Button */}
          <div className="flex flex-col w-full">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`
                w-full h-[39px] lg:h-[59px]
                bg-[var(--color-light-blue)] text-black
                text-[16px] lg:text-[22px] font-bold uppercase
                tracking-[0.8px] lg:tracking-[1.1px]
                flex items-center justify-center gap-[14px]
                transition-all duration-200
                hover:bg-[#5fb5d1]
                focus:outline-none focus:ring-4 focus:ring-[var(--color-light-blue)]/50
                ${isExpanded ? 'rounded-t-[20px] lg:rounded-t-[40px] rounded-b-none' : 'rounded-[20px] lg:rounded-[40px]'}
              `}
              aria-expanded={isExpanded}
              aria-controls={`curriculum-${course.id}`}
            >
              LEARN MORE
              <svg
                className={`w-[28px] h-[15px] transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                viewBox="0 0 28 15"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 7.5H27M27 7.5L20.5 1M27 7.5L20.5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Expanded Curriculum Content */}
            {isExpanded && (
              <div
                id={`curriculum-${course.id}`}
                className="bg-white border-2 border-[var(--color-light-blue)] border-t-0 rounded-b-[20px] lg:rounded-b-[40px] px-[20px] lg:px-[40px] py-[20px] lg:py-[30px] w-full"
              >
                <p className="text-[16px] lg:text-[24px] text-black whitespace-pre-line leading-[150%]">
                  {course.curriculum}
                </p>
              </div>
            )}
          </div>

          {/* Enroll Now Button */}
          <Button
            variant="outline"
            href={onEnrollClick ? undefined : course.enrollLink}
            onClick={onEnrollClick}
            fullWidth
          >
            ENROLL NOW!
          </Button>
        </div>
      </div>
    </article>
  );
}
