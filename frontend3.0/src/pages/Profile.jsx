import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import '../styles/Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('resumen');

  if (!user) {
    return <div className="profile-loading">Cargando perfil...</div>;
  }

  // Placeholder data for sections not yet implemented in backend
  const ecoWarriorSince = "Enero 2024"; // Placeholder
  const memberSince = user.fechaRegistro ? new Date(user.fechaRegistro).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';
  const address = "Av. Providencia 1234, Providencia, Santiago, Chile"; // Placeholder
  const pointsToNextLevel = 250; // Placeholder

  const recyclingStats = {
    realizados: 23, // Placeholder
    co2Evitado: 125, // Placeholder
    energiaAhorrada: 850, // Placeholder
    aguaConservada: 420, // Placeholder
  };

  const recentActivity = [
    { id: 1, material: 'Botellas de Plástico PET', kg: 5, recycler: 'EcoPlast Reciclaje', pts: 75, date: '2024-01-15' },
    { id: 2, material: 'Papel y Cartón', kg: 12, recycler: 'ReciclaMax', pts: 120, date: '2024-01-10' },
    { id: 3, material: 'Vidrio Transparente', kg: 3, recycler: 'EcoVidrio Chile', pts: 60, date: '2024-01-08' },
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* User Header */}
        <div className="profile-header-card">
          <h2 className="profile-name">{user.nombre} {user.apellido}</h2>
          <p className="profile-eco-warrior">Eco-Warrior desde {ecoWarriorSince}</p>
          <p className="profile-address">{address}</p>
          <p className="profile-member-since">Miembro desde {memberSince}</p>
        </div>

        {/* Points Summary */}
        <div className="profile-points-summary">
          <div className="points-total">
            <span>{user.puntosTotales}</span>
            <p>Puntos totales</p>
          </div>
          <div className="points-next-level">
            <span>{pointsToNextLevel}</span>
            <p>puntos para siguiente nivel</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="profile-tabs">
          <button
            className={activeTab === 'resumen' ? 'active' : ''}
            onClick={() => setActiveTab('resumen')}
          >
            Resumen
          </button>
          <button
            className={activeTab === 'historial' ? 'active' : ''}
            onClick={() => setActiveTab('historial')}
          >
            Historial
          </button>
          <button
            className={activeTab === 'logros' ? 'active' : ''}
            onClick={() => setActiveTab('logros')}
          >
            Logros
          </button>
          <button
            className={activeTab === 'recompensas' ? 'active' : ''}
            onClick={() => setActiveTab('recompensas')}
          >
            Recompensas
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-tab-content">
          {activeTab === 'resumen' && (
            <div className="summary-section">
              <h3>Resumen de Actividad</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span>{recyclingStats.realizados}</span>
                  <p>Reciclajes realizados</p>
                </div>
                <div className="stat-item">
                  <span>{recyclingStats.co2Evitado} kg</span>
                  <p>CO₂ evitado</p>
                </div>
                <div className="stat-item">
                  <span>{recyclingStats.energiaAhorrada} kWh</span>
                  <p>Energía ahorrada</p>
                </div>
                <div className="stat-item">
                  <span>{recyclingStats.aguaConservada} L</span>
                  <p>Agua conservada</p>
                </div>
              </div>

              <h3>Actividad Reciente</h3>
              <div className="recent-activity-list">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-details">
                      <h4>{activity.material}</h4>
                      <p>{activity.kg} kg • {activity.recycler}</p>
                    </div>
                    <div className="activity-meta">
                      <span className="activity-points">+{activity.pts} pts</span>
                      <span className="activity-date">{activity.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Historial, Logros, Recompensas content would go here */}
          {activeTab === 'historial' && <div>Historial de reciclaje (próximamente)</div>}
          {activeTab === 'logros' && <div>Logros obtenidos (próximamente)</div>}
          {activeTab === 'recompensas' && <div>Recompensas disponibles (próximamente)</div>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
