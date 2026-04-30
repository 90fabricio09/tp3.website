import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';
import logoBranca from '../assets/Logo-branca.png';

function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: t.nav.home, icon: 'bi-house-door' },
    { id: 'services', label: t.nav.services, icon: 'bi-grid-3x3-gap' },
    { id: 'about', label: t.nav.about, icon: 'bi-info-circle' },
    { id: 'contact', label: t.nav.contact, icon: 'bi-envelope' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <button className="navbar-logo" onClick={() => handleNavClick('hero')} aria-label="Ir para início">
          <img src={logoBranca} alt="TP3 Logo" className="navbar-logo-img" />
        </button>

        <ul className={`navbar-menu${menuOpen ? ' navbar-menu--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button className="navbar-link" onClick={() => handleNavClick(link.id)}>
                <i className={`bi ${link.icon}`}></i>
                <span>{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`navbar-hamburger${menuOpen ? ' navbar-hamburger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </nav>
  );
}

export default Navbar;
