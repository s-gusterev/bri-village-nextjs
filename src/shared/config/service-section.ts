import bathhouse from '@/shared/assets/images/bathhouse.webp';
import bicycle from '@/shared/assets/images/bicycle.webp';
import fishing from '@/shared/assets/images/fishing.webp';
import glampingTerritory from '@/shared/assets/images/glamping-territory.webp';
import naturalProducts from '@/shared/assets/images/natural-products.webp';
import quadBike from '@/shared/assets/images/quad-bike.webp';
import sapboard from '@/shared/assets/images/sapboard.webp';
// SERVICE_SECTION
import serviceItemImage1 from '@/shared/assets/images/service-icon-1.png';
import serviceItemImage2 from '@/shared/assets/images/service-icon-2.png';
import serviceItemImage3 from '@/shared/assets/images/service-icon-3.png';
import serviceItemImage4 from '@/shared/assets/images/service-icon-4.png';
import serviceItemImage5 from '@/shared/assets/images/service-icon-5.png';
import ski from '@/shared/assets/images/ski.webp';
import zoo from '@/shared/assets/images/zoo.webp';

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

export const SERVICE_LIST = [
  {
    id: 1,
    title: 'Подарочные сертификаты',
    image: serviceItemImage1,
  },
  {
    id: 2,
    title: 'Специальные условия и цены при снятии домика на месяц',
    image: serviceItemImage2,
  },
  {
    id: 3,
    title: 'Скидка на заселение молодоженам',
    image: serviceItemImage3,
  },
  {
    id: 4,
    title: 'Специальные цены при бронировании всего глэмпинга',
    image: serviceItemImage4,
  },
  {
    id: 5,
    title: 'Специальные цены на будний день',
    image: serviceItemImage5,
  },
];
