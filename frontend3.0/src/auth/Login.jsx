import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../styles/Auth.css';

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
    console.log('Enviando credenciales de login:', credentials);

    try {
      const response = await login(credentials);
      console.log('Respuesta del backend (login):', response);

      if (response.jwt) {
        navigate('/');
      } else {
        setError(response.message || 'Correo electrónico o contraseña incorrectos.');
      }
    } catch (err) {
      setError('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Iniciar Sesión</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
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
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn btn-primary btn-full">Ingresar</button>
        </form>
        <div className="auth-links">
          <Link to="/forgot-password" className="auth-link">¿Olvidaste tu contraseña?</Link>
          <p>¿No tienes una cuenta? <Link to="/register" className="auth-link">Regístrate</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
