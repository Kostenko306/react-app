import React, { useState, useEffect } from 'react';

function Products({ language }) {
  const [productsData, setProductsData] = useState([
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
  
  const texts = {
    ru: {
      title: 'Продукты и услуги',
      name: 'Название',
      description: 'Описание',
      price: 'Цена',
      currency: 'руб.'
    },
    en: {
      title: 'Products and services',
      name: 'Name',
      description: 'Description',
      price: 'Price',
      currency: 'RUB'
    }
  };
  
  useEffect(() => {
    // Загрузка данных из localStorage при монтировании
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProductsData(JSON.parse(savedProducts));
    }
  }, []);

  const currentTexts = texts[language];

  return (
    <div>
      <h1>{currentTexts.title}</h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid white', padding: '8px' }}>{currentTexts.name}</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>{currentTexts.description}</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>{currentTexts.price}</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map(product => (
            <tr key={product.id}>
              <td style={{ border: '1px solid white', padding: '8px' }}>{product.name[language]}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{product.description[language]}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{product.price} {currentTexts.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products; 