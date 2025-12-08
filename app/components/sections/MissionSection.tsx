/**
 * Mission section component
 * Dark blue background with white centered text
 * Desktop: H1 (80px), Body (40px), padding 224px horizontal
 * Mobile: H1 (30px), Body (16px), padding 20px horizontal
 */
export default function MissionSection() {
  return (
    <section id="mission" className="bg-[var(--color-dark-blue)] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 lg:gap-8 max-w-[353px] lg:max-w-[1280px] mx-auto">
          <h2 className="text-h1 text-white font-bold">
            Our Mission
          </h2>
          <p className="text-body lg:text-[40px] text-white font-normal">
            LoopLabs fosters young innovators through AI coursework, empowering the next generation of thinkers, makers, and innovators to excel in a world transformed by artificial intelligence education, robotics, and humanoid technology.
          </p>
        </div>
      </div>
    </section>
  );
}
