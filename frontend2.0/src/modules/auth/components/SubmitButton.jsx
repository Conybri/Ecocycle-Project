import React from 'react';

export const SubmitButton = ({ text, isLoading = false, onClick, type = 'submit' }) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold 
        hover:bg-green-700 transition-transform transform hover:-translate-y-0.5
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Procesando...
        </span>
      ) : text}
    </button>
  );
};