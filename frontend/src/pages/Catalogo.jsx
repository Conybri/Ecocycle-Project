import React, { useState } from "react";
import "./Catalogo.css";

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Plásticos", "Vidrio", "Papel/Cartón", "Metales", "Electrónicos"];

  const materials = [
    {
      id: 1,
      name: "Botellas de Plástico (PET)",
      category: "Plásticos",
      icon: "🍶",
      points: 15,
      description: "Botellas de plástico transparente o coloreado"
    },
    {
      id: 2,
      name: "Latas de Aluminio",
      category: "Metales",
      icon: "🥤",
      points: 25,
      description: "Latas de bebidas y alimentos"
    },
    {
      id: 3,
      name: "Botellas de Vidrio",
      category: "Vidrio",
      icon: "🍾",
      points: 10,
      description: "Botellas de vidrio transparente o coloreado"
    },
    {
      id: 4,
      name: "Papel de Oficina",
      category: "Papel/Cartón",
      icon: "📄",
      points: 8,
      description: "Papel blanco y de colores"
    },
    {
      id: 5,
      name: "Cajas de Cartón",
      category: "Papel/Cartón",
      icon: "📦",
      points: 5,
      description: "Cajas de cartón corrugado"
    },
    {
      id: 6,
      name: "Teclados de Computador",
      category: "Electrónicos",
      icon: "⌨️",
      points: 40,
      description: "Teclados y periféricos de computadora"
    },
    {
      id: 7,
      name: "Envases de Tetra Pak",
      category: "Plásticos",
      icon: "🥛",
      points: 12,
      description: "Envases de leche, jugos y otros líquidos"
    },
    {
      id: 8,
      name: "Chatarra de Acero",
      category: "Metales",
      icon: "🔩",
      points: 18,
      description: "Piezas de acero y metal"
    }
  ];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToRecycling = (materialId) => {
    // Aquí se implementaría la lógica para agregar a mi reciclaje
    console.log(`Material ${materialId} agregado a mi reciclaje`);
    alert(`${materials.find(m => m.id === materialId).name} agregado a tu reciclaje!`);
  };

  return (
    <div className="catalogo-page">
      <div className="container">
        <div className="catalogo-header">
          <h1>Catálogo de Materiales Reciclables</h1>
          <p>Descubre todos los materiales que puedes reciclar y los puntos que ganarás</p>
        </div>

        <div className="search-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar material..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        <div className="filters-section">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="materials-grid">
          {filteredMaterials.map(material => (
            <div key={material.id} className="material-card">
              <div className="material-icon">{material.icon}</div>
              <div className="material-info">
                <h3 className="material-name">{material.name}</h3>
                <span className="material-category">{material.category}</span>
                <p className="material-description">{material.description}</p>
                <div className="material-points">
                  <span className="points-number">{material.points}</span>
                  <span className="points-text">Puntos/ kg</span>
                </div>
              </div>
              <button
                className="add-button"
                onClick={() => handleAddToRecycling(material.id)}
              >
                Añadir a mi reciclaje
              </button>
            </div>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="no-results">
            <p>No se encontraron materiales que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
