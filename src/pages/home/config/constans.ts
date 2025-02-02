import forest1 from '@/shared/assets/images/forest-1.webp';
import forest2 from '@/shared/assets/images/forest-2.webp';
import golf1 from '@/shared/assets/images/golf-1.webp';
import golf2 from '@/shared/assets/images/golf-2.webp';
import imageHome1 from '@/shared/assets/images/home-1.webp';
import imageHome10 from '@/shared/assets/images/home-10.webp';
import imageHome11 from '@/shared/assets/images/home-11.webp';
import imageHome12 from '@/shared/assets/images/home-12.webp';
import imageHome13 from '@/shared/assets/images/home-13.webp';
import imageHome14 from '@/shared/assets/images/home-14.webp';
import imageHome15 from '@/shared/assets/images/home-15.webp';
import imageHome16 from '@/shared/assets/images/home-16.webp';
import imageHome17 from '@/shared/assets/images/home-17.webp';
import imageHome2 from '@/shared/assets/images/home-2.webp';
import imageHome3 from '@/shared/assets/images/home-3.webp';
import imageHome4 from '@/shared/assets/images/home-4.webp';
import imageHome5 from '@/shared/assets/images/home-5.webp';
import imageHome6 from '@/shared/assets/images/home-6.webp';
import imageHome7 from '@/shared/assets/images/home-7.webp';
import imageHome8 from '@/shared/assets/images/home-8.webp';
import imageHome9 from '@/shared/assets/images/home-9.webp';
import lake1 from '@/shared/assets/images/lake-1.webp';
import lake2 from '@/shared/assets/images/lake-2.webp';
import river1 from '@/shared/assets/images/river-1.webp';
import river2 from '@/shared/assets/images/river-2.webp';
import {
  BakeryDiningIcon,
  BedrumBabyIcon,
  CottageIcon,
  FireplaceIcon,
  HotTubIcon,
  MedicalServiceIcon,
  NatureIcon,
  NestEcoLeafIcon,
  SaitingIcon,
  SavingsIcon,
  ScheduleIcon,
  SunnyIcon,
  SupportAgentIcon,
  WaterIcon,
} from '@/shared/ui/icons';

const SLIDER_TITLE = 'Глэмпинг в Техногороде';

export const IMAGES_HERO_SLIDER = [
  {
    id: 1,
    title: SLIDER_TITLE,
    description: 'оазис  инноваций на фоне сосен и бескрайнего неба',
    image: imageHome1,
  },
  {
    id: 2,
    title: SLIDER_TITLE,
    description: 'уголок, где природа и технологии создают идеальное единство',
    image: imageHome2,
  },
  {
    id: 3,
    title: SLIDER_TITLE,
    description: 'место, где высокие технологии живут в гармонии с природой',
    image: imageHome3,
  },
];

export const IMAGES_BEST_HOME = [
  {
    slides: [
      { id: 1, image: imageHome1 },
      { id: 2, image: imageHome2 },
      { id: 3, image: imageHome3 },
      { id: 4, image: imageHome4 },
      { id: 5, image: imageHome5 },
      { id: 6, image: imageHome6 },
      { id: 7, image: imageHome7 },
    ],
  },
  {
    slides: [
      { id: 8, image: imageHome8 },
      { id: 9, image: imageHome9 },
      { id: 10, image: imageHome10 },
      { id: 11, image: imageHome11 },
      { id: 12, image: imageHome12 },
      { id: 13, image: imageHome3 },
      { id: 14, image: imageHome6 },
    ],
  },
];

export const IMAGES_BEST_HOME_MOBILE = [
  { id: 1, image: imageHome1 },
  { id: 2, image: imageHome2 },
  { id: 3, image: imageHome3 },
  { id: 4, image: imageHome4 },
  { id: 5, image: imageHome5 },
  { id: 6, image: imageHome6 },
  { id: 7, image: imageHome7 },

  { id: 8, image: imageHome8 },
  { id: 9, image: imageHome9 },
  { id: 10, image: imageHome10 },
  { id: 11, image: imageHome11 },
  { id: 12, image: imageHome12 },
  { id: 13, image: imageHome3 },
  { id: 14, image: imageHome6 },
];

