import { useState } from "react";
import { Search, Recycle, Smartphone, Shirt, Package, Newspaper, Cpu, Filter, MapPin, Clock, Users, Star, Shield } from "lucide-react";
import CatalogoDetalleModal from "./CatalogoDetalleModal";

const materials = [
    { id: 1, name: "Botellas de Plástico PET", category: "Plástico", image: "https://images.unsplash.com/photo-1572879071166-ac59b8973d04?w=400&h=300&fit=crop&q=80", companies: ["EcoPlast", "ReciclaMax", "PlastiVerde"], distance: "2.5 km", points: 15, description: "Botellas de bebidas, envases de alimentos", rating: 4.8, verified: true, processingTime: "2-3 días" },
    { id: 2, name: "Smartphones y Tablets", category: "Electrónicos", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&q=80", companies: ["TechRecycle", "E-Waste Solutions"], distance: "3.2 km", points: 50, description: "Dispositivos móviles, tablets, accesorios", rating: 4.9, verified: true, processingTime: "1-2 días" },
    { id: 3, name: "Ropa y Textiles", category: "Textiles", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop&q=80", companies: ["TextilVerde", "Ropa Nueva Vida"], distance: "1.8 km", points: 25, description: "Ropa usada, zapatos, accesorios textiles", rating: 4.6, verified: true, processingTime: "3-5 días" },
    { id: 4, name: "Vidrio Transparente", category: "Vidrio", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80", companies: ["CristalRecicla", "Vidrio Nuevo"], distance: "4.1 km", points: 20, description: "Botellas, frascos, envases de vidrio", rating: 4.7, verified: true, processingTime: "1-3 días" },
    { id: 5, name: "Papel y Cartón", category: "Papel", image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&q=80", companies: ["PapelVerde", "Cartón Sostenible"], distance: "2.9 km", points: 10, description: "Periódicos, revistas, cajas de cartón", rating: 4.5, verified: true, processingTime: "1-2 días" },
    { id: 6, name: "Componentes Electrónicos", category: "Electrónicos", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80", companies: ["CircuitRecycle", "TechGreen"], distance: "5.5 km", points: 75, description: "Placas madre, procesadores, memorias", rating: 4.9, verified: true, processingTime: "2-4 días" },
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

const getCategoryColor = (category) => {
    switch (category) {
        case "Plástico":
            return "bg-blue-100 text-blue-800";
        case "Electrónicos":
            return "bg-purple-100 text-purple-800";
        case "Textiles":
            return "bg-pink-100 text-pink-800";
        case "Vidrio":
            return "bg-cyan-100 text-cyan-800";
        case "Papel":
            return "bg-yellow-100 text-yellow-800";
        case "Metal":
            return "bg-gray-100 text-gray-800";
        default:
            return "bg-green-100 text-green-800";
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
        <div className="bg-green-50 min-h-screen pt-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Catálogo de Materiales</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explora los materiales que puedes reciclar, gana puntos y ayuda al planeta.</p>
                </div>

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

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredMaterials.map(material => (
                        <div key={material.id} className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform flex flex-col overflow-hidden">
                            <img src={material.image} alt={material.name} className="w-full h-48 object-cover" />
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex-grow mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{material.name}</h3>
                                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${getCategoryColor(material.category)}`}>{material.category}</span>
                                    <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-green-600">{material.points}</span>
                                        <span className="text-sm text-gray-500">puntos/kg</span>
                                    </div>
                                </div>
                                <button onClick={() => handleOpenDetalle(material)} className="w-full mt-auto py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">Ver Detalles</button>
                            </div>
                        </div>
                    ))}
                </div>

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