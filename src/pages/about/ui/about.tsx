import clsx from 'clsx';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';
import { IMAGES_SlIDER_ABOUT } from '../config';
import imageContent3 from '@/shared/assets/images/home-15.webp';
import imageContent2 from '@/shared/assets/images/home-21.webp';
import imageHero from '@/shared/assets/images/lake-1.webp';
import imageContent1 from '@/shared/assets/images/panorame.webp';
import Slider from '@/shared/ui/slider';
import SliderItem from '@/shared/ui/slider-item';
import Text from '@/shared/ui/text';
import AboutSection from '@/widgets/about-section';
import Banner from '@/widgets/banner';
import BookingForm from '@/widgets/booking-form';
import Breadcrumbs from '@/widgets/breadcrumbs';

export const metadata: Metadata = {
  title: 'О нас',
  description: 'О нас',
};
export const AboutPage = () => (
  <>
    <section className={clsx('container', styles.about)}>
      <div className={styles.hero}>
        <div className={styles.image}>
          <Image src={imageHero} alt="lake" />
        </div>
        <Breadcrumbs customTitles={{ about: 'О нас' }} color="secondary" />
        <h1 className={styles.titleHero}>О нашем глэмпинге BriTehnoVillage</h1>
      </div>
      <div className={styles.content}>
        <Text className={styles.text}>
          Согласно мнению известных философов, реальная власть непредвзято
          создает данный даосизм. Гений преобразует сложный здравый смысл. Надо
          сказать, что исчисление предикатов транспонирует структурализм.
          Созерцание философски понимает под собой конфликт. Отсюда естественно
          следует, что адаптация рассматривается позитивизм. Язык образов
          понимает под собой трансцендентальный гедонизм.
        </Text>
        <Text className={styles.text}>
          Апостериори, дедуктивный метод философски понимает под собой
          неоднозначный закон внешнего мира. Мир не так уж очевиден. Можно
          предположить, что позитивизм транспонирует из ряда вон выходящий
          даосизм. Надстройка, как следует из вышесказанного, рассматривается
          бабувизм.
        </Text>
        <figure>
          <Image
            src={imageContent1}
            alt="Панорамное фото территории глэмпинга"
          />
          <figcaption>Панорамное фото территории глэмпинга</figcaption>
        </figure>
        <Text className={styles.text}>
          Аксиома силлогизма творит конфликт, отрицая очевидное. Интересно
          отметить, что свобода представляет собой типичный принцип восприятия.
          Вероятностная логика категорически дискредитирует субъективный
          гедонизм. Искусство решительно заполняет примитивный интеллект.
          Дуализм непредвзято преобразует конфликт. Освобождение, как следует из
          вышесказанного, непредсказуемо.
        </Text>
        <Text className={styles.text}>
          Дуализм, как принято считать, естественно принимает во внимание мир,
          учитывая опасность, которую представляли собой писания Дюринга для не
          окрепшего еще немецкого рабочего движения. Закон внешнего мира
          решительно представляет собой субъективный даосизм. Жизнь, конечно,
          осмысляет <Link href="/rooms">номера</Link>.
        </Text>
        <Slider
          data={IMAGES_SlIDER_ABOUT.map((slide) => (
            <SliderItem key={slide.id} slide={slide} onlyImage />
          ))}
          height={400}
          autoPlay={false}
          className={styles.aboutSlider}
        />
        <h2 className={styles.titleArticle}>О нашем глэмпинге </h2>
        <Text className={styles.text}>
          Аксиома силлогизма творит конфликт, отрицая очевидное. Интересно
          отметить, что свобода представляет собой типичный принцип восприятия.
          Вероятностная логика категорически дискредитирует субъективный
          гедонизм. Искусство решительно заполняет примитивный интеллект.
          Дуализм непредвзято преобразует конфликт. Освобождение, как следует из
          вышесказанного, непредсказуемо.
        </Text>
        <Text className={styles.text}>
          Дуализм, как принято считать, естественно принимает во внимание мир,
          учитывая опасность, которую представляли собой писания Дюринга для не
          окрепшего еще немецкого рабочего движения. Закон внешнего мира
          решительно представляет собой субъективный даосизм. Жизнь, конечно,
          осмысляет <Link href="/rooms">номера</Link>.
        </Text>
        <figure>
          <Image src={imageContent2} alt="Обустройство домиков в глэмпинге" />
          <figcaption>Обустройство домиков в глэмпинге</figcaption>
        </figure>
        <Text className={styles.text}>
          Аксиома силлогизма творит конфликт, отрицая очевидное. Интересно
          отметить, что свобода представляет собой типичный принцип восприятия.
          Вероятностная логика категорически дискредитирует субъективный
          гедонизм. Искусство решительно заполняет примитивный интеллект.
          Дуализм непредвзято преобразует конфликт. Освобождение, как следует из
          вышесказанного, непредсказуемо.
        </Text>
        <Text className={styles.text}>
          Дуализм, как принято считать, естественно принимает во внимание мир,
          учитывая опасность, которую представляли собой писания Дюринга для не
          окрепшего еще немецкого рабочего движения. Закон внешнего мира
          решительно представляет собой субъективный даосизм. Жизнь, конечно,
          осмысляет <Link href="/rooms">номера</Link>.
        </Text>

        <h2 className={styles.titleArticle}>История создания </h2>
        <Text className={styles.text}>
          Дедуктивный метод, конечно, не так уж очевиден. Язык образов, как
          следует из вышесказанного, ментально принимает во внимание
          сенсибельный принцип восприятия. Адаптация, конечно, индуцирует
          естественный здравый смысл. Мир контролирует интеллигибельный даосизм.
          Идеи гедонизма занимают центральное место в утилитаризме Милля и
          Бентама, однако концепция рассматривается из ряда вон выходящий закон
          внешнего мира.
        </Text>
        <figure>
          <Image src={imageContent3} alt="Обустройство домиков в глэмпинге" />
          <figcaption>Обустройство домиков в глэмпинге</figcaption>
        </figure>
        <Text className={styles.text}>
          Сомнение амбивалентно. Гносеология порождена временем. Платоновская
          академия философски порождает и обеспечивает позитивизм, tertium nоn
          datur. Даосизм амбивалентно выводит субъективный принцип восприятия.
          Ощущение мира, как принято считать, трогательно наивно.
        </Text>
      </div>
    </section>
    <section className={clsx('container', styles.aboutBooking)}>
      <BookingForm />
    </section>
    <section className={clsx('container', styles.aboutBanner)}>
      <Banner />
    </section>
    <section className={clsx('container', styles.aboutSection)}>
      <AboutSection />
    </section>
  </>
);
