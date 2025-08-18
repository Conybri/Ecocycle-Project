import React from "react";
import '../styles/Comunidad.css';

const Comunidad = () => {
  const topRecyclers = [
    {
      id: 1,
      rank: "#1",
      icon: "👩‍🌾",
      name: "Ana María López",
      points: "5,820 pts",
      medal: "🥇"
    },
    {
      id: 2,
      rank: "#2",
      icon: "👨‍💼",
      name: "Carlos Mendoza",
      points: "4,950 pts",
      medal: "🥈"
    },
    {
      id: 3,
      rank: "#3",
      icon: "👩‍🎓",
      name: "Isabella Chen",
      points: "4,720 pts",
      medal: "🥉"
    },
    {
      id: 4,
      rank: "#4",
      icon: "👨‍🔧",
      name: "Diego Ramírez",
      points: "4,240 pts",
      medal: ""
    },
    {
      id: 5,
      rank: "#5",
      icon: "👩‍💻",
      name: "María José Silva",
      points: "3,890 pts",
      medal: ""
    }
  ];

  const discussions = [
    {
      id: 1,
      icon: "👨‍🌾",
      name: "Luis Pérez",
      time: "hace 2 horas",
      content: "¡Acabo de completar mi primer reciclaje de electrónicos! ¿Algún consejo para separar baterías correctamente?",
      likes: 12,
      comments: 5
    },
    {
      id: 2,
      icon: "👩‍🏫",
      name: "Sandra Torres",
      time: "hace 4 horas",
      content: "Nuestra escuela logró recolectar 250kg de papel este mes. Los niños están súper emocionados con el proyecto 🎉",
      likes: 28,
      comments: 9
    },
    {
      id: 3,
      icon: "👨‍🍳",
      name: "Roberto Kim",
      time: "hace 6 horas",
      content: "¿Alguien sabe si las cajas de pizza manchadas con aceite se pueden reciclar? Tengo muchas del negocio.",
      likes: 7,
      comments: 3
    }
  ];

  const inspiringStories = [
    {
      id: 1,
      icon: "🏘️",
      title: "María G. transformó su barrio con un punto de acopio",
      description: "Descubre cómo María creó el primer centro de reciclaje comunitario en Las Condes y ya procesa 2 toneladas mensuales.",
      time: "5 min"
    },
    {
      id: 2,
      icon: "🏢",
      title: "EcoTech: De startup a empresa B certificada",
      description: "La historia de cómo una pequeña empresa de tecnología logró neutralidad de carbono usando EcoCycle.",
      time: "7 min"
    },
    {
      id: 3,
      icon: "🎓",
      title: "El colegio que enseña reciclaje con gamificación",
      description: "Cómo el Colegio San Patricio integró EcoCycle en su currícula y aumentó el reciclaje 300%.",
      time: "4 min"
    }
  ];

  return (
    <div className="comunidad-page">
      <div className="container">
        <div className="comunidad-header">
          <h1>Únete a la Comunidad EcoCycle</h1>
          <p>Conecta con miles de personas comprometidas con el medio ambiente</p>
        </div>

        <div className="comunidad-content">
          {/* Top Recicladores Section */}
          <section className="top-recyclers-section">
            <h2>Top Recicladores del Mes</h2>
            <div className="recyclers-grid">
              {topRecyclers.map(recycler => (
                <div key={recycler.id} className="recycler-card">
                  <div className="recycler-rank">{recycler.rank}</div>
                  <div className="recycler-icon">{recycler.icon}</div>
                  <div className="recycler-info">
                    <h3 className="recycler-name">{recycler.name}</h3>
                    <div className="recycler-points">{recycler.points}</div>
                  </div>
                  {recycler.medal && (
                    <div className="recycler-medal">{recycler.medal}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Discussions Section */}
          <section className="discussions-section">
            <h2>Últimas Discusiones</h2>
            <div className="discussions-list">
              {discussions.map(discussion => (
                <div key={discussion.id} className="discussion-card">
                  <div className="discussion-header">
                    <div className="discussion-author">
                      <span className="author-icon">{discussion.icon}</span>
                      <div className="author-info">
                        <h4 className="author-name">{discussion.name}</h4>
                        <span className="discussion-time">{discussion.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="discussion-content">
                    <p>{discussion.content}</p>
                  </div>
                  <div className="discussion-actions">
                    <button className="action-btn">
                      <span>👍</span>
                      <span>{discussion.likes}</span>
                    </button>
                    <button className="action-btn">
                      <span>💬</span>
                      <span>{discussion.comments}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inspiring Stories Section */}
          <section className="stories-section">
            <h2>Historias que Inspiran</h2>
            <div className="stories-grid">
              {inspiringStories.map(story => (
                <div key={story.id} className="story-card">
                  <div className="story-icon">{story.icon}</div>
                  <div className="story-content">
                    <h3 className="story-title">{story.title}</h3>
                    <p className="story-description">{story.description}</p>
                    <div className="story-meta">
                      <span className="story-time">⏱️ {story.time}</span>
                      <button className="read-more-btn">Leer más</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Comunidad;
