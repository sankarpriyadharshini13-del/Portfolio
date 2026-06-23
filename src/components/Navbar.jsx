import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/portfolio';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = document.querySelectorAll('section[id]');
      const sy = window.scrollY;
      sections.forEach(s => {
        const top = s.offsetTop - 120;
        const bot = top + s.offsetHeight;
        if (sy >= top && sy < bot) setActive(s.id);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>PS<em>.</em></a>

          <ul className={styles.links}>
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`${styles.link} ${active === l.href.slice(1) ? styles.active : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="mailto:sankarpriyadharshini13@gmail.com" className={styles.hireBtn}>
            Hire Me
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span className={`${styles.bar} ${open ? styles.b1open : ''}`} />
            <span className={`${styles.bar} ${open ? styles.b2open : ''}`} />
            <span className={`${styles.bar} ${open ? styles.b3open : ''}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className={styles.mobileNav}>
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={closeMenu}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:sankarpriyadharshini13@gmail.com"
            className={styles.mobileHireBtn}
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
