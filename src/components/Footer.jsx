import { useLanguage } from '../context/LanguageContext';
import './Footer.css';
import logoBranca from '../assets/Logo-branca.png';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <img src={logoBranca} alt="TP3 Logo" className="footer-logo-img" />
          <p>{t.footer.tagline}</p>
          <p className="footer-tagline">{t.footer.experience}</p>
        </div>

        <div className="footer-section">
          <h3>{t.footer.servicesTitle}</h3>
          <ul className="footer-list">
            <li>
              <i className="bi bi-clipboard-check"></i>
              <span>{t.footer.services.propertyInspection}</span>
            </li>
            <li>
              <i className="bi bi-rulers"></i>
              <span>{t.footer.services.technicalInspection}</span>
            </li>
            <li>
              <i className="bi bi-building-check"></i>
              <span>{t.footer.services.renovation}</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.contactTitle}</h3>
          <ul className="footer-list">
            <li>
              <i className="bi bi-geo-alt-fill"></i>
              <span>Portugal</span>
            </li>
            <li>
              <i className="bi bi-telephone-fill"></i>
              <span>+351 963 782 766</span>
            </li>
            <li>
              <i className="bi bi-envelope-fill"></i>
              <span>TP3engenharia@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.hoursTitle}</h3>
          <ul className="footer-list">
            <li>
              <i className="bi bi-clock-fill"></i>
              <span>{t.footer.hoursVal}</span>
            </li>
          </ul>
          <div className="footer-social">
            <a
              href="https://instagram.com/tp3engenharia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://wa.me/351963782766"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-social-link"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
