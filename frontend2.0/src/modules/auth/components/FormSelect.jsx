import React from 'react';

export const FormSelect = ({ 
  label, 
  id, 
  name, 
  value, 
  onChange, 
  options, 
  placeholder = 'Selecciona una opción',
  required = false,
  error 
}) => {
  return (
    <div className="text-left">
      <label htmlFor={id} className="block font-semibold text-gray-800 mb-2">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 border rounded-lg text-gray-800 bg-gray-100 
          focus:outline-none focus:ring-2 transition-colors appearance-none
          ${error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
            : 'border-gray-300 focus:border-green-500 focus:ring-green-500/20'
          }`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(option => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};