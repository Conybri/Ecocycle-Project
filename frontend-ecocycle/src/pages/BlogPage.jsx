import React from 'react';

const BlogPage = () => {
  const featuredArticle = {
    id: 1,
    title: 'La nueva tecnología que convierte plástico en combustible',
    category: 'Innovación',
    excerpt: 'Un revolucionario proceso químico permite transformar residuos plásticos en combustible limpio, reduciendo significativamente la contaminación y creando una fuente de energía sostenible.',
    image: '⚗️',
    readTime: '8 min',
    publishDate: '15 de Enero, 2025',
    author: 'Dr. Patricia Herrera'
  };

  const articles = [
    {
      id: 2,
      title: '5 mitos sobre el reciclaje que debes conocer',
      image: '❓',
      publishDate: '12 de Enero, 2025',
      category: 'Educación'
    },
    {
      id: 3,
      title: 'Cómo crear tu propio compost en casa',
      image: '🌱',
      publishDate: '10 de Enero, 2025',
      category: 'Guías'
    },
    {
      id: 4,
      title: 'EcoCycle se asocia con 10 nuevas comunas',
      image: '🤝',
      publishDate: '8 de Enero, 2025',
      category: 'Noticias'
    },
    {
      id: 5,
      title: 'El impacto ambiental del reciclaje electrónico',
      image: '📱',
      publishDate: '5 de Enero, 2025',
      category: 'Ambiente'
    },
    {
      id: 6,
      title: 'Tendencias globales en economía circular 2025',
      image: '🌍',
      publishDate: '3 de Enero, 2025',
      category: 'Tendencias'
    },
    {
      id: 7,
      title: 'Guía completa para reciclar vidrio correctamente',
      image: '🍾',
      publishDate: '1 de Enero, 2025',
      category: 'Guías'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Innovación': '#8b5cf6',
      'Educación': '#3b82f6',
      'Guías': '#10b981',
      'Noticias': '#f59e0b',
      'Ambiente': '#16a34a',
      'Tendencias': '#ef4444'
    };
    return colors[category] || '#6b7280';
  };

  const handleReadArticle = (articleId) => {
    console.log(`Reading article ${articleId}`);
    // Aquí iría la navegación al artículo completo
  };

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h1>Nuestro Blog: Noticias para un Futuro Verde</h1>
          <p>Mantente informado sobre las últimas tendencias en reciclaje y sostenibilidad</p>
        </div>

        {/* Featured Article */}
        <section className="featured-article-section">
          <div className="featured-article">
            <div className="featured-image">{featuredArticle.image}</div>
            <div className="featured-content">
              <span 
                className="featured-category"
                style={{ backgroundColor: getCategoryColor(featuredArticle.category) }}
              >
                {featuredArticle.category}
              </span>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <div className="featured-meta">
                <span className="author">Por {featuredArticle.author}</span>
                <span className="date">{featuredArticle.publishDate}</span>
                <span className="read-time">⏱️ {featuredArticle.readTime}</span>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => handleReadArticle(featuredArticle.id)}
              >
                Leer Artículo Completo
              </button>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="articles-section">
          <h2>Más Artículos</h2>
          <div className="articles-grid">
            {articles.map((article) => (
              <div key={article.id} className="article-card">
                <div className="article-image">{article.image}</div>
                <div className="article-content">
                  <span 
                    className="article-category"
                    style={{ backgroundColor: getCategoryColor(article.category) }}
                  >
                    {article.category}
                  </span>
                  <h3>{article.title}</h3>
                  <div className="article-meta">
                    <span className="article-date">{article.publishDate}</span>
                  </div>
                  <button 
                    className="read-more-link"
                    onClick={() => handleReadArticle(article.id)}
                  >
                    Leer más →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
