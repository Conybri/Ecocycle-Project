import React from 'react';
import { X, MapPin, Star, Clock, Users, Shield } from 'lucide-react';

export default function CatalogoDetalleModal({ material, open, onClose }) {
  if (!open || !material) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
          <div className="absolute right-4 top-4 z-10">
            <button
              onClick={onClose}
              className="rounded-full bg-white/80 p-2 text-gray-400 hover:text-gray-500 focus:outline-none backdrop-blur-sm"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Image */}
          <div className="relative h-72 w-full">
            <img
              src={material.image}
              alt={material.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            {/* Points Badge */}
            <div className="absolute top-4 right-16">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="font-bold">+{material.points} pts</span>
              </div>
            </div>
          </div>

          <div className="bg-white px-8 py-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{material.name}</h3>
              <p className="text-gray-600">{material.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Distance */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-semibold">{material.distance}</span>
                </div>
              </div>

              {/* Processing Time */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-semibold">{material.processingTime}</span>
                </div>
              </div>
            </div>

            {/* Companies Section */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                Empresas Participantes
              </h4>
              <div className="space-y-3">
                {material.companies.map((company) => (
                  <div
                    key={company}
                    className="flex items-center justify-between bg-gray-50 rounded-xl p-4"
                  >
                    <span className="font-medium text-gray-900">{company}</span>
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 rounded-xl bg-gray-100 px-4 py-3 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
              >
                Cerrar
              </button>
              <button className="flex-1 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 px-4 py-3 text-white font-semibold hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-[1.02]">
                Contactar Empresa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
