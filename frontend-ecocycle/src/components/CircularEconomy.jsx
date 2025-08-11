import React from 'react';

const CircularEconomy = () => {
  const benefits = [
    { icon: '♻️', title: 'Reutilización', description: 'Damos nueva vida a los materiales' },
    { icon: '🌱', title: 'Regeneración', description: 'Restauramos el equilibrio natural' },
    { icon: '👥', title: 'Comunidad', description: 'Conectamos personas y empresas' },
    { icon: '💡', title: 'Innovación', description: 'Desarrollamos soluciones creativas' }
  ];

  return (
    <section className="circular-economy">
      <div className="container">
        <div className="economy-content">
          <div className="economy-text">
            <h2>Creamos un <span className="text-green">ciclo sostenible</span> para el futuro</h2>
            <p>
              La economía circular es el modelo que necesitamos para un futuro sostenible. 
              En lugar de seguir el modelo lineal de "usar y tirar", creamos un ciclo 
              donde los materiales se reutilizan, reciclan y regeneran continuamente.
            </p>
            <ul className="economy-benefits">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  {benefit.icon} <strong>{benefit.title}:</strong> {benefit.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="economy-image">🔄🌿</div>
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;
