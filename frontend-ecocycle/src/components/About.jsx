import React from 'react';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Misión',
      description: 'Facilitar el reciclaje inteligente y crear una comunidad comprometida con la sostenibilidad ambiental.'
    },
    {
      icon: '👁️',
      title: 'Visión',
      description: 'Ser la plataforma líder en reciclaje digital, transformando la manera en que el mundo gestiona sus residuos.'
    },
    {
      icon: '💚',
      title: 'Valores',
      description: 'Sostenibilidad, innovación, transparencia y compromiso con las futuras generaciones.'
    }
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">Conoce EcoCycle</h2>
          <h3 className="about-subtitle">
            Transformando el futuro del <span className="text-green">reciclaje</span>
          </h3>
          <p className="about-description">
            En EcoCycle, creemos que cada pequeña acción puede generar un gran impacto. 
            Nuestra plataforma conecta a personas conscientes del medio ambiente con empresas 
            de reciclaje, creando una red sostenible que beneficia a todos.
          </p>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
