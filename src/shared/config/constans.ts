import bathhouse from '@/shared/assets/images/bathhouse.webp';
import bicycle from '@/shared/assets/images/bicycle.webp';
import fishing from '@/shared/assets/images/fishing.webp';
import glampingTerritory from '@/shared/assets/images/glamping-territory.webp';
import naturalProducts from '@/shared/assets/images/natural-products.webp';
import quadBike from '@/shared/assets/images/quad-bike.webp';
import sapboard from '@/shared/assets/images/sapboard.webp';
import ski from '@/shared/assets/images/ski.webp';
import zoo from '@/shared/assets/images/zoo.webp';

export const PHONE = '+7 455 799 33 44';
export const ADDRESS = 'г. Техногород, Западный район, ул. Пушкинская, д. 12';
export const EMAIL = 'tehno@example.com';

export const CARDS_SERVICES = [
  {
    id: 1,
    title: 'Общая баня',
    season: ['year'],
    image: bathhouse,
  },
  {
    id: 2,
    title: 'Рыбалка',
    season: ['summer', 'winter', 'year'],
    image: fishing,
  },
  {
    id: 3,
    title: 'Зоопарк',
    season: ['summer', 'year'],
    image: zoo,
  },
  {
    id: 4,
    title: 'Экологически чистые продукты (деревенское молоко, яйца, мясо)',
    season: ['year'],
    image: naturalProducts,
  },
  {
    id: 5,
    title: 'Лыжи',
    season: ['winter'],
    image: ski,
  },
  {
    id: 6,
    title: 'Велосипедные прогулки',
    season: ['summer'],
    image: bicycle,
  },
  {
    id: 7,
    title: 'Катание на квадроциклах, катамаране',
    season: ['summer'],
    image: quadBike,
  },
  {
    id: 8,
    title: 'Сап-доски',
    season: ['summer'],
    image: sapboard,
  },
  {
    id: 9,
    title:
      'Возможность арендовать всю территорию глемпинга для корпоративных клиентов',
    season: ['year'],
    image: glampingTerritory,
  },
];
