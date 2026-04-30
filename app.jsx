import { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import logoUrl from './assets/logo.png';

// ============ ICONS ============
const Icon = {
  arrow: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrowUpRight: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  github: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" {...p}>
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  ),
  linkedin: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" {...p}>
      <path d="M13.63 13.63h-2.37V9.92c0-.88-.02-2.02-1.23-2.02-1.23 0-1.42.96-1.42 1.96v3.77H6.24V6h2.27v1.04h.03c.32-.6 1.09-1.23 2.24-1.23 2.4 0 2.85 1.58 2.85 3.63v4.19zM3.56 4.96a1.37 1.37 0 110-2.75 1.37 1.37 0 010 2.75zM4.75 13.63H2.38V6h2.37v7.63zM14.81 0H1.18C.53 0 0 .52 0 1.16v13.68C0 15.48.53 16 1.18 16h13.63C15.47 16 16 15.48 16 14.84V1.16C16 .52 15.47 0 14.81 0z" />
    </svg>
  ),
  mail: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <rect x="1.5" y="3" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 4l5 4 5-4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  ),
  sun: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 1.5v1.5M8 13v1.5M14.5 8H13M3 8H1.5M12.6 3.4l-1.06 1.06M4.46 11.54L3.4 12.6M12.6 12.6l-1.06-1.06M4.46 4.46L3.4 3.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  moon: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M13 9.5A5.5 5.5 0 016.5 3a5.5 5.5 0 105.5 6.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
};

// ============ NAV ============
function Nav({ theme, onToggleTheme }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand">
          <span className="brand-logo"><img src={logoUrl} alt="logo" /></span>
          <span className="brand-name">
            <span>FABRICE</span>
            <span className="role">data scientist · IA</span>
          </span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#projects">Projets</a>
          <a className="nav-link" href="#about">À propos</a>
          <a className="nav-link" href="#stack">Stack</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        <div className="nav-cta">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="toggle theme">
            {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
          </button>
          <a className="btn btn-ghost" href="#"><Icon.github /> GitHub</a>
          <a className="btn btn-primary" href="#contact">Me recruter <Icon.arrow /></a>
        </div>
      </div>
    </nav>
  );
}

// ============ HERO CHATBOT DATA ============
const CHAT_QA = [
  {
    id: 'stack',
    q: 'Quelle est ta stack technique ?',
    a: [
      { type: 'text', text: "Au quotidien : Python (pandas, scikit-learn, PyTorch, XGBoost), SQL avancé, et Spark pour les gros volumes." },
      { type: 'chips', items: ['Python', 'SQL', 'PyTorch', 'scikit-learn', 'XGBoost', 'Spark', 'Airflow', 'MLflow', 'Docker', 'AWS'] },
      { type: 'text', text: "Côté MLOps : Airflow, MLflow, Docker, et déploiements sur AWS (SageMaker, Lambda)." },
    ],
  },
  {
    id: 'projects',
    q: 'Tes projets les plus marquants ?',
    a: [
      { type: 'text', text: "Trois favoris, pour des secteurs très différents :" },
      {
        type: 'projects',
        items: [
          { tag: 'Retail', title: 'Prédiction de churn', metric: '−18% churn · €1.2M sauvés' },
          { tag: 'Banque', title: 'Scoring crédit temps réel', metric: 'AUC 0.91 · <120ms latence' },
          { tag: 'Industrie', title: 'Maintenance prédictive', metric: '−34% pannes · ROI 6 mois' },
        ],
      },
      { type: 'text', text: "Détails complets dans la section Projets ci-dessous ↓" },
    ],
  },
  {
    id: 'metrics',
    q: 'Quels résultats concrets ?',
    a: [
      { type: 'text', text: "Quelques chiffres représentatifs :" },
      {
        type: 'metrics',
        items: [
          { v: '0.94', l: 'AUC ROC', d: '↑ +0.07 vs baseline' },
          { v: '−18%', l: 'churn rate', d: 'sur 6 mois' },
          { v: '€1.2M', l: 'revenu sauvé', d: 'est. annuel' },
        ],
      },
    ],
  },
  {
    id: 'xp',
    q: "Combien d'années d'expérience ?",
    a: [
      { type: 'text', text: "5+ ans en data science — d'abord junior chez un cabinet conseil, puis lead DS dans une scale-up retail (3 ans)." },
      { type: 'text', text: "12 modèles en production, sur 4 domaines : retail, banque, industrie, santé." },
    ],
  },
  {
    id: 'dispo',
    q: 'Es-tu disponible ?',
    a: [
      { type: 'text', text: "Oui — ouvert aux opportunités CDI et missions freelance." },
      { type: 'text', text: "📍 Paris ou remote (France · UE)\n💼 Démarrage possible sous 4 semaines\n💬 Réponse sous 24h en semaine" },
    ],
  },
  {
    id: 'contact',
    q: 'Comment te contacter ?',
    a: [
      { type: 'text', text: "Le plus simple : faire défiler jusqu'à la section contact en bas de page, ou cliquer sur « Me contacter » dans le hero." },
      { type: 'cta', label: 'Aller au contact', href: '#contact' },
    ],
  },
];

