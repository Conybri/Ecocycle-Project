import { useState } from "react";
import { Search, Recycle, Smartphone, Shirt, Package, Newspaper, Cpu, Filter, MapPin, Clock, Users, Star, Shield } from "lucide-react";
import CatalogoDetalleModal from "./CatalogoDetalleModal";

// Información de empresas recicladoras chilenas (ejemplo)
const companyDirectory = {
    "EcoPlast": { nombre: "EcoPlast", direccion: "Av. Providencia 1234, Santiago", telefono: "+56 9 1234 5678", email: "contacto@ecoplast.cl", web: "https://ecoplast.cl" },
    "ReciclaMax": { nombre: "ReciclaMax", direccion: "Calle Los Recicladores 456, Viña del Mar", telefono: "+56 32 234 5678", email: "info@reciclamax.cl", web: "https://reciclamax.cl" },
    "PlastiVerde": { nombre: "PlastiVerde", direccion: "Camino Verde 789, Concepción", telefono: "+56 41 345 6789", email: "hola@plastiverde.cl", web: "https://plastiverde.cl" },
    "TechRecycle": { nombre: "TechRecycle", direccion: "Av. Tecnológica 101, Santiago", telefono: "+56 2 8765 4321", email: "contacto@techrecycle.cl", web: "https://techrecycle.cl" },
    "E-Waste Solutions": { nombre: "E-Waste Solutions", direccion: "Calle Electrónica 202, Valparaíso", telefono: "+56 32 876 5432", email: "info@ewaste.cl", web: "https://ewaste.cl" },
    "TextilVerde": { nombre: "TextilVerde", direccion: "Pasaje Textil 303, Temuco", telefono: "+56 45 123 4567", email: "contacto@textilverde.cl", web: "https://textilverde.cl" },
    "Ropa Nueva Vida": { nombre: "Ropa Nueva Vida", direccion: "Av. Renueva 404, La Serena", telefono: "+56 51 234 5678", email: "info@ropanuevavida.cl", web: "https://ropanuevavida.cl" },
    "CristalRecicla": { nombre: "CristalRecicla", direccion: "Calle Cristal 505, Rancagua", telefono: "+56 72 345 6789", email: "contacto@cristalrecicla.cl", web: "https://cristalrecicla.cl" },
    "Vidrio Nuevo": { nombre: "Vidrio Nuevo", direccion: "Av. Vidrio 606, Antofagasta", telefono: "+56 55 456 7890", email: "info@vidrionuevo.cl", web: "https://vidrionuevo.cl" },
    "PapelVerde": { nombre: "PapelVerde", direccion: "Calle Papel 707, Chillán", telefono: "+56 42 567 8901", email: "contacto@papelverde.cl", web: "https://papelverde.cl" },
    "Cartón Sostenible": { nombre: "Cartón Sostenible", direccion: "Av. Cartón 808, Talca", telefono: "+56 71 678 9012", email: "info@cartonsostenible.cl", web: "https://cartonsostenible.cl" },
    "CircuitRecycle": { nombre: "CircuitRecycle", direccion: "Calle Circuito 909, Iquique", telefono: "+56 57 789 0123", email: "contacto@circuitrecycle.cl", web: "https://circuitrecycle.cl" },
    "TechGreen": { nombre: "TechGreen", direccion: "Av. Verde 1010, Punta Arenas", telefono: "+56 61 890 1234", email: "info@techgreen.cl", web: "https://techgreen.cl" },
};

