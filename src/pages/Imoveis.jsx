import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import './Imoveis.css';

function Imoveis() {
  const navigate = useNavigate();
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchNome, setSearchNome] = useState('');
  const [searchRegiao, setSearchRegiao] = useState('');
  const [filterTipo, setFilterTipo] = useState('todos');

  useEffect(() => {
    loadImoveis();
  }, []);

  const loadImoveis = async () => {
    try {
      const q = query(collection(db, 'imoveis'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setImoveis(data);
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredImoveis = imoveis.filter(imovel => {
    const matchNome = imovel.nome?.toLowerCase().includes(searchNome.toLowerCase());
    const matchRegiao = imovel.regiao?.toLowerCase().includes(searchRegiao.toLowerCase());
    const matchTipo = filterTipo === 'todos' || imovel.tipo === filterTipo;
    return matchNome && matchRegiao && matchTipo;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando imóveis...</p>
      </div>
    );
  }

  return (
    <div className="imoveis-page">
      <div className="imoveis-header">
        <h1>Nossos Imóveis</h1>
        <p>Encontre o imóvel perfeito para você</p>
      </div>

      <div className="search-filters">
        <div className="search-container">
          <div className="input-with-icon">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Buscar por nome do imóvel..."
              value={searchNome}
              onChange={(e) => setSearchNome(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="input-with-icon">
            <i className="bi bi-geo-alt"></i>
            <input
              type="text"
              placeholder="Buscar por região..."
              value={searchRegiao}
              onChange={(e) => setSearchRegiao(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="select-with-icon">
            <i className="bi bi-filter"></i>
            <select
              value={filterTipo}
              onChange={(e) => setFilterTipo(e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todos os tipos</option>
              <option value="venda">Venda</option>
              <option value="aluguel">Arrendamento</option>
            </select>
          </div>
        </div>
      </div>

      <div className="imoveis-grid">
        {filteredImoveis.length === 0 ? (
          <div className="no-results">
            <p>Nenhum imóvel encontrado com os filtros selecionados.</p>
          </div>
        ) : (
          filteredImoveis.map(imovel => (
            <div key={imovel.id} className="imovel-card">
                  <div className="imovel-badge">{imovel.tipo === 'venda' ? 'VENDA' : 'ARRENDAMENTO'}</div>
              <div className="imovel-image">
                {imovel.imagens && imovel.imagens.length > 0 ? (
                  <>
                    <img src={imovel.imagens[0]} alt={imovel.nome} />
                    {imovel.imagens.length > 1 && (
                      <div className="image-count">
                        <i className="bi bi-camera"></i> {imovel.imagens.length} fotos
                      </div>
                    )}
                  </>
                ) : (
                  <div className="placeholder-image">
                    <i className="bi bi-house-door"></i>
                  </div>
                )}
              </div>
              <div className="imovel-content">
                <h3>{imovel.nome}</h3>
                <p className="imovel-regiao">
                  <i className="bi bi-geo-alt-fill"></i> {imovel.regiao}
                </p>
                <p className="imovel-descricao">{imovel.descricao}</p>
                <div className="imovel-details">
                  {imovel.quartos > 0 && (
                    <span>
                      <i className="bi bi-door-closed"></i> {imovel.quartos} {imovel.quartos === 1 ? 'quarto' : 'quartos'}
                    </span>
                  )}
                  {imovel.banheiros > 0 && (
                    <span>
                      <i className="bi bi-droplet"></i> {imovel.banheiros} {imovel.banheiros === 1 ? 'casa de banho' : 'casas de banho'}
                    </span>
                  )}
                  {imovel.area > 0 && (
                    <span>
                      <i className="bi bi-rulers"></i> {imovel.area}m²
                    </span>
                  )}
                </div>
                <div className="imovel-footer">
                  <span className="imovel-preco">
                    {imovel.preco ? `€${imovel.preco.toLocaleString('pt-PT')}${imovel.tipo === 'aluguel' ? '/mês' : ''}` : 'Preço sob consulta'}
                  </span>
                </div>
                <div className="imovel-actions">
                  <button 
                    className="details-button"
                    onClick={() => navigate(`/imoveis/${imovel.id}`)}
                  >
                    <i className="bi bi-eye"></i>
                    <span>Ver Detalhes</span>
                  </button>
                  <button 
                    className="contact-button"
                    onClick={() => window.open(`https://wa.me/351963782766?text=Olá! Tenho interesse no imóvel: ${encodeURIComponent(imovel.nome)}`, '_blank')}
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>Contato</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Imoveis;

