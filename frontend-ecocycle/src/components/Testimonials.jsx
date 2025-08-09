import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      text: 'EcoCycle ha cambiado mi forma de ver el reciclaje. Ahora es fácil, rewarding y siento que realmente estoy contribuyendo al planeta.',
      author: 'María González',
      role: 'Usuario desde 2023'
    },
    {
      stars: 5,
      text: 'Como empresa, EcoCycle nos ayudó a conectar con más clientes comprometidos con el medio ambiente. Excelente plataforma.',
      author: 'EcoRecicla S.A.',
      role: 'Empresa aliada'
    },
    {
      stars: 5,
      text: 'Los puntos y recompensas hacen que reciclar sea divertido. Mis hijos también se han unido a la causa.',
      author: 'Carlos Ruiz',
      role: 'Familia eco-friendly'
    }
  ];

  const renderStars = (count) => {
    return '⭐'.repeat(count);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">{renderStars(testimonial.stars)}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
