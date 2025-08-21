import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthLayout } from '../components/AuthLayout';
import { FormInput } from '../components/FormInput';
import { SubmitButton } from '../components/SubmitButton';
import { useAuthForm } from '../hooks/useAuthForm';

const LoginPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const { 
    values, 
    handleChange, 
    isSubmitting, 
    setIsSubmitting,
    validateEmail,
    validatePassword 
  } = useAuthForm({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (!validateEmail(values.email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (!validatePassword(values.password)) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await login(values);
      console.log('Respuesta del backend (login):', response);

      if (response.jwt) {
        navigate('/');
      } else {
        setError(response.message || 'Correo electrónico o contraseña incorrectos.');
      }
    } catch (err) {
      setError('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.');
      console.error('Login error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout title="Iniciar Sesión">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <FormInput
          label="Correo Electrónico"
          type="email"
          id="email"
          name="email"
          placeholder="tu@ejemplo.com"
          value={values.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
        
        <FormInput
          label="Contraseña"
          type="password"
          id="password"
          name="password"
          placeholder="********"
          value={values.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
        />
        
        {error && (
          <p className="text-red-500 text-sm -mt-2 mb-4">{error}</p>
        )}
        
        <SubmitButton 
          text="Ingresar" 
          isLoading={isSubmitting}
        />
      </form>
      
      <div className="mt-6 text-sm text-gray-600">
        <Link to="/forgot-password" className="text-blue-600 hover:underline font-semibold">
          ¿Olvidaste tu contraseña?
        </Link>
        <p className="mt-2">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-semibold">
            Regístrate
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;