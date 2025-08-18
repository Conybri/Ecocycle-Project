import React, { useState } from "react";
import '../styles/Empresas.css';

const Empresas = () => {
  const [companyName, setCompanyName] = useState("");
  const [rut, setRut] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [materials, setMaterials] = useState([]);
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleMaterialChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setMaterials((prev) => [...prev, value]);
    } else {
      setMaterials((prev) => prev.filter((material) => material !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }
    // Here you would send the data to your backend
    console.log({
      companyName,
      rut,
      contactName,
      position,
      email,
      phone,
      address,
      materials,
      capacity,
      description,
    });
    alert("Solicitud enviada con éxito!");
    // Reset form
    setCompanyName("");
    setRut("");
    setContactName("");
    setPosition("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMaterials([]);
    setCapacity("");
    setDescription("");
    setTermsAccepted(false);
  };

  return (
    <div className="empresas-page">
      {/* Hero Section */}
      <section className="hero-empresas">
        <div className="container">
          <h1>Únete a la red líder de reciclaje</h1>
          <p>
            Conecta con miles de usuarios comprometidos con el medio ambiente y
            haz crecer tu negocio de reciclaje de manera sostenible en Chile.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Registrar Empresa</button>
            <button className="btn btn-secondary">Ver Demo</button>
          </div>
        </div>
      </section>

      {/* Stats Section - Top */}
      <section className="stats-empresas-top">
        <div className="container">
          <div className="stat-item">
            <span>+1,200</span>
            <p>Empresas activas</p>
          </div>
        </div>
      </section>

      {/* Why Choose EcoCycle Section */}
      <section className="why-choose-empresas">
        <div className="container">
          <h2>¿Por qué elegir EcoCycle para tu empresa?</h2>
          <p className="subtitle">
            Nuestra plataforma está diseñada para ayudar a las empresas de
            reciclaje a crecer y generar mayor impacto
          </p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Nuevos Clientes</h3>
              <p>Conecta con miles de usuarios comprometidos con el reciclaje en tu área</p>
            </div>
            <div className="benefit-card">
              <h3>Crecimiento Sostenible</h3>
              <p>Aumenta tu volumen de materiales reciclados de manera constante</p>
            </div>
            <div className="benefit-card">
              <h3>Confianza y Credibilidad</h3>
              <p>Sistema de reseñas y verificación que genera confianza en los usuarios</p>
            </div>
            <div className="benefit-card">
              <h3>Marketing Dirigido</h3>
              <p>Llega exactamente a las personas que buscan tus servicios de reciclaje</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mid */}
      <section className="stats-empresas-mid">
        <div className="container">
          <div className="stat-item">
            <span>1,200+</span>
            <p>Empresas Registradas</p>
          </div>
          <div className="stat-item">
            <span>50,000+</span>
            <p>Usuarios Activos</p>
          </div>
          <div className="stat-item">
            <span>500 Ton</span>
            <p>Material Procesado/Mes</p>
          </div>
          <div className="stat-item">
            <span>95%</span>
            <p>Satisfacción Empresarial</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-empresas">
        <div className="container">
          <h2>Herramientas poderosas para tu negocio</h2>
          <p className="subtitle">
            Todo lo que necesitas para gestionar y hacer crecer tu empresa de
            reciclaje en una sola plataforma.
          </p>
          <ul className="tools-list">
            <li>Dashboard empresarial completo</li>
            <li>Gestión de citas y recolecciones</li>
            <li>Sistema de comunicación integrado</li>
            <li>Reportes de impacto ambiental</li>
            <li>Herramientas de marketing</li>
            <li>Soporte técnico especializado</li>
          </ul>
        </div>
      </section>

      {/* Community Section (Testimonials) */}
      <section className="community-empresas">
        <div className="container">
          <h2>Únete a una comunidad próspera</h2>
          <p className="subtitle">
            Más de 1,200 empresas ya confían en EcoCycle para hacer crecer sus
            negocios de reciclaje y generar un impacto positivo en sus
            comunidades.
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="rating">4.9</p>
              <p className="quote">
                "EcoCycle nos ayudó a triplicar nuestro volumen de materiales
                reciclados en solo 6 meses."
              </p>
              <p className="author">EP EcoPlast Reciclaje</p>
              <p className="position">María Rodríguez, Gerente General</p>
            </div>
            <div className="testimonial-card">
              <p className="rating">4.8</p>
              <p className="quote">
                "La plataforma es intuitiva y nos conecta con clientes
                realmente comprometidos con el ambiente."
              </p>
              <p className="author">GT GreenTech Solutions</p>
              <p className="position">Carlos Mendoza, Director Comercial</p>
            </div>
            <div className="testimonial-card">
              <p className="rating">4.7</p>
              <p className="quote">
                "Excelente herramienta para gestionar nuestras operaciones y
                generar mayor impacto."
              </p>
              <p className="author">RM ReciclaMax</p>
              <p className="position">Ana García, Coordinadora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="pricing-empresas">
        <div className="container">
          <h2>Planes diseñados para tu crecimiento</h2>
          <p className="subtitle">
            Elige el plan que mejor se adapte a las necesidades de tu empresa
          </p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Básico</h3>
              <p className="price">Gratis</p>
              <p className="description">Perfecto para empresas que están comenzando</p>
              <ul className="features-list">
                <li>Perfil básico de empresa</li>
                <li>Hasta 50 contactos por mes</li>
                <li>Soporte por email</li>
                <li>Reportes básicos</li>
              </ul>
              <button className="btn btn-primary">Comenzar Gratis</button>
            </div>
            <div className="pricing-card featured">
              <h3>Profesional</h3>
              <p className="price">$49/mes</p>
              <p className="description">Ideal para empresas en crecimiento</p>
              <ul className="features-list">
                <li>Perfil destacado</li>
                <li>Contactos ilimitados</li>
                <li>Soporte prioritario</li>
                <li>Reportes avanzados</li>
                <li>Herramientas de marketing</li>
                <li>API access</li>
              </ul>
              <button className="btn btn-secondary">Contactar Ventas</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <p className="price">Personalizado</p>
              <p className="description">Para grandes operaciones</p>
              <ul className="features-list">
                <li>Todo lo del plan Profesional</li>
                <li>Integración personalizada</li>
                <li>Gerente de cuenta dedicado</li>
                <li>Capacitación del equipo</li>
                <li>SLA garantizado</li>
              </ul>
              <button className="btn btn-secondary">Contactar Ventas</button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Registration Form */}
      <section className="register-empresa-form">
        <div className="container">
          <h2>Registra tu empresa hoy</h2>
          <p className="subtitle">
            Completa el formulario y nos pondremos en contacto contigo
          </p>
          <form className="empresa-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="companyName">Nombre de la Empresa *</label>
              <input
                type="text"
                id="companyName"
                placeholder="Ej: EcoRecicla S.A.S"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rut">RUT *</label>
              <input
                type="text"
                id="rut"
                placeholder="123456789-0"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactName">Nombre del Contacto *</label>
              <input
                type="text"
                id="contactName"
                placeholder="Juan Pérez"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Cargo *</label>
              <input
                type="text"
                id="position"
                placeholder="Gerente General"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Corporativo *</label>
              <input
                type="email"
                id="email"
                placeholder="contacto@empresa.cl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                placeholder="+56 2 2345-6789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección Completa *</label>
              <input
                type="text"
                id="address"
                placeholder="Av. Providencia 1234, Providencia, Santiago, Chile"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Tipos de Material que Reciclan *</label>
              <div className="materials-checkbox-group">
                {[ "Plástico", "Vidrio", "Papel", "Metal", "Electrónicos", "Textiles", "Orgánicos", "Otros", ].map((material) => (
                  <label key={material}>
                    <input
                      type="checkbox"
                      value={material}
                      checked={materials.includes(material)}
                      onChange={handleMaterialChange}
                    />
                    {material}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="capacity">Capacidad Mensual (Toneladas)</label>
              <input
                type="number"
                id="capacity"
                placeholder="Ej: 500"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Cuéntanos sobre tu empresa</label>
              <textarea
                id="description"
                rows="5"
                placeholder="Describe brevemente tu empresa, servicios y experiencia en reciclaje..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="termsAccepted"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label htmlFor="termsAccepted">
                Acepto los términos y condiciones y la política de privacidad
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Registrar Empresa
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Empresas;
