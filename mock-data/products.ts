import { ProductDTO } from "interfaces/product.interface";

const products: ProductDTO.Model[] = [
    {
      _id: '611d6a28468b554a8e2dc50d',
      categories: [ 'Финансовая грамотность' ],
      tags: [ 'Видеозаписи и тест' ],
      link: 'https://netology.ru/programs/personal-investments',
      title: 'Личные финансы и инвестиции: как вложить деньги без ошибок',
      image: '/uploads/2021-08-18/netology_white.png',
      description: 'Помогут начать инвестировать и зарабатывать, грамотно управляя рисками. Узнаете, какие виды инвестиций подходят вашим накоплениям',
      initialRating: 4.7,
      characteristics: [
        { value: 'Нетология', name: 'Школа' },
        { value: 'Сертификат', name: 'Документ об окончании' },
        { value: 'С нуля', name: 'Сложность' },
        { value: '11 часов', name: 'Длительность' }
      ],
      price: 7210,
      oldPrice: 13500,
      credit: 0,
      createdAt: '2021-08-18T20:14:32.736Z',
      updatedAt: '2021-08-18T20:14:32.736Z',
      __v: 0,
      reviews: [],
      reviewCount: 0,
      reviewAvg: null
    }
  ];