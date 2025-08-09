import React, { useState } from 'react';

const BusinessPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    rut: '',
    email: '',
    message: ''
  });

  const benefits = [
    {
      icon: '📦',
      title: 'Acceso a Material de Calidad',
      description: 'Conecta directamente con usuarios que clasifican materiales reciclables de alta calidad, garantizando mejor materia prima para tu proceso productivo.'
    },
    {
      icon: '📢',
      title: 'Visibilidad de Marca',
      description: 'Aumenta el reconocimiento de tu empresa como líder en sostenibilidad y atrae a consumidores conscientes del medio ambiente.'
    },
    {
      icon: '📊',
      title: 'Reportes de Impacto',
      description: 'Recibe informes detallados sobre tu impacto ambiental, incluyendo CO₂ evitado, materiales procesados y contribución a la economía circular.'
    },
    {
      icon: '🛡️',
      title: 'Cumplimiento Normativo',
      description: 'Facilita el cumplimiento de regulaciones ambientales y obtén certificaciones que fortalezcan tu posición en el mercado.'
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Regístrate en la Plataforma',
      description: 'Completa el proceso de registro empresarial y verifica tu cuenta.'
    },
    {
      number: 2,
      title: 'Publica tus Necesidades',
      description: 'Define qué tipos de materiales necesitas, cantidades y precios que ofreces.'
    },
    {
      number: 3,
      title: 'Recibe Material de Calidad',
      description: 'Los usuarios te contactan directamente con materiales clasificados y listos para procesar.'
    },
    {
      number: 4,
      title: 'Mide tu Impacto',
      description: 'Accede a dashboards completos para monitorear tu contribución ambiental.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Business form submitted:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    setFormData({
      companyName: '',
      rut: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="business-page">
      {/* Hero Section */}
      <section className="business-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Potencia tu Negocio con Sostenibilidad</h1>
              <p>
                Únete a la red de EcoCycle y conecta con miles de usuarios 
                comprometidos con el medio ambiente. Transforma residuos en 
                oportunidades de negocio mientras construyes un futuro más sostenible.
              </p>
              <button className="btn btn-primary btn-large">
                Registra tu Empresa
              </button>
            </div>
            <div className="hero-image">
              <div className="business-hero-placeholder">🏭🌱</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="business-benefits">
        <div className="container">
          <h2>¿Por qué asociarse con EcoCycle?</h2>
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

      {/* How It Works Section */}
      <section className="business-process">
        <div className="container">
          <h2>Cómo Funciona para Empresas</h2>
          <div className="process-steps">
            {processSteps.map((step) => (
              <div key={step.number} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="business-contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Comienza Hoy</h2>
              <p>
                Completa este formulario y nuestro equipo se pondrá en contacto 
                contigo para comenzar tu transformación hacia la sostenibilidad.
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Consultoría gratuita</span>
                </div>
                <div className="contact-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Implementación en 24 horas</span>
                </div>
                <div className="contact-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Soporte técnico continuo</span>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="companyName">Nombre de la Empresa *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="rut">RUT de la Empresa *</label>
                <input
                  type="text"
                  id="rut"
                  name="rut"
                  value={formData.rut}
                  onChange={handleInputChange}
                  placeholder="12.345.678-9"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email de Contacto *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje (Opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Cuéntanos sobre tu empresa y tus necesidades..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-full">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
