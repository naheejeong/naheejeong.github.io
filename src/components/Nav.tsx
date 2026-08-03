import type { MouseEvent } from 'react';
import { scrollToId } from '../utils/scroll';

const LINKS = [
  { href: '#research', label: 'Research' },
  { href: '#personal-projects', label: 'Personal Projects' },
  { href: '#class-projects', label: 'Class Projects' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#contact', label: 'Contact' },
];

function handleNavClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault();
  scrollToId(id);
  history.pushState(null, '', `#${id}`);
}

export function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav__brand" onClick={(e) => handleNavClick(e, 'top')}>
        Nahee Jeong
      </a>
      <div className="nav__links">
        {LINKS.map((link) => {
          const id = link.href.slice(1);
          return (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, id)}>
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
