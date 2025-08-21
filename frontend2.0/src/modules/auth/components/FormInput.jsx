import React from 'react';

export const FormInput = ({ 
  label, 
  type = 'text', 
  id, 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error,
  autoComplete
}) => {
  return (
    <div className="text-left">
      <label htmlFor={id} className="block font-semibold text-gray-800 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className={`w-full px-4 py-3 border rounded-lg text-gray-800 bg-gray-100 
          focus:outline-none focus:ring-2 transition-colors
          ${error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
            : 'border-gray-300 focus:border-green-500 focus:ring-green-500/20'
          }`}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};
