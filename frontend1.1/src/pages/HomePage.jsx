import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "https://www.concienciaeco.com/wp-content/uploads/2016/05/0212131252_reciclaje.jpg",
    "https://www.idma.cl/wp-content/uploads/2021/05/Las-3-rs.jpg",
    "https://mma.gob.cl/wp-content/uploads/2015/06/720x404xinfografiarep-1024x574.png.pagespeed.ic.WvFWXFHUI4.png",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const goTo = (index) => setActiveIndex(index);

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 mt-8 sm:mt-12 pb-8 sm:pb-12 text-center lg:pt-24 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 mt-4 sm:mt-8">
            Conoce{" "}
            <span className="text-green-600 inline-block hover:scale-105 transition-transform">
              EcoCycle
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600 mb-4 sm:mb-6">
            Transformando el futuro del reciclaje
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
            En EcoCycle, creemos que cada pequeña acción puede generar un gran
            impacto. Nuestra plataforma conecta a personas conscientes del medio
            ambiente con empresas de reciclaje, creando una red sostenible que
            beneficia a todos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <button
              onClick={() => navigate("/empresas")}
              className="w-full sm:w-auto font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-md sm:rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all hover:scale-105 duration-300 text-sm sm:text-base max-w-[200px]"
            >
              Soy una Empresa
            </button>
            <button
              onClick={() => navigate("/catalogo")}
              className="w-full sm:w-auto font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-md sm:rounded-lg bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-100 transition-all hover:scale-105 duration-300 text-sm sm:text-base max-w-[200px]"
            >
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-green-50">
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <div
            className="whitespace-nowrap transition-transform duration-700"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Slide ${idx + 1}`}
                className="inline-block w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] min-h-96 sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] object-cover align-top"
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-white scale-125" : "bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="p-6 sm:p-8 bg-green-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl sm:text-5xl mb-4 transform hover:scale-110 transition-transform cursor-default">
                🎯
              </div>
              <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">
                Misión
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Facilitar el reciclaje inteligente y crear una comunidad
                comprometida con la sostenibilidad ambiental.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-green-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl sm:text-5xl mb-4 transform hover:scale-110 transition-transform cursor-default">
                👁️
              </div>
              <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">
                Visión
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ser la plataforma líder en reciclaje digital, transformando la
                manera en que el mundo gestiona sus residuos.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-green-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl sm:text-5xl mb-4 transform hover:scale-110 transition-transform cursor-default">
                💚
              </div>
              <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">
                Valores
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Sostenibilidad, innovación, transparencia y compromiso con las
                futuras generaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-content">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Creamos un ciclo sostenible para el futuro
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                La economía circular es el modelo que necesitamos para un futuro
                sostenible. En lugar de seguir el modelo lineal de "usar y
                tirar", creamos un ciclo donde los materiales se reutilizan,
                reciclan y regeneran continuamente.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl flex-shrink-0 transform hover:scale-110 transition-transform cursor-default">
                  ♻️
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800">
                    Reutilización
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Damos nueva vida a los materiales
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl flex-shrink-0 transform hover:scale-110 transition-transform cursor-default">
                  🌱
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800">
                    Regeneración
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Restauramos el equilibrio natural
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl flex-shrink-0 transform hover:scale-110 transition-transform cursor-default">
                  👥
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800">
                    Comunidad
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Conectamos personas y empresas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl flex-shrink-0 transform hover:scale-110 transition-transform cursor-default">
                  💡
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800">
                    Innovación
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Desarrollamos soluciones creativas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Reciclar con EcoCycle es Fácil y Gratificante
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8">
              Transformamos el reciclaje en una experiencia simple, gratificante
              y accesible para todos. Con nuestra plataforma, conectas
              directamente con empresas de reciclaje certificadas, ganas puntos
              por cada material reciclado y contribuyes activamente a un futuro
              más sostenible.
            </p>
            <div className="text-4xl sm:text-5xl mb-4 space-x-2">🌍♻️🌱</div>
          </div>

          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
              Tu Viaje de Reciclaje en 5 Pasos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-6 bg-orange-100 rounded-xl shadow-sm relative hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg">
                  1
                </div>
                <div className="text-4xl sm:text-5xl my-4 sm:my-5 transform hover:scale-110 transition-transform cursor-default">
                  👤
                </div>
                <h4 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-4">
                  Regístrate y Explora
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Crea tu cuenta gratuita y descubre las opciones de reciclaje
                  en tu área.
                </p>
              </div>
              <div className="text-center p-6 bg-orange-100 rounded-xl shadow-sm relative hover:transform hover:-translate-y-1 transition-transform">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="text-5xl my-5">🗑️</div>
                <h4 className="font-semibold text-xl mb-4">
                  Selecciona tus Residuos
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Navega por el catálogo y selecciona los materiales que tienes.
                </p>
              </div>
              <div className="text-center p-6 bg-orange-100 rounded-xl shadow-sm relative hover:transform hover:-translate-y-1 transition-transform">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="text-5xl my-5">🚛</div>
                <h4 className="font-semibold text-xl mb-4">
                  Elige una Empresa
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Selecciona la empresa más conveniente por ubicación y precio.
                </p>
              </div>
              <div className="text-center p-6 bg-orange-100 rounded-xl shadow-sm relative hover:transform hover:-translate-y-1 transition-transform">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="text-5xl my-5">📅</div>
                <h4 className="font-semibold text-xl mb-4">
                  Agenda la Recolección
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Programa una fecha y hora para que recojan tus materiales.
                </p>
              </div>
              <div className="text-center p-6 bg-orange-100 rounded-xl shadow-sm relative hover:transform hover:-translate-y-1 transition-transform">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div className="text-5xl my-5">🏆</div>
                <h4 className="font-semibold text-xl mb-4">Gana Puntos</h4>
                <p className="text-gray-700 leading-relaxed">
                  Recibe puntos por cada kg reciclado y canjéalos por
                  recompensas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="mb-3 sm:mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <button
                  className="w-full p-4 sm:p-6 text-left text-base sm:text-lg font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span
                    className={`text-2xl font-bold text-green-600 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFAQ === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="p-6 pt-0 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-blue-100 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🔄🌿</div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                50,000+
              </div>
              <div className="font-semibold text-gray-700">
                Usuarios Activos
              </div>
            </div>
            <div className="p-8 bg-blue-100 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏢</div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                1,200+
              </div>
              <div className="font-semibold text-gray-700">
                Empresas Aliadas
              </div>
            </div>
            <div className="p-8 bg-blue-100 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">⚖️</div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                500 Ton
              </div>
              <div className="font-semibold text-gray-700">
                Toneladas Recicladas
              </div>
            </div>
            <div className="p-8 bg-blue-100 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🌍</div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                2.5M kg
              </div>
              <div className="font-semibold text-gray-700">Kg CO₂ Evitado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Lo que dicen nuestros usuarios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-sm text-center">
              <div className="text-2xl mb-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="italic text-gray-700 leading-relaxed mb-6">
                "EcoCycle ha cambiado mi forma de ver el reciclaje. Ahora es
                fácil, gratificante y siento que realmente estoy contribuyendo
                al planeta."
              </p>
              <div className="flex flex-col items-center">
                <strong className="text-gray-800 font-semibold">
                  María González
                </strong>
                <span className="text-gray-500 text-sm">
                  Usuario desde 2023
                </span>
              </div>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm text-center">
              <div className="text-2xl mb-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="italic text-gray-700 leading-relaxed mb-6">
                "Como empresa, EcoCycle nos ayudó a conectar con más clientes
                comprometidos con el medio ambiente. Excelente plataforma."
              </p>
              <div className="flex flex-col items-center">
                <strong className="text-gray-800 font-semibold">
                  EcoRecicla S.A.
                </strong>
                <span className="text-gray-500 text-sm">Empresa aliada</span>
              </div>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm text-center">
              <div className="text-2xl mb-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="italic text-gray-700 leading-relaxed mb-6">
                "Los puntos y recompensas hacen que reciclar sea divertido. Mis
                hijos también se han unido a la causa."
              </p>
              <div className="flex flex-col items-center">
                <strong className="text-gray-800 font-semibold">
                  Carlos Ruiz
                </strong>
                <span className="text-gray-500 text-sm">
                  Familia eco-friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Únete a miles de personas que ya están transformando el mundo, un
            reciclaje a la vez.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/catalogo")}
              className="font-bold py-3 px-8 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              Ver Catálogo de Materiales
            </button>
            <button
              onClick={() => navigate("/register")}
              className="font-bold py-3 px-8 rounded-lg bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-100 transition-colors"
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
