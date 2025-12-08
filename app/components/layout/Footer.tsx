/**
 * Minimalist footer component
 * Left-aligned copyright text at bottom
 * Background: #303030 (dark gray)
 * Negative margin pulls footer behind rounded section corners
 */
export default function Footer() {
  return (
    <footer className="bg-[#303030] text-white min-h-[100px] lg:min-h-[120px] flex flex-col justify-end pb-6 lg:pb-8 -mt-[20px] lg:-mt-[30px]">
      <div className="container mx-auto px-6 lg:px-8">
        <p className="text-[12px] lg:text-[14px] font-light text-white/70 tracking-wide">
          Copyright © 2025 Loop Labs AI - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
