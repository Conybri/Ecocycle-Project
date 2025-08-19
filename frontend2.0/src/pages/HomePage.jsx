import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "¿Qué tipo de materiales puedo reciclar?",
      answer:
        "Aceptamos una amplia variedad de materiales reciclables incluyendo plástico, vidrio, papel, cartón, metal, electrónicos y textiles. Cada material tiene sus propias especificaciones de reciclaje.",
    },
    {
      question: "¿Tiene algún costo para el usuario?",
      answer:
        "El registro y uso básico de EcoCycle es completamente gratuito. Solo pagas por los servicios de recolección de las empresas, que varían según el material y la cantidad.",
    },
    {
      question: "¿Cómo se canjean los puntos que gano?",
      answer:
        "Los puntos se pueden canjear en nuestra tienda de recompensas por productos ecológicos, descuentos en servicios, donaciones a causas ambientales y más beneficios exclusivos.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>
            Conoce <span className="text-green">EcoCycle</span>
          </h1>
          <h2 className="hero-subtitle">
            Transformando el futuro del reciclaje
          </h2>
          <p className="hero-description">
            En EcoCycle, creemos que cada pequeña acción puede generar un gran
            impacto. Nuestra plataforma conecta a personas conscientes del medio
            ambiente con empresas de reciclaje, creando una red sostenible que
            beneficia a todos.
          </p>
          <div className="button-container">
            <button
              onClick={() => navigate("/empresas")}
              className="btn btn-primary"
            >
              Soy una Empresa
            </button>
            <button
              onClick={() => navigate("/catalogo")}
              className="btn btn-secondary"
            >
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="mvp-section">
        <div className="container">
          <div className="mvp-grid">
            <div className="mvp-card">
              <div className="mvp-icon">🎯</div>
              <h3>Misión</h3>
              <p>
                Facilitar el reciclaje inteligente y crear una comunidad
                comprometida con la sostenibilidad ambiental.
              </p>
            </div>
            <div className="mvp-card">
              <div className="mvp-icon">👁️</div>
              <h3>Visión</h3>
              <p>
                Ser la plataforma líder en reciclaje digital, transformando la
                manera en que el mundo gestiona sus residuos.
              </p>
            </div>
            <div className="mvp-card">
              <div className="mvp-icon">💚</div>
              <h3>Valores</h3>
              <p>
                Sostenibilidad, innovación, transparencia y compromiso con las
                futuras generaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="circular-economy-section">
        <div className="container">
          <div className="circular-content">
            <div className="circular-text">
              <h2>Creamos un ciclo sostenible para el futuro</h2>
              <p>
                La economía circular es el modelo que necesitamos para un futuro
                sostenible. En lugar de seguir el modelo lineal de "usar y
                tirar", creamos un ciclo donde los materiales se reutilizan,
                reciclan y regeneran continuamente.
              </p>
            </div>
            <div className="circular-features">
              <div className="feature-item">
                <div className="feature-icon">♻️</div>
                <div className="feature-content">
                  <h4>Reutilización</h4>
                  <p>Damos nueva vida a los materiales</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌱</div>
                <div className="feature-content">
                  <h4>Regeneración</h4>
                  <p>Restauramos el equilibrio natural</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <div className="feature-content">
                  <h4>Comunidad</h4>
                  <p>Conectamos personas y empresas</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <div className="feature-content">
                  <h4>Innovación</h4>
                  <p>Desarrollamos soluciones creativas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="how-it-works-header">
            <h2>Reciclar con EcoCycle es Fácil y Gratificante</h2>
            <p>
              Transformamos el reciclaje en una experiencia simple, rewarding y
              accesible para todos. Con nuestra plataforma, conectas
              directamente con empresas de reciclaje certificadas, ganas puntos
              por cada material reciclado y contribuyes activamente a un futuro
              más sostenible.
            </p>
            <div className="process-icon">🌍♻️🌱</div>
          </div>

          <div className="process-section">
            <h3>Tu Viaje de Reciclaje en 5 Pasos</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-icon">👤</div>
                <h4>Regístrate y Explora</h4>
                <p>
                  Crea tu cuenta gratuita en EcoCycle y descubre todas las
                  opciones de reciclaje disponibles en tu área.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-icon">🗑️</div>
                <h4>Selecciona tus Residuos</h4>
                <p>
                  Navega por nuestro catálogo de materiales reciclables y
                  selecciona los que tienes disponibles para reciclar.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-icon">🚛</div>
                <h4>Elige una Empresa</h4>
                <p>
                  Selecciona la empresa de reciclaje más conveniente para ti,
                  basándote en ubicación, precios y reputación.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-icon">📅</div>
                <h4>Agenda la Recolección</h4>
                <p>
                  Programa una fecha y hora conveniente para que recojan tus
                  materiales reciclables directamente en tu ubicación.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-icon">🏆</div>
                <h4>Gana Puntos y Recompensas</h4>
                <p>
                  Recibe puntos por cada kilogramo reciclado y canjéalos por
                  productos ecológicos, descuentos y más beneficios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`faq-answer ${openFAQ === index ? "open" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">🔄🌿</div>
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Usuarios Activos</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏢</div>
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Empresas Aliadas</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⚖️</div>
              <div className="stat-number">500 Ton</div>
              <div className="stat-label">Toneladas Recicladas</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🌍</div>
              <div className="stat-number">2.5M kg</div>
              <div className="stat-label">Kg CO₂ Evitado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Lo que dicen nuestros usuarios</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "EcoCycle ha cambiado mi forma de ver el reciclaje. Ahora es
                fácil, rewarding y siento que realmente estoy contribuyendo al
                planeta."
              </p>
              <div className="testimonial-author">
                <strong>María González</strong>
                <span>Usuario desde 2023</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Como empresa, EcoCycle nos ayudó a conectar con más clientes
                comprometidos con el medio ambiente. Excelente plataforma."
              </p>
              <div className="testimonial-author">
                <strong>EcoRecicla S.A.</strong>
                <span>Empresa aliada</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Los puntos y recompensas hacen que reciclar sea divertido. Mis
                hijos también se han unido a la causa."
              </p>
              <div className="testimonial-author">
                <strong>Carlos Ruiz</strong>
                <span>Familia eco-friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para empezar?</h2>
          <p>
            Únete a miles de personas que ya están transformando el mundo, un
            reciclaje a la vez.
          </p>
          <div className="button-container">
            <button
              onClick={() => navigate("/catalogo")}
              className="btn btn-primary"
            >
              Ver Catálogo de Materiales
            </button>
            <button
              onClick={() => navigate("/registro")}
              className="btn btn-secondary"
            >
              Regístrate Ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
