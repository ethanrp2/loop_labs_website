/**
 * Mission section component
 * Dark blue background with white centered text
 * Desktop: H1 (80px), Body (40px), padding 224px horizontal
 * Mobile: H1 (30px), Body (16px), padding 20px horizontal
 */
export default function MissionSection() {
  return (
    <section id="mission" className="py-8 lg:py-12 px-4 lg:px-8">
      <div className="bg-[var(--color-dark-blue)] rounded-[30px] lg:rounded-[50px] py-16 lg:py-24 px-[8%] lg:px-[18%] w-full mx-auto shadow-lg">
        <div className="flex flex-col items-center text-center gap-4 lg:gap-8">
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
