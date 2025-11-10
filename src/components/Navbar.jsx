import { Link } from 'react-router-dom';
import './Navbar.css';
import logoBranca from '../assets/Logo-branca.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoBranca} alt="TP3 Logo" className="navbar-logo-img" />
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">
              <i className="bi bi-house-door"></i>
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link to="/imoveis" className="navbar-link">
              <i className="bi bi-search"></i>
              <span>Imóveis</span>
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="navbar-link">
              <i className="bi bi-info-circle"></i>
              <span>Sobre Nós</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
