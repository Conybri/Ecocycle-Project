import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthLayout } from '../components/AuthLayout';
import { FormInput } from '../components/FormInput';
import { SubmitButton } from '../components/SubmitButton';
import { useAuthForm } from '../hooks/useAuthForm';

const ForgotPasswordPage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { forgotPassword } = useAuth();
  const { 
    values, 
    handleChange, 
    isSubmitting, 
    setIsSubmitting,
    validateEmail 
  } = useAuthForm({
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!validateEmail(values.email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);
    console.log('Solicitud de restablecimiento de contraseña para:', values.email);

    try {
      const response = await forgotPassword(values.email);
      
      if (response.success) {
        setMessage('Si existe una cuenta con este correo, se ha enviado un enlace para restablecer la contraseña.');
      } else {
        setError(response.message || 'No se pudo procesar la solicitud de restablecimiento de contraseña.');
      }
    } catch (err) {
      setError('Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
      console.error('Forgot password error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout title="Restablecer Contraseña">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <p className="text-gray-600 text-sm">
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>
        
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
        
        {message && (
          <p className="text-green-600 bg-green-100 p-3 rounded-lg">{message}</p>
        )}
        
        {error && (
          <p className="text-red-500 bg-red-100 p-3 rounded-lg">{error}</p>
        )}
        
        <SubmitButton 
          text="Enviar Enlace" 
          isLoading={isSubmitting}
        />
      </form>
      
      <div className="mt-6 text-sm">
        <Link to="/login" className="text-blue-600 hover:underline font-semibold">
          Volver al inicio de sesión
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;