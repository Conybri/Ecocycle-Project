import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext"; 

const Profile = () => {
  const { user } = useAuth(); 
  

  const [activeTab, setActiveTab] = useState("resumen");

  if (!user) {
    return <div className="text-center py-20">Cargando perfil...</div>;
  }

  const memberSince = new Date(user.fechaRegistro).toLocaleDateString("es-CL", {
    year: "numeric", month: "long", day: "numeric",
  });

  const pointsToNextLevel = 250;

  const recyclingStats = {
    realizados: 23,
    co2Evitado: 125,
    energiaAhorrada: 850,
    aguaConservada: 420,
  };

  const recentActivity = [
    { id: 1, material: "Botellas de Plástico PET", kg: 5, recycler: "EcoPlast Reciclaje", pts: 75, date: "2024-01-15" },
    { id: 2, material: "Papel y Cartón", kg: 12, recycler: "ReciclaMax", pts: 120, date: "2024-01-10" },
    { id: 3, material: "Vidrio Transparente", kg: 3, recycler: "EcoVidrio Chile", pts: 60, date: "2024-01-08" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-28 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{user.nombre} {user.apellido}</h2>
          <p className="text-gray-500 mb-1">{user.ciudad}</p>
          <p className="text-sm text-gray-400">Miembro desde {memberSince}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <span className="text-5xl font-bold text-green-600">{user.puntosTotales}</span>
                <p className="text-gray-600">Puntos totales</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <span className="text-5xl font-bold text-green-600">{pointsToNextLevel}</span>
                <p className="text-gray-600">puntos para siguiente nivel</p>
            </div>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 mb-6 bg-white rounded-xl shadow-lg p-2">
          <button onClick={() => setActiveTab("resumen")} className={`px-4 py-2 font-semibold rounded-lg transition-colors w-full ${activeTab === "resumen" ? "bg-green-600 text-white" : "bg-transparent text-gray-600 hover:bg-green-100"}`}>Resumen</button>
          <button onClick={() => setActiveTab("historial")} className={`px-4 py-2 font-semibold rounded-lg transition-colors w-full ${activeTab === "historial" ? "bg-green-600 text-white" : "bg-transparent text-gray-600 hover:bg-green-100"}`}>Historial</button>
          <button onClick={() => setActiveTab("logros")} className={`px-4 py-2 font-semibold rounded-lg transition-colors w-full ${activeTab === "logros" ? "bg-green-600 text-white" : "bg-transparent text-gray-600 hover:bg-green-100"}`}>Logros</button>
          <button onClick={() => setActiveTab("recompensas")} className={`px-4 py-2 font-semibold rounded-lg transition-colors w-full ${activeTab === "recompensas" ? "bg-green-600 text-white" : "bg-transparent text-gray-600 hover:bg-green-100"}`}>Recompensas</button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {activeTab === "resumen" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Resumen de Actividad</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg"><span className="block text-3xl font-bold">{recyclingStats.realizados}</span><p>Reciclajes</p></div>
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg"><span className="block text-3xl font-bold">{recyclingStats.co2Evitado}</span><p>kg CO₂ evitado</p></div>
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg"><span className="block text-3xl font-bold">{recyclingStats.energiaAhorrada}</span><p>kWh ahorrados</p></div>
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg"><span className="block text-3xl font-bold">{recyclingStats.aguaConservada}</span><p>Litros conservados</p></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Actividad Reciente</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{activity.material}</h4>
                        <p className="text-sm text-gray-500">{activity.kg} kg • {activity.recycler}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-green-600">+{activity.pts} pts</span>
                        <p className="text-xs text-gray-400">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "historial" && <div className="text-center py-10 text-gray-500">Historial de reciclaje (próximamente)</div>}
          {activeTab === "logros" && <div className="text-center py-10 text-gray-500">Logros obtenidos (próximamente)</div>}
          {activeTab === "recompensas" && <div className="text-center py-10 text-gray-500">Recompensas disponibles (próximamente)</div>}
        </div>

      </div>
    </div>
  );
};

export default Profile;
