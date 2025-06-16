import React, { useState, useEffect } from 'react';

function Home({ language }) {
  const [homeData, setHomeData] = useState({
    ru: {
      title: 'Формула успешных экзаменов',
      subtitle: 'Превращаю сложные задачи в понятные решения',
      description: 'Индивидуальный подход в каждом уроке для уверенного освоения материала',
      cta: 'Получить бесплатный урок',
      achievement: 'Превращаю сложные задачи в понятные решения'
    },
    en: {
      title: 'Formula for Successful Exams',
      subtitle: 'Turning complex problems into understandable solutions',
      description: 'Individual approach in every lesson for confident mastery of material',
      cta: 'Get Free Lesson',
      achievement: 'Turning complex problems into understandable solutions'
    }
  });

  useEffect(() => {
    // Загрузка данных из localStorage при монтировании
    const savedHome = localStorage.getItem('home');
    if (savedHome) {
      setHomeData(JSON.parse(savedHome));
    }
  }, []);

  const currentContent = homeData[language];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="achievement-badge">
              <span>🎯</span>
              <span>{currentContent.achievement}</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-highlight">Формула</span><br/>
              <span className="title-main">Успешных</span><br/>
              <span className="title-main">Экзаменов</span>
            </h1>
            
            <p className="hero-description">
              {currentContent.description}
            </p>
            
            <button className="cta-button">
              {currentContent.cta}
            </button>
          </div>
          
          <div className="hero-image">
            <img src="/teacher.png" alt="Ирина Викторовна - репетитор математики" />
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number">9</span>
            <span className="stat-label">лет опыта</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">учеников</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">80+</span>
            <span className="stat-label">средний балл</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">🏆</span>
            <span className="stat-label">авторская методика</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 