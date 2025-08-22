import React, { useState, useEffect } from 'react';
import '../styles/EcoCycleDashboard.css'; // Import the CSS file

const EcoCycleDashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    const showSection = (section) => {
        setActiveSection(section);
    };

    useEffect(() => {
        // Animation for stat numbers
        const animateStats = () => {
            document.querySelectorAll('.stat-card .text-3xl').forEach(stat => {
                const finalValue = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
                let currentValue = 0;
                const increment = finalValue / 30;

                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        stat.textContent = stat.textContent.includes('$') ? '$' + finalValue.toLocaleString() : finalValue.toLocaleString();
                        clearInterval(timer);
                    } else {
                        stat.textContent = stat.textContent.includes('$') ? '$' + Math.floor(currentValue).toLocaleString() : Math.floor(currentValue).toLocaleString();
                    }
                }, 50);
            });
        };

        // Add click effects to cards
        document.querySelectorAll('.stat-card').forEach(card => {
            const handleClick = function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-2px)';
                }, 100);
            };
            card.addEventListener('click', handleClick);
            return () => card.removeEventListener('click', handleClick); // Cleanup
        });

        animateStats(); // Run animation on component mount
    }, [activeSection]); // Re-run effect if activeSection changes

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 logo-bg rounded-lg flex items-center justify-center">
                            <i className="fas fa-recycle text-white text-lg"></i>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">EcoCycle</h1>
                            <p className="text-xs text-gray-500">Dashboard</p>
                        </div>
                    </div>
                </div>

                {/* User Info */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-white text-sm"></i>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Usuario</p>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-eco-green rounded-full mr-2"></div>
                                <span className="text-xs text-gray-500">En línea</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-4">
                    <ul className="space-y-1 px-4">
                        <li>
                            <a href="#"
                               className={`sidebar-item flex items-center px-4 py-3 rounded-lg ${activeSection === 'dashboard' ? 'text-eco-blue bg-blue-50 font-medium' : 'text-gray-600 hover:text-eco-blue'}`}
                               onClick={() => showSection('dashboard')}>
                                <i className="fas fa-chart-pie mr-3"></i>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className={`sidebar-item flex items-center px-4 py-3 rounded-lg ${activeSection === 'orders' ? 'text-eco-blue bg-blue-50 font-medium' : 'text-gray-600 hover:text-eco-blue'}`}
                               onClick={() => showSection('orders')}>
                                <i className="fas fa-shopping-cart mr-3"></i>
                                Mis Órdenes
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className={`sidebar-item flex items-center px-4 py-3 rounded-lg ${activeSection === 'profile' ? 'text-eco-blue bg-blue-50 font-medium' : 'text-gray-600 hover:text-eco-blue'}`}
                               onClick={() => showSection('profile')}>
                                <i className="fas fa-user-circle mr-3"></i>
                                Mi Perfil
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className={`sidebar-item flex items-center px-4 py-3 rounded-lg ${activeSection === 'store' ? 'text-eco-blue bg-blue-50 font-medium' : 'text-gray-600 hover:text-eco-blue'}`}
                               onClick={() => showSection('store')}>
                                <i className="fas fa-store mr-3"></i>
                                Tienda
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <h2 className="text-2xl font-bold text-gray-800">Mi Dashboard</h2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input type="text" placeholder="Buscar productos, usuarios, órdenes..."
                                       className="w-96 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-blue focus:border-transparent"
                                       onChange={handleSearch} />
                                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-eco-blue">
                                <i className="fas fa-bell text-lg"></i>
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-2">Bienvenido de vuelta, aquí tienes un resumen de tu actividad.</p>
                </header>

                {/* Dashboard Content */}
                <main className={`flex-1 overflow-y-auto p-6 ${activeSection === 'dashboard' ? '' : 'hidden'}`} id="dashboard-content">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Mis Órdenes */}
                        <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-600 font-medium">Mis Órdenes</h3>
                                <i className="fas fa-shopping-cart text-eco-blue"></i>
                            </div>
                            <div className="text-3xl font-bold text-gray-800 mb-2">12</div>
                            <div className="flex items-center text-sm">
                                <span className="text-eco-green mr-1">+2</span>
                                <span className="text-gray-500">este mes</span>
                            </div>
                        </div>

                        {/* Favoritos */}
                        <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-600 font-medium">Favoritos</h3>
                                <i className="fas fa-heart text-eco-red"></i>
                            </div>
                            <div className="text-3xl font-bold text-gray-800 mb-2">24</div>
                            <div className="flex items-center text-sm">
                                <span className="text-eco-green mr-1">+5</span>
                                <span className="text-gray-500">este mes</span>
                            </div>
                        </div>

                        {/* Puntos de Fidelidad */}
                        <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-600 font-medium">Puntos de Fidelidad</h3>
                                <i className="fas fa-star text-eco-orange"></i>
                            </div>
                            <div className="text-3xl font-bold text-gray-800 mb-2">1,250</div>
                            <div className="flex items-center text-sm">
                                <span className="text-eco-green mr-1">+150</span>
                                <span className="text-gray-500">este mes</span>
                            </div>
                        </div>

                        {/* Total Gastado */}
                        <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-600 font-medium">Total Gastado</h3>
                                <i className="fas fa-dollar-sign text-eco-lime"></i>
                            </div>
                            <div className="text-3xl font-bold text-gray-800 mb-2">$2,340</div>
                            <div className="flex items-center text-sm">
                                <span className="text-eco-green mr-1">+$299</span>
                                <span className="text-gray-500">este mes</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Órdenes Recientes */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Órdenes Recientes</h3>
                                    <p className="text-gray-500 text-sm">Tus últimas compras</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                                    <div>
                                        <div className="font-medium text-gray-800">#ECO001</div>
                                        <div className="text-sm text-gray-500">2024-01-20</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-gray-800">$299.00</div>
                                        <span className="inline-block px-2 py-1 text-xs bg-eco-green text-white rounded-full">Entregado</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                                    <div>
                                        <div className="font-medium text-gray-800">#ECO002</div>
                                        <div className="text-sm text-gray-500">2024-01-15</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-gray-800">$159.00</div>
                                        <span className="inline-block px-2 py-1 text-xs bg-eco-orange text-white rounded-full">En Tránsito</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                                    <div>
                                        <div className="font-medium text-gray-800">#ECO003</div>
                                        <div className="text-sm text-gray-500">2024-01-10</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-gray-800">$89.00</div>
                                        <span className="inline-block px-2 py-1 text-xs bg-eco-blue text-white rounded-full">Procesando</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-4 py-2 text-eco-blue border border-eco-blue rounded-lg hover:bg-eco-blue hover:text-white transition-colors">
                                Ver Todas las Órdenes
                            </button>
                        </div>

                        {/* Productos Favoritos */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Productos Favoritos</h3>
                                    <p className="text-gray-500 text-sm">Artículos que te interesan</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6669664d-191b-467f-a24b-bf8ea3edb0b7.png" alt="Botella de agua reutilizable de acero inoxidable con diseño ecológico moderno" className="w-12 h-12 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-800">Botella EcoSteel</div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <i className="fas fa-star text-eco-orange mr-1"></i>
                                            4.9
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-gray-800">$39.99</div>
                                        <div className="text-sm text-eco-green">Disponible</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/10984de1-e355-4236-9b9d-7123f51c9d96.png" alt="Set de bolsas reutilizables de algodón orgánico para compras sostenibles" className="w-12 h-12 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-800">Bolsas EcoShopper</div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <i className="fas fa-star text-eco-orange mr-1"></i>
                                            4.7
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-gray-800">$24.99</div>
                                        <div className="text-sm text-eco-red">Agotado</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fe4d267a-7a43-4e28-991c-a4af4d74a690.png" alt="Panel solar portátil compacto para cargar dispositivos móviles de manera sostenible" className="w-12 h-12 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-800">Panel Solar Mini</div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <i className="fas fa-star text-eco-orange mr-1"></i>
                                            4.8
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-gray-800">$89.99</div>
                                        <div className="text-sm text-eco-green">Disponible</div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-4 py-2 text-eco-blue border border-eco-blue rounded-lg hover:bg-eco-blue hover:text-white transition-colors">
                                Ver Todos los Favoritos
                            </button>
                        </div>
                    </div>
                </main>

                {/* Orders Section */}
                <main className={`flex-1 overflow-y-auto p-6 ${activeSection === 'orders' ? '' : 'hidden'}`} id="orders-content">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Todas Mis Órdenes</h3>
                        <div className="space-y-4">
                            <div className="text-center py-12">
                                <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
                                <p className="text-gray-500">Sección de órdenes en desarrollo</p>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Profile Section */}
                <main className={`flex-1 overflow-y-auto p-6 ${activeSection === 'profile' ? '' : 'hidden'}`} id="profile-content">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Mi Perfil</h3>
                        <div className="text-center py-12">
                            <i className="fas fa-user-circle text-6xl text-gray-300 mb-4"></i>
                            <p className="text-gray-500">Sección de perfil en desarrollo</p>
                        </div>
                    </div>
                </main>

                {/* Store Section */}
                <main className={`flex-1 overflow-y-auto p-6 ${activeSection === 'store' ? '' : 'hidden'}`} id="store-content">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Tienda EcoCycle</h3>
                        <div className="text-center py-12">
                            <i className="fas fa-store text-6xl text-gray-300 mb-4"></i>
                            <p className="text-gray-500">Sección de tienda en desarrollo</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EcoCycleDashboard;
