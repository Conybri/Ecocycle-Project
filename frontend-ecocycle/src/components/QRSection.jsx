import React from 'react';

const QRSection = () => {
  return (
    <section className="qr-section">
      <div className="container">
        <div className="qr-content">
          <div className="qr-text">
            <h2>Accede desde tu <span className="text-green">móvil</span></h2>
            <p>
              Escanea el código QR con tu teléfono para acceder rápidamente a nuestra 
              plataforma y comenzar a reciclar desde cualquier lugar.
            </p>
          </div>
          <div className="qr-code">📱</div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
