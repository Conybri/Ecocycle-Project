import React, { useState } from "react";

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
    console.log({ companyName, rut, contactName, position, email, phone, address, materials, capacity, description });
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
    <div className="bg-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4">

        <section className="bg-green-700 text-white rounded-xl p-12 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Únete a la red líder de reciclaje</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Conecta con miles de usuarios comprometidos con el medio ambiente y haz crecer tu negocio de reciclaje de manera sostenible en Chile.</p>
          <div className="flex justify-center gap-4">
            <button type="button" className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">Registrar Empresa</button>
            <button type="button" className="bg-green-600 text-white border-2 border-white font-bold py-3 px-8 rounded-lg hover:bg-green-800 transition-colors">Ver Demo</button>
          </div>
        </section>

        <section className="bg-white rounded-xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">¿Por qué elegir EcoCycle para tu empresa?</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">Nuestra plataforma está diseñada para ayudar a las empresas de reciclaje a crecer y generar mayor impacto.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Nuevos Clientes</h3>
              <p className="text-gray-700">Conecta con miles de usuarios comprometidos con el reciclaje en tu área.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Crecimiento Sostenible</h3>
              <p className="text-gray-700">Aumenta tu volumen de materiales reciclados de manera constante.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Confianza y Credibilidad</h3>
              <p className="text-gray-700">Sistema de reseñas y verificación que genera confianza en los usuarios.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Marketing Dirigido</h3>
              <p className="text-gray-700">Llega exactamente a las personas que buscan tus servicios de reciclaje.</p>
            </div>
          </div>
        </section>

        <section className="bg-green-600 text-white rounded-xl p-12 mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                    <span className="text-4xl font-bold">1,200+</span>
                    <p>Empresas Registradas</p>
                </div>
                <div>
                    <span className="text-4xl font-bold">50,000+</span>
                    <p>Usuarios Activos</p>
                </div>
                <div>
                    <span className="text-4xl font-bold">500 Ton</span>
                    <p>Material Procesado/Mes</p>
                </div>
                <div>
                    <span className="text-4xl font-bold">95%</span>
                    <p>Satisfacción Empresarial</p>
                </div>
            </div>
        </section>

        <section className="bg-white rounded-xl p-12 mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Herramientas poderosas para tu negocio</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">Todo lo que necesitas para gestionar y hacer crecer tu empresa de reciclaje en una sola plataforma.</p>
            <ul className="max-w-md mx-auto space-y-3 text-gray-700">
                <li className="bg-gray-100 p-3 rounded-md flex items-center"><span className="text-green-500 font-bold mr-2">✓</span>Dashboard empresarial completo</li>
                <li className="bg-gray-100 p-3 rounded-md flex items-center"><span className="text-green-500 font-bold mr-2">✓</span>Gestión de citas y recolecciones</li>
                <li className="bg-gray-100 p-3 rounded-md flex items-center"><span className="text-green-500 font-bold mr-2">✓</span>Sistema de comunicación integrado</li>
                <li className="bg-gray-100 p-3 rounded-md flex items-center"><span className="text-green-500 font-bold mr-2">✓</span>Reportes de impacto ambiental</li>
                <li className="bg-gray-100 p-3 rounded-md flex items-center"><span className="text-green-500 font-bold mr-2">✓</span>Herramientas de marketing</li>
                <li className="bg-gray-100 p-3 rounded-md flex items-center"><span className="text-green-500 font-bold mr-2">✓</span>Soporte técnico especializado</li>
            </ul>
        </section>

        <section className="bg-white rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-4">Registra tu empresa hoy</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">Completa el formulario y nos pondremos en contacto contigo.</p>
          <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="companyName" className="block font-semibold mb-2">Nombre de la Empresa *</label>
              <input type="text" id="companyName" placeholder="Ej: EcoRecicla S.A.S" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="rut" className="block font-semibold mb-2">RUT *</label>
              <input type="text" id="rut" placeholder="123456789-0" value={rut} onChange={(e) => setRut(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="contactName" className="block font-semibold mb-2">Nombre del Contacto *</label>
              <input type="text" id="contactName" placeholder="Juan Pérez" value={contactName} onChange={(e) => setContactName(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="position" className="block font-semibold mb-2">Cargo *</label>
              <input type="text" id="position" placeholder="Gerente General" value={position} onChange={(e) => setPosition(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">Email Corporativo *</label>
              <input type="email" id="email" placeholder="contacto@empresa.cl" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold mb-2">Teléfono *</label>
              <input type="tel" id="phone" placeholder="+56 2 2345-6789" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="address" className="block font-semibold mb-2">Dirección Completa *</label>
              <input type="text" id="address" placeholder="Av. Providencia 1234, Providencia, Santiago, Chile" value={address} onChange={(e) => setAddress(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block font-semibold mb-2">Tipos de Material que Reciclan *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[ "Plástico", "Vidrio", "Papel", "Metal", "Electrónicos", "Textiles", "Orgánicos", "Otros", ].map((material) => (
                  <label key={material} className="flex items-center gap-2">
                    <input type="checkbox" value={material} checked={materials.includes(material)} onChange={handleMaterialChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                    {material}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="capacity" className="block font-semibold mb-2">Capacidad Mensual (Toneladas)</label>
              <input type="number" id="capacity" placeholder="Ej: 500" value={capacity} onChange={(e) => setCapacity(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="description" className="block font-semibold mb-2">Cuéntanos sobre tu empresa</label>
              <textarea id="description" rows="5" placeholder="Describe brevemente tu empresa, servicios y experiencia en reciclaje..." value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="termsAccepted" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} required className="h-4 w-4 text-green-600 focus:ring-green-500" />
              <label htmlFor="termsAccepted">Acepto los términos y condiciones y la política de privacidad</label>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors">Registrar Empresa</button>
          </form>
        </section>

      </div>
    </div>
  );
};

export default Empresas;