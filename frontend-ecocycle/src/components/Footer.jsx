import React from 'react';

const Footer = () => {
  const footerSections = {
    useful: [
      { text: 'Acerca de nosotros', href: '#inicio' },
      { text: 'Cómo funciona', href: '#como-funciona' },
      { text: 'Centro de ayuda', href: '#catalogo' },
      { text: 'Para empresas', href: '#comunidad' }
    ],
    legal: [
      { text: 'Política de privacidad', href: '#' },
      { text: 'Términos de servicio', href: '#' },
      { text: 'Política de cookies', href: '#' }
    ],
    social: [
      { icon: '📘', href: '#', label: 'Facebook' },
      { icon: '🐦', href: '#', label: 'Twitter' },
      { icon: '📷', href: '#', label: 'Instagram' },
      { icon: '💼', href: '#', label: 'LinkedIn' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">🌱</div>
              <span className="footer-brand-name">EcoCycle</span>
            </div>
            <p className="footer-description">
              Revolucionamos el reciclaje con tecnología inteligente. 
              Conectamos usuarios, empresas y centros de reciclaje 
              para crear un futuro más sostenible.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Útiles</h4>
            <ul className="footer-links">
              {footerSections.useful.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              {footerSections.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              {footerSections.social.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="footer-love">Hecho con ❤️ para el planeta</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 EcoCycle. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
