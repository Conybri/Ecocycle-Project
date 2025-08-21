import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle className="w-12 h-12 text-destructive mb-4" />
      <h3 className="text-lg font-semibold mb-2">Error al cargar datos</h3>
      <p className="text-muted-foreground mb-4">
        {typeof error === 'string' ? error : 'Ha ocurrido un error inesperado'}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Reintentar
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;