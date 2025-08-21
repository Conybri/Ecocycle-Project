import React from "react";

const Comunidad = () => {
  const topRecyclers = [
    { id: 1, rank: "#1", icon: "👩‍🌾", name: "Ana María López", points: "5,820 pts", medal: "🥇" },
    { id: 2, rank: "#2", icon: "👨‍💼", name: "Carlos Mendoza", points: "4,950 pts", medal: "🥈" },
    { id: 3, rank: "#3", icon: "👩‍🎓", name: "Isabella Chen", points: "4,720 pts", medal: "🥉" },
    { id: 4, rank: "#4", icon: "👨‍🔧", name: "Diego Ramírez", points: "4,240 pts", medal: "" },
    { id: 5, rank: "#5", icon: "👩‍💻", name: "María José Silva", points: "3,890 pts", medal: "" }
  ];

  const discussions = [
    { id: 1, icon: "👨‍🌾", name: "Luis Pérez", time: "hace 2 horas", content: "¡Acabo de completar mi primer reciclaje de electrónicos! ¿Algún consejo para separar baterías correctamente?", likes: 12, comments: 5 },
    { id: 2, icon: "👩‍🏫", name: "Sandra Torres", time: "hace 4 horas", content: "Nuestra escuela logró recolectar 250kg de papel este mes. Los niños están súper emocionados con el proyecto 🎉", likes: 28, comments: 9 },
    { id: 3, icon: "👨‍🍳", name: "Roberto Kim", time: "hace 6 horas", content: "¿Alguien sabe si las cajas de pizza manchadas con aceite se pueden reciclar? Tengo muchas del negocio.", likes: 7, comments: 3 }
  ];

  const inspiringStories = [
    { id: 1, icon: "🏘️", title: "María G. transformó su barrio con un punto de acopio", description: "Descubre cómo María creó el primer centro de reciclaje comunitario en Las Condes y ya procesa 2 toneladas mensuales.", time: "5 min" },
    { id: 2, icon: "🏢", title: "EcoTech: De startup a empresa B certificada", description: "La historia de cómo una pequeña empresa de tecnología logró neutralidad de carbono usando EcoCycle.", time: "7 min" },
    { id: 3, icon: "🎓", title: "El colegio que enseña reciclaje con gamificación", description: "Cómo el Colegio San Patricio integró EcoCycle en su currícula y aumentó el reciclaje 300%.", time: "4 min" }
  ];

  return (
    <div className="bg-green-50 min-h-screen pt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Únete a la Comunidad EcoCycle</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Conecta con miles de personas comprometidas con el medio ambiente.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-center mb-6">Últimas Discusiones</h2>
              <div className="space-y-6">
                {discussions.map(discussion => (
                  <div key={discussion.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl">{discussion.icon}</span>
                      <div>
                        <h4 className="font-semibold">{discussion.name}</h4>
                        <p className="text-sm text-gray-500">{discussion.time}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{discussion.content}</p>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 font-semibold rounded-md hover:bg-green-200 transition-colors">
                        <span>👍</span>
                        <span>{discussion.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 font-semibold rounded-md hover:bg-gray-200 transition-colors">
                        <span>💬</span>
                        <span>{discussion.comments}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-center mb-6">Historias que Inspiran</h2>
              <div className="space-y-6">
                {inspiringStories.map(story => (
                  <div key={story.id} className="flex gap-4 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <span className="text-4xl mt-1">{story.icon}</span>
                    <div>
                      <h3 className="font-semibold mb-2">{story.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{story.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">⏱️ {story.time} de lectura</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <section className="bg-white rounded-xl p-6 shadow-md sticky top-8">
              <h2 className="text-2xl font-bold text-center mb-6">Top Recicladores</h2>
              <div className="space-y-4">
                {topRecyclers.map(recycler => (
                  <div key={recycler.id} className="flex items-center gap-4 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <span className="font-bold text-green-600 w-8">{recycler.rank}</span>
                    <span className="text-3xl">{recycler.icon}</span>
                    <div className="flex-grow">
                      <p className="font-semibold">{recycler.name}</p>
                      <p className="text-sm text-green-700 font-medium">{recycler.points}</p>
                    </div>
                    <span className="text-2xl">{recycler.medal}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comunidad;