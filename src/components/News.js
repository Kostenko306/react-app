import React, { useState, useEffect } from 'react';

function News({ language }) {
  const [newsData, setNewsData] = useState({
    ru: {
      title: 'Новости и события',
      description: 'Здесь я публикую актуальные обновления, акции, полезные материалы и анонсы мероприятий',
      posts: [
        {
          date: '09.06.2025',
          title: 'Летний интенсив по подготовке к ЕГЭ',
          content: 'Специальный курс для уверенного старта в новом учебном году.'
        },
        {
          date: '21.05.2025',
          title: 'Бесплатный вебинар: Как решать задачи с параметрами',
          content: 'Разбираем сложные темы доступно.'
        }
      ]
    },
    en: {
      title: 'News and Events',
      description: 'Here I publish current updates, promotions, useful materials and event announcements',
      posts: [
        {
          date: '09.06.2025',
          title: 'Summer intensive course for Unified State Exam preparation',
          content: 'Special course for a confident start in the new academic year.'
        },
        {
          date: '21.05.2025',
          title: 'Free webinar: How to solve problems with parameters',
          content: 'We analyze complex topics in an accessible way.'
        }
      ]
    }
  });
  
  useEffect(() => {
    // Загрузка данных из localStorage при монтировании
    const savedNews = localStorage.getItem('news');
    if (savedNews) {
      setNewsData(JSON.parse(savedNews));
    }
  }, []);

  const currentTexts = newsData[language];

  return (
    <div className="news-container">
      <h1>{currentTexts.title}</h1>
      <p className="news-description">{currentTexts.description}</p>
      
      <div className="news-posts">
        {currentTexts.posts.map((post, index) => (
          <article key={index} className="news-post">
            <div className="news-date">{post.date}</div>
            <h2 className="news-post-title">{post.title}</h2>
            <p className="news-post-content">{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default News; 