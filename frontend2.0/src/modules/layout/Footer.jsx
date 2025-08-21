import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.webp";

const Footer = () => {
  const footerSections = {
    useful: [
      { text: "Acerca de nosotros", href: "/" },
      { text: "Cómo funciona", href: "/" },
      { text: "Catálogo", href: "/catalogo" },
      { text: "Para empresas", href: "/empresas" },
    ],
    legal: [
      { text: "Política de privacidad", href: "#" },
      { text: "Términos de servicio", href: "#" },
      { text: "Política de cookies", href: "#" },
    ],
    social: [
      { icon: "📘", href: "#", label: "Facebook" },
      { icon: "🐦", href: "#", label: "Twitter" },
      { icon: "📷", href: "#", label: "Instagram" },
      { icon: "💼", href: "#", label: "LinkedIn" },
    ],
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="md:col-span-2 lg:col-span-1">
            <img src={Logo} alt="EcoCycle Logo" className="w-32 mb-4" />
            <p className="text-gray-400 leading-relaxed">Revolucionamos el reciclaje con tecnología inteligente, conectando usuarios y empresas para un futuro más sostenible.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces Útiles</h4>
            <ul className="space-y-2">
              {footerSections.useful.map((link, index) => (
                <li key={index}><Link to={link.href} className="text-gray-400 hover:text-green-400 transition-colors">{link.text}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerSections.legal.map((link, index) => (
                <li key={index}><a href={link.href} className="text-gray-400 hover:text-green-400 transition-colors">{link.text}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4 mb-4">
              {footerSections.social.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">{social.icon}</a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Hecho ❤️ para el planeta</p>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; 2025 EcoCycle. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;