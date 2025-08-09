import React, { useState } from 'react';

const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');

  const materials = [
    {
      id: 1,
      name: 'Botellas de Plástico (PET)',
      category: 'Plásticos',
      points: 15,
      unit: 'kg',
      image: '🍶'
    },
    {
      id: 2,
      name: 'Latas de Aluminio',
      category: 'Metales',
      points: 25,
      unit: 'kg',
      image: '🥤'
    },
    {
      id: 3,
      name: 'Botellas de Vidrio',
      category: 'Vidrio',
      points: 10,
      unit: 'kg',
      image: '🍾'
    },
    {
      id: 4,
      name: 'Papel de Oficina',
      category: 'Papel/Cartón',
      points: 8,
      unit: 'kg',
      image: '📄'
    },
    {
      id: 5,
      name: 'Cajas de Cartón',
      category: 'Papel/Cartón',
      points: 5,
      unit: 'kg',
      image: '📦'
    },
    {
      id: 6,
      name: 'Teclados de Computador',
      category: 'Electrónicos',
      points: 40,
      unit: 'kg',
      image: '⌨️'
    },
    {
      id: 7,
      name: 'Envases de Tetra Pak',
      category: 'Plásticos',
      points: 12,
      unit: 'kg',
      image: '🥛'
    },
    {
      id: 8,
      name: 'Chatarra de Acero',
      category: 'Metales',
      points: 18,
      unit: 'kg',
      image: '🔩'
    }
  ];

  const categories = ['Todos', 'Plásticos', 'Vidrio', 'Papel/Cartón', 'Metales', 'Electrónicos'];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'Todos' || material.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleAddToRecycling = (materialName) => {
    alert(`${materialName} añadido a tu lista de reciclaje!`);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Plásticos': '#3b82f6',
      'Vidrio': '#10b981',
      'Papel/Cartón': '#f59e0b',
      'Metales': '#6b7280',
      'Electrónicos': '#8b5cf6'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="catalog-page">
      <div className="container">
        {/* Sección de Título y Filtros */}
        <div className="catalog-header">
          <h1>Catálogo de Materiales Reciclables</h1>
          
          <div className="catalog-controls">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar material..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Galería de Materiales */}
        <div className="materials-grid">
          {filteredMaterials.length > 0 ? (
            filteredMaterials.map(material => (
              <div key={material.id} className="material-card">
                <div className="material-image">
                  {material.image}
                </div>
                <div className="material-info">
                  <h3>{material.name}</h3>
                  <span 
                    className="category-badge"
                    style={{ backgroundColor: getCategoryColor(material.category) }}
                  >
                    {material.category}
                  </span>
                  <div className="points-info">
                    <span className="points-value">{material.points} Puntos</span>
                    <span className="points-unit">/ {material.unit}</span>
                  </div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleAddToRecycling(material.name)}
                  >
                    Añadir a mi reciclaje
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No se encontraron materiales que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
