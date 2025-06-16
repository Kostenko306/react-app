import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// Вложенные компоненты админ-панели
const AdminLogin = ({ onLogin, language }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const texts = {
    ru: {
      title: 'Вход в панель администратора',
      username: 'Имя пользователя',
      password: 'Пароль',
      login: 'Войти',
      error: 'Неверное имя пользователя или пароль'
    },
    en: {
      title: 'Admin Panel Login',
      username: 'Username',
      password: 'Password',
      login: 'Login',
      error: 'Invalid username or password'
    }
  };

  const currentTexts = texts[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Простая проверка учетных данных (в реальном проекте должна быть более надежная система)
    // Проверяем учетные данные без учета регистра для удобства пользователя
    if (credentials.username.toLowerCase() === 'admin' && credentials.password === 'password') {
      onLogin();
    } else {
      setError(currentTexts.error);
    }
  };

  return (
    <div className="admin-login">
      <h1>{currentTexts.title}</h1>
      
      {error && <p className="error">{error}</p>}
      
      <p style={{ marginBottom: '20px' }}>
        {language === 'ru' ? 'Для входа используйте: Логин - admin, Пароль - password' : 'Use to login: Username - admin, Password - password'}
      </p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">{currentTexts.username}</label>
          <input 
            type="text" 
            id="username" 
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password">{currentTexts.password}</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">{currentTexts.login}</button>
      </form>
    </div>
  );
};

const AdminDashboard = ({ language }) => {
  const texts = {
    ru: {
      title: 'Панель администратора',
      subtitle: 'Сайт-визитка репетитора по математике',
      home: 'Управление главной страницей',
      news: 'Управление новостями',
      about: 'Управление информацией об авторе',
      products: 'Управление продуктами и услугами'
    },
    en: {
      title: 'Admin Dashboard',
      subtitle: 'Math Tutor Portfolio Website',
      home: 'Manage Home Page',
      news: 'Manage News',
      about: 'Manage Author Info',
      products: 'Manage Products & Services'
    }
  };

  const currentTexts = texts[language];

  return (
    <div className="admin-dashboard">
      <h1>{currentTexts.title}</h1>
      <p style={{ marginBottom: '30px', color: '#667eea', fontSize: '1.2rem' }}>{currentTexts.subtitle}</p>
      
      <div className="admin-menu">
        <Link to="/admin/home" className="admin-link">{currentTexts.home}</Link>
        <Link to="/admin/news" className="admin-link">{currentTexts.news}</Link>
        <Link to="/admin/about" className="admin-link">{currentTexts.about}</Link>
        <Link to="/admin/products" className="admin-link">{currentTexts.products}</Link>
      </div>
    </div>
  );
};

