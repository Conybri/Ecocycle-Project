import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Signup = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const ciudadesDeChile = [
    'Arica', 'Iquique', 'Antofagasta', 'Calama', 'Copiapó', 'La Serena', 'Coquimbo', 'Valparaíso',
    'Viña del Mar', 'Santiago', 'Rancagua', 'Talca', 'Concepción', 'Talcahuano', 'Temuco', 'Valdivia',
    'Puerto Montt', 'Coyhaique', 'Punta Arenas'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    const userData = { nombre, apellido, email, ciudad, password };
    try {
      await register(userData);
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      navigate('/login');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Ocurrió un error al intentar registrarse.';
      if (err.response?.status === 409) {
        setError('El correo electrónico ya está registrado.');
      } else {
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Crear Cuenta</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          
          <div className="text-left">
            <label htmlFor="nombre" className="block font-semibold text-gray-800 mb-2">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          <div className="text-left">
            <label htmlFor="apellido" className="block font-semibold text-gray-800 mb-2">Apellido</label>
            <input
              type="text"
              id="apellido"
              placeholder="Tu Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          <div className="text-left">
            <label htmlFor="email" className="block font-semibold text-gray-800 mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tu@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          <div className="text-left">
            <label htmlFor="ciudad" className="block font-semibold text-gray-800 mb-2">Ciudad</label>
            <select
              id="ciudad"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 appearance-none"
            >
              <option value="" disabled>Selecciona tu ciudad</option>
              {ciudadesDeChile.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="text-left">
            <label htmlFor="password" className="block font-semibold text-gray-800 mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          <div className="text-left">
            <label htmlFor="confirmPassword" className="block font-semibold text-gray-800 mb-2">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          {error && <p className="text-red-500 text-sm -mt-2 mb-4">{error}</p>}
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-transform transform hover:-translate-y-0.5 mt-2">
            Registrarse
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          <p>¿Ya tienes una cuenta? <Link to="/login" className="text-blue-600 hover:underline font-semibold">Iniciar Sesión</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;