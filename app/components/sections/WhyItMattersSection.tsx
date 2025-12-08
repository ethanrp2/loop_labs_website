import Image from 'next/image';
import { whyMatters } from '@/app/constants/images';

/**
 * Why It Matters section component
 * Desktop: 2-column (image left, text right)
 * Mobile: Stacked (image top, text bottom)
 */
export default function WhyItMattersSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Mobile: Stacked Layout */}
        <div className="lg:hidden flex flex-col items-center gap-6 max-w-[366px] mx-auto">
          {/* Image */}
          <div className="relative w-[353px] h-[194px] rounded-[20px] overflow-hidden shadow-lg">
            <Image
              src={whyMatters.classroom}
              alt="LOOPLABS Classroom"
              width={353}
              height={194}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-h1 text-[var(--color-dark-blue)] font-bold text-center">
              Why This Matters
            </h2>
            <div className="text-center text-[18px]">
              <p className="mb-2">
                <span className="font-bold text-[var(--color-dark-blue)]">AI Revolution Impact:</span>{' '}
                <span>How ChatGPT Changed Everything</span>
              </p>
            </div>
            <div className="w-full h-[2px] bg-gray-200" />
            <p className="text-body text-black text-center">
              AI is redefining every career as we navigate the future of work. The ChatGPT influence has sparked a tidal wave of change, highlighting the importance of bridging the AI skills gap. By staying ahead of the curve, we are committed to our mission in action.
            </p>
          </div>
        </div>

        {/* Desktop: 2-Column Layout */}
        <div className="hidden lg:block max-w-[1400px] mx-auto">
          <h2 className="text-h1 text-[var(--color-dark-blue)] font-bold mb-6">
            Why This Matters
          </h2>
          <div className="w-full h-[4px] bg-gray-200 mb-8" />

          <div className="grid grid-cols-[682px_1fr] gap-16 items-start">
            {/* Image */}
            <div className="relative w-[682px] h-[427px] rounded-[40px] overflow-hidden shadow-lg">
              <Image
                src={whyMatters.classroom}
                alt="LOOPLABS Classroom"
                width={682}
                height={427}
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div className="text-[50px] leading-normal">
                <p>
                  <span className="font-bold text-[var(--color-dark-blue)]">AI Revolution Impact:</span>{' '}
                  <span className="text-black">How ChatGPT Changed Everything</span>
                </p>
              </div>
              <p className="text-body text-black">
                AI is redefining every career as we navigate the future of work. The ChatGPT influence has sparked a tidal wave of change, highlighting the importance of bridging the AI skills gap. By staying ahead of the curve, we are committed to our mission in action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