const materials = [
    { id: 1, name: "Botellas de Plástico PET", category: "Plástico", image: "https://www.paiscircular.cl/wp-content/uploads/2019/06/shutterstock_PET.jpg", companies: ["EcoPlast", "ReciclaMax", "PlastiVerde"], distance: "2.5 km", points: 15, description: "Botellas de bebidas, envases de alimentos", rating: 4.8, verified: true, processingTime: "2-3 días" },
    { id: 2, name: "Smartphones y Tablets", category: "Electrónicos", image: "https://natura-activa.com/wp-content/uploads/2021/06/peligro-de-la-basura-electronica.jpg", companies: ["TechRecycle", "E-Waste Solutions"], distance: "3.2 km", points: 50, description: "Dispositivos móviles, tablets, accesorios", rating: 4.9, verified: true, processingTime: "1-2 días" },
    { id: 3, name: "Ropa y Textiles", category: "Textiles", image: "https://www.residuosprofesional.com/wp-content/uploads/2023/05/Textiles-euric.jpg", companies: ["TextilVerde", "Ropa Nueva Vida"], distance: "1.8 km", points: 25, description: "Ropa usada, zapatos, accesorios textiles", rating: 4.6, verified: true, processingTime: "3-5 días" },
    { id: 4, name: "Vidrio Transparente", category: "Vidrio", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPCBgSg6KvN0OjFlTgxrOXcMp5z3XDL1EMdPxS_nUNKUOcoJzxYE6mY8alC6n12DcqQg&usqp=CAU", companies: ["CristalRecicla", "Vidrio Nuevo"], distance: "4.1 km", points: 20, description: "Botellas, frascos, envases de vidrio", rating: 4.7, verified: true, processingTime: "1-3 días" },
    { id: 5, name: "Papel y Cartón", category: "Papel", image: "https://www.reciclaplanetalimpio.cl/wp-content/uploads/2019/06/papel.jpg", companies: ["PapelVerde", "Cartón Sostenible"], distance: "2.9 km", points: 10, description: "Periódicos, revistas, cajas de cartón", rating: 4.5, verified: true, processingTime: "1-2 días" },
    { id: 6, name: "Componentes Electrónicos", category: "Electrónicos", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80", companies: ["CircuitRecycle", "TechGreen"], distance: "5.5 km", points: 75, description: "Placas madre, procesadores, memorias", rating: 4.9, verified: true, processingTime: "2-4 días" },
    // NUEVO MATERIAL: Tetra Pak
    { id: 7, name: "Envases Tetra Pak", category: "Tetra Pak", image: "https://reportesostenible.cl/mt-content/uploads/2023/05/reciclaje.jpg", companies: ["EcoPlast", "ReciclaMax", "Cartón Sostenible"], distance: "3.0 km", points: 18, description: "Envases de leche, jugos y otros líquidos en Tetra Pak", rating: 4.7, verified: true, processingTime: "2-4 días" },
    // NUEVO MATERIAL: Aluminio
    { id: 8, name: "Latas de Aluminio", category: "Aluminio", image: "https://www.canecas.com.co/images/Noticias_2021//reciclar-envases-enlatados1.jpg", companies: ["ReciclaMax", "EcoPlast", "Vidrio Nuevo"], distance: "2.2 km", points: 22, description: "Latas de bebidas, alimentos y otros productos de aluminio", rating: 4.8, verified: true, processingTime: "1-2 días" },
];

const categories = ["Todos", "Plástico", "Electrónicos", "Textiles", "Vidrio", "Papel", "Tetra Pak", "Aluminio"];

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
        case "Tetra Pak":
            return <Package className="h-8 w-8 text-orange-400" />;
        case "Aluminio":
            return <Cpu className="h-8 w-8 text-gray-400" />;
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
        case "Tetra Pak":
            return "bg-orange-100 text-orange-800";
        case "Aluminio":
            return "bg-gray-100 text-gray-500";
        default:
            return "bg-green-100 text-green-800";
    }
};

export default function Catalogo() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [detalleOpen, setDetalleOpen] = useState(false);
    const [detalleMaterial, setDetalleMaterial] = useState(null);
    const [empresaOpen, setEmpresaOpen] = useState(false);
    const [empresaDetalle, setEmpresaDetalle] = useState(null);

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

    const handleOpenEmpresa = (companyName) => {
        setEmpresaDetalle(companyDirectory[companyName]);
        setEmpresaOpen(true);
    };

    const handleCloseEmpresa = () => {
        setEmpresaOpen(false);
        setEmpresaDetalle(null);
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
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-2xl font-bold text-green-600">{material.points}</span>
                                        <span className="text-sm text-gray-500">puntos/kg</span>
                                    </div>
                                    {/* Botones de empresas */}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {material.companies.map(company => (
                                            <button
                                                key={company}
                                                onClick={() => handleOpenEmpresa(company)}
                                                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold border border-green-300 hover:bg-green-200 transition-colors"
                                            >
                                                {company}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Botón Ver Detalles eliminado para un diseño más directo */}
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
            <CatalogoDetalleModal material={detalleMaterial} open={detalleOpen} onClose={handleCloseDetalle} onOpenEmpresa={handleOpenEmpresa} />

            {/* Modal de empresa - diseño innovador, ordenado y minimalista */}
            {empresaOpen && empresaDetalle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl shadow-2xl p-0 max-w-sm w-full relative overflow-hidden border border-green-100">
                        <button onClick={handleCloseEmpresa} className="absolute top-4 right-4 text-gray-400 hover:text-green-600 transition-colors z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <div className="flex flex-col items-center justify-center px-8 py-10">
                            <div className="bg-green-100 rounded-full p-4 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0M12 15v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1 text-center tracking-tight">{empresaDetalle.nombre}</h2>
                            <div className="text-gray-500 text-sm mb-6 text-center">Reciclador certificado</div>
                            <div className="w-full flex flex-col gap-3 mb-4">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span className="truncate">{empresaDetalle.direccion}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                                    <span className="truncate">{empresaDetalle.telefono}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-4 4H8a4 4 0 01-4-4v-1" /></svg>
                                    <a href={`mailto:${empresaDetalle.email}`} className="truncate text-blue-600 underline">{empresaDetalle.email}</a>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                                    <a href={empresaDetalle.web} target="_blank" rel="noopener noreferrer" className="truncate text-blue-600 underline">{empresaDetalle.web}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}