import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const steps = [
    {
      number: 1,
      icon: '👤',
      title: 'Regístrate y Explora',
      description: 'Crea tu cuenta gratuita en EcoCycle y descubre todas las opciones de reciclaje disponibles en tu área.'
    },
    {
      number: 2,
      icon: '🗑️',
      title: 'Selecciona tus Residuos',
      description: 'Navega por nuestro catálogo de materiales reciclables y selecciona los que tienes disponibles para reciclar.'
    },
    {
      number: 3,
      icon: '🚛',
      title: 'Elige una Empresa',
      description: 'Selecciona la empresa de reciclaje más conveniente para ti, basándote en ubicación, precios y reputación.'
    },
    {
      number: 4,
      icon: '📅',
      title: 'Agenda la Recolección',
      description: 'Programa una fecha y hora conveniente para que recojan tus materiales reciclables directamente en tu ubicación.'
    },
    {
      number: 5,
      icon: '🏆',
      title: 'Gana Puntos y Recompensas',
      description: 'Recibe puntos por cada kilogramo reciclado y canjéalos por productos ecológicos, descuentos y más beneficios.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué tipo de materiales puedo reciclar?',
      answer: 'Puedes reciclar una amplia variedad de materiales incluyendo plásticos (PET, HDPE), vidrio, papel, cartón, metales (aluminio, acero), y dispositivos electrónicos. Consulta nuestro catálogo completo para ver todos los materiales aceptados y sus valores en puntos.'
    },
    {
      question: '¿Tiene algún costo para el usuario?',
      answer: 'No, el uso de la plataforma EcoCycle es completamente gratuito para los usuarios. De hecho, tú ganas puntos por reciclar que puedes canjear por recompensas. Las empresas de reciclaje pagan por los materiales que recolectan.'
    },
    {
      question: '¿Cómo se canjean los puntos que gano?',
      answer: 'Los puntos se pueden canjear en nuestra tienda de recompensas por productos ecológicos, descuentos en tiendas aliadas, donaciones a causas ambientales, o incluso transferir a dinero en efectivo una vez alcances el mínimo requerido.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="how-it-works-page">
      {/* Sección de Introducción */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h1>Reciclar con EcoCycle es Fácil y Gratificante</h1>
              <p>
                Transformamos el reciclaje en una experiencia simple, rewarding y accesible para todos. 
                Con nuestra plataforma, conectas directamente con empresas de reciclaje certificadas, 
                ganas puntos por cada material reciclado y contribuyes activamente a un futuro más sostenible.
              </p>
            </div>
            <div className="intro-image">
              <div className="intro-image-placeholder">🌍♻️🌱</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Pasos */}
      <section className="steps-section">
        <div className="container">
          <h2>Tu Viaje de Reciclaje en 5 Pasos</h2>
          <div className="steps-timeline">
            {steps.map((step, index) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${activeAccordion === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span className="faq-icon">{activeAccordion === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${activeAccordion === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3>¿Listo para empezar?</h3>
            <p>Únete a miles de personas que ya están transformando el mundo, un reciclaje a la vez.</p>
            <div className="cta-buttons">
              <Link to="/catalogo" className="btn btn-primary btn-large">
                Ver Catálogo de Materiales
              </Link>
              <Link to="/register" className="btn btn-outline btn-large">
                Regístrate Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
