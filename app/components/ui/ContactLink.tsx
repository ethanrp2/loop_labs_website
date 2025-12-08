import Image from 'next/image';
import { ContactLinkProps } from '@/app/types/components';

/**
 * Contact link component with icon
 * Only visible on mobile (< 1024px)
 * Used for Email and Instagram links in About section
 */
export default function ContactLink({ icon, href, text, type }: ContactLinkProps) {
  const isEmail = type === 'email';

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-[29px] h-[29px] shrink-0">
        <Image
          src={icon}
          alt={`${type} icon`}
          width={29}
          height={29}
          className="object-cover"
        />
      </div>
      {isEmail ? (
        <a
          href={href}
          className="font-bold text-[16px] text-[var(--color-dark-blue)] hover:underline"
        >
          {text}
        </a>
      ) : (
        <p className="font-bold text-[16px] text-[var(--color-dark-blue)]">
          {text}
        </p>
      )}
    </div>
  );
}