function HeroPreview() {
  const [messages, setMessages] = useState([
    { from: 'bot', kind: 'text', text: "👋 Bonjour ! Je suis l'assistant de ce portfolio. Posez-moi une question sur le profil." },
  ]);
  const [asked, setAsked] = useState(new Set());
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const askedRef = useRef(asked);
  askedRef.current = asked;
  const typingRef = useRef(typing);
  typingRef.current = typing;

  const ask = (qa) => {
    if (askedRef.current.has(qa.id) || typingRef.current) return;
    setAsked((s) => new Set(s).add(qa.id));
    setMessages((m) => [...m, { from: 'user', kind: 'text', text: qa.q }]);
    setTyping(true);
    let delay = 700;
    qa.a.forEach((block, i) => {
      setTimeout(() => {
        const { type, ...rest } = block;
        setMessages((m) => [...m, { from: 'bot', kind: type, ...rest }]);
        if (i === qa.a.length - 1) setTyping(false);
      }, delay);
      delay += 600;
    });
  };

  const reset = () => {
    setMessages([{ from: 'bot', kind: 'text', text: "👋 Bonjour ! Je suis l'assistant de ce portfolio. Posez-moi une question sur le profil." }]);
    setAsked(new Set());
  };

  const remaining = CHAT_QA.filter((qa) => !asked.has(qa.id));

  return (
    <div className="hero-preview hero-chat">
      <div className="hero-preview-head">
        <div className="hero-preview-dots"><span /><span /><span /></div>
        <span className="hero-chat-title">
          <span className="hero-chat-dot" />
          chat · discutez avec ce profil
        </span>
        <button className="hero-chat-reset" onClick={reset} aria-label="Recommencer la conversation" title="Recommencer">↻</button>
      </div>
      <div className="hero-chat-body" ref={scrollRef}>
        {messages.map((m, i) => <ChatMessage key={i} m={m} />)}
        {typing && (
          <div className="chat-row chat-row-bot">
            <div className="chat-bubble chat-bubble-bot chat-typing">
              <span /><span /><span />
            </div>
          </div>
        )}
      </div>
      <div className="hero-chat-suggest">
        {remaining.length === 0 ? (
          <button className="chat-chip chat-chip-reset" onClick={reset}>↻ Recommencer</button>
        ) : (
          remaining.slice(0, 3).map((qa) => (
            <button key={qa.id} className="chat-chip" onClick={() => ask(qa)} disabled={typing}>
              {qa.q}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

function ChatMessage({ m }) {
  const side = m.from === 'user' ? 'user' : 'bot';
  if (m.kind === 'text') {
    return (
      <div className={`chat-row chat-row-${side}`}>
        <div className={`chat-bubble chat-bubble-${side}`}>
          {m.text.split('\n').map((line, i) => <div key={i}>{line}</div>)}
        </div>
      </div>
    );
  }
  if (m.kind === 'chips') {
    return (
      <div className={`chat-row chat-row-${side}`}>
        <div className={`chat-bubble chat-bubble-${side} chat-bubble-rich`}>
          <div className="chat-tagcloud">
            {m.items.map((t) => <span key={t} className="chat-tag">{t}</span>)}
          </div>
        </div>
      </div>
    );
  }
  if (m.kind === 'projects') {
    return (
      <div className={`chat-row chat-row-${side}`}>
        <div className={`chat-bubble chat-bubble-${side} chat-bubble-rich`}>
          <div className="chat-projects">
            {m.items.map((p, i) => (
              <div key={i} className="chat-project">
                <span className="chat-project-tag">{p.tag}</span>
                <div className="chat-project-title">{p.title}</div>
                <div className="chat-project-metric">{p.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (m.kind === 'metrics') {
    return (
      <div className={`chat-row chat-row-${side}`}>
        <div className={`chat-bubble chat-bubble-${side} chat-bubble-rich`}>
          <div className="chat-metrics">
            {m.items.map((x, i) => (
              <div key={i} className="chat-metric">
                <div className="v">{x.v}</div>
                <div className="l">{x.l}</div>
                <div className="d">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (m.kind === 'cta') {
    return (
      <div className={`chat-row chat-row-${side}`}>
        <div className={`chat-bubble chat-bubble-${side} chat-bubble-rich`}>
          <a className="btn btn-primary" href={m.href}>{m.label} →</a>
        </div>
      </div>
    );
  }
  return null;
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="container">
        <div className="hero-split">
          <div className="hero-left">
            <span className="hero-tag">
              <span className="pill">v3</span>
              <span>Disponible · CDI / Freelance — Île-de-France ou remote</span>
            </span>
            <h1 className="hero-title">
              Je transforme les données <br />
              en <span className="accent">décisions mesurables.</span>
            </h1>
            <p className="hero-sub">
              Data scientist orienté impact business — du notebook exploratoire au modèle en production.
              Mes projets parlent avant mon CV : explorez ce que j'ai livré, pour qui, et avec quels résultats chiffrés.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href="#projects">Voir les projets <Icon.arrow /></a>
              <a className="btn btn-secondary btn-lg" href="#contact"><Icon.mail /> Me contacter</a>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-item"><span className="v">5+</span><span className="l">années d'expérience</span></div>
              <div className="hero-meta-item"><span className="v">12</span><span className="l">modèles en production</span></div>
              <div className="hero-meta-item"><span className="v">4</span><span className="l">domaines métier</span></div>
              <div className="hero-meta-item"><span className="v">MSc</span><span className="l">data science</span></div>
            </div>
          </div>
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

// ============ TRUST BAR ============
function TrustBar() {
  const logos = ['ENTREPRISE A', 'CLIENT B', 'STARTUP C', 'GROUPE D', 'LABO E', 'CABINET F', 'AGENCE G', 'TECH H'];
  const doubled = [...logos, ...logos];
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-label">Ils m'ont fait confiance · placeholder</div>
      </div>
      <div className="trust-marquee">
        <div className="trust-track">
          {doubled.map((l, i) => <div key={i} className="trust-logo">{l}</div>)}
        </div>
      </div>
    </section>
  );
}

// ============ PROJECTS ============
const PROJECTS = [
  {
    id: 1,
    featured: true,
    label: 'visualisation · churn dashboard',
    domain: 'Retail · 2025',
    type: 'Production',
    title: 'Modèle de prédiction de churn pour un retailer européen',
    desc: "Pipeline complet de feature engineering, entraînement (XGBoost + calibration) et déploiement temps réel via FastAPI/Kubernetes. Réduction du churn de 18% sur le segment cible.",
    stack: ['Python', 'XGBoost', 'FastAPI', 'Airflow', 'AWS'],
    impact: 'AUC 0.94 · €1.2M/an',
  },
  {
    id: 2,
    label: 'NLP · classifieur multilingue',
    domain: 'SaaS · 2024',
    type: 'Open source',
    title: 'Classifieur de tickets support multilingue',
    desc: "Fine-tuning d'un modèle transformer sur 12 langues pour router automatiquement les tickets vers les bonnes équipes. 92% de précision en production.",
    stack: ['PyTorch', 'HuggingFace', 'Docker'],
    impact: '−40% temps de traitement',
  },
  {
    id: 3,
    label: 'computer vision · contrôle qualité',
    domain: 'Industrie · 2024',
    type: 'Mission',
    title: 'Détection de défauts sur ligne de production',
    desc: "Réseau CNN entraîné sur images thermiques pour détecter en temps réel les défauts de soudure. Déployé sur 3 sites industriels avec inférence edge.",
    stack: ['TensorFlow', 'OpenCV', 'TensorRT'],
    impact: '99.2% recall',
  },
  {
    id: 4,
    label: 'forecasting · time series',
    domain: 'Finance · 2023',
    type: 'R&D',
    title: 'Prévision de volatilité multi-actifs',
    desc: "Modèle hybride GARCH + LSTM pour forecaster la volatilité intraday sur un panier de 50 actifs. Backtests sur 5 ans de données tick.",
    stack: ['Python', 'PyTorch', 'kdb+'],
    impact: 'Sharpe +0.4',
  },
  {
    id: 5,
    label: 'recommandation · graph ML',
    domain: 'E-commerce · 2023',
    type: 'Production',
    title: 'Système de recommandation par graphes',
    desc: "Graph Neural Network pour recommandation personnalisée à partir des interactions utilisateurs. A/B test : +12% de CTR sur la home.",
    stack: ['DGL', 'Neo4j', 'Spark'],
    impact: '+12% CTR',
  },
  {
    id: 6,
    label: 'causal inference · pricing',
    domain: 'Marketplace · 2022',
    type: 'Étude',
    title: "Estimation causale de l'élasticité-prix",
    desc: "Application de double machine learning et de quasi-expériences pour estimer l'élasticité-prix par segment. A informé la stratégie de pricing dynamique.",
    stack: ['EconML', 'CausalML', 'R'],
    impact: '+€340k MRR',
  },
];

function ProjectModal({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div className="modal-head-meta">
            <span className="crumb">{p.domain} · {p.type}</span>
            <span className="title">{p.title}</span>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Fermer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-hero">
            <div className="modal-hero-stripes" />
            <span className="modal-hero-label">{p.label}</span>
          </div>

          <div className="modal-content">
            <div className="modal-meta-row">
              <div className="item"><span className="k">Client</span><span className="v">Placeholder S.A.</span></div>
              <div className="item"><span className="k">Période</span><span className="v">{p.domain.split('·')[1]?.trim() || '2024'}</span></div>
              <div className="item"><span className="k">Rôle</span><span className="v">Lead Data Scientist</span></div>
              <div className="item"><span className="k">Équipe</span><span className="v">4 personnes</span></div>
              <div className="item"><span className="k">Impact</span><span className="v">{p.impact}</span></div>
            </div>

            <div className="modal-section">
              <h3>Contexte</h3>
              <h2>Le problème business · placeholder</h2>
              <p>{p.desc}</p>
              <p>Placeholder. Décrivez ici le contexte business : pourquoi ce projet a été lancé, quelles
                contraintes (réglementaires, techniques, budgétaires) ont façonné l'approche, et quels
                étaient les enjeux pour les équipes métier.</p>
            </div>

            <div className="modal-image">
              <div className="modal-hero-stripes" />
              <span className="ph">Image · architecture du système · placeholder</span>
            </div>

            <div className="modal-section">
              <h3>Approche</h3>
              <h2>Méthodologie et choix techniques</h2>
              <p>Placeholder. Détaillez ici votre démarche : exploration des données, hypothèses
                testées, modèles comparés (baselines puis itérations), validations croisées, métriques
                choisies et pourquoi.</p>
              <ul>
                <li>EDA approfondie sur 3 ans d'historique · placeholder</li>
                <li>Feature engineering · 47 variables dérivées</li>
                <li>Comparaison baselines (régression logistique) vs gradient boosting</li>
                <li>Calibration de probabilités via isotonic regression</li>
                <li>Tests A/B en production sur 4 semaines</li>
              </ul>
            </div>

            <div className="modal-images-grid">
              <div className="modal-image"><div className="modal-hero-stripes" /><span className="ph">EDA · distributions</span></div>
              <div className="modal-image"><div className="modal-hero-stripes" /><span className="ph">Feature importance</span></div>
            </div>

            <div className="modal-section">
              <h3>Démo</h3>
              <h2>Le modèle en action</h2>
              <div className="modal-video">
                <span className="video-duration">2:34</span>
                <span className="video-label">Démo · placeholder</span>
                <span className="play-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3l12 7-12 7V3z"/>
                  </svg>
                </span>
              </div>
            </div>

            <div className="modal-section">
              <h3>Stack technique</h3>
              <div className="modal-stack">
                {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                <span className="tag">Git</span><span className="tag">CI/CD</span>
                <span className="tag">Monitoring · Grafana</span>
              </div>
            </div>

            <div className="modal-section">
              <h3>Résultats</h3>
              <h2>Impact mesurable</h2>
              <p>Placeholder. Listez ici les chiffres précis : métriques de modèle (AUC, precision,
                recall) ET métriques business (revenu, coût économisé, NPS). Mettez en avant la
                comparaison avant/après.</p>
              <div className="modal-quote">
                "Le modèle a dépassé nos attentes : un ROI de 4x dès le premier trimestre,
                avec une équipe qui a pleinement adopté l'outil." · placeholder
                <span className="author">Sponsor · Direction Data — Placeholder S.A.</span>
              </div>
            </div>

            <div className="modal-section">
              <h3>Apprentissages</h3>
              <h2>Ce que je retiens</h2>
              <ul>
                <li>L'importance d'une discussion hebdomadaire avec les équipes métier · placeholder</li>
                <li>Le calibration step est souvent négligé mais critique en production</li>
                <li>Investir tôt dans l'observabilité paie au bout de 3 mois</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="modal-foot">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-soft)' }}>
            Étude de cas · placeholder
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            <a className="btn btn-secondary" href="#"><Icon.github /> Repo GitHub</a>
            <a className="btn btn-primary" href="#contact" onClick={onClose}>En discuter <Icon.arrow /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p, onOpen }) {
  return (
    <article className={`card ${p.featured ? 'card-featured' : ''}`} onClick={() => onOpen(p)}>
      <div className="card-thumb">
        <div className="card-thumb-stripes" />
        <span className="card-thumb-label">{p.label}</span>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span>{p.domain}</span>
          <span className="dot" />
          <span>{p.type}</span>
        </div>
        <h3 className="card-title">{p.title}</h3>
        <p className="card-desc">{p.desc}</p>
        <div className="card-stack">
          {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
          <span className="tag tag-accent">{p.impact}</span>
        </div>
      </div>
      <div className="card-foot">
        <span>Étude de cas · placeholder</span>
        <span className="arrow">Lire <Icon.arrowUpRight /></span>
      </div>
    </article>
  );
}

function Projects() {
  const [filter, setFilter] = useState('Tous');
  const [openProject, setOpenProject] = useState(null);
  const filters = ['Tous', 'Production', 'R&D', 'Open source', 'Mission', 'Étude'];
  const filtered = filter === 'Tous' ? PROJECTS : PROJECTS.filter(p => p.type === filter);
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Projets · {PROJECTS.length} études de cas</span>
          <h2 className="section-title">Le travail d'abord, le CV ensuite.</h2>
          <p className="section-sub">
            Chaque projet est documenté avec le contexte business, l'approche, les résultats chiffrés
            et le code (quand il est public). Placeholder — remplacez par vos propres projets.
          </p>
        </div>
        <div className="filters">
          {filters.map(f => (
            <button key={f} className={`filter ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="cards-grid">
          {filtered.map(p => <ProjectCard key={p.id} p={p} onOpen={setOpenProject} />)}
        </div>
      </div>
      {openProject && <ProjectModal p={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
}

// ============ ABOUT ============
function About() {
  return (
    <section className="section" id="about" style={{ background: 'var(--bg-sunk)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">À propos · l'humain derrière les modèles</span>
        </div>
        <div className="about">
          <div className="about-text reveal" style={{ '--reveal-delay': '80ms' }}>
            <h3>Data scientist orienté terrain et impact business.</h3>
            <p>
              Placeholder. Je travaille à l'intersection de la rigueur scientifique et des contraintes
              business — un bon modèle qui n'est jamais déployé n'a aucune valeur. Je m'investis autant
              dans l'EDA, le feature engineering et la mise en production que dans la conversation avec
              les équipes métier pour comprendre ce qui compte vraiment.
            </p>
            <p>
              Placeholder. Mes terrains de jeu favoris : la prédiction sur séries temporelles, le NLP
              appliqué et la causalité. Je code en Python (et un peu de Rust pour le fun), et je suis
              convaincu que la moitié de la valeur d'un projet réside dans la clarté de la documentation.
            </p>
            <div className="hero-cta">
              <a className="btn btn-secondary" href="#"><Icon.linkedin /> LinkedIn</a>
              <a className="btn btn-secondary" href="#"><Icon.github /> GitHub</a>
              <a className="btn btn-ghost" href="#">Télécharger CV ↓</a>
            </div>
          </div>
          <aside className="about-info reveal" id="stack" style={{ '--reveal-delay': '160ms' }}>
            <div className="about-info-row"><span className="k">Localisation</span><span className="v">Paris · Remote OK</span></div>
            <div className="about-info-row"><span className="k">Disponibilité</span><span className="v">CDI / Freelance</span></div>
            <div className="about-info-row"><span className="k">Préavis</span><span className="v mono">2 mois</span></div>
            <div className="about-info-row"><span className="k">Langues</span><span className="v">FR · EN · placeholder</span></div>
            <div className="about-info-row"><span className="k">Stack core</span><span className="v mono">Python · SQL · PyTorch</span></div>
            <div className="about-info-row"><span className="k">Data eng</span><span className="v mono">Spark · Airflow · dbt</span></div>
            <div className="about-info-row"><span className="k">MLOps</span><span className="v mono">MLflow · Docker · K8s</span></div>
            <div className="about-info-row"><span className="k">Cloud</span><span className="v mono">AWS · GCP</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ============ CTA + FOOTER ============
function CTA() {
  return (
    <section className="cta-band" id="contact">
      <div className="container reveal">
        <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: 16 }}>Recrutement · placeholder</span>
        <h2>Un poste à pourvoir ?<br/>Parlons-en.</h2>
        <p>Réponse sous 48h ouvrées. Pas de blabla — décrivez le contexte et les enjeux, je vous dis si je peux aider.</p>
        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href="mailto:placeholder@email.com"><Icon.mail /> placeholder@email.com</a>
          <a className="btn btn-secondary btn-lg" href="#"><Icon.linkedin /> Message LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-logo"><img src="assets/logo.png" alt="logo"/></span>
              <span className="brand-name"><span>Prénom Nom</span><span className="role">data scientist · placeholder</span></span>
            </div>
            <p>Portfolio personnel · construit en HTML statique. Dernière mise à jour : placeholder.</p>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <a href="#projects">Projets</a>
            <a href="#about">À propos</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-links">
            <h4>Présence</h4>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Kaggle</a>
            <a href="#">Google Scholar</a>
          </div>
          <div className="footer-links">
            <h4>Ressources</h4>
            <a href="#">CV (PDF)</a>
            <a href="#">Articles · placeholder</a>
            <a href="#">Conférences</a>
            <a href="#">RSS</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 — placeholder. Tous droits réservés.</span>
          <span>Built with care · no tracking</span>
        </div>
      </div>
    </footer>
  );
}

// ============ APP ============
function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return document.documentElement.getAttribute('data-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TrustBar />
        <Projects />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
