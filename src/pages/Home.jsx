import { useLanguage } from '../context/LanguageContext';
import './Home.css';

function Home() {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            <i className="bi bi-geo-alt-fill"></i>
            <span>Portugal</span>
          </div>
          <h1>{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={() => scrollTo('contact')}>
              <i className="bi bi-whatsapp"></i>
              <span>{t.hero.ctaContact}</span>
            </button>
            <button className="cta-button secondary" onClick={() => scrollTo('about')}>
              <i className="bi bi-info-circle"></i>
              <span>{t.hero.ctaAbout}</span>
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Anos de experiência</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">PT</span>
              <span className="stat-label">Inspeções em todo Portugal</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Comprometimento</span>
            </div>
          </div>
          <button className="hero-scroll-indicator" onClick={() => scrollTo('services')} aria-label="Rolar para baixo">
            <i className="bi bi-mouse scroll-icon-desktop"></i>
            <i className="bi bi-chevron-down scroll-icon-mobile"></i>
          </button>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="services" className="services">
        <div className="services-container">
          <div className="section-header">
            <h2 className="services-title">{t.services.title}</h2>
            <p className="services-subtitle">{t.services.subtitle}</p>
          </div>

          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-badge">{t.services.badge}</div>
              <div className="service-icon">
                <i className="bi bi-clipboard-check"></i>
              </div>
              <h3>{t.services.propertyInspection.title}</h3>
              <p>{t.services.propertyInspection.desc}</p>
              <button className="service-link" onClick={() => scrollTo('contact')}>
                {t.services.learnMore} <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-rulers"></i>
              </div>
              <h3>{t.services.technicalInspection.title}</h3>
              <p>{t.services.technicalInspection.desc}</p>
              <button className="service-link" onClick={() => scrollTo('contact')}>
                {t.services.learnMore} <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-building-check"></i>
              </div>
              <h3>{t.services.renovation.title}</h3>
              <p>{t.services.renovation.desc}</p>
              <button className="service-link" onClick={() => scrollTo('contact')}>
                {t.services.learnMore} <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE ESCOLHER ── */}
      <section className="features">
        <div className="features-container">
          <h2>{t.features.title}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-award"></i>
              </div>
              <h3>{t.features.exp.title}</h3>
              <p>{t.features.exp.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3>{t.features.trust.title}</h3>
              <p>{t.features.trust.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-people"></i>
              </div>
              <h3>{t.features.personal.title}</h3>
              <p>{t.features.personal.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-gem"></i>
              </div>
              <h3>{t.features.excellence.title}</h3>
              <p>{t.features.excellence.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="section-header">
            <h2>{t.about.title}</h2>
            <p className="section-subtitle">{t.about.subtitle}</p>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="intro-text">{t.about.intro1}</p>
              <p className="intro-text">{t.about.intro2}</p>

              <div className="mission-block">
                <div className="mission-icon">
                  <i className="bi bi-bullseye"></i>
                </div>
                <div>
                  <h3>{t.about.missionTitle}</h3>
                  <p>{t.about.mission}</p>
                </div>
              </div>

              <div className="location-block">
                <div className="location-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h3>{t.about.locationTitle}</h3>
                  <p>{t.about.location}</p>
                </div>
              </div>
            </div>

            <div className="about-values">
              <h3 className="values-title">{t.about.valuesTitle}</h3>
              <div className="values-grid">
                <div className="value-card">
                  <i className="bi bi-award"></i>
                  <h4>{t.about.values.exp.title}</h4>
                  <p>{t.about.values.exp.desc}</p>
                </div>
                <div className="value-card">
                  <i className="bi bi-shield-check"></i>
                  <h4>{t.about.values.trust.title}</h4>
                  <p>{t.about.values.trust.desc}</p>
                </div>
                <div className="value-card">
                  <i className="bi bi-gem"></i>
                  <h4>{t.about.values.excellence.title}</h4>
                  <p>{t.about.values.excellence.desc}</p>
                </div>
                <div className="value-card">
                  <i className="bi bi-graph-up"></i>
                  <h4>{t.about.values.innovation.title}</h4>
                  <p>{t.about.values.innovation.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="section-header light">
            <h2>{t.contact.ctaTitle}</h2>
            <p>{t.contact.subtitle}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-cta-buttons">
              <a
                href="https://wa.me/351963782766?text=Olá! Gostaria de mais informações sobre os serviços da TP3."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary large"
              >
                <i className="bi bi-whatsapp"></i>
                <span>{t.contact.whatsapp}</span>
              </a>
              <a href="tel:+351963782766" className="cta-button secondary large">
                <i className="bi bi-telephone"></i>
                <span>{t.contact.call}</span>
              </a>
              <a
                href="mailto:TP3engenharia@gmail.com"
                className="cta-button outline large"
              >
                <i className="bi bi-envelope"></i>
                <span>TP3engenharia@gmail.com</span>
              </a>
            </div>

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <span className="contact-info-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <div>
                  <strong>{t.contact.location}</strong>
                  <p>{t.contact.locationVal}</p>
                </div>
              </div>
              <div className="contact-info-card">
                <span className="contact-info-icon">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <div>
                  <strong>{t.contact.phone}</strong>
                  <p>+351 963 782 766</p>
                </div>
              </div>
              <div className="contact-info-card">
                <span className="contact-info-icon">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <div>
                  <strong>{t.contact.email}</strong>
                  <p>TP3engenharia@gmail.com</p>
                </div>
              </div>
              <div className="contact-info-card">
                <span className="contact-info-icon">
                  <i className="bi bi-clock-fill"></i>
                </span>
                <div>
                  <strong>{t.contact.hours}</strong>
                  <p>{t.contact.hoursVal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
