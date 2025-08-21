import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthLayout } from '../components/AuthLayout';
import { FormInput } from '../components/FormInput';
import { FormSelect } from '../components/FormSelect';
import { SubmitButton } from '../components/SubmitButton';
import { useAuthForm } from '../hooks/useAuthForm';
import { CIUDADES_CHILE } from '../utils/constants';

const RegisterPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();
  const { 
    values, 
    handleChange, 
    isSubmitting, 
    setIsSubmitting,
    validateEmail,
    validatePassword 
  } = useAuthForm({
    nombre: '',
    apellido: '',
    email: '',
    ciudad: '',
    password: '',
    confirmPassword: ''
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

    if (values.password !== values.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setIsSubmitting(true);

    const userData = { 
      nombre: values.nombre, 
      apellido: values.apellido, 
      email: values.email, 
      ciudad: values.ciudad, 
      password: values.password 
    };

    try {
      const { data, status } = await register(userData);

      if (status === 200) {
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        navigate('/login');
      } else if (status === 409) {
        setError('El correo electrónico ya está registrado.');
      } else {
        setError(data.message || 'Ocurrió un error al intentar registrarse.');
      }
    } catch (err) {
      setError('Ocurrió un error al intentar registrarse. Por favor, inténtalo de nuevo.');
      console.error('Registration error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Crear Cuenta</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <FormInput
            label="Nombre"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu Nombre"
            value={values.nombre}
            onChange={handleChange}
            required
            autoComplete="given-name"
          />

          <FormInput
            label="Apellido"
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Tu Apellido"
            value={values.apellido}
            onChange={handleChange}
            required
            autoComplete="family-name"
          />

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

          <FormSelect
            label="Ciudad"
            id="ciudad"
            name="ciudad"
            value={values.ciudad}
            onChange={handleChange}
            options={CIUDADES_CHILE}
            placeholder="Selecciona tu ciudad"
            required
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
            autoComplete="new-password"
          />

          <FormInput
            label="Confirmar Contraseña"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            value={values.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          {error && (
            <p className="text-red-500 text-sm -mt-2 mb-4">{error}</p>
          )}
          
          <SubmitButton 
            text="Registrarse" 
            isLoading={isSubmitting}
          />
        </form>
        
        <div className="mt-6 text-sm text-gray-600">
          <p>
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-semibold">
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;