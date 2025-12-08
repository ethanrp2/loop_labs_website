/**
 * Image asset paths for LOOPLABS
 * All images are stored in /public/images/
 */

export const IMAGES = {
  // Logos
  logo: {
    icon: '/images/logos/logo.png',
    withName: '/images/logos/logo_with_name.png',
  },

  // Hero/Background images
  hero: {
    background: '/images/cover_photo.jpg', // Hero background gradient image
  },

  // Section images
  about: {
    teamPhoto: '/images/logos/logo_with_name.png', // Logo with name (About section)
  },

  whyMatters: {
    classroom: '/images/classroom.jpg', // Classroom scene (Why This Matters section)
  },

  // Icons
  icons: {
    star: '/images/icons/star.svg',
    profilePlaceholder: '/images/icons/blank_profile_picture.svg',
  },
} as const;

// Export individual image paths for convenience
export const {
  logo,
  hero,
  about,
  whyMatters,
  icons,
} = IMAGES;
