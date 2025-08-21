import { useState } from "react";
import { Search, Recycle, Smartphone, Shirt, Package, Newspaper, Cpu, Filter, MapPin, Clock, Users, Star, Shield, ExternalLink, Building, Phone, Mail } from "lucide-react";
import CatalogoDetalleModal from "./CatalogoDetalleModal";

// Definición completa de empresas por categoría
const companies = {
  "Plástico": [
    { 
      name: "POLYKPLAST", 
      phone: "+56 2 2345 6789", 
      email: "contacto@polykplast.cl", 
      website: "www.polykplast.cl",
      address: "Av. Industrial 1234, Santiago",
      points: ["Santiago Centro", "Las Condes", "Providencia"],
      rating: 4.8,
      verified: true,
      description: "Especialistas en reciclaje de PET y polietileno"
    },
    { 
      name: "RECIPET", 
      phone: "+56 2 2876 5432", 
      email: "info@recipet.cl", 
      website: "www.recipet.cl",
      address: "Calle Reciclaje 567, Quilicura",
      points: ["Quilicura", "Renca", "Independencia"],
      rating: 4.7,
      verified: true,
      description: "Líder en recuperación de botellas PET"
    },
    { 
      name: "ECOPLÁSTICOS CHILE", 
      phone: "+56 2 2654 3210", 
      email: "ventas@ecoplasticoschile.cl", 
      website: "www.ecoplasticoschile.cl",
      address: "Parque Industrial 890, Maipú",
      points: ["Maipú", "Pudahuel", "Estación Central"],
      rating: 4.6,
      verified: true,
      description: "Transformación integral de residuos plásticos"
    }
  ],
  "Electrónicos": [
    { 
      name: "RECYCLA", 
      phone: "+56 2 2987 6543", 
      email: "contacto@recycla.cl", 
      website: "www.recycla.cl",
      address: "Av. Tecnológica 456, Las Condes",
      points: ["Las Condes", "Vitacura", "Lo Barnechea"],
      rating: 4.9,
      verified: true,
      description: "Especialistas en RAEE y equipos electrónicos"
    },
    { 
      name: "GESIMONT", 
      phone: "+56 2 2123 4567", 
      email: "info@gesimont.cl", 
      website: "www.gesimont.cl",
      address: "Calle Industrial 789, Ñuñoa",
      points: ["Ñuñoa", "Providencia", "Santiago Centro"],
      rating: 4.8,
      verified: true,
      description: "Gestión integral de residuos electrónicos"
    },
    { 
      name: "HIDRONOR", 
      phone: "+56 2 2456 7890", 
      email: "contacto@hidronor.cl", 
      website: "www.hidronor.cl",
      address: "Parque Empresarial 321, Cerrillos",
      points: ["Cerrillos", "Pedro Aguirre Cerda", "San Miguel"],
      rating: 4.7,
      verified: true,
      description: "Tratamiento seguro de equipos electrónicos"
    }
  ],
  "Textiles": [
    { 
      name: "REMBRE", 
      phone: "+56 2 2345 1234", 
      email: "info@rembre.cl", 
      website: "www.rembre.cl",
      address: "Av. Moda 123, Independencia",
      points: ["Independencia", "Recoleta", "Conchalí"],
      rating: 4.6,
      verified: true,
      description: "Reciclaje y reutilización de textiles"
    },
    { 
      name: "ECOFIBRAS", 
      phone: "+56 2 2789 0123", 
      email: "contacto@ecofibras.cl", 
      website: "www.ecofibras.cl",
      address: "Calle Sustentable 456, San Joaquín",
      points: ["San Joaquín", "Macul", "San Miguel"],
      rating: 4.5,
      verified: true,
      description: "Transformación de residuos textiles"
    },
    { 
      name: "TEXTIL VERDE", 
      phone: "+56 2 2567 8901", 
      email: "info@textilverde.cl", 
      website: "www.textilverde.cl",
      address: "Parque Textil 789, La Florida",
      points: ["La Florida", "Puente Alto", "La Pintana"],
      rating: 4.7,
      verified: true,
      description: "Recuperación y procesamiento de fibras"
    }
  ],
  "Vidrio": [
    { 
      name: "CRISTALERÍAS CHILE", 
      phone: "+56 2 2234 5678", 
      email: "ventas@cristaleriachile.cl", 
      website: "www.cristaleriachile.cl",
      address: "Av. Cristal 234, Quinta Normal",
      points: ["Quinta Normal", "Estación Central", "Renca"],
      rating: 4.8,
      verified: true,
      description: "Procesamiento industrial de vidrio reciclado"
    },
    { 
      name: "VIDRIOS LIRQUÉN", 
      phone: "+56 2 2876 5432", 
      email: "contacto@vidroslirquen.cl", 
      website: "www.vidroslirquen.cl",
      address: "Sector Industrial 567, Melipilla",
      points: ["Melipilla", "Talagante", "Peñaflor"],
      rating: 4.7,
      verified: true,
      description: "Reciclaje y fabricación de nuevos envases"
    },
    { 
      name: "RECICLA VIDRIO", 
      phone: "+56 2 2654 3210", 
      email: "info@reciclavidrio.cl", 
      website: "www.reciclavidrio.cl",
      address: "Calle Transparente 890, Pudahuel",
      points: ["Pudahuel", "Maipú", "Cerrillos"],
      rating: 4.6,
      verified: true,
      description: "Especialistas en vidrio de colores"
    }
  ],
  "Papel": [
    { 
      name: "SOREPA", 
      phone: "+56 2 2345 6789", 
      email: "contacto@sorepa.cl", 
      website: "www.sorepa.cl",
      address: "Av. Papelera 345, Puente Alto",
      points: ["Puente Alto", "La Florida", "San Bernardo"],
      rating: 4.8,
      verified: true,
      description: "Recuperación y procesamiento de papel"
    },
    { 
      name: "PAPELES CORDILLERA", 
      phone: "+56 2 2987 6543", 
      email: "info@papelescordillera.cl", 
      website: "www.papelescordillera.cl",
      address: "Parque Industrial 678, Colina",
      points: ["Colina", "Lampa", "Til Til"],
      rating: 4.7,
      verified: true,
      description: "Cartón corrugado y papel de oficina"
    },
    { 
      name: "ECO PAPEL", 
      phone: "+56 2 2123 4567", 
      email: "ventas@ecopapel.cl", 
      website: "www.ecopapel.cl",
      address: "Calle Renovable 901, Buin",
      points: ["Buin", "Paine", "San Bernardo"],
      rating: 4.6,
      verified: true,
      description: "Papel periódico y revistas"
    }
  ],
  "Metal": [
    { 
      name: "METALES Y COMPAÑÍA", 
      phone: "+56 2 2456 7890", 
      email: "contacto@metalesycompania.cl", 
      website: "www.metalesycompania.cl",
      address: "Av. Metalúrgica 123, San Bernardo",
      points: ["San Bernardo", "El Bosque", "La Cisterna"],
      rating: 4.9,
      verified: true,
      description: "Chatarra y metales ferrosos"
    },
    { 
      name: "RECICLA COBRE", 
      phone: "+56 2 2789 0123", 
      email: "info@reciclacobre.cl", 
      website: "www.reciclacobre.cl",
      address: "Sector Minero 456, Rancagua",
      points: ["Rancagua", "Machalí", "Graneros"],
      rating: 4.8,
      verified: true,
      description: "Especialistas en metales no ferrosos"
    },
    { 
      name: "ALUMINIO VERDE", 
      phone: "+56 2 2567 8901", 
      email: "ventas@aluminioverde.cl", 
      website: "www.aluminioverde.cl",
      address: "Parque Metal 789, Quilpué",
      points: ["Quilpué", "Villa Alemana", "Valparaíso"],
      rating: 4.7,
      verified: true,
      description: "Aluminio y aleaciones"
    }
  ]
};

