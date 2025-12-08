import { ReviewCardProps } from '@/app/types/components';
import StarRating from './StarRating';
import Image from 'next/image';
import { icons } from '@/app/constants/images';

/**
 * Review card component
 * Desktop: 89px profile, 40px name, 25px review text
 * Mobile: 80px profile, 16px name, 14px review text
 */
export default function ReviewCard({ name, profileImage, rating, date, review }: ReviewCardProps) {
  return (
    <div className="flex items-start gap-4 lg:gap-6 py-4">
      {/* Profile Image */}
      <div className="relative w-[80px] h-[80px] lg:w-[89px] lg:h-[89px] rounded-full overflow-hidden shrink-0">
        <Image
          src={profileImage || icons.profilePlaceholder}
          alt={`${name} profile`}
          width={89}
          height={89}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        {/* Name and Rating */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
          <h3 className="text-[16px] lg:text-[40px] font-bold text-[var(--color-dark-blue)]">
            {name}
          </h3>
          <StarRating rating={rating} />
        </div>

        {/* Date */}
        <p className="text-[14px] lg:text-[20px] text-black">
          User Since {date}
        </p>

        {/* Review Text */}
        <p className="text-[14px] lg:text-[25px] text-black">
          {review}...{' '}
          <span className="underline cursor-pointer hover:opacity-80">view more</span>
        </p>
      </div>
    </div>
  );
}
