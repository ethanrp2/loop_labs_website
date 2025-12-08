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
          <div className="relative w-[195px] h-[195px] rounded-[20px] overflow-hidden shadow-lg">
            <Image
              src={about.teamPhoto}
              alt="LOOPLABS Team"
              width={195}
              height={195}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-4 max-w-[368px]">
            <div className="flex flex-col items-center gap-2 w-full">
              <h2 className="text-h1 text-[var(--color-dark-blue)] font-bold text-center">
                Hi! We Are LOOPLABS
              </h2>
              <div className="w-full h-[2px] bg-gray-200" />
              <p className="text-body text-black text-center">
                We are AI Experts with 30+ years experience in software and AI. We have an extensive background in coaching and training students from K-12 through undergraduate
              </p>
            </div>

            {/* Contact Links (Mobile Only) */}
            <div className="flex flex-col gap-2 w-[193px]">
              <div className="flex items-center gap-4">
                <div className="w-[29px] h-[29px] bg-gray-300 rounded flex items-center justify-center text-xs">
                  📧
                </div>
                <a
                  href="mailto:info@looplabsai.io"
                  className="font-bold text-[16px] text-[var(--color-dark-blue)] hover:underline"
                >
                  info@looplabsai.io
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[29px] h-[29px] bg-gray-300 rounded flex items-center justify-center text-xs">
                  📷
                </div>
                <p className="font-bold text-[16px] text-[var(--color-dark-blue)]">
                  @Instagram
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: 2-Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-[504px_1fr] lg:gap-16 lg:items-start lg:max-w-[1400px] lg:mx-auto">
          {/* Image */}
          <div className="relative w-[504px] h-[504px] rounded-[40px] overflow-hidden shadow-lg">
            <Image
              src={about.teamPhoto}
              alt="LOOPLABS Team"
              width={504}
              height={504}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-h1 text-[var(--color-dark-blue)] font-bold">
              Hi! We Are LOOPLABS
            </h2>
            <div className="w-full max-w-[762px] h-[4px] bg-gray-200" />
            <p className="text-body text-black max-w-[735px]">
              We are AI Experts with 30+ years experience in software and AI. We have an extensive background in coaching and training students from K-12 through undergraduate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