// Новый компонент для управления главной страницей
const HomeAdmin = ({ language }) => {
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
    const savedHome = localStorage.getItem('home');
    if (savedHome) {
      setHomeData(JSON.parse(savedHome));
    }
  }, []);

  const texts = {
    ru: {
      title: 'Управление главной страницей',
      mainTitle: 'Главный заголовок',
      subtitle: 'Подзаголовок',
      description: 'Описание',
      ctaButton: 'Текст кнопки',
      achievement: 'Текст достижения',
      save: 'Сохранить',
      success: 'Главная страница успешно сохранена'
    },
    en: {
      title: 'Manage Home Page',
      mainTitle: 'Main Title',
      subtitle: 'Subtitle',
      description: 'Description',
      ctaButton: 'Button Text',
      achievement: 'Achievement Text',
      save: 'Save',
      success: 'Home page saved successfully'
    }
  };

  const currentTexts = texts[language];

  const handleChange = (e, lang, field) => {
    const { value } = e.target;
    setHomeData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('home', JSON.stringify(homeData));
    alert(currentTexts.success);
  };

  return (
    <div className="admin-section">
      <h1>{currentTexts.title}</h1>
      
      <form onSubmit={handleSubmit}>
        <h2>Русский</h2>
        <div>
          <label htmlFor="ru-title">{currentTexts.mainTitle} (RU)</label>
          <input 
            type="text" 
            id="ru-title" 
            value={homeData.ru.title}
            onChange={(e) => handleChange(e, 'ru', 'title')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="ru-subtitle">{currentTexts.subtitle} (RU)</label>
          <input 
            type="text" 
            id="ru-subtitle" 
            value={homeData.ru.subtitle}
            onChange={(e) => handleChange(e, 'ru', 'subtitle')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="ru-description">{currentTexts.description} (RU)</label>
          <textarea 
            id="ru-description"
            value={homeData.ru.description}
            onChange={(e) => handleChange(e, 'ru', 'description')}
            required
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="ru-cta">{currentTexts.ctaButton} (RU)</label>
          <input 
            type="text" 
            id="ru-cta" 
            value={homeData.ru.cta}
            onChange={(e) => handleChange(e, 'ru', 'cta')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="ru-achievement">{currentTexts.achievement} (RU)</label>
          <input 
            type="text" 
            id="ru-achievement" 
            value={homeData.ru.achievement}
            onChange={(e) => handleChange(e, 'ru', 'achievement')}
            required
          />
        </div>
        
        <h2>English</h2>
        <div>
          <label htmlFor="en-title">{currentTexts.mainTitle} (EN)</label>
          <input 
            type="text" 
            id="en-title" 
            value={homeData.en.title}
            onChange={(e) => handleChange(e, 'en', 'title')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="en-subtitle">{currentTexts.subtitle} (EN)</label>
          <input 
            type="text" 
            id="en-subtitle" 
            value={homeData.en.subtitle}
            onChange={(e) => handleChange(e, 'en', 'subtitle')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="en-description">{currentTexts.description} (EN)</label>
          <textarea 
            id="en-description"
            value={homeData.en.description}
            onChange={(e) => handleChange(e, 'en', 'description')}
            required
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="en-cta">{currentTexts.ctaButton} (EN)</label>
          <input 
            type="text" 
            id="en-cta" 
            value={homeData.en.cta}
            onChange={(e) => handleChange(e, 'en', 'cta')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="en-achievement">{currentTexts.achievement} (EN)</label>
          <input 
            type="text" 
            id="en-achievement" 
            value={homeData.en.achievement}
            onChange={(e) => handleChange(e, 'en', 'achievement')}
            required
          />
        </div>
        
        <button type="submit">{currentTexts.save}</button>
      </form>
    </div>
  );
};

const NewsAdmin = ({ language }) => {
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
    const savedNews = localStorage.getItem('news');
    if (savedNews) {
      setNewsData(JSON.parse(savedNews));
    }
  }, []);

  const texts = {
    ru: {
      title: 'Управление новостями',
      pageTitle: 'Заголовок страницы',
      pageDescription: 'Описание страницы',
      newsDate: 'Дата новости',
      newsTitle: 'Заголовок новости',
      newsContent: 'Содержание новости',
      addPost: 'Добавить новость',
      deletePost: 'Удалить',
      save: 'Сохранить',
      success: 'Новости успешно сохранены'
    },
    en: {
      title: 'Manage News',
      pageTitle: 'Page Title',
      pageDescription: 'Page Description',
      newsDate: 'News Date',
      newsTitle: 'News Title',
      newsContent: 'News Content',
      addPost: 'Add News',
      deletePost: 'Delete',
      save: 'Save',
      success: 'News saved successfully'
    }
  };

  const currentTexts = texts[language];

  const handlePageChange = (e, lang, field) => {
    const { value } = e.target;
    setNewsData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value
      }
    }));
  };

  const handlePostChange = (e, lang, postIndex, field) => {
    const { value } = e.target;
    setNewsData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        posts: prev[lang].posts.map((post, index) => 
          index === postIndex ? { ...post, [field]: value } : post
        )
      }
    }));
  };

  const addPost = (lang) => {
    setNewsData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        posts: [...prev[lang].posts, { date: '', title: '', content: '' }]
      }
    }));
  };

  const deletePost = (lang, postIndex) => {
    setNewsData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        posts: prev[lang].posts.filter((_, index) => index !== postIndex)
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('news', JSON.stringify(newsData));
    alert(currentTexts.success);
  };

  return (
    <div className="admin-section">
      <h1>{currentTexts.title}</h1>
      
      <form onSubmit={handleSubmit}>
        <h2>Русский</h2>
        <div>
          <label htmlFor="ru-title">{currentTexts.pageTitle} (RU)</label>
          <input 
            type="text" 
            id="ru-title" 
            value={newsData.ru.title}
            onChange={(e) => handlePageChange(e, 'ru', 'title')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="ru-description">{currentTexts.pageDescription} (RU)</label>
          <textarea 
            id="ru-description"
            value={newsData.ru.description}
            onChange={(e) => handlePageChange(e, 'ru', 'description')}
            required
          ></textarea>
        </div>

        <h3>Новости</h3>
        {newsData.ru.posts.map((post, index) => (
          <div key={index} className="news-post-admin">
            <div>
              <label>{currentTexts.newsDate}</label>
              <input 
                type="text" 
                value={post.date}
                onChange={(e) => handlePostChange(e, 'ru', index, 'date')}
                placeholder="DD.MM.YYYY"
                required
              />
            </div>
            <div>
              <label>{currentTexts.newsTitle}</label>
              <input 
                type="text" 
                value={post.title}
                onChange={(e) => handlePostChange(e, 'ru', index, 'title')}
                required
              />
            </div>
            <div>
              <label>{currentTexts.newsContent}</label>
              <textarea 
                value={post.content}
                onChange={(e) => handlePostChange(e, 'ru', index, 'content')}
                required
              ></textarea>
            </div>
            <button type="button" className="delete-btn" onClick={() => deletePost('ru', index)}>
              {currentTexts.deletePost}
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addPost('ru')}>{currentTexts.addPost}</button>
        
        <h2>English</h2>
        <div>
          <label htmlFor="en-title">{currentTexts.pageTitle} (EN)</label>
          <input 
            type="text" 
            id="en-title" 
            value={newsData.en.title}
            onChange={(e) => handlePageChange(e, 'en', 'title')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="en-description">{currentTexts.pageDescription} (EN)</label>
          <textarea 
            id="en-description"
            value={newsData.en.description}
            onChange={(e) => handlePageChange(e, 'en', 'description')}
            required
          ></textarea>
        </div>

        <h3>News</h3>
        {newsData.en.posts.map((post, index) => (
          <div key={index} className="news-post-admin">
            <div>
              <label>{currentTexts.newsDate}</label>
              <input 
                type="text" 
                value={post.date}
                onChange={(e) => handlePostChange(e, 'en', index, 'date')}
                placeholder="DD.MM.YYYY"
                required
              />
            </div>
            <div>
              <label>{currentTexts.newsTitle}</label>
              <input 
                type="text" 
                value={post.title}
                onChange={(e) => handlePostChange(e, 'en', index, 'title')}
                required
              />
            </div>
            <div>
              <label>{currentTexts.newsContent}</label>
              <textarea 
                value={post.content}
                onChange={(e) => handlePostChange(e, 'en', index, 'content')}
                required
              ></textarea>
            </div>
            <button type="button" className="delete-btn" onClick={() => deletePost('en', index)}>
              {currentTexts.deletePost}
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addPost('en')}>{currentTexts.addPost}</button>
        
        <button type="submit">{currentTexts.save}</button>
      </form>
    </div>
  );
};

const AboutAdmin = ({ language }) => {
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
    const savedAbout = localStorage.getItem('about');
    if (savedAbout) {
      setAboutData(JSON.parse(savedAbout));
    }
  }, []);

  const texts = {
    ru: {
      title: 'Управление информацией об авторе',
      pageTitle: 'Заголовок страницы',
      authorName: 'Имя автора',
      position: 'Должность',
      birthDate: 'Дата рождения',
      education: 'Образование',
      achievements: 'Достижения',
      awards: 'Награды',
      principles: 'Принципы работы',
      addAchievement: 'Добавить достижение',
      save: 'Сохранить',
      success: 'Информация об авторе успешно сохранена'
    },
    en: {
      title: 'Manage Author Info',
      pageTitle: 'Page Title',
      authorName: 'Author Name',
      position: 'Position',
      birthDate: 'Birth Date',
      education: 'Education',
      achievements: 'Achievements',
      awards: 'Awards',
      principles: 'Work Principles',
      addAchievement: 'Add Achievement',
      save: 'Save',
      success: 'Author information saved successfully'
    }
  };

  const currentTexts = texts[language];

  const handleChange = (e, lang, field) => {
    const { value } = e.target;
    setAboutData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value
      }
    }));
  };

  const handleAchievementChange = (e, lang, index) => {
    const { value } = e.target;
    setAboutData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        achievements: prev[lang].achievements.map((achievement, i) => 
          i === index ? value : achievement
        )
      }
    }));
  };

  const addAchievement = (lang) => {
    setAboutData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        achievements: [...prev[lang].achievements, '']
      }
    }));
  };

  const removeAchievement = (lang, index) => {
    setAboutData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        achievements: prev[lang].achievements.filter((_, i) => i !== index)
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('about', JSON.stringify(aboutData));
    alert(currentTexts.success);
  };

  return (
    <div className="admin-section">
      <h1>{currentTexts.title}</h1>
      
      <form onSubmit={handleSubmit}>
        <h2>Русский</h2>
        <div>
          <label htmlFor="ru-title">{currentTexts.pageTitle} (RU)</label>
          <input 
            type="text" 
            id="ru-title" 
            value={aboutData.ru.title}
            onChange={(e) => handleChange(e, 'ru', 'title')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="ru-name">{currentTexts.authorName} (RU)</label>
          <input 
            type="text" 
            id="ru-name" 
            value={aboutData.ru.name}
            onChange={(e) => handleChange(e, 'ru', 'name')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="ru-position">{currentTexts.position} (RU)</label>
          <input 
            type="text" 
            id="ru-position" 
            value={aboutData.ru.position}
            onChange={(e) => handleChange(e, 'ru', 'position')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="ru-birthDate">{currentTexts.birthDate} (RU)</label>
          <input 
            type="text" 
            id="ru-birthDate" 
            value={aboutData.ru.birthDate}
            onChange={(e) => handleChange(e, 'ru', 'birthDate')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="ru-education">{currentTexts.education} (RU)</label>
          <textarea 
            id="ru-education"
            value={aboutData.ru.education}
            onChange={(e) => handleChange(e, 'ru', 'education')}
            required
          ></textarea>
        </div>
        
        <div>
          <label>{currentTexts.achievements} (RU)</label>
          {aboutData.ru.achievements.map((achievement, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <input 
                type="text" 
                value={achievement}
                onChange={(e) => handleAchievementChange(e, 'ru', index)}
                required
              />
              <button type="button" onClick={() => removeAchievement('ru', index)}>×</button>
            </div>
          ))}
          <button type="button" onClick={() => addAchievement('ru')}>{currentTexts.addAchievement}</button>
        </div>
        
        <div>
          <label htmlFor="ru-awards">{currentTexts.awards} (RU)</label>
          <textarea 
            id="ru-awards"
            value={aboutData.ru.awards}
            onChange={(e) => handleChange(e, 'ru', 'awards')}
            required
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="ru-principles">{currentTexts.principles} (RU)</label>
          <textarea 
            id="ru-principles"
            value={aboutData.ru.principles}
            onChange={(e) => handleChange(e, 'ru', 'principles')}
            required
          ></textarea>
        </div>
        
        <h2>English</h2>
        <div>
          <label htmlFor="en-title">{currentTexts.pageTitle} (EN)</label>
          <input 
            type="text" 
            id="en-title" 
            value={aboutData.en.title}
            onChange={(e) => handleChange(e, 'en', 'title')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="en-name">{currentTexts.authorName} (EN)</label>
          <input 
            type="text" 
            id="en-name" 
            value={aboutData.en.name}
            onChange={(e) => handleChange(e, 'en', 'name')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="en-position">{currentTexts.position} (EN)</label>
          <input 
            type="text" 
            id="en-position" 
            value={aboutData.en.position}
            onChange={(e) => handleChange(e, 'en', 'position')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="en-birthDate">{currentTexts.birthDate} (EN)</label>
          <input 
            type="text" 
            id="en-birthDate" 
            value={aboutData.en.birthDate}
            onChange={(e) => handleChange(e, 'en', 'birthDate')}
            required
          />
        </div>
        
        <div>
          <label htmlFor="en-education">{currentTexts.education} (EN)</label>
          <textarea 
            id="en-education"
            value={aboutData.en.education}
            onChange={(e) => handleChange(e, 'en', 'education')}
            required
          ></textarea>
        </div>
        
        <div>
          <label>{currentTexts.achievements} (EN)</label>
          {aboutData.en.achievements.map((achievement, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <input 
                type="text" 
                value={achievement}
                onChange={(e) => handleAchievementChange(e, 'en', index)}
                required
              />
              <button type="button" onClick={() => removeAchievement('en', index)}>×</button>
            </div>
          ))}
          <button type="button" onClick={() => addAchievement('en')}>{currentTexts.addAchievement}</button>
        </div>
        
        <div>
          <label htmlFor="en-awards">{currentTexts.awards} (EN)</label>
          <textarea 
            id="en-awards"
            value={aboutData.en.awards}
            onChange={(e) => handleChange(e, 'en', 'awards')}
            required
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="en-principles">{currentTexts.principles} (EN)</label>
          <textarea 
            id="en-principles"
            value={aboutData.en.principles}
            onChange={(e) => handleChange(e, 'en', 'principles')}
            required
          ></textarea>
        </div>
        
        <button type="submit">{currentTexts.save}</button>
      </form>
    </div>
  );
};

const ProductsAdmin = ({ language }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: {
        ru: 'Учебное пособие',
        en: 'Study guide'
      },
      description: {
        ru: 'Учебное пособие по программированию',
        en: 'Programming study guide'
      },
      price: 500
    },
    {
      id: 2,
      name: {
        ru: 'Онлайн-консультация',
        en: 'Online consultation'
      },
      description: {
        ru: 'Индивидуальная консультация по обучению',
        en: 'Individual training consultation'
      },
      price: 1500
    },
    {
      id: 3,
      name: {
        ru: 'Курс лекций',
        en: 'Lecture course'
      },
      description: {
        ru: 'Полный курс лекций по веб-разработке',
        en: 'Complete web development lecture course'
      },
      price: 10000
    }
  ]);

  useEffect(() => {
    // Загрузка сохраненных продуктов из localStorage при монтировании
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const texts = {
    ru: {
      title: 'Управление продуктами и услугами',
      name: 'Название',
      description: 'Описание',
      price: 'Цена',
      add: 'Добавить продукт',
      save: 'Сохранить',
      delete: 'Удалить',
      success: 'Продукты и услуги успешно сохранены'
    },
    en: {
      title: 'Manage Products & Services',
      name: 'Name',
      description: 'Description',
      price: 'Price',
      add: 'Add Product',
      save: 'Save',
      delete: 'Delete',
      success: 'Products and services saved successfully'
    }
  };

  const currentTexts = texts[language];

  const handleChange = (e, index, lang, field) => {
    const { value } = e.target;
    const newProducts = [...products];
    
    if (field === 'price') {
      newProducts[index][field] = parseInt(value) || 0;
    } else {
      newProducts[index][field][lang] = value;
    }
    
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProducts([...products, {
      id: newId,
      name: {
        ru: '',
        en: ''
      },
      description: {
        ru: '',
        en: ''
      },
      price: 0
    }]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Сохранение продуктов в localStorage
    localStorage.setItem('products', JSON.stringify(products));
    alert(currentTexts.success);
  };

  return (
    <div className="admin-section">
      <h1>{currentTexts.title}</h1>
      
      <form onSubmit={handleSubmit}>
        {products.map((product, index) => (
          <div key={product.id} className="product-form">
            <h2>{currentTexts.name} #{product.id}</h2>
            
            <div className="form-row">
              <div>
                <label htmlFor={`ru-name-${index}`}>{currentTexts.name} (RU)</label>
                <input 
                  type="text" 
                  id={`ru-name-${index}`} 
                  value={product.name.ru}
                  onChange={(e) => handleChange(e, index, 'ru', 'name')}
                  required
                />
              </div>
              
              <div>
                <label htmlFor={`en-name-${index}`}>{currentTexts.name} (EN)</label>
                <input 
                  type="text" 
                  id={`en-name-${index}`} 
                  value={product.name.en}
                  onChange={(e) => handleChange(e, index, 'en', 'name')}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div>
                <label htmlFor={`ru-desc-${index}`}>{currentTexts.description} (RU)</label>
                <input 
                  type="text" 
                  id={`ru-desc-${index}`} 
                  value={product.description.ru}
                  onChange={(e) => handleChange(e, index, 'ru', 'description')}
                  required
                />
              </div>
              
              <div>
                <label htmlFor={`en-desc-${index}`}>{currentTexts.description} (EN)</label>
                <input 
                  type="text" 
                  id={`en-desc-${index}`} 
                  value={product.description.en}
                  onChange={(e) => handleChange(e, index, 'en', 'description')}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div>
                <label htmlFor={`price-${index}`}>{currentTexts.price}</label>
                <input 
                  type="number" 
                  id={`price-${index}`} 
                  value={product.price}
                  onChange={(e) => handleChange(e, index, '', 'price')}
                  required
                />
              </div>
              
              <button 
                type="button" 
                className="delete-btn" 
                onClick={() => handleDeleteProduct(product.id)}
              >
                {currentTexts.delete}
              </button>
            </div>
            
            <hr />
          </div>
        ))}
        
        <div className="form-actions">
          <button type="button" onClick={handleAddProduct}>
            {currentTexts.add}
          </button>
          <button type="submit">{currentTexts.save}</button>
        </div>
      </form>
    </div>
  );
};

// Основной компонент AdminPanel
function AdminPanel({ language }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Проверка статуса авторизации при монтировании
    const adminStatus = localStorage.getItem('adminLoggedIn');
    if (adminStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('adminLoggedIn', 'true');
    navigate('/admin');
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin');
  };
  
  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} language={language} />;
  }
  
  return (
    <div className="admin-panel">
      <div className="admin-header">
        <button onClick={handleLogout} className="logout-btn">
          {language === 'ru' ? 'Выйти' : 'Logout'}
        </button>
      </div>
      
      <Routes>
        <Route index element={<AdminDashboard language={language} />} />
        <Route path="home" element={<HomeAdmin language={language} />} />
        <Route path="news" element={<NewsAdmin language={language} />} />
        <Route path="about" element={<AboutAdmin language={language} />} />
        <Route path="products" element={<ProductsAdmin language={language} />} />
      </Routes>
    </div>
  );
}

export default AdminPanel; 