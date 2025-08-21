import React from 'react';

export const AuthLayout = ({ children, title }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};