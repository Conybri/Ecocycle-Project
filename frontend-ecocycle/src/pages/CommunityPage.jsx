import React from 'react';

const CommunityPage = () => {
  const topRecyclers = [
    { position: 1, name: 'Ana María López', points: 5820, avatar: '👩‍🌾' },
    { position: 2, name: 'Carlos Mendoza', points: 4950, avatar: '👨‍💼' },
    { position: 3, name: 'Isabella Chen', points: 4720, avatar: '👩‍🎓' },
    { position: 4, name: 'Diego Ramírez', points: 4240, avatar: '👨‍🔧' },
    { position: 5, name: 'María José Silva', points: 3890, avatar: '👩‍💻' }
  ];

  const recentPosts = [
    {
      id: 1,
      author: 'Luis Pérez',
      avatar: '👨‍🌾',
      timestamp: 'hace 2 horas',
      content: '¡Acabo de completar mi primer reciclaje de electrónicos! ¿Algún consejo para separar baterías correctamente?',
      likes: 12,
      comments: 5
    },
    {
      id: 2,
      author: 'Sandra Torres',
      avatar: '👩‍🏫',
      timestamp: 'hace 4 horas',
      content: 'Nuestra escuela logró recolectar 250kg de papel este mes. Los niños están súper emocionados con el proyecto 🎉',
      likes: 28,
      comments: 9
    },
    {
      id: 3,
      author: 'Roberto Kim',
      avatar: '👨‍🍳',
      timestamp: 'hace 6 horas',
      content: '¿Alguien sabe si las cajas de pizza manchadas con aceite se pueden reciclar? Tengo muchas del negocio.',
      likes: 7,
      comments: 3
    }
  ];

  const successStories = [
    {
      id: 1,
      title: 'María G. transformó su barrio con un punto de acopio',
      excerpt: 'Descubre cómo María creó el primer centro de reciclaje comunitario en Las Condes y ya procesa 2 toneladas mensuales.',
      image: '🏘️',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'EcoTech: De startup a empresa B certificada',
      excerpt: 'La historia de cómo una pequeña empresa de tecnología logró neutralidad de carbono usando EcoCycle.',
      image: '🏢',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'El colegio que enseña reciclaje con gamificación',
      excerpt: 'Cómo el Colegio San Patricio integró EcoCycle en su currícula y aumentó el reciclaje 300%.',
      image: '🎓',
      readTime: '4 min'
    }
  ];

  const handleLike = (postId) => {
    console.log(`Liked post ${postId}`);
  };

  const handleComment = (postId) => {
    console.log(`Comment on post ${postId}`);
  };

  return (
    <div className="community-page">
      <div className="container">
        <div className="community-header">
          <h1>Únete a la Comunidad EcoCycle</h1>
          <p>Conecta con miles de personas comprometidas con el medio ambiente</p>
        </div>

        {/* Leaderboard Section */}
        <section className="leaderboard-section">
          <h2>Top Recicladores del Mes</h2>
          <div className="leaderboard">
            {topRecyclers.map((user) => (
              <div key={user.position} className="leaderboard-item">
                <div className="rank">#{user.position}</div>
                <div className="user-avatar">{user.avatar}</div>
                <div className="user-info">
                  <span className="user-name">{user.name}</span>
                  <span className="user-points">{user.points.toLocaleString()} pts</span>
                </div>
                {user.position <= 3 && (
                  <div className="medal">
                    {user.position === 1 && '🥇'}
                    {user.position === 2 && '🥈'}
                    {user.position === 3 && '🥉'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="forum-section">
          <h2>Últimas Discusiones</h2>
          <div className="posts-container">
            {recentPosts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="post-avatar">{post.avatar}</div>
                  <div className="post-meta">
                    <span className="post-author">{post.author}</span>
                    <span className="post-timestamp">{post.timestamp}</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>{post.content}</p>
                </div>
                <div className="post-actions">
                  <button 
                    className="action-btn like-btn" 
                    onClick={() => handleLike(post.id)}
                  >
                    👍 {post.likes}
                  </button>
                  <button 
                    className="action-btn comment-btn" 
                    onClick={() => handleComment(post.id)}
                  >
                    💬 {post.comments}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="stories-section">
          <h2>Historias que Inspiran</h2>
          <div className="stories-grid">
            {successStories.map((story) => (
              <div key={story.id} className="story-card">
                <div className="story-image">{story.image}</div>
                <div className="story-content">
                  <h3>{story.title}</h3>
                  <p>{story.excerpt}</p>
                  <div className="story-meta">
                    <span className="read-time">⏱️ {story.readTime}</span>
                    <button className="read-more-btn">Leer más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
