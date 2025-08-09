'use client'

import { useState } from 'react'

export default function EcoCycleLanding() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { text: '¡Hola! Soy EcoBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?', isUser: false }
  ])
  const [chatInput, setChatInput] = useState('')

  const sendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { text: chatInput, isUser: true }])
      setChatInput('')
      
      // Simular respuesta del bot
      setTimeout(() => {
        const responses = [
          '¡Gracias por tu mensaje! ¿Te gustaría saber más sobre cómo funciona EcoCycle?',
          'Puedo ayudarte con información sobre reciclaje, puntos y recompensas.',
          '¿Necesitas ayuda para registrarte en nuestra plataforma?',
          'Te puedo explicar cómo conectarte con empresas de reciclaje cercanas.'
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        setChatMessages(prev => [...prev, { text: randomResponse, isUser: false }])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xl">
              🌱
            </div>
            <span className="text-xl font-bold text-green-600">EcoCycle</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-600 hover:text-green-600 transition-colors">Inicio</a>
            <a href="#beneficios" className="text-gray-600 hover:text-green-600 transition-colors">Beneficios</a>
            <a href="#catalogo" className="text-gray-600 hover:text-green-600 transition-colors">Catálogo</a>
            <a href="#comunidad" className="text-gray-600 hover:text-green-600 transition-colors">Comunidad</a>
            <a href="#empresas" className="text-gray-600 hover:text-green-600 transition-colors">Empresas</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Iniciar Sesión
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                EcoCycle | Transforma tus <span className="text-green-600">residuos</span> en recursos
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Conéctate con empresas de reciclaje y contribuye a un mundo más sostenible. 
                Cada objeto reciclado cuenta para nuestro futuro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                  Quiero Reciclar
                </button>
                <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
                  Soy una Empresa
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl flex items-center justify-center text-6xl">
                🌍♻️
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">♻️</div>
                  <div>
                    <div className="font-bold text-gray-900">+10,000 kg</div>
                    <div className="text-sm text-gray-600">Reciclados este mes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accede desde tu <span className="text-green-600">móvil</span>
              </h2>
              <p className="text-xl text-gray-600">
                Escanea el código QR con tu teléfono para acceder rápidamente a nuestra 
                plataforma y comenzar a reciclar desde cualquier lugar.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center text-6xl">
                📱
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué elegir EcoCycle?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🗑️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce Residuos</h3>
              <p className="text-gray-600">
                Ayuda a disminuir la cantidad de desechos que terminan en vertederos y contamina el medio ambiente.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apoya Empresas Locales</h3>
              <p className="text-gray-600">
                Conecta con empresas de reciclaje locales y contribuye al crecimiento de la economía circular.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gana Puntos</h3>
              <p className="text-gray-600">
                Obtén recompensas por cada material reciclado y canjéalas por productos ecológicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conoce EcoCycle
            </h2>
            <h3 className="text-2xl text-gray-700 mb-6">
              Transformando el futuro del <span className="text-green-600">reciclaje</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              En EcoCycle, creemos que cada pequeña acción puede generar un gran impacto. 
              Nuestra plataforma conecta a personas conscientes del medio ambiente con empresas 
              de reciclaje, creando una red sostenible que beneficia a todos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Misión</h4>
              <p className="text-gray-600">
                Facilitar el reciclaje inteligente y crear una comunidad comprometida con la sostenibilidad ambiental.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">👁️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Visión</h4>
              <p className="text-gray-600">
                Ser la plataforma líder en reciclaje digital, transformando la manera en que el mundo gestiona sus residuos.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💚</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Valores</h4>
              <p className="text-gray-600">
                Sostenibilidad, innovación, transparencia y compromiso con las futuras generaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Creamos un <span className="text-green-600">ciclo sostenible</span> para el futuro
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                La economía circular es el modelo que necesitamos para un futuro sostenible. 
                En lugar de seguir el modelo lineal de "usar y tirar", creamos un ciclo 
                donde los materiales se reutilizan, reciclan y regeneran continuamente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">♻️</span>
                  <div>
                    <strong className="text-gray-900">Reutilización:</strong>
                    <span className="text-gray-600"> Damos nueva vida a los materiales</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <strong className="text-gray-900">Regeneración:</strong>
                    <span className="text-gray-600"> Restauramos el equilibrio natural</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <strong className="text-gray-900">Comunidad:</strong>
                    <span className="text-gray-600"> Conectamos personas y empresas</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <strong className="text-gray-900">Innovación:</strong>
                    <span className="text-gray-600"> Desarrollamos soluciones creativas</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl flex items-center justify-center text-6xl">
                🔄🌿
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-green-100">Usuarios Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-green-100">Empresas Aliadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500 Ton</div>
              <div className="text-green-100">Toneladas Recicladas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.5M kg</div>
              <div className="text-green-100">CO₂ Evitado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section id="catalogo" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Materiales que Puedes Reciclar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🍶', name: 'Botellas PET', points: '15 pts/kg' },
              { icon: '🥤', name: 'Latas de Aluminio', points: '25 pts/kg' },
              { icon: '🍾', name: 'Botellas de Vidrio', points: '10 pts/kg' },
              { icon: '📄', name: 'Papel de Oficina', points: '8 pts/kg' },
              { icon: '📦', name: 'Cajas de Cartón', points: '5 pts/kg' },
              { icon: '⌨️', name: 'Electrónicos', points: '40 pts/kg' },
              { icon: '🥛', name: 'Tetra Pak', points: '12 pts/kg' },
              { icon: '🔩', name: 'Chatarra de Acero', points: '18 pts/kg' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-green-600 font-bold">{item.points}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Lo que dicen nuestros usuarios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'EcoCycle ha cambiado mi forma de ver el reciclaje. Ahora es fácil, rewarding y siento que realmente estoy contribuyendo al planeta.',
                author: 'María González',
                role: 'Usuario desde 2023'
              },
              {
                text: 'Como empresa, EcoCycle nos ayudó a conectar con más clientes comprometidos con el medio ambiente. Excelente plataforma.',
                author: 'EcoRecicla S.A.',
                role: 'Empresa aliada'
              },
              {
                text: 'Los puntos y recompensas hacen que reciclar sea divertido. Mis hijos también se han unido a la causa.',
                author: 'Carlos Ruiz',
                role: 'Familia eco-friendly'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidad" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Únete a la Comunidad
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Recicladores del Mes</h3>
              <div className="space-y-4">
                {[
                  { name: 'Ana María López', points: '5,820 pts', avatar: '👩‍🌾', position: 1, medal: '🥇' },
                  { name: 'Carlos Mendoza', points: '4,950 pts', avatar: '👨‍💼', position: 2, medal: '🥈' },
                  { name: 'Isabella Chen', points: '4,720 pts', avatar: '👩‍🎓', position: 3, medal: '🥉' }
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600">#{user.position}</div>
                    <div className="text-2xl">{user.avatar}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{user.name}</div>
                      <div className="text-gray-600">{user.points}</div>
                    </div>
                    <div className="text-2xl">{user.medal}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Últimas Discusiones</h3>
              <div className="space-y-4">
                {[
                  { author: 'Luis Pérez', content: '¡Acabo de completar mi primer reciclaje de electrónicos!', time: 'hace 2 horas' },
                  { author: 'Sandra Torres', content: 'Nuestra escuela logró recolectar 250kg de papel este mes 🎉', time: 'hace 4 horas' },
                  { author: 'Roberto Kim', content: '¿Alguien sabe si las cajas de pizza se pueden reciclar?', time: 'hace 6 horas' }
                ].map((post, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="font-semibold text-gray-900">{post.author}</div>
                      <div className="text-sm text-gray-500">{post.time}</div>
                    </div>
                    <p className="text-gray-600">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="empresas" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Para Empresas
            </h2>
            <p className="text-xl text-gray-600">
              Únete a la red de EcoCycle y potencia tu negocio con sostenibilidad
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Beneficios para tu Empresa</h3>
              <div className="space-y-6">
                {[
                  { icon: '📦', title: 'Acceso a Material de Calidad', desc: 'Conecta con usuarios que clasifican materiales reciclables de alta calidad' },
                  { icon: '📢', title: 'Visibilidad de Marca', desc: 'Aumenta el reconocimiento como líder en sostenibilidad' },
                  { icon: '📊', title: 'Reportes de Impacto', desc: 'Recibe informes detallados sobre tu impacto ambiental' }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-3xl">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contacta con Nosotros</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nombre de la empresa" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <input 
                  type="text" 
                  placeholder="RUT de la empresa" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Email de contacto" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <textarea 
                  placeholder="Cuéntanos sobre tu empresa y tus necesidades..." 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para hacer la diferencia?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de personas que ya están transformando el mundo, un reciclaje a la vez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Comenzar Ahora
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-xl">
                  🌱
                </div>
                <span className="text-xl font-bold text-green-400">EcoCycle</span>
              </div>
              <p className="text-gray-400">
                Revolucionamos el reciclaje con tecnología inteligente para crear un futuro más sostenible.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces Útiles</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Acerca de nosotros</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Cómo funciona</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Centro de ayuda</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Para empresas</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Política de privacidad</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Términos de servicio</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Política de cookies</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">📘</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">🐦</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">📷</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">💼</a>
              </div>
              <p className="text-gray-400 text-sm">Hecho con ❤️ para el planeta</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcoCycle. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center text-xl"
        >
          💬
        </button>
        
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col">
            <div className="bg-green-600 text-white p-4 rounded-t-xl flex justify-between items-center">
              <h4 className="font-semibold">EcoBot</h4>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((message, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg max-w-xs ${message.isUser ? 'bg-blue-500 text-white ml-auto' : 'bg-green-100 text-gray-800'}`}>
                  {message.text}
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                onClick={sendMessage}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
