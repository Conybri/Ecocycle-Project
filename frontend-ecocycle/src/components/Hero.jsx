import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              EcoCycle | Transforma tus <span className="text-green">residuos</span> en recursos
            </h1>
            <p className="hero-subtitle">
              Conéctate con empresas de reciclaje y contribuye a un mundo más sostenible. 
              Cada objeto reciclado cuenta para nuestro futuro.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large">Quiero Reciclar</button>
              <button className="btn btn-outline btn-large">Soy una Empresa</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">🌍♻️</div>
            <div className="hero-card">
              <div className="card-icon">♻️</div>
              <div className="card-text">
                <strong>+10,000 kg</strong><br />
                Reciclados este mes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
