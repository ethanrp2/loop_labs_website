'use client';

/**
 * Hamburger menu icon component
 * Three horizontal lines that animate to X when open
 * Used in mobile navigation (< 1024px)
 */
interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function HamburgerIcon({ isOpen, onClick, className = '' }: HamburgerIconProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center items-center w-[31px] h-[20px] gap-[5px] ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span
        className={`block w-full h-[2px] bg-white transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-[7px]' : ''
        }`}
      />
      <span
        className={`block w-full h-[2px] bg-white transition-all duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`block w-full h-[2px] bg-white transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-[7px]' : ''
        }`}
      />
    </button>
  );
}
