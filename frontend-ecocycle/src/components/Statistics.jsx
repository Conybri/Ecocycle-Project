import React, { useState, useEffect, useRef } from 'react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    users: 0,
    companies: 0,
    material: 0,
    co2: 0
  });
  
  const sectionRef = useRef(null);

  const stats = [
    { key: 'users', target: 50000, label: 'Usuarios Activos', suffix: '+' },
    { key: 'companies', target: 1200, label: 'Empresas Aliadas', suffix: '+' },
    { key: 'material', target: 500, label: 'Toneladas Recicladas', suffix: ' Ton' },
    { key: 'co2', target: 2500, label: 'Kg CO₂ Evitado', suffix: 'M kg' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach(stat => {
        let start = 0;
        const increment = stat.target / 100;
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.target) {
            setCounters(prev => ({ ...prev, [stat.key]: stat.target }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [stat.key]: Math.floor(start) }));
          }
        }, 20);
      });
    }
  }, [isVisible]);

  const formatNumber = (num, suffix) => {
    if (suffix === 'M kg') return `${(num / 1000).toFixed(1)}M kg`;
    return `${num.toLocaleString()}${suffix}`;
  };

  return (
    <section className="statistics" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.key} className="stat-item">
              <div className="stat-number">
                {formatNumber(counters[stat.key], stat.suffix)}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
