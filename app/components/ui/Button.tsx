import Link from 'next/link';
import { ButtonProps } from '@/app/types/components';

/**
 * Reusable button component with three variants
 * - primary: Light blue background (#76C8E5), black text
 * - secondary: White background, black text
 * - outline: Dark blue background (#191B58), white text
 */
export default function Button({
  variant,
  children,
  href,
  onClick,
  className = '',
  fullWidth = false,
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center text-button rounded-[50px] transition-all duration-200 px-5 h-[50px] lg:h-[60px] focus:outline-none focus:ring-4 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-[var(--color-light-blue)] text-black hover:bg-[#5fb5d1] focus:ring-[var(--color-light-blue)]/50',
    secondary: 'bg-white text-black hover:bg-gray-50 border-2 border-transparent focus:ring-gray-300',
    outline: 'bg-[var(--color-dark-blue)] text-white hover:bg-[#0f1340] focus:ring-[var(--color-dark-blue)]/50',
  };

  const widthStyles = fullWidth ? 'w-full' : 'w-[280px] lg:w-[380px]';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {icon && iconPosition === 'left' && <span className="mr-3">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-3">{icon}</span>}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {icon && iconPosition === 'left' && <span className="mr-3">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-3">{icon}</span>}
    </button>
  );
}
