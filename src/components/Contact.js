import React, { useState } from 'react';

function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const texts = {
    ru: {
      title: 'Обратная связь',
      phone: '+7 908 517 50 43',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение',
      send: 'Отправить'
    },
    en: {
      title: 'Contact',
      phone: '+7 908 517 50 43',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send'
    }
  };

  const currentTexts = texts[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log(formData);
    alert('Сообщение отправлено!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1>{currentTexts.title}</h1>
      <p>{currentTexts.phone}</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{currentTexts.name}</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email">{currentTexts.email}</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="message">{currentTexts.message}</label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit">{currentTexts.send}</button>
      </form>
    </div>
  );
}

export default Contact; 