import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/index.css';

// Компоненты для разных страниц
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import AdminPanel from './components/AdminPanel';

function App() {
  const [language, setLanguage] = useState('ru');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Смена языка
  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  // Переключение мобильного меню
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Закрытие мобильного меню при клике на ссылку
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Тексты на разных языках
  const texts = {
    ru: {
      home: 'Главная',
      news: 'Новости',
      about: 'Об авторе',
      contact: 'Обратная связь',
      products: 'Продукты и услуги',
      langBtn: 'EN',
      footer: 'Контактная информация: +7 908 517 50 43 | Создатель сайта: Студент ЮФУ',
      bannerAlt: 'Образовательный баннер',
      admin: 'Админ',
      siteTitle: 'Сайт-визитка репетитора по математике',
      tags: 'Теги',
      menu: 'Меню'
    },
    en: {
      home: 'Home',
      news: 'News',
      about: 'About author',
      contact: 'Contact',
      products: 'Products and services',
      langBtn: 'RU',
      footer: 'Contact information: +7 908 517 50 43 | Site created by: SFedU Student',
      bannerAlt: 'Educational banner',
      admin: 'Admin',
      siteTitle: 'Math Tutor Portfolio Website',
      tags: 'Tags',
      menu: 'Menu'
    }
  };

  const currentTexts = texts[language];

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <div className="logo-container">
              <img src="/logo.svg" alt="Логотип сайта" className="logo" />
              <h1 className="site-title">{currentTexts.siteTitle}</h1>
            </div>
            
            {/* Гамбургер кнопка для мобильных */}
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label={currentTexts.menu}
            >
              <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* Основная навигация */}
            <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link to="/" onClick={closeMobileMenu}>{currentTexts.home}</Link>
              <Link to="/news" onClick={closeMobileMenu}>{currentTexts.news}</Link>
              <Link to="/about" onClick={closeMobileMenu}>{currentTexts.about}</Link>
              <Link to="/contact" onClick={closeMobileMenu}>{currentTexts.contact}</Link>
              <Link to="/products" onClick={closeMobileMenu}>{currentTexts.products}</Link>
              <Link to="/admin" onClick={closeMobileMenu}>{currentTexts.admin}</Link>
              <button onClick={toggleLanguage} className="language-btn">
                {currentTexts.langBtn}
              </button>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <section className="section">
            <div className="nav-links-vertical">
              <Link to="/">{currentTexts.home}</Link>
              <Link to="/news">{currentTexts.news}</Link>
              <Link to="/about">{currentTexts.about}</Link>
              <Link to="/contact">{currentTexts.contact}</Link>
              <Link to="/products">{currentTexts.products}</Link>
              <Link to="/admin">{currentTexts.admin}</Link>
            </div>
            <div className="banners">
              <img src="/banner.svg" alt={currentTexts.bannerAlt} />
            </div>
          </section>

          <article className="article">
            <Routes>
              <Route path="/" element={<Home language={language} />} />
              <Route path="/news" element={<News language={language} />} />
              <Route path="/about" element={<About language={language} />} />
              <Route path="/contact" element={<Contact language={language} />} />
              <Route path="/products" element={<Products language={language} />} />
              <Route path="/admin/*" element={<AdminPanel language={language} />} />
            </Routes>
          </article>

          <aside className="aside">
            <div className="tag-cloud">
              <h3>{currentTexts.tags}</h3>
              <div>
                <span>математика</span>
                <span>ЕГЭ</span>
                <span>репетитор</span>
                <span>обучение</span>
                <span>экзамены</span>
                <span>подготовка</span>
              </div>
            </div>
            <div className="banners">
              <img src="/banner.svg" alt={currentTexts.bannerAlt} />
            </div>
          </aside>
        </main>

        <footer className="footer">
          <p>{currentTexts.footer}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App; 