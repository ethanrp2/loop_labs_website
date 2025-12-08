/**
 * Secondary navigation bar (light blue pill)
 * Desktop: 1316px wide, 65px height, 30px text
 * Mobile: 394px wide, 45px height, 20px text
 */
export default function SecondaryNav() {
  const links = [
    { label: 'About', href: '#about', active: true },
    { label: 'Mission', href: '#mission', active: false },
    { label: 'Enroll', href: '#enroll', active: false },
    { label: 'Reviews', href: '#reviews', active: false },
  ];

  return (
    <nav className="bg-[var(--color-light-blue)] w-full" aria-label="Quick navigation">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-[45px] lg:h-[65px] rounded-[50px] max-w-[1316px] mx-auto">
          <div className="flex items-center justify-around w-full px-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-black text-[20px] lg:text-[30px] text-center transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/30 rounded px-2 py-1 ${
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
