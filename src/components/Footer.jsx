import './Footer.css';
import logoBranca from '../assets/Logo-branca.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img src={logoBranca} alt="TP3 Logo" className="footer-logo-img" />
          <p>Engenharia, Imobiliária e Remodelações com confiança e excelência</p>
          <p className="footer-tagline">Mais de 10 anos de experiência</p>
        </div>
        
        <div className="footer-section">
          <h3>Serviços</h3>
          <ul className="footer-list">
            <li>
              <i className="bi bi-house-door"></i>
              <span>Mediação Imobiliária</span>
            </li>
            <li>
              <i className="bi bi-gear"></i>
              <span>Engenharia e Consultoria</span>
            </li>
            <li>
              <i className="bi bi-hammer"></i>
              <span>Remodelações</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <ul className="footer-list">
            <li>
              <i className="bi bi-geo-alt-fill"></i>
              <span>Viseu, Portugal</span>
            </li>
            <li>
              <i className="bi bi-telephone-fill"></i>
              <span>+351 963 782 766</span>
            </li>
            <li>
              <i className="bi bi-envelope-fill"></i>
              <span>TP3imobiliaria@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Horário de Atendimento</h3>
          <ul className="footer-list">
            <li>
              <i className="bi bi-clock-fill"></i>
              <span>Segunda a Sexta: 9h - 17h</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 TP3 - Engenharia, Imobiliária e Remodelações. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
