import { StarRatingProps } from '@/app/types/components';
import Image from 'next/image';
import { icons } from '@/app/constants/images';

/**
 * Star rating component
 * Desktop: 43px height stars
 * Mobile: 23px height stars
 * Displays 5 stars, filled based on rating (1-5)
 */
export default function StarRating({ rating }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <div
          key={star}
          className="w-[23px] h-[23px] lg:w-[43px] lg:h-[43px] relative"
          style={{
            filter: star <= rating ? 'none' : 'grayscale(100%) brightness(0.9)',
            opacity: star <= rating ? 1 : 0.3,
          }}
        >
          <Image
            src={icons.star}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