// Ahora cada material tiene un array de objetos de empresa
const materials = [
    { 
      id: 1, 
      name: "Botellas de Plástico PET", 
      category: "Plástico", 
      image: "https://images.unsplash.com/photo-1572879071166-ac59b8973d04?w=400&h=300&fit=crop&q=80", 
      companies: companies["Plástico"], 
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
      companies: companies["Electrónicos"], 
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
      companies: companies["Textiles"], 
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
      companies: companies["Vidrio"], 
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
      companies: companies["Papel"], 
      distance: "2.9 km", 
      points: 10, 
      description: "Periódicos, revistas, cajas de cartón", 
      rating: 4.5, 
      verified: true, 
      processingTime: "1-2 días" 
    },
    { 
      id: 6, 
      name: "Metales y Chatarra", 
      category: "Metal", 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80", 
      companies: companies["Metal"], 
      distance: "5.5 km", 
      points: 35, 
      description: "Aluminio, cobre, hierro, acero y otros metales", 
      rating: 4.8, 
      verified: true, 
      processingTime: "1-3 días" 
    },
];

const categories = ["Todos", "Plástico", "Electrónicos", "Textiles", "Vidrio", "Papel", "Metal"];

const getCategoryIcon = (category) => {
    switch (category) {
        case "Plástico":
            return <Package className="h-8 w-8" />;
        case "Electrónicos":
            return <Smartphone className="h-8 w-8" />;
        case "Textiles":
            return <Shirt className="h-8 w-8" />;
        case "Vidrio":
            return <Package className="h-8 w-8" />;
        case "Papel":
            return <Newspaper className="h-8 w-8" />;
        case "Metal":
            return <Cpu className="h-8 w-8" />;
        default:
            return <Recycle className="h-8 w-8" />;
    }
};