export const IMAGES_SlIDER_BOOK = [
  { id: 1, image: imageHome13 },
  { id: 2, image: imageHome14 },
  { id: 3, image: imageHome15 },
  { id: 4, image: imageHome16 },
  { id: 5, image: imageHome17 },
];

export const SLIDER_INFRASTRUCTURE = [
  {
    id: 1,
    title: 'Озеро',
    image: lake1,
  },
  {
    id: 2,
    title: 'Лес',
    image: forest1,
  },
  {
    id: 3,
    title: 'Река',
    image: river1,
  },
  {
    id: 4,
    title: 'Гольф-клуб',
    image: golf1,
  },
  {
    id: 5,
    title: 'Озеро',
    image: lake2,
  },
  {
    id: 6,
    title: 'Лес',
    image: forest2,
  },
  {
    id: 7,
    title: 'Река',
    image: river2,
  },
  {
    id: 8,
    title: 'Гольф-клуб',
    image: golf2,
  },
];

export const IMAGES_ABOUT_SECTION = [
  { id: 1, image: river1 },
  { id: 2, image: imageHome7 },
  { id: 3, image: lake1 },
  { id: 4, image: imageHome4 },
];

export const LIST_ABOUT_SECTION = [
  {
    id: 1,
    title: 'Наш глэмпинг курорт расположен в тишине вдали от городской суеты',
    icon: NatureIcon,
  },
  {
    id: 2,
    title:
      'Наши менеджеры всегда на связи с вами, чтобы ответить на любые вопросы',
    icon: SupportAgentIcon,
  },

  {
    id: 3,
    title:
      'Море зеленой травы и чистые озера - летом, бескрайние поля, чистейший белоснежный снег- зимой',
    icon: SunnyIcon,
  },
  {
    id: 4,
    title: 'Можно заказать еду: завтрак, обед, ужин на территории глемпинга',
    icon: BakeryDiningIcon,
  },
  {
    id: 5,
    title:
      'Террирория глемпинга оборудована камерами видеонаблюдения, заборами, а также в каждом домике расположена мед аптечка',
    icon: MedicalServiceIcon,
  },
  {
    id: 6,
    title:
      '45 минут езды по трассе м7 «волга» от центра города Казани и вы попадаете в совершенно неповторимую атмосферу сельской жизни',
    icon: ScheduleIcon,
  },
  {
    id: 7,
    title:
      'Вас ждут отдельно стоящие домики новой постройки, со стильным дизайном, которые оснащены всем необходимым для комфортного отдыха',
    icon: CottageIcon,
  },

  {
    id: 8,
    title:
      'Мы придерживаемся политики демократичных и оправданных цен на проживание в наших гостевых домах и конечно же не забываем радовать гостей акциями и скидками на проживание',
    icon: SavingsIcon,
  },
  {
    id: 9,
    title:
      'По вашему желанию можно арендовать баню, чтобы более сделать прекрасным ваш отдых',
    icon: HotTubIcon,
  },
  {
    id: 10,
    title:
      'Интересный и разнообразный отдых: вы сможете спокойно насладиться природой или заняться активным отдыхом',
    icon: SaitingIcon,
  },
  {
    id: 11,
    title: 'Домики на берегу озера',
    icon: WaterIcon,
  },

  {
    id: 12,
    title: 'Комфорт и тепло в домике в любой сезон',
    icon: FireplaceIcon,
  },
  {
    id: 13,
    title:
      'Планируется также построение детской площадки и зоны совместного отдыха (до 15 человек)',
    icon: BedrumBabyIcon,
  },
  {
    id: 14,
    title: 'Экологически чистое место, в 50км нет ни заводов ни фабрик',
    icon: NestEcoLeafIcon,
  },
];
