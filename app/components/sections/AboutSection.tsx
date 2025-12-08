import Image from 'next/image';
import { about } from '@/app/constants/images';

/**
 * About section component
 * Desktop: 2-column (image left, text right), no contact links
 * Mobile: Stacked (image top, text bottom), with contact links
 */
export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Mobile: Stacked Layout */}
        <div className="lg:hidden flex flex-col items-center gap-6">
          {/* Image */}
          <div className="relative w-[150px] h-[150px] rounded-[20px] overflow-hidden shadow-lg">
            <Image
              src={about.teamPhoto}
              alt="LOOPLABS Team"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-4 max-w-[368px]">
            <div className="flex flex-col items-center gap-2 w-full">
              <h2 className="text-[24px] text-[var(--color-dark-blue)] font-bold text-center">
                Hi! We Are LOOPLABS
              </h2>
              <div className="w-full h-[2px] bg-gray-200" />
              <p className="text-[14px] text-black text-center">
                We are AI Experts with 30+ years experience in software and AI. We have an extensive background in coaching and training students from K-12 through undergraduate
              </p>
            </div>

            {/* Contact Links (Mobile Only) */}
            <div className="flex flex-col gap-2">
              <a href="mailto:info@looplabsai.io" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/icons/mail.png"
                  alt="Email"
                  width={29}
                  height={29}
                  className="object-contain"
                />
                <span className="font-bold text-[16px] text-[var(--color-dark-blue)]">
                  info@looplabsai.io
                </span>
              </a>
              <a href="https://instagram.com/looplabsai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/icons/insta.png"
                  alt="Instagram"
                  width={29}
                  height={29}
                  className="object-contain"
                />
                <span className="font-bold text-[16px] text-[var(--color-dark-blue)]">
                  @looplabsai
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop: 2-Column Layout */}
        <div className="hidden lg:flex lg:justify-center lg:items-start lg:gap-14">
          {/* Image */}
          <div className="relative w-[350px] h-[350px] rounded-[40px] overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src={about.teamPhoto}
              alt="LOOPLABS Team"
              width={350}
              height={350}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 max-w-[600px]">
            <h2 className="text-[48px] text-[var(--color-dark-blue)] font-bold">
              Hi! We Are LOOPLABS
            </h2>
            <div className="w-full h-[4px] bg-gray-200" />
            <p className="text-[20px] text-black">
              We are AI Experts with 30+ years experience in software and AI. We have an extensive background in coaching and training students from K-12 through undergraduate.
            </p>

            {/* Contact Links */}
            <div className="flex gap-6">
              <a href="mailto:info@looplabsai.io" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/icons/mail.png"
                  alt="Email"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="font-bold text-[18px] text-[var(--color-dark-blue)]">
                  info@looplabsai.io
                </span>
              </a>
              <a href="https://instagram.com/looplabsai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/icons/insta.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="font-bold text-[18px] text-[var(--color-dark-blue)]">
                  @looplabsai
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
