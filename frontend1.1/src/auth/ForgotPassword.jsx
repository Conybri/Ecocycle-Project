import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPasswordRequest } from '../services/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    console.log('Solicitud de restablecimiento de contraseña para:', email);

    try {
      // Mocking the API call for now
      if (email.includes('@')) {
        setMessage('Si existe una cuenta con este correo, se ha enviado un enlace para restablecer la contraseña.');
      } else {
        setError('Por favor, introduce un correo electrónico válido.');
      }
      // const response = await forgotPasswordRequest(email);
      // if (response.success) { 
      //   setMessage(response.message);
      // } else {
      //   setError(response.message || 'No se pudo procesar la solicitud de restablecimiento de contraseña.');
      // }
    } catch (err) {
      setError('Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
      console.error('Forgot password error:', err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Restablecer Contraseña</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <p className="text-gray-600 text-sm">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
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
          {message && <p className="text-green-600 bg-green-100 p-3 rounded-lg">{message}</p>}
          {error && <p className="text-red-500 bg-red-100 p-3 rounded-lg">{error}</p>}
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-transform transform hover:-translate-y-0.5">
            Enviar Enlace
          </button>
        </form>
        <div className="mt-6 text-sm">
          <Link to="/login" className="text-blue-600 hover:underline font-semibold">Volver al inicio de sesión</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
