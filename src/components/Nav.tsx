const LINKS = [
  { href: '#research', label: 'Research' },
  { href: '#personal-projects', label: 'Personal Projects' },
  { href: '#class-projects', label: 'Class Projects' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav__brand">
        Nahee Jeong
      </a>
      <div className="nav__links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
