import React, { useState, useEffect } from 'react';

function About({ language }) {
  const [aboutData, setAboutData] = useState({
    ru: {
      title: 'Квалификация и опыт',
      name: 'Ирина Викторовна Петрова',
      position: 'Репетитор по математике с 9-летним опытом',
      birthDate: '21.05.1995',
      education: 'В 2019 году окончила Южный федеральный университет по специальности «Педагогическое образование, профиль Математика». Обучение проходило в Институте математики, механики и компьютерных наук имени И. И. Воровича.',
      achievements: [
        'Подготовила более 50 учеников к успешной сдаче ЕГЭ. Средний балл их результатов — 80 и выше.',
        'Разработала методику «Формула успешных экзаменов».'
      ],
      awards: 'Лауреат конкурса «Лучший репетитор года» (2024).',
      principles: 'Индивидуальный подход, понятное объяснение сложных тем и ориентация на результат.'
    },
    en: {
      title: 'Qualifications and Experience',
      name: 'Irina Viktorovna Petrova',
      position: 'Mathematics tutor with 9 years of experience',
      birthDate: '21.05.1995',
      education: 'In 2019, graduated from Southern Federal University with a degree in "Pedagogical Education, Mathematics profile". Studied at the Institute of Mathematics, Mechanics and Computer Sciences named after I. I. Vorovich.',
      achievements: [
        'Prepared more than 50 students for successful passing of the Unified State Exam. The average score of their results is 80 and above.',
        'Developed the methodology "Formula for Successful Exams".'
      ],
      awards: 'Laureate of the "Best Tutor of the Year" competition (2024).',
      principles: 'Individual approach, clear explanation of complex topics and focus on results.'
    }
  });
  
  useEffect(() => {
    // Загрузка данных из localStorage при монтировании
    const savedAbout = localStorage.getItem('about');
    if (savedAbout) {
      setAboutData(JSON.parse(savedAbout));
    }
  }, []);

  const currentTexts = aboutData[language];

  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-photo">
          <img src="/teacher.png" alt={currentTexts.name} />
        </div>
        <div className="about-info">
          <h1>{currentTexts.title}</h1>
          <h2 className="author-name">{currentTexts.name}</h2>
          <p className="author-position">{currentTexts.position}</p>
          <p className="birth-date"><strong>Дата рождения:</strong> {currentTexts.birthDate}</p>
        </div>
      </div>

      <div className="about-content">
        <section className="education-section">
          <h3>Образование:</h3>
          <p>{currentTexts.education}</p>
        </section>

        <section className="achievements-section">
          <h3>Достижения:</h3>
          <ul>
            {currentTexts.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section className="awards-section">
          <h3>Награды:</h3>
          <p>{currentTexts.awards}</p>
        </section>

        <section className="principles-section">
          <h3>Принципы работы:</h3>
          <p>{currentTexts.principles}</p>
        </section>
      </div>
    </div>
  );
}

export default About; 