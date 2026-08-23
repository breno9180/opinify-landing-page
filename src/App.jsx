import { Routes, Route, Link } from 'react-router-dom';
import { BarChart3, ShieldCheck, Zap, Download } from 'lucide-react';
import './index.css';

const Home = () => {
  return (
    <>
      <main className="hero">
        <div className="hero-badge">
          ✨ Lançamento Exclusivo em Breve
        </div>
        
        <h1>
          A voz do Brasil em <br />
          <span className="text-gradient">Tempo Real.</span>
        </h1>
        
        <p>
          Crie enquetes, descubra opiniões e acompanhe tendências instantâneas. 
          O ecossistema definitivo para votações públicas, totalmente seguro, 
          anônimo e protegido contra robôs.
        </p>

        <div className="hero-cta">
          <a href="#features" className="btn btn-primary">
            <Download size={20} />
            Baixar para Android
          </a>
          <a href="#b2b" className="btn btn-outline">
            Soluções B2B
          </a>
        </div>
      </main>

      <section id="features" className="features">
        <div className="feature-card glass-panel">
          <div className="feature-icon-wrapper">
            <ShieldCheck size={32} />
          </div>
          <h3>Voto 100% Seguro</h3>
          <p>Nosso sistema antifraude com validação AWS barra bots e votos duplicados. Cada opinião é real, autêntica e contabilizada com segurança bancária.</p>
        </div>

        <div className="feature-card glass-panel">
          <div className="feature-icon-wrapper">
            <Zap size={32} />
          </div>
          <h3>Respostas em Segundos</h3>
          <p>Resultados atualizados instantaneamente. Nossa arquitetura ultra-rápida suporta milhares de votos simultâneos sem engasgar.</p>
        </div>

        <div className="feature-card glass-panel">
          <div className="feature-icon-wrapper">
            <BarChart3 size={32} />
          </div>
          <h3>Analytics com IA</h3>
          <p>Para usuários Premium e Políticos: o Google Gemini analisa as respostas em texto livre e gera sumários executivos automáticos do sentimento público.</p>
        </div>
      </section>

      <section className="app-showcase">
        <h2>Conheça o Opinify por dentro</h2>
        <p className="showcase-subtitle">Design moderno, fluidez e UX pensada nos mínimos detalhes.</p>
        
        <div className="screenshots-container">
          <img src="/screenshots/home.jpg" alt="Tela inicial do Opinify" className="app-screenshot" />
          <img src="/screenshots/criar_enquete.jpg" alt="Criando uma enquete" className="app-screenshot" />
          <img src="/screenshots/poll_details.jpg" alt="Detalhes da enquete" className="app-screenshot" />
          <img src="/screenshots/analytics.jpg" alt="Análises e Estatísticas" className="app-screenshot" />
          <img src="/screenshots/recompensa.jpg" alt="Sistema de Recompensas" className="app-screenshot" />
        </div>
      </section>
    </>
  );
};

const PrivacyPolicy = () => {
  return (
    <main className="legal-content glass-panel">
      <h1>Política de Privacidade</h1>
      <p>Última atualização: Julho de 2026</p>
      
      <h2>1. Coleta de Dados</h2>
      <p>O Opinify coleta informações estritamente necessárias para a autenticação e segurança do sistema. Isso inclui o seu número de telefone celular, que é utilizado exclusivamente para o envio de um código One-Time Password (OTP) via SMS durante o cadastro e login, prevenindo contas falsas e spam em nossas enquetes.</p>

      <h2>2. Uso das Informações</h2>
      <p>Nós não vendemos, alugamos ou compartilhamos seu número de telefone com empresas de marketing ou terceiros. O número é encriptado em nosso banco de dados e mantido seguro através da infraestrutura da Amazon Web Services (AWS).</p>

      <h2>3. Moderação de Conteúdo</h2>
      <p>As imagens enviadas para as enquetes são analisadas automaticamente por inteligência artificial (AWS Rekognition) para evitar a propagação de conteúdo explícito ou violento. Nenhuma imagem barrada é armazenada permanentemente.</p>
      
      <h2>4. Contato</h2>
      <p>Para dúvidas sobre a proteção de dados ou para solicitar a exclusão total da sua conta e dados do nosso banco, entre em contato através de dpo@opinify.com.br.</p>
    </main>
  );
};

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/" className="logo">
          <BarChart3 className="logo-icon" size={28} />
          Opinify
        </Link>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link to="/" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '14px' }}>
            Início
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
      </Routes>

      <footer className="footer">
        <div className="logo" style={{ fontSize: '20px' }}>
          <BarChart3 className="logo-icon" size={24} />
          Opinify Ecosystem
        </div>
        <div className="footer-links">
          <Link to="/privacidade">Política de Privacidade</Link>
          <a href="#">Termos de Uso</a>
          <a href="#">Contato Comercial</a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
          © 2026 Opinify Brasil. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
