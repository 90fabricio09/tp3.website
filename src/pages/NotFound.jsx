import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <div className="notfound-icon">
          <i className="bi bi-exclamation-triangle"></i>
        </div>
        <h1>404</h1>
        <h2>Página Não Encontrada</h2>
        <p>
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>
        <div className="notfound-buttons">
          <Link to="/" className="notfound-button primary">
            <i className="bi bi-house-door"></i>
            <span>Voltar ao Início</span>
          </Link>
          <Link to="/imoveis" className="notfound-button secondary">
            <i className="bi bi-search"></i>
            <span>Ver Imóveis</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

