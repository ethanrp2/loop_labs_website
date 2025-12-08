/**
 * Secondary navigation bar (light blue pill)
 * Desktop: 1316px wide, 50px height, 20px text - centered with rounded corners
 * Mobile: 353px wide, 36px height, 14px text
 */
export default function SecondaryNav() {
  const links = [
    { label: 'About', href: '#about', active: true },
    { label: 'Mission', href: '#mission', active: false },
    { label: 'Enroll', href: '#enroll', active: false },
    { label: 'Reviews', href: '#reviews', active: false },
  ];

  return (
    <nav className="mt-[20px] lg:mt-[40px] pt-16 pb-4 lg:pt-20 lg:pb-6" aria-label="Quick navigation">
      <div className="container mx-auto px-4">
        <div className="bg-[var(--color-light-blue)] flex items-center justify-center h-[36px] lg:h-[50px] rounded-full max-w-[353px] lg:max-w-[900px] mx-auto">
          <div className="flex items-center justify-around w-full px-4 lg:px-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-black text-[14px] lg:text-[20px] text-center transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/30 rounded px-2 py-1 ${
                  link.active ? 'underline' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
