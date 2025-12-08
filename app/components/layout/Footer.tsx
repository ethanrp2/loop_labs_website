/**
 * Simple footer component
 * Desktop: 50px "FOOTER" text
 * Mobile: 20px "Footer" text
 * Background: #303030 (dark gray)
 */
export default function Footer() {
  return (
    <footer className="bg-[#303030] text-white py-8 lg:py-12">
      <div className="container mx-auto text-center">
        <p className="text-[20px] lg:text-[50px] font-normal">
          <span className="lg:hidden">Footer</span>
          <span className="hidden lg:inline">FOOTER</span>
        </p>
      </div>
    </footer>
  );
}
