import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css'; // Reutilizar los estilos de autenticación
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
      const response = await forgotPasswordRequest(email);

      if (response.success) { // Asumiendo que el backend devuelve { success: true, message: "..." }
        setMessage(response.message);
      } else {
        setError(response.message || 'No se pudo procesar la solicitud de restablecimiento de contraseña.');
      }
    } catch (err) {
      setError('Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
      console.error('Forgot password error:', err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Restablecer Contraseña</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <p className="auth-description">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tu@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn btn-primary btn-full">Enviar Enlace</button>
        </form>
        <div className="auth-links">
          <Link to="/login" className="auth-link">Volver al inicio de sesión</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
