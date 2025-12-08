'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

/**
 * Mobile menu drawer component
 * Slides in from the top when hamburger is clicked
 */
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-[var(--color-dark-blue)] z-50 lg:hidden transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center py-16 px-8 gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-white text-[25px] transition-opacity hover:opacity-80 ${
                  isActive ? 'font-bold underline' : 'font-normal'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
