import Image from 'next/image';
import { LogoProps } from '@/app/types/components';
import { logo } from '@/app/constants/images';

/**
 * LOOPLABS logo component
 * Displays logo image + "LOOPLABS" text
 * Responsive sizes:
 * - Small: 56x31px logo, 16px text
 * - Medium: 67x37px logo, 19px text (20% larger than small)
 * - Large: 89x48px logo, 31px text
 */
export default function Logo({ size = 'large', className = '' }: LogoProps) {
  const logoSize = {
    width: size === 'small' ? 80 : size === 'medium' ? 98 : 114,
    height: size === 'small' ? 46 : size === 'medium' ? 51 : 55,
  };

  const textSize = size === 'small' ? 'text-[18px]' : size === 'medium' ? 'text-[25px]' : 'text-[29px]';

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="relative" style={{ width: logoSize.width, height: logoSize.height }}>
        <Image
          src={logo.icon}
          alt="LOOPLABS logo"
          width={logoSize.width}
          height={logoSize.height}
          className="object-contain"
          priority
        />
      </div>
      <p className={`font-bold ${textSize} text-white text-center leading-normal`}>
        LOOPLABS
      </p>
    </div>
  );
}
