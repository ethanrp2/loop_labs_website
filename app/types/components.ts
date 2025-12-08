// Component prop types for LOOPLABS

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export interface ContactLinkProps {
  icon: string;
  href: string;
  text: string;
  type: 'email' | 'instagram';
}

export interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export interface ReviewCardProps {
  name: string;
  profileImage: string;
  rating: number;
  date: string;
  review: string;
}

export interface StarRatingProps {
  rating: number;
}

export interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}
