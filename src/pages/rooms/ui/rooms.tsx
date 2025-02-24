import clsx from 'clsx';
import type { Metadata } from 'next';
import Image from 'next/image';

import styles from './styles.module.css';
import { SLIDER_ROOMS_PAGE, ROOMS_CHIPS, ROOMS_LIST } from '../config';
import roomsImage from '@/shared/assets/images/room-5.webp';
import { CARDS_SERVICES } from '@/shared/config';
import Button from '@/shared/ui/button';
import CardPrimary from '@/shared/ui/card-primary';
import Carousel from '@/shared/ui/carousel';
import Chip from '@/shared/ui/chip';
import Heading from '@/shared/ui/heading';
import { TaxiIcon, BusIcon, CarIcon, TrainIcon } from '@/shared/ui/icons';
import Slider from '@/shared/ui/slider';
import SliderItem from '@/shared/ui/slider-item';
import Text from '@/shared/ui/text';
import AboutSection from '@/widgets/about-section';
import Banner from '@/widgets/banner';
import Breadcrumbs from '@/widgets/breadcrumbs';

export const metadata: Metadata = {
  title: 'Номера ',
  description: 'Номера в клэмпинге',
};

export const RoomsPage = () => {
  return (
    <>
      <div className="container">
        <Breadcrumbs customTitles={{ rooms: 'Номера' }} />
      </div>
      <section className={clsx('container', styles.rooms)}>
        <Heading level={1} className={styles.roomsTitle}>
          Номера
        </Heading>
        <Slider
          data={SLIDER_ROOMS_PAGE.map((slide) => (
            <SliderItem key={slide.id} slide={slide} onlyImage />
          ))}
          height={500}
          autoPlay={false}
          className={styles.roomsSlider}
        />
        <ul className={styles.roomsChips}>
          {ROOMS_CHIPS.map(({ id, text }) => (
            <li className={styles.roomsChip} key={id}>
              <Chip text={text} size="normal" variant="primary" />
            </li>
          ))}
        </ul>
        <div className={styles.roomsDescription}>
          <Text>
            Вас ждут 5 отдельно стоящих домиков новой постройки, со стильным
            дизайном, которые оснащены всем необходимым для комфортного отдыха.
            Вас ждут отдельно стоящие домики новой постройки, со стильным
            дизайном, которые оснащены всем необходимым для комфортного отдыха.
          </Text>
        </div>
        <div className={styles.roomsConveniences}>
          <h3 className={styles.ConveniencesTitle}>Удобства дома</h3>
          <ul className={styles.roomsConveniencesList}>
            {ROOMS_LIST.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className={styles.roomsConveniencesItem}>
                  <Icon />
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.roomsCard}>
          <Image
            src={roomsImage}
            width={480}
            height={673}
            alt="Номер в отеле"
            className={styles.roomsCardImage}
          />
          <div className={styles.roomsCardContent}>
            <h3 className={styles.roomsCardTitle}>Цена проживания</h3>
            <ul className={styles.roomsCardList}>
              <li className={styles.roomsCardItem}>
                <Chip size="large" text="Вс - Чт: 7 000 руб." />
              </li>
              <li className={styles.roomsCardItem}>
                <Chip size="large" text="Пт - Сб: 10 000 руб." />
              </li>
            </ul>

            <h3 className={styles.roomsCardTitle}>Способы оплаты</h3>
            <ul className={styles.roomsCardList}>
              <li className={styles.roomsCardItem}>
                <Chip size="large" text="Оплата картой" />
              </li>
              <li className={styles.roomsCardItem}>
                <Chip size="large" text="Перевод на карту" />
              </li>
              <li className={styles.roomsCardItem}>
                <Chip size="large" text="Оплата наличными" />
              </li>
            </ul>
            <h3 className={styles.roomsCardTitle}>Способы оплаты</h3>
            <div className={styles.roomsCardList}>
              <Chip size="large" text="Заезд: 15:00 Выезд: 12:00" />
            </div>
            <h3 className={styles.roomsCardTitle}>Способы добраться:</h3>
            <ul className={styles.roomsCardListTransportation}>
              <li className={styles.roomsCardItemTransportation}>
                <BusIcon />
                <span>Автобус</span>
              </li>
              <li className={styles.roomsCardItemTransportation}>
                <CarIcon />
                <span>Каршеринг</span>
              </li>
              <li className={styles.roomsCardItemTransportation}>
                <TrainIcon />
                <span>Электричка</span>
              </li>
              <li className={styles.roomsCardItemTransportation}>
                <TaxiIcon />
                <span>Такси</span>
              </li>
            </ul>
            <Button
              color="primary"
              size="normal"
              className={styles.roomsCardButton}
            >
              Забронировать
            </Button>
          </div>
        </div>
      </section>
      <AboutSection />
      <section className={clsx('container', styles.banner)}>
        <Banner />
      </section>
      <section className={clsx('container', styles.carousel)}>
        <Carousel
          data={CARDS_SERVICES.map((slide) => (
            <div key={slide.id}>
              <CardPrimary {...slide} disableAnimation />
            </div>
          ))}
          title="Услуги BriTehnoVillage"
          slidesPerView={3}
        />
      </section>
    </>
  );
};

// export default RoomsPage;
