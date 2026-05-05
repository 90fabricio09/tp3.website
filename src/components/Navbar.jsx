import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';
import logoBranca from '../assets/Logo-branca.png';

function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: t.nav.home, icon: 'bi-house-door' },
    { id: 'services', label: t.nav.services, icon: 'bi-grid-3x3-gap' },
    { id: 'about', label: t.nav.about, icon: 'bi-info-circle' },
    { id: 'contact', label: t.nav.contact, icon: 'bi-envelope' },
  ];

  const mobileOverlay = createPortal(
    <>
      {menuOpen && (
        <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
      <ul className={`navbar-menu navbar-menu--mobile${menuOpen ? ' navbar-menu--open' : ''}`}>
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
        className={`navbar-hamburger-portal${menuOpen ? ' navbar-hamburger--open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>,
    document.body,
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="navbar-logo" onClick={() => handleNavClick('hero')} aria-label="Ir para início">
            <img src={logoBranca} alt="TP3 Logo" className="navbar-logo-img" />
          </button>

          <ul className="navbar-menu navbar-menu--desktop">
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
      </nav>
      {mobileOverlay}
    </>
  );
}

export default Navbar;
