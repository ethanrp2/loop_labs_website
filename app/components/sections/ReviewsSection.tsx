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
      name: 'Sarah Mitchell',
      profileImage: icons.profilePlaceholder,
      rating: 5,
      date: 'Nov 2025',
      review: 'LoopLabs transformed my understanding of AI. The hands-on projects and expert instructors made complex concepts accessible and engaging',
    },
    {
      name: 'Marcus Chen',
      profileImage: icons.profilePlaceholder,
      rating: 5,
      date: 'Oct 2025',
      review: 'As a high school student, I found the curriculum perfectly paced. Now I can build my own AI projects with confidence',
    },
  ];

  return (
    <section id="reviews" className="relative z-10 bg-[var(--color-light-blue)] py-8 lg:py-16 rounded-b-[20px] lg:rounded-b-[30px] shadow-lg">
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