const getCategoryGradient = (category) => {
    switch (category) {
        case "Plástico":
            return { background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)" };
        case "Electrónicos":
            return { background: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)" };
        case "Textiles":
            return { background: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)" };
        case "Vidrio":
            return { background: "linear-gradient(135deg, #06B6D4 0%, #67E8F9 100%)" };
        case "Papel":
            return { background: "linear-gradient(135deg, #FBBF24 0%, #FCD34D 100%)" };
        case "Metal":
            return { background: "linear-gradient(135deg, #6B7280 0%, #D1D5DB 100%)" };
        default:
            return { background: "linear-gradient(135deg, #34D399 0%, #6EE7B7 100%)" };
    }
};

export default function Catalogo() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [detalleOpen, setDetalleOpen] = useState(false);
    const [detalleMaterial, setDetalleMaterial] = useState(null);

    const filteredMaterials = materials.filter((material) => {
        const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase());
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
        <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen pt-20">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Catálogo de Materiales</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explora los materiales que puedes reciclar, gana puntos y ayuda al planeta.</p>
                </div>

                {/* Search */}
                <div className="mb-8">
                    <div className="relative max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="Buscar material..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-3 pl-4 pr-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-12">
                    <div className="flex justify-center gap-4 flex-wrap">
                        {categories.map(category => (
                            <button 
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 font-semibold rounded-full border-2 transition-colors ${selectedCategory === category ? 'bg-green-600 text-white border-green-600' : 'bg-transparent text-green-600 border-green-600 hover:bg-green-600 hover:text-white'}`}>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Materials Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredMaterials.map(material => (
                        <div key={material.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 flex flex-col">
                            {/* Image */}
                            <img src={material.image} alt={material.name} className="w-full h-48 object-cover" />
                            
                            {/* Content */}
                            <div className="p-6 space-y-4 flex flex-col flex-1">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                                        {material.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {material.description}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-green-600">{material.points}</span>
                                    <span className="text-sm text-gray-500">puntos/kg</span>
                                </div>

                                {/* Se elimina la previsualización de empresas aquí */}

                                {/* Call to Action */}
                                <div className="pt-4 border-t border-gray-100 mt-auto">
                                    <button 
                                        onClick={() => handleOpenDetalle(material)}
                                        className="w-full py-3 rounded-xl font-semibold text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                                        style={getCategoryGradient(material.category)}
                                    >
                                        Ver Detalles y Empresas
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredMaterials.length === 0 && (
                    <div className="text-center py-16 text-gray-500">
                        <p>No se encontraron materiales con esos filtros.</p>
                    </div>
                )}
            </div>

            <CatalogoDetalleModal material={detalleMaterial} open={detalleOpen} onClose={handleCloseDetalle} />
        </div>
    );
}