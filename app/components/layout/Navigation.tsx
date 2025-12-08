'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../shared/Logo';
import HamburgerIcon from '../shared/HamburgerIcon';
import MobileMenu from './MobileMenu';

/**
 * Main navigation with SVG background
 */
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Coursework', href: '/coursework' },
  ];

  return (
    <>
      {/* Background SVG - Full width/height container */}
      <div className="absolute top-0 left-0 right-0 h-[450px] lg:h-[650px] overflow-hidden z-0">
        <Image
          src="/images/backgrounds/cover-background.svg"
          alt=""
          fill
          className="object-cover object-bottom"
          priority
          unoptimized
        />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-50 py-4 lg:py-6" aria-label="Main navigation">
        <div className="container mx-auto">
          <div className="flex items-center justify-between max-w-[1555px] mx-auto">
            {/* Mobile: Hamburger + Logo */}
            <div className="lg:hidden flex flex-col items-center w-full px-4">
              <div className="flex items-center w-full">
                <HamburgerIcon
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
                <div className="flex-1 flex justify-center">
                  <Logo size="medium" />
                </div>
              </div>
              {/* Decorative line under logo */}
              <div className="w-[351px] h-[2px] bg-white/20 mt-4" />
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
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} links={navLinks} />
    </>
  );
}
