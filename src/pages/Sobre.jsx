import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre-page">
      <div className="sobre-header">
        <h1>Sobre a TP3</h1>
        <p>Engenharia, Imobiliária e Remodelações com confiança e excelência</p>
      </div>

      <div className="sobre-content">
        <section className="sobre-intro">
          <p className="intro-text">
            A <strong>TP3</strong> é uma empresa que inicia agora as suas atividades em Viseu, Portugal, 
            com a solidez de mais de 10 anos de experiência no Brasil nos setores de engenharia, 
            remodelações e intermediação imobiliária.
          </p>
          <p className="intro-text">
            Formada por dois engenheiros altamente qualificados, a TP3 traz consigo um histórico 
            de projetos executados com excelência, rigor técnico e atenção aos detalhes, sempre com 
            foco na satisfação e confiança dos clientes.
          </p>
        </section>

        <section className="missao-section">
          <div className="missao-icon">
            <i className="bi bi-bullseye"></i>
          </div>
          <h2>Nossa Missão</h2>
          <p>
            Oferecer soluções completas e integradas, unindo o conhecimento técnico da engenharia 
            com a visão estratégica do mercado imobiliário, proporcionando serviços de qualidade, 
            transparência e eficiência.
          </p>
        </section>

        <section className="atuacao-section">
          <h2>Áreas de Atuação</h2>
          <div className="atuacao-grid">
            <div className="atuacao-card">
              <div className="atuacao-icon">
                <i className="bi bi-house-door"></i>
              </div>
              <h3>Mediação Imobiliária</h3>
              <p>Compra, venda e arrendamento de imóveis com total transparência e profissionalismo</p>
            </div>
            <div className="atuacao-card">
              <div className="atuacao-icon">
                <i className="bi bi-gear"></i>
              </div>
              <h3>Engenharia e Consultoria Técnica</h3>
              <p>Projectos desenvolvidos com rigor técnico por engenheiros qualificados</p>
            </div>
            <div className="atuacao-card">
              <div className="atuacao-icon">
                <i className="bi bi-hammer"></i>
              </div>
              <h3>Remodelações e Reabilitação</h3>
              <p>Transformação de espaços com atenção aos detalhes e qualidade superior</p>
            </div>
          </div>
        </section>

        <section className="valores-section">
          <h2>Nossos Diferenciais</h2>
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon">
                <i className="bi bi-award"></i>
              </div>
              <h3>Experiência</h3>
              <p>Mais de 10 anos de atuação no mercado brasileiro</p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3>Confiança</h3>
              <p>Transparência e honestidade em cada projeto</p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <i className="bi bi-gem"></i>
              </div>
              <h3>Excelência</h3>
              <p>Rigor técnico e atenção aos detalhes</p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <h3>Inovação</h3>
              <p>Soluções modernas e sustentáveis</p>
            </div>
          </div>
        </section>

        <section className="local-section">
          <div className="local-icon">
            <i className="bi bi-geo-alt"></i>
          </div>
          <h2>Viseu e Região Central</h2>
          <p>
            Com sede em Viseu, a TP3 atua em toda a região central de Portugal, 
            comprometida com a inovação, a sustentabilidade e o profissionalismo em cada projeto.
          </p>
          <p>
            Viseu é conhecida por sua qualidade de vida, rica história e excelentes oportunidades 
            no mercado imobiliário, oferecendo o equilíbrio perfeito entre tradição e modernidade.
          </p>
        </section>

        <section className="contact-section">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para ajudá-lo a encontrar o imóvel perfeito ou desenvolver seu projeto!</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </span>
              <div>
                <strong>Localização</strong>
                <p>Viseu, Portugal</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <i className="bi bi-telephone-fill"></i>
              </span>
              <div>
                <strong>Telefone</strong>
                <p>+351 963 782 766</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <div>
                <strong>Email</strong>
                <p>TP3imibiliaria@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <i className="bi bi-clock-fill"></i>
              </span>
              <div>
                <strong>Horário</strong>
                <p>Segunda a Sexta: 9h - 17h</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sobre;
