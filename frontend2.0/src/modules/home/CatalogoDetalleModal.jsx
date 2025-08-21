import React from 'react';
import { X, Star, Shield, ExternalLink, Building, Phone, Mail, MapPin } from 'lucide-react';

export default function CatalogoDetalleModal({ material, open, onClose }) {
  if (!open || !material) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Imagen y título */}
        <div className="flex flex-col md:flex-row">
          <img
            src={material.image}
            alt={material.name}
            className="w-full md:w-64 h-48 md:h-auto object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
          <div className="flex-1 p-6 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-gray-800">{material.name}</h2>
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800 mb-2">
              {material.category}
            </span>
            <p className="text-gray-600">{material.description}</p>
            <div className="flex gap-4 mt-2 flex-wrap">
              <div className="flex items-center gap-1 text-green-700 font-semibold">
                +{material.points} pts/kg
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <MapPin className="h-4 w-4" />
                {material.distance}
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                ⏱ {material.processingTime}
              </div>
            </div>
          </div>
        </div>

        {/* Empresas recicladoras */}
        <div className="p-6 pt-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Building className="h-5 w-5 text-green-600" />
            Empresas Recicladoras ({material.companies.length})
          </h3>
          <div className="space-y-4">
            {material.companies.map((company, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100">
                    <Building className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{company.name}</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-500">{company.rating}</span>
                      {company.verified && <Shield className="h-4 w-4 text-green-500" />}
                    </div>
                    <div className="text-xs text-gray-500">{company.description}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      {company.address}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap mt-2 md:mt-0">
                  <a
                    href={`https://${company.website.replace(/^https?:\/\//, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-100 text-green-700 text-xs font-medium hover:bg-green-200 transition"
                    title="Visitar sitio web"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Web
                  </a>
                  <a
                    href={`tel:${company.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-medium hover:bg-blue-200 transition"
                    title="Llamar"
                  >
                    <Phone className="h-4 w-4" />
                    Llamar
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-orange-100 text-orange-700 text-xs font-medium hover:bg-orange-200 transition"
                    title="Enviar correo"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
