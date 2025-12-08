'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '../shared/Logo';
import HamburgerIcon from '../shared/HamburgerIcon';
import MobileMenu from './MobileMenu';

/**
 * PlainNav - Simplified navigation with SVG background
 * Scrolls with the page (not fixed)
 *
 * Mobile: Hamburger (left) + Logo (right)
 * Desktop: Logo (left) + Nav Links (right)
 */
export default function PlainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Coursework', href: '/coursework' },
  ];

  return (
    <>
      <nav
        className="relative w-full py-[39px] lg:py-8 bg-cover bg-center bg-no-repeat bg-[url('/images/backgrounds/plain_nav_mobile.svg')] lg:bg-[url('/images/backgrounds/plain-nav.svg')]"
        aria-label="Plain navigation"
      >
        <div className="container mx-auto">
          <div className="max-w-[1555px] mx-auto px-[23px] lg:px-0">
            {/* Mobile: Hamburger + Logo */}
            <div className="lg:hidden flex items-center w-full">
              <HamburgerIcon
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
              <div className="flex-1 flex justify-center">
                <Logo size="medium" />
              </div>
            </div>

            {/* Desktop: Logo + Nav Links */}
            <div className="hidden lg:flex items-center justify-between w-full">
              <Logo size="large" />
              <div className="flex items-center gap-12 xl:gap-16 2xl:gap-24 text-white text-[21px]">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1 ${
                        isActive ? 'font-bold underline' : 'font-normal'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
