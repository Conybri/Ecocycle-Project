import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import "../assets/img/reciclaje.jpg"; // Ensure this path is correct based on your project structure

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // NOTE: This carousel is based on Flowbite.
    // For it to work, you need to have Flowbite's JavaScript initialized in your project.
    // You can usually do this by including the script in your main HTML file
    // or by installing and configuring the 'flowbite' npm package.
    const carouselElement = document.getElementById("default-carousel");
    if (window.Flowbite && carouselElement) {
      new window.Flowbite.Carousel(carouselElement).init();
    }
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>
            EcoCycle | Transforma tus
            <span className="text-green"> residuos </span>
            en recursos
          </h1>
          <p>
            Conéctate con empresas de reciclaje y contribuye a un mundo más
            sostenible. Cada objeto reciclado cuenta para nuestro futuro.
          </p>
          <div className="button-container">
            <button
              onClick={() => navigate("/reciclar")}
              className="btn btn-primary"
            >
              Quiero Reciclar
            </button>
            <button
              onClick={() => navigate("/empresa")}
              className="btn btn-secondary"
            >
              Soy una Empresa
            </button>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section className="qr-section">
        <div className="container">
          <h2>Accede desde tu móvil</h2>
          <p>
            Escanea el código QR con tu teléfono para acceder rápidamente a
            nuestra plataforma y comenzar a reciclar desde cualquier lugar.
          </p>
          <div className="qr-placeholder-container">
            <div className="qr-placeholder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="qr-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v.01M12 8v.01M12 12v.01M12 16v.01M8 4v.01M8 8v.01M8 12v.01M8 16v.01M4 12v.01M4 8v.01M4 4v.01M16 12v.01M16 8v.01M16 4v.01M20 12v.01M20 8v.01M20 4v.01M4 20v.01M8 20v.01M12 20v.01M16 20v.01M20 20v.01"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>¿Por qué elegir EcoCycle?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon">♻️</div>
              <h3>Reduce Residuos</h3>
              <p>
                Ayuda a disminuir la cantidad de desechos que terminan en
                vertederos y océanos.
              </p>
            </div>
            <div className="benefit-card">
              <div className="icon">🏭</div>
              <h3>Apoya Empresas Locales</h3>
              <p>
                Conecta con empresas de reciclaje en tu comunidad, fortaleciendo
                la economía local.
              </p>
            </div>
            <div className="benefit-card">
              <div className="icon">⭐</div>
              <h3>Gana Puntos</h3>
              <p>
                Obtén recompensas y beneficios exclusivos por cada material que
                recicles a través de nuestra red.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="container">
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* Item 1 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="../../assets/img/reciclaje.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="Recicla Vidrio"
                />
              </div>
              {/* Item 2 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://placehold.co/1024x400/31c48d/ffffff?text=Recicla+Plástico"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="Recicla Plástico"
                />
              </div>
              {/* Item 3 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://placehold.co/1024x400/31c48d/ffffff?text=Recicla+Papel"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="Recicla Papel"
                />
              </div>
              {/* Item 4 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://placehold.co/1024x400/31c48d/ffffff?text=Recicla+Metal"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="Recicla Metal"
                />
              </div>
              {/* Item 5 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://placehold.co/1024x400/31c48d/ffffff?text=Únete+a+EcoCycle"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="Únete a EcoCycle"
                />
              </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
