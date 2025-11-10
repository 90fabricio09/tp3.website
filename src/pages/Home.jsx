import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../firebase';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [imoveisDestaque, setImoveisDestaque] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImoveisDestaque();
  }, []);

  const loadImoveisDestaque = async () => {
    try {
      const q = query(collection(db, 'imoveis'), limit(20));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Selecionar 3 imóveis aleatórios
      const shuffled = data.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      setImoveisDestaque(selected);
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>TP3 - Engenharia, Imobiliária e Remodelações</h1>
          <p className="hero-subtitle">Mais de 10 anos de experiência | Viseu, Portugal</p>
          <p className="hero-description">
            Soluções completas e integradas unindo conhecimento técnico da engenharia 
            com a visão estratégica do mercado imobiliário
          </p>
          <div className="hero-buttons">
            <Link to="/imoveis" className="cta-button primary">
              <i className="bi bi-search"></i>
              <span>Ver Imóveis</span>
            </Link>
            <Link to="/sobre" className="cta-button secondary">
              <i className="bi bi-info-circle"></i>
              <span>Conheça a TP3</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-container">
          <h2 className="services-title">Nossos Serviços</h2>
          <p className="services-subtitle">Qualidade, transparência e eficiência em cada projeto</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-house-door"></i>
              </div>
              <h3>Mediação Imobiliária</h3>
              <p>
                Compra, venda e arrendamento de imóveis em Viseu e região central de Portugal. 
                Atendimento personalizado com total transparência e profissionalismo.
              </p>
              <Link to="/imoveis" className="service-link">
                Ver imóveis disponíveis <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="service-card featured">
              <div className="service-badge">Destaque</div>
              <div className="service-icon">
                <i className="bi bi-gear"></i>
              </div>
              <h3>Engenharia e Consultoria Técnica</h3>
              <p>
                Projectos desenvolvidos com rigor técnico por engenheiros altamente qualificados. 
                Experiência comprovada em execução de obras e consultoria.
              </p>
              <Link to="/sobre" className="service-link">
                Saiba mais <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-hammer"></i>
              </div>
              <h3>Remodelações e Reabilitação</h3>
              <p>
                Transformação de espaços com atenção aos detalhes e qualidade superior. 
                Remodelações completas e reabilitação de imóveis.
              </p>
              <Link to="/sobre" className="service-link">
                Conheça nosso trabalho <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2>Por que escolher a TP3?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-award"></i>
              </div>
              <h3>Experiência Comprovada</h3>
              <p>Mais de 10 anos de atuação no Brasil em engenharia e mercado imobiliário</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3>Confiança e Transparência</h3>
              <p>Honestidade e ética em todas as negociações e projetos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-people"></i>
              </div>
              <h3>Atendimento Personalizado</h3>
              <p>Foco total na satisfação e necessidades de cada cliente</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-gem"></i>
              </div>
              <h3>Excelência Técnica</h3>
              <p>Rigor técnico e atenção aos detalhes em cada projeto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Imóveis em Destaque */}
      <section className="imoveis-destaque">
        <div className="destaque-container">
          <h2>Imóveis em Destaque</h2>
          <p className="destaque-subtitle">Confira algumas das nossas melhores oportunidades</p>
          
          {loading ? (
            <div className="loading-imoveis">
              <div className="loading-spinner"></div>
              <p>Carregando imóveis...</p>
            </div>
          ) : imoveisDestaque.length === 0 ? (
            <div className="no-imoveis">
              <i className="bi bi-house-door"></i>
              <p>Nenhum imóvel disponível no momento</p>
            </div>
          ) : (
            <div className="destaque-grid">
              {imoveisDestaque.map(imovel => (
                <div key={imovel.id} className="destaque-card" onClick={() => navigate(`/imoveis/${imovel.id}`)}>
                  <div className="destaque-badge">{imovel.tipo === 'venda' ? 'VENDA' : 'ALUGUEL'}</div>
                  <div className="destaque-image">
                    {imovel.imagens && imovel.imagens.length > 0 ? (
                      <img src={imovel.imagens[0]} alt={imovel.nome} />
                    ) : (
                      <div className="destaque-placeholder">
                        <i className="bi bi-house-door"></i>
                      </div>
                    )}
                  </div>
                  <div className="destaque-content">
                    <h3>{imovel.nome}</h3>
                    <p className="destaque-regiao">
                      <i className="bi bi-geo-alt-fill"></i> {imovel.regiao}
                    </p>
                    <p className="destaque-descricao">{imovel.descricao}</p>
                    <div className="destaque-details">
                      {imovel.quartos > 0 && (
                        <span><i className="bi bi-door-closed"></i> {imovel.quartos}</span>
                      )}
                      {imovel.banheiros > 0 && (
                        <span><i className="bi bi-droplet"></i> {imovel.banheiros}</span>
                      )}
                      {imovel.area > 0 && (
                        <span><i className="bi bi-rulers"></i> {imovel.area}m²</span>
                      )}
                    </div>
                    <div className="destaque-footer">
                      <span className="destaque-preco">
                        {imovel.preco ? `€${imovel.preco.toLocaleString('pt-PT')}${imovel.tipo === 'aluguel' ? '/mês' : ''}` : 'Preço sob consulta'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="destaque-cta">
            <Link to="/imoveis" className="ver-todos-button">
              <i className="bi bi-grid-3x3-gap"></i>
              <span>Ver Todos os Imóveis</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Pronto para realizar seu projeto?</h2>
          <p>
            Entre em contato conosco e descubra como podemos ajudá-lo a encontrar 
            o imóvel ideal ou desenvolver seu projeto com excelência
          </p>
          <div className="cta-buttons">
            <a 
              href="https://wa.me/351963782766?text=Olá! Gostaria de mais informações sobre os serviços da TP3." 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              <i className="bi bi-whatsapp"></i>
              <span>Falar no WhatsApp</span>
            </a>
            <a 
              href="tel:+351963782766" 
              className="cta-button secondary"
            >
              <i className="bi bi-telephone"></i>
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
