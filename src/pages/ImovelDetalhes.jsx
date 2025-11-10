import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './ImovelDetalhes.css';

function ImovelDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imovel, setImovel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);

  useEffect(() => {
    loadImovel();
  }, [id]);

  const loadImovel = async () => {
    try {
      const docRef = doc(db, 'imoveis', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setImovel({ id: docSnap.id, ...docSnap.data() });
      }
      // Se não existir, imovel permanecerá null e será tratado no render
    } catch (error) {
      console.error('Erro ao carregar imóvel:', error);
      // Mantém imovel como null para mostrar página de erro
    } finally {
      setLoading(false);
    }
  };

  const nextImage = () => {
    if (imovel?.imagens) {
      setCurrentImageIndex((prev) => 
        prev === imovel.imagens.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (imovel?.imagens) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? imovel.imagens.length - 1 : prev - 1
      );
    }
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando detalhes...</p>
      </div>
    );
  }

  if (!imovel) {
    return (
      <div className="imovel-not-found-page">
        <div className="imovel-not-found-container">
          <div className="imovel-not-found-icon">
            <i className="bi bi-house-x"></i>
          </div>
          <h1>Imóvel Não Encontrado</h1>
          <p>
            Desculpe, o imóvel que você está procurando não existe, foi removido ou está temporariamente indisponível.
          </p>
          <div className="imovel-not-found-buttons">
            <button onClick={() => navigate('/imoveis')} className="btn-primary">
              <i className="bi bi-search"></i>
              <span>Ver Todos os Imóveis</span>
            </button>
            <button onClick={() => navigate('/')} className="btn-secondary">
              <i className="bi bi-house-door"></i>
              <span>Voltar ao Início</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="imovel-detalhes-page">
      <div className="detalhes-header">
        <button onClick={() => navigate('/imoveis')} className="back-button">
          <i className="bi bi-arrow-left"></i>
          <span>Voltar aos Imóveis</span>
        </button>
      </div>

      <div className="detalhes-container">
        {/* Galeria de Fotos */}
        <div className="galeria-section">
          <div className="foto-principal">
            {imovel.imagens && imovel.imagens.length > 0 ? (
              <>
                <img 
                  src={imovel.imagens[currentImageIndex]} 
                  alt={`${imovel.nome} - Foto ${currentImageIndex + 1}`}
                  onClick={() => setShowFullImage(true)}
                />
                  <div className="tipo-badge-detalhes">
                  {imovel.tipo === 'venda' ? 'VENDA' : 'ARRENDAMENTO'}
                </div>
                
                {imovel.imagens.length > 1 && (
                  <>
                    <button className="nav-button prev" onClick={prevImage}>
                      ‹
                    </button>
                    <button className="nav-button next" onClick={nextImage}>
                      ›
                    </button>
                    <div className="image-counter">
                      {currentImageIndex + 1} / {imovel.imagens.length}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="placeholder-image-detalhes">
                <i className="bi bi-house-door"></i>
              </div>
            )}
          </div>

          {imovel.imagens && imovel.imagens.length > 1 && (
            <div className="miniaturas">
              {imovel.imagens.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  className={index === currentImageIndex ? 'active' : ''}
                  onClick={() => selectImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Informações do Imóvel */}
        <div className="info-section">
          <h1>{imovel.nome}</h1>
          <p className="localizacao">
            <i className="bi bi-geo-alt-fill"></i> {imovel.regiao}
          </p>
          
          <div className="preco-destaque">
            {imovel.preco ? (
              <>
                <span className="preco-valor">€{imovel.preco.toLocaleString('pt-PT')}</span>
                {imovel.tipo === 'aluguel' && <span className="preco-periodo">/mês</span>}
              </>
            ) : (
              <span className="preco-consulta">Preço sob consulta</span>
            )}
          </div>

          {/* Características */}
          <div className="caracteristicas">
            {imovel.quartos > 0 && (
              <div className="caracteristica-item">
                <span className="icon">
                  <i className="bi bi-door-closed-fill"></i>
                </span>
                <div>
                  <strong>{imovel.quartos}</strong>
                  <span>Quarto{imovel.quartos > 1 ? 's' : ''}</span>
                </div>
              </div>
            )}
              {imovel.banheiros > 0 && (
              <div className="caracteristica-item">
                <span className="icon">
                  <i className="bi bi-droplet-fill"></i>
                </span>
                <div>
                  <strong>{imovel.banheiros}</strong>
                  <span>Casa{imovel.banheiros > 1 ? 's' : ''} de banho</span>
                </div>
              </div>
            )}
            {imovel.area > 0 && (
              <div className="caracteristica-item">
                <span className="icon">
                  <i className="bi bi-rulers"></i>
                </span>
                <div>
                  <strong>{imovel.area}m²</strong>
                  <span>Área</span>
                </div>
              </div>
            )}
          </div>

          {/* Descrição */}
          {imovel.descricao && (
            <div className="descricao-completa">
              <h2>Descrição</h2>
              <p>{imovel.descricao}</p>
            </div>
          )}

          {/* Botão de Contato */}
          <div className="contato-section">
            <button 
              className="contato-button"
              onClick={() => window.open(`https://wa.me/351963782766?text=Olá! Tenho interesse no imóvel: ${encodeURIComponent(imovel.nome)} - ${encodeURIComponent(imovel.regiao)}%0A%0APreço: €${imovel.preco?.toLocaleString('pt-PT')}`, '_blank')}
            >
              <i className="bi bi-whatsapp"></i>
              <span>Entrar em Contato</span>
            </button>
            <p className="contato-info">
              <i className="bi bi-info-circle"></i>
              Interessado neste imóvel? Entre em contato conosco pelo WhatsApp!
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Imagem em Tela Cheia */}
      {showFullImage && (
        <div className="fullscreen-modal" onClick={() => setShowFullImage(false)}>
          <button className="close-fullscreen">✕</button>
          <img 
            src={imovel.imagens[currentImageIndex]} 
            alt={imovel.nome}
            onClick={(e) => e.stopPropagation()}
          />
          {imovel.imagens.length > 1 && (
            <>
              <button 
                className="nav-button-fullscreen prev" 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                ‹
              </button>
              <button 
                className="nav-button-fullscreen next" 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ImovelDetalhes;

