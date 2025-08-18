import React from "react";
import "./Empresas.css";

const Empresas = () => {
  return (
    <div className="empresas-page">
      <section className="hero-empresas">
        <div className="container">
          <h1>Potencia tu Negocio con Sostenibilidad</h1>
          <p>
            Únete a la red de EcoCycle y conecta con miles de usuarios
            comprometidos con el medio ambiente. Transforma residuos en
            oportunidades de negocio mientras construyes un futuro más
            sostenible.
          </p>
          <button className="btn btn-primary">Registra tu Empresa</button>
        </div>
      </section>

      <section className="why-partner-section">
        <div className="container">
          <h2>¿Por qué asociarse con EcoCycle?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon">📦</div>
              <h3>Acceso a Material de Calidad</h3>
              <p>
                Conecta directamente con usuarios que clasifican materiales
                reciclables de alta calidad, garantizando mejor materia prima
                para tu proceso productivo.
              </p>
            </div>
            <div className="benefit-card">
              <div className="icon">✨</div>
              <h3>Visibilidad de Marca</h3>
              <p>
                Aumenta el reconocimiento de tu empresa como líder en
                sostenibilidad y atrae a consumidores conscientes del medio
                ambiente.
              </p>
            </div>
            <div className="benefit-card">
              <div className="icon">📊</div>
              <h3>Reportes de Impacto</h3>
              <p>
                Recibe informes detallados sobre tu impacto ambiental,
                incluyendo CO₂ evitado, materiales procesados y contribución a
                la economía circular.
              </p>
            </div>
            <div className="benefit-card">
              <div className="icon">✅</div>
              <h3>Cumplimiento Normativo</h3>
              <p>
                Facilita el cumplimiento de regulaciones ambientales y obtén
                certificaciones que fortalezcan tu posición en el mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-empresas">
        <div className="container">
          <h2>Cómo Funciona para Empresas</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Regístrate en la Plataforma</h3>
              <p>
                Completa el proceso de registro empresarial y verifica tu
                cuenta.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Publica tus Necesidades</h3>
              <p>
                Define qué tipos de materiales necesitas, cantidades y precios
                que ofreces.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Recibe Material de Calidad</h3>
              <p>
                Los usuarios te contactan directamente con materiales
                clasificados y listos para procesar.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Mide tu Impacto</h3>
              <p>
                Accede a dashboards completos para monitorear tu contribución
                ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <h2>Comienza Hoy</h2>
          <p>
            Completa este formulario y nuestro equipo se pondrá en contacto
            contigo para comenzar tu transformación hacia la sostenibilidad.
          </p>
          <div className="features-list">
            <span>✓ Consultoría gratuita</span>
            <span>✓ Implementación en 24 horas</span>
            <span>✓ Soporte técnico continuo</span>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="companyName">Nombre de la Empresa *</label>
              <input type="text" id="companyName" required />
            </div>
            <div className="form-group">
              <label htmlFor="rut">RUT de la Empresa *</label>
              <input type="text" id="rut" placeholder="12.345.678-9" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email de Contacto *</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje (Opcional)</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Cuéntanos sobre tu empresa y tus necesidades..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Empresas;
