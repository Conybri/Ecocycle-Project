import React from "react";
import "../styles/Blog.css";

const Blog = () => {
  const chileanArticles = [
    {
      id: 1,
      title: "Hoja de Ruta para un Chile Circular al 2040",
      source: "Gobierno de Chile",
      description: "El documento oficial que marca la estrategia del país. Es fundamental.",
      url: "https://mma.gob.cl/economia-circular/hoja-de-ruta/",
      category: "Documento Oficial"
    },
    {
      id: 2,
      title: "Ley REP",
      source: "Ministerio del Medio Ambiente",
      description: "El portal oficial sobre la Ley de Responsabilidad Extendida del Productor, un pilar de la economía circular en Chile.",
      url: "https://leyrep.cl/",
      category: "Legislación"
    },
    {
      id: 3,
      title: "Mercado Circular",
      source: "Plataforma Privada",
      description: "Plataforma que promueve la economía circular y conecta a distintos actores en Chile.",
      url: "https://mercadocircular.com/",
      category: "Plataforma"
    },
    {
      id: 4,
      title: "Pacto Chileno de los Plásticos",
      source: "Iniciativa Público-Privada",
      description: "Iniciativa clave para la gestión de plásticos en el país.",
      url: "https://pactodelosplasticos.cl/",
      category: "Iniciativa"
    },
    {
      id: 5,
      title: "Eurochile - Economía Circular",
      source: "Eurochile",
      description: "Artículos y noticias sobre la implementación de la economía circular en Chile con una perspectiva de colaboración con Europa.",
      url: "https://eurochile.cl/category/economia-circular/",
      category: "Colaboración Internacional"
    },
    {
      id: 6,
      title: "Reportajes sobre Economía Circular",
      source: "Gobierno de Santiago",
      description: "Muestra cómo se está impulsando el tema a nivel regional.",
      url: "https://www.gobiernosantiago.cl/reportajes/tag/Econom%C3%ADa+Circular",
      category: "Regional"
    },
    {
      id: 7,
      title: "Fundación Chile (FCh)",
      source: "Fundación Chile",
      description: "Una organización clave que impulsa la innovación y sostenibilidad en el país.",
      url: "https://fch.cl/",
      category: "Fundación"
    }
  ];

  const internationalBlogs = [
    {
      id: 8,
      title: "Fundación Ellen MacArthur",
      source: "Fundación Internacional",
      description: "La organización líder mundial en economía circular. Su sitio en español es una mina de información.",
      url: "https://www.ellenmacarthurfoundation.org/es",
      category: "Referente Mundial"
    },
    {
      id: 9,
      title: "Fundación para la Economía Circular",
      source: "España",
      description: "Un referente ibérico con análisis de normativas y proyectos.",
      url: "https://economiacircular.org/",
      category: "Fundación"
    },
    {
      id: 10,
      title: "Ecolatras",
      source: "Blog Popular",
      description: "Un blog muy popular con consejos prácticos para un estilo de vida más sostenible.",
      url: "https://www.ecolatras.es/",
      category: "Lifestyle"
    },
    {
      id: 11,
      title: "Retema - Revista de Medio Ambiente",
      source: "Revista Técnica",
      description: "Noticias y artículos técnicos sobre sostenibilidad y economía circular.",
      url: "https://www.retema.es/temas/economia-circular",
      category: "Revista Técnica"
    },
    {
      id: 12,
      title: "Ambientum",
      source: "Portal de Noticias",
      description: "Portal con información muy completa sobre actualidad medioambiental.",
      url: "https://www.ambientum.com/ambientum/economia-circular",
      category: "Noticias"
    },
    {
      id: 13,
      title: "Sostenibilidad para todos",
      source: "Acciona",
      description: "Un blog corporativo muy bien hecho que explica conceptos de sostenibilidad de forma sencilla.",
      url: "https://www.sostenibilidad.com/",
      category: "Blog Corporativo"
    },
    {
      id: 14,
      title: "El Blog Salmón",
      source: "Blog de Economía",
      description: "Aunque es de economía, tiene excelentes artículos que explican el modelo de la economía circular.",
      url: "https://www.elblogsalmon.com/tag/economia-circular",
      category: "Economía"
    },
    {
      id: 15,
      title: "Reciclar.net",
      source: "Portal Especializado",
      description: "Un portal dedicado exclusivamente a noticias y guías sobre el mundo del reciclaje.",
      url: "https://www.recircular.net/",
      category: "Reciclaje"
    }
  ];

  const handleVisitLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h1>Blog EcoCycle</h1>
          <p>Artículos y sitios relevantes sobre economía circular y sostenibilidad</p>
        </div>

        <div className="blog-content">
          {/* Chilean Articles Section */}
          <section className="articles-section">
            <h2>Artículos y Sitios Relevantes de Chile</h2>
            <div className="articles-grid">
              {chileanArticles.map(article => (
                <div key={article.id} className="article-card">
                  <div className="article-header">
                    <span className="article-category">{article.category}</span>
                    <span className="article-number">#{article.id}</span>
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-source">{article.source}</p>
                    <p className="article-description">{article.description}</p>
                  </div>
                  <div className="article-actions">
                    <button 
                      className="visit-btn"
                      onClick={() => handleVisitLink(article.url)}
                    >
                      Visitar Sitio
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* International Blogs Section */}
          <section className="articles-section">
            <h2>Blogs y Referentes Internacionales (en Español)</h2>
            <div className="articles-grid">
              {internationalBlogs.map(article => (
                <div key={article.id} className="article-card">
                  <div className="article-header">
                    <span className="article-category">{article.category}</span>
                    <span className="article-number">#{article.id}</span>
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-source">{article.source}</p>
                    <p className="article-description">{article.description}</p>
                  </div>
                  <div className="article-actions">
                    <button 
                      className="visit-btn"
                      onClick={() => handleVisitLink(article.url)}
                    >
                      Visitar Sitio
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="newsletter-section">
            <div className="newsletter-content">
              <h2>Mantente Informado</h2>
              <p>Suscríbete para recibir las últimas noticias sobre economía circular y sostenibilidad</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Suscribirse</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
