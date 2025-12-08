import ReviewCard from '../ui/ReviewCard';
import { icons } from '@/app/constants/images';

/**
 * Reviews section component
 * Desktop: "What Real Students are Saying", 2-column grid
 * Mobile: "Reviews", single column
 */
export default function ReviewsSection() {
  const reviews = [
    {
      name: 'John Doe',
      profileImage: icons.profilePlaceholder,
      rating: 5,
      date: 'Dec 2025',
      review: 'Lorem ipsum dolor sit amet. Non totam amet in sunt expedita aut molestias deserunt eum deleniti deserunt',
    },
    {
      name: 'John Doe',
      profileImage: icons.profilePlaceholder,
      rating: 5,
      date: 'Dec 2025',
      review: 'Lorem ipsum dolor sit amet. Et rerum accusantium',
    },
  ];

  return (
    <section id="reviews" className="bg-[var(--color-light-blue)] py-8 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-t-[20px] lg:rounded-t-[30px] py-8 lg:py-16 px-6 lg:px-12">
          {/* Heading */}
          <h2 className="text-h2 lg:text-[64px] text-[var(--color-dark-blue)] font-bold text-center mb-8 lg:mb-12">
            <span className="lg:hidden">Reviews</span>
            <span className="hidden lg:inline">What Real Students are Saying</span>
          </h2>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1200px] mx-auto">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
