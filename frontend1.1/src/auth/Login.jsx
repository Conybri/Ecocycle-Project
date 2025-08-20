import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const credentials = { email, password };

    try {
      await login(credentials);
      navigate('/dashboard'); // Redirige al dashboard en caso de éxito
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Correo electrónico o contraseña incorrectos.');
      } else {
        setError('No se pudo conectar con el servidor. Inténtalo más tarde.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Iniciar Sesión</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
          {error && <p className="text-red-500 text-sm -mt-2 mb-4">{error}</p>}
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-transform transform hover:-translate-y-0.5">
            Ingresar
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          <Link to="/forgot-password" className="text-blue-600 hover:underline font-semibold">¿Olvidaste tu contraseña?</Link>
          <p className="mt-2">¿No tienes una cuenta? <Link to="/register" className="text-blue-600 hover:underline font-semibold">Regístrate</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;