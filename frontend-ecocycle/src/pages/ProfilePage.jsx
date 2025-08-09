import React from 'react';

const ProfilePage = () => {
  const handleLogout = () => {
    console.log('Logout clicked');
    // Aquí iría la lógica de cerrar sesión
  };

  return (
    <div className="profile-page">
      <div className="container">
        <h1>Mi Perfil</h1>
        
        <div className="profile-content">
          <div className="profile-welcome">
            <div className="profile-avatar">
              <div className="avatar-placeholder">👤</div>
            </div>
            <div className="profile-info">
              <h2>¡Bienvenido, Carlos Peña!</h2>
              <p>Miembro activo de la comunidad EcoCycle</p>
            </div>
          </div>
          
          <div className="profile-cards">
            <div className="profile-card">
              <h3>Información Personal</h3>
              <div className="info-item">
                <span className="info-label">Correo Electrónico:</span>
                <span className="info-value">carlos.pena@email.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Fecha de Registro:</span>
                <span className="info-value">15 de Enero, 2025</span>
              </div>
            </div>
            
            <div className="profile-card">
              <h3>Mis Estadísticas</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-info">
                    <span className="stat-number">1,250</span>
                    <span className="stat-label">Puntos Acumulados</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">♻️</div>
                  <div className="stat-info">
                    <span className="stat-number">32</span>
                    <span className="stat-label">Reciclajes Realizados</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">📅</div>
                  <div className="stat-info">
                    <span className="stat-number">2025</span>
                    <span className="stat-label">Miembro desde</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="profile-actions">
            <button className="btn btn-outline-red" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
