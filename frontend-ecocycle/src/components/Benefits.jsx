import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: '🗑️',
      title: 'Reduce Residuos',
      description: 'Ayuda a disminuir la cantidad de desechos que terminan en vertederos y contamina el medio ambiente.'
    },
    {
      icon: '🏪',
      title: 'Apoya Empresas Locales',
      description: 'Conecta con empresas de reciclaje locales y contribuye al crecimiento de la economía circular.'
    },
    {
      icon: '⭐',
      title: 'Gana Puntos',
      description: 'Obtén recompensas por cada material reciclado y canjéalas por productos ecológicos.'
    }
  ];

  return (
    <section className="benefits" id="como-funciona">
      <div className="container">
        <h2 className="section-title">¿Por qué elegir EcoCycle?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
