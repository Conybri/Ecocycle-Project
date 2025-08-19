import { useState } from "react";
import { Search, MapPin, Recycle, Smartphone, Shirt, Package, Newspaper, Cpu, Filter, Star, Clock, Users, ArrowRight, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
// import CatalogoDetalleModal from "./CatalogoDetalleModal";

const materials = [
  {
    id: 1,
    name: "Botellas de Plástico PET",
    category: "Plástico",
    image: "https://images.unsplash.com/photo-1572879071166-ac59b8973d04?w=400&h=300&fit=crop&q=80",
    companies: ["EcoPlast", "ReciclaMax", "PlastiVerde"],
    distance: "2.5 km",
    points: 15,
    description: "Botellas de bebidas, envases de alimentos",
    rating: 4.8,
    verified: true,
    processingTime: "2-3 días"
  },
  {
    id: 2,
    name: "Smartphones y Tablets",
    category: "Electrónicos",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&q=80",
    companies: ["TechRecycle", "E-Waste Solutions"],
    distance: "3.2 km",
    points: 50,
    description: "Dispositivos móviles, tablets, accesorios",
    rating: 4.9,
    verified: true,
    processingTime: "1-2 días"
  },
  {
    id: 3,
    name: "Ropa y Textiles",
    category: "Textiles",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop&q=80",
    companies: ["TextilVerde", "Ropa Nueva Vida"],
    distance: "1.8 km",
    points: 25,
    description: "Ropa usada, zapatos, accesorios textiles",
    rating: 4.6,
    verified: true,
    processingTime: "3-5 días"
  },
  {
    id: 4,
    name: "Vidrio Transparente",
    category: "Vidrio",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80",
    companies: ["CristalRecicla", "Vidrio Nuevo"],
    distance: "4.1 km",
    points: 20,
    description: "Botellas, frascos, envases de vidrio",
    rating: 4.7,
    verified: true,
    processingTime: "1-3 días"
  },
  {
    id: 5,
    name: "Papel y Cartón",
    category: "Papel",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&q=80",
    companies: ["PapelVerde", "Cartón Sostenible"],
    distance: "2.9 km",
    points: 10,
    description: "Periódicos, revistas, cajas de cartón",
    rating: 4.5,
    verified: true,
    processingTime: "1-2 días"
  },
  {
    id: 6,
    name: "Componentes Electrónicos",
    category: "Electrónicos",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80",
    companies: ["CircuitRecycle", "TechGreen"],
    distance: "5.5 km",
    points: 75,
    description: "Placas madre, procesadores, memorias",
    rating: 4.9,
    verified: true,
    processingTime: "2-4 días"
  },
];

const categories = ["Todos", "Plástico", "Electrónicos", "Textiles", "Vidrio", "Papel", "Metal"];

const getCategoryIcon = (category) => {
  switch (category) {
    case "Plástico":
      return <Package className="h-5 w-5" />;
    case "Electrónicos":
      return <Smartphone className="h-5 w-5" />;
    case "Textiles":
      return <Shirt className="h-5 w-5" />;
    case "Vidrio":
      return <Package className="h-5 w-5" />;
    case "Papel":
      return <Newspaper className="h-5 w-5" />;
    case "Metal":
      return <Cpu className="h-5 w-5" />;
    default:
      return <Recycle className="h-5 w-5" />;
  }
};

const getCategoryColor = (category) => {
  switch (category) {
    case "Plástico":
      return "from-blue-500 to-blue-600";
    case "Electrónicos":
      return "from-purple-500 to-purple-600";
    case "Textiles":
      return "from-pink-500 to-pink-600";
    case "Vidrio":
      return "from-cyan-500 to-cyan-600";
    case "Papel":
      return "from-yellow-500 to-yellow-600";
    case "Metal":
      return "from-gray-500 to-gray-600";
    default:
      return "from-green-500 to-green-600";
  }
};

export default function Catalogo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [detalleOpen, setDetalleOpen] = useState(false);
  const [detalleMaterial, setDetalleMaterial] = useState(null);

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenDetalle = (material) => {
    setDetalleMaterial(material);
    setDetalleOpen(true);
  };
  const handleCloseDetalle = () => {
    setDetalleOpen(false);
    setDetalleMaterial(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-green-700 py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-blue-600/90"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-2xl">
            <Recycle className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Catálogo de
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Materiales
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Conecta con empresas certificadas y transforma tus desechos en recursos valiosos para el planeta
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">50K+</div>
              <div className="text-white/80 text-sm font-semibold">Materiales Reciclados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">200+</div>
              <div className="text-white/80 text-sm font-semibold">Empresas Certificadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">15</div>
              <div className="text-white/80 text-sm font-semibold">Ciudades Disponibles</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Enhanced Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                  <Filter className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="font-black text-gray-900 text-xl">Filtros</span>
                  <p className="text-gray-500 text-sm">Refina tu búsqueda</p>
                </div>
              </div>
              
              {/* Enhanced Search */}
              <div className="mb-10">
                <label className="text-sm font-bold text-gray-700 mb-4 block flex items-center gap-2">
                  <Search className="h-4 w-4 text-green-600" />
                  Buscar Material
                </label>
                <div className="relative group">
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                  <input
                    type="text"
                    placeholder="¿Qué quieres reciclar?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-14 w-full border-3 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white/90 font-medium text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
              
              {/* Enhanced Category Filter */}
              <div className="mb-10">
                <label className="text-sm font-bold text-gray-700 mb-4 block flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-600" />
                  Categoría
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border-3 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white/90 font-semibold text-gray-900"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Enhanced Location Filter */}
              <div className="mb-10">
                <label className="text-sm font-bold text-gray-700 mb-4 block flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  Ubicación
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full border-3 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white/90 font-semibold text-gray-900"
                >
                  <option value="">Todas las ciudades</option>
                  <option value="santiago">Santiago</option>
                  <option value="valparaiso">Valparaíso</option>
                  <option value="concepcion">Concepción</option>
                  <option value="antofagasta">Antofagasta</option>
                  <option value="temuco">Temuco</option>
                  <option value="iquique">Iquique</option>
                  <option value="rancagua">Rancagua</option>
                  <option value="talca">Talca</option>
                </select>
              </div>
              
              {/* Enhanced Distance Filter */}
              <div>
                <label className="text-sm font-bold text-gray-700 mb-4 block flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  Distancia máxima
                </label>
                <div className="space-y-4">
                  {["1 km", "5 km", "10 km", "20 km"].map((distance) => (
                    <div key={distance} className="flex items-center space-x-4 group">
                      <input 
                        type="checkbox" 
                        id={distance} 
                        className="w-6 h-6 text-green-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-green-500 focus:ring-3 transition-all"
                      />
                      <label htmlFor={distance} className="text-sm text-gray-700 font-semibold cursor-pointer group-hover:text-green-600 transition-colors">
                        {distance}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Materials Grid */}
          <div className="lg:col-span-4">
            {/* Enhanced Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="mb-4 lg:mb-0">
                <h2 className="text-2xl font-black text-gray-900 mb-2">
                  Materiales Disponibles
                </h2>
                <p className="text-gray-600 font-medium">
                  Mostrando <span className="text-green-600 font-black text-lg">{filteredMaterials.length}</span> opciones de reciclaje
                </p>
              </div>
              <select className="w-full lg:w-64 border-3 border-gray-200 rounded-2xl px-6 py-3 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 bg-white/90 font-semibold text-gray-900 transition-all">
                <option value="relevancia">Más relevantes</option>
                <option value="distancia">Menor distancia</option>
                <option value="puntos">Más puntos</option>
                <option value="rating">Mejor valorados</option>
              </select>
            </div>

            {/* Enhanced Materials Grid */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
              {filteredMaterials.map((material) => (
                <div key={material.id} className="group bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 cursor-pointer overflow-hidden border border-white/50 hover:scale-[1.02] hover:bg-white max-w-md mx-auto w-full flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={material.image}
                      alt={material.name}
                      className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    
                    {/* Enhanced badges */}
                    <div className="absolute top-5 left-5 flex flex-col gap-2">
                      {material.verified && (
                        <div className="flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                          <Shield className="h-3 w-3" />
                          Verificado
                        </div>
                      )}
                    </div>
                    
                    <div className="absolute top-5 right-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-black px-4 py-3 rounded-2xl shadow-xl transform transition-transform group-hover:scale-110">
                      +{material.points} pts
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute bottom-5 left-5">
                      <div className={`flex items-center gap-2 bg-gradient-to-r ${getCategoryColor(material.category)} text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm`}>
                        {getCategoryIcon(material.category)}
                        {material.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-6 flex-grow flex flex-col">
                    <div className="min-h-[5rem]">
                      <h3 className="font-black text-xl text-gray-900 group-hover:text-green-600 transition-colors duration-300 mb-3 leading-tight">
                        {material.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-medium h-20 overflow-hidden text-ellipsis">{material.description}</p>
                    </div>
                    
                    {/* Rating and stats */}
                    <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-bold text-gray-900">{material.rating}</span>
                        <span className="text-gray-500 text-sm">(127 reseñas)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="font-semibold text-sm">{material.processingTime}</span>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 border border-blue-100">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                        <span className="font-bold">{material.distance}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="font-semibold text-sm">{material.companies.length} empresas</span>
                      </div>
                    </div>
                    
                    {/* Companies */}
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-5 border border-green-100">
                      <p className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Users className="h-4 w-4 text-green-600" />
                        Empresas colaboradoras:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {material.companies.slice(0, 2).map((company) => (
                          <span key={company} className="bg-white border-2 border-green-300 text-green-700 rounded-xl px-3 py-2 text-xs font-bold shadow-sm truncate max-w-[140px]">
                            {company}
                          </span>
                        ))}
                        {material.companies.length > 2 && (
                          <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl px-3 py-2 text-xs font-bold shadow-sm">
                            +{material.companies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button
                      className="group w-full bg-gradient-to-r from-green-600 via-green-700 to-blue-700 hover:from-green-700 hover:via-green-800 hover:to-blue-800 text-white rounded-2xl py-5 font-black text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                      onClick={() => handleOpenDetalle(material)}
                    >
                      Ver Detalles Completos
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Empty State */}
            {filteredMaterials.length === 0 && (
              <div className="text-center py-24 col-span-full">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-40 h-40 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Search className="h-20 w-20 text-gray-400" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">No encontramos materiales</h3>
                <p className="text-gray-600 text-xl max-w-lg mx-auto leading-relaxed mb-8 font-medium">
                  Intenta ajustar tus filtros de búsqueda o explora diferentes categorías para encontrar opciones de reciclaje
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Todos");
                    setSelectedLocation("");
                  }}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Limpiar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* <CatalogoDetalleModal material={detalleMaterial} open={detalleOpen} onClose={handleCloseDetalle} /> */}
    </div>
  );
}