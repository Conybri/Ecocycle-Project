import { useState } from "react";

const Empresas = () => {
  const [formData, setFormData] = useState({
    nombreEmpresa: "",
    rut: "",
    nombreContacto: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    region: "",
    tipoEmpresa: "",
    materialesReciclaje: [],
    volumenMensual: "",
    aceptaTerminos: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "materialesReciclaje") {
      setFormData((prev) => ({
        ...prev,
        materialesReciclaje: checked
          ? [...prev.materialesReciclaje, value]
          : prev.materialesReciclaje.filter((item) => item !== value),
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aceptaTerminos) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }
    alert("Formulario enviado correctamente");
    setFormData({
      nombreEmpresa: "",
      rut: "",
      nombreContacto: "",
      email: "",
      telefono: "",
      direccion: "",
      ciudad: "",
      region: "",
      tipoEmpresa: "",
      materialesReciclaje: [],
      volumenMensual: "",
      aceptaTerminos: false,
    });
  };

  const benefits = [
    {
      title: "Nuevos Clientes",
      description:
        "Conecta con empresas comprometidas con el medio ambiente y haz crecer tu negocio de manera sostenible.",
      icon: "👥",
    },
    {
      title: "Crecimiento Sostenible",
      description:
        "Accede a recursos y herramientas para desarrollar tu empresa de manera responsable con el planeta.",
      icon: "📈",
    },
    {
      title: "Contratos y Credibilidad",
      description:
        "Obtén contratos verificados y construye una reputación sólida en el mercado del reciclaje.",
      icon: "📋",
    },
    {
      title: "Marketing Dirigido",
      description:
        "Promociona tus servicios de manera efectiva con nuestras herramientas de marketing especializado.",
      icon: "🎯",
    },
  ];

  const stats = [
    { number: "1,200+", label: "Empresas Registradas" },
    { number: "50,000+", label: "Toneladas Recicladas" },
    { number: "500 Ton", label: "Ahorro Mensual CO₂" },
    { number: "95%", label: "Satisfacción Empresas" },
  ];

  const tools = [
    "Gestión automatizada de contratos",
    "Sistema de seguimiento de materiales",
    "Reportes de impacto ambiental",
    "Herramientas de marketing",
    "Soporte técnico especializado",
    "Red de contactos empresariales",
  ];

  const testimonials = [
    {
      name: "María González",
      company: "EcoTech Solutions",
      rating: 5,
      comment:
        "EcoCycle nos ayudó a encontrar nuevos clientes y optimizar nuestros procesos de reciclaje. Excelente plataforma.",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Carlos Mendoza",
      company: "Green Industries",
      rating: 5,
      comment:
        "La plataforma es intuitiva y las herramientas de seguimiento son increíbles. Hemos aumentado nuestro volumen un 40%.",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Ana Rodríguez",
      company: "Recicla Chile",
      rating: 5,
      comment:
        "Gracias a EcoCycle pudimos expandir nuestro negocio y conectar con empresas que comparten nuestra visión sostenible.",
      avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Únete a la <span className="text-green-500">red líder</span> de
                reciclaje
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Conecta con miles de empresas comprometidas con el medio
                ambiente y haz crecer tu negocio de manera sostenible en Chile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Registrar Empresa
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Ver Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ameriplanet.com.pe/wp-content/uploads/2024/03/economia-circular.png"
                alt="Red de reciclaje empresarial"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir EcoCycle para tu empresa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra plataforma ofrece beneficios únicos para empresas de
              reciclaje y organizaciones comprometidas con la sostenibilidad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Herramientas poderosas para tu negocio
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Todo lo que necesitas para optimizar y hacer crecer tu empresa
                de reciclaje en una sola plataforma.
              </p>
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://img.freepik.com/vector-premium/captura-pantalla-pantalla-que-muestra-aplicacion-aplicacion_847859-7715.jpg"
                alt="Herramientas empresariales"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/computer-generated-image-network-connected-dots_1064589-226994.jpg?w=360"
                alt="Comunidad empresarial"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Únete a una comunidad próspera
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Más de 1,200 empresas ya confían en EcoCycle para hacer crecer
                sus negocios de reciclaje y generar un impacto positivo en sus
                comunidades.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Red de empresas verificadas y confiables
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Oportunidades exclusivas y eventos especiales
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Soporte especializado y capacitaciones
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestras empresas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover object-center"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Registra tu empresa hoy
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y únete a la red empresarial más grande de
              reciclaje
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="nombreEmpresa"
                  value={formData.nombreEmpresa}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  RUT *
                </label>
                <input
                  type="text"
                  name="rut"
                  value={formData.rut}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del Contacto *
                </label>
                <input
                  type="text"
                  name="nombreContacto"
                  value={formData.nombreContacto}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ciudad *
                </label>
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Región *
                </label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Selecciona una región</option>
                  <option value="metropolitana">Región Metropolitana</option>
                  <option value="valparaiso">Región de Valparaíso</option>
                  <option value="biobio">Región del Biobío</option>
                  <option value="araucania">Región de La Araucanía</option>
                  <option value="los-lagos">Región de Los Lagos</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Tipo de Empresa *
              </label>
              <select
                name="tipoEmpresa"
                value={formData.tipoEmpresa}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Selecciona el tipo de empresa</option>
                <option value="recicladora">Empresa Recicladora</option>
                <option value="recolectora">Empresa Recolectora</option>
                <option value="procesadora">Empresa Procesadora</option>
                <option value="comercializadora">
                  Empresa Comercializadora
                </option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Materiales de Reciclaje (selecciona todos los que apliquen)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Papel",
                  "Cartón",
                  "Plástico",
                  "Vidrio",
                  "Metal",
                  "Electrónicos",
                  "Orgánicos",
                  "Textiles",
                ].map((material) => (
                  <label key={material} className="flex items-center">
                    <input
                      type="checkbox"
                      name="materialesReciclaje"
                      value={material}
                      checked={formData.materialesReciclaje.includes(material)}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {material}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volumen Mensual Estimado (toneladas)
              </label>
              <select
                name="volumenMensual"
                value={formData.volumenMensual}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Selecciona el volumen</option>
                <option value="0-10">0-10 toneladas</option>
                <option value="11-50">11-50 toneladas</option>
                <option value="51-100">51-100 toneladas</option>
                <option value="100+">Más de 100 toneladas</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="aceptaTerminos"
                  checked={formData.aceptaTerminos}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500 mt-1"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Acepto los{" "}
                  <a href="#" className="text-green-500 hover:text-green-600">
                    términos y condiciones
                  </a>{" "}
                  y la{" "}
                  <a href="#" className="text-green-500 hover:text-green-600">
                    política de privacidad
                  </a>{" "}
                  *
                </span>
              </label>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                Registrar Empresa
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nuestro equipo está aquí para ayudarte a encontrar la solución
            perfecta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contactar Soporte
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Enviar Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Empresas;
