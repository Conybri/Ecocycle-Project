import React from "react";

const Blog = () => {
  const chileanArticles = [
    { id: 1, title: "Hoja de Ruta para un Chile Circular al 2040", source: "Gobierno de Chile", description: "El documento oficial que marca la estrategia del país. Es fundamental.", url: "https://mma.gob.cl/economia-circular/hoja-de-ruta/", category: "Documento Oficial" },
    { id: 2, title: "Ley REP", source: "Ministerio del Medio Ambiente", description: "El portal oficial sobre la Ley de Responsabilidad Extendida del Productor, un pilar de la economía circular en Chile.", url: "https://leyrep.cl/", category: "Legislación" },
    { id: 3, title: "Mercado Circular", source: "Plataforma Privada", description: "Plataforma que promueve la economía circular y conecta a distintos actores en Chile.", url: "https://mercadocircular.com/", category: "Plataforma" },
    { id: 4, title: "Pacto Chileno de los Plásticos", source: "Iniciativa Público-Privada", description: "Iniciativa clave para la gestión de plásticos en el país.", url: "https://pactodelosplasticos.cl/", category: "Iniciativa" },
    { id: 5, title: "Eurochile - Economía Circular", source: "Eurochile", description: "Artículos y noticias sobre la implementación de la economía circular en Chile con una perspectiva de colaboración con Europa.", url: "https://eurochile.cl/category/economia-circular/", category: "Colaboración Internacional" },
    { id: 6, title: "Reportajes sobre Economía Circular", source: "Gobierno de Santiago", description: "Muestra cómo se está impulsando el tema a nivel regional.", url: "https://www.gobiernosantiago.cl/reportajes/tag/Econom%C3%ADa+Circular", category: "Regional" },
  ];

  const internationalBlogs = [
    { id: 8, title: "Fundación Ellen MacArthur", source: "Fundación Internacional", description: "La organización líder mundial en economía circular. Su sitio en español es una mina de información.", url: "https://www.ellenmacarthurfoundation.org/es", category: "Referente Mundial" },
    { id: 9, title: "Fundación para la Economía Circular", source: "España", description: "Un referente ibérico con análisis de normativas y proyectos.", url: "https://economiacircular.org/", category: "Fundación" },
    { id: 10, title: "Ecolatras", source: "Blog Popular", description: "Un blog muy popular con consejos prácticos para un estilo de vida más sostenible.", url: "https://www.ecolatras.es/", category: "Lifestyle" },
  ];

  const handleVisitLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-green-50 min-h-screen pt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog EcoCycle</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Artículos y sitios relevantes sobre economía circular y sostenibilidad.</p>
        </div>

        <div className="space-y-12">
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 pb-4 border-b-2 border-green-500">Artículos y Sitios Relevantes de Chile</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chileanArticles.map(article => (
                <div key={article.id} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-xl hover:-translate-y-1 transition-transform flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wider">{article.category}</span>
                    <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded-md">#{article.id}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{article.title}</h3>
                    <p className="text-sm font-semibold text-green-700 mb-3">{article.source}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{article.description}</p>
                  </div>
                  <div className="mt-6 text-right">
                    <button onClick={() => handleVisitLink(article.url)} className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm">Visitar Sitio</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 pb-4 border-b-2 border-green-500">Blogs y Referentes Internacionales</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalBlogs.map(article => (
                <div key={article.id} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-xl hover:-translate-y-1 transition-transform flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wider">{article.category}</span>
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded-md">#{article.id}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{article.title}</h3>
                    <p className="text-sm font-semibold text-blue-700 mb-3">{article.source}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{article.description}</p>
                  </div>
                  <div className="mt-6 text-right">
                    <button onClick={() => handleVisitLink(article.url)} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">Visitar Sitio</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Mantente Informado</h2>
            <p className="mb-6 opacity-90">Suscríbete para recibir las últimas noticias sobre economía circular y sostenibilidad.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Tu correo electrónico" className="flex-grow p-3 rounded-md  bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="px-6 py-3 bg-white text-green-600 font-bold rounded-md hover:bg-gray-200 transition-colors">Suscribirse</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;