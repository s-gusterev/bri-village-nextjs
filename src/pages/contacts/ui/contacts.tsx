import clsx from 'clsx';
import { Metadata } from 'next';
import Image from 'next/image';

import Map from './map';
import styles from './styles.module.css';
import { IMAGES_SlIDER_CONTACTS } from '../config';
import imageContacts from '@/shared/assets/images/home-11.webp';
import { PHONE, EMAIL, ADDRESS } from '@/shared/config';
import Carousel from '@/shared/ui/carousel';
import Heading from '@/shared/ui/heading';
import {
  TelegramIcon,
  WhatsappIcon,
  VkIcon,
  InstagramIcon,
  AsteriksIcon,
} from '@/shared/ui/icons';
import AboutSection from '@/widgets/about-section';
import Banner from '@/widgets/banner';
import BookingForm from '@/widgets/booking-form';
import Breadcrumbs from '@/widgets/breadcrumbs';
import ReviewsSection from '@/widgets/reviews-section';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Страница с контактными данными',
};

export const ContactsPage = () => {
  return (
    <>
      <section className={clsx('container', styles.contacts)}>
        <Breadcrumbs customTitles={{ contacts: 'Контакты' }} />
        <Heading level={1} className={styles.contactsTitle}>
          Контакты BriTehnoVillage
        </Heading>
        <div className={styles.contactsMap}>
          <div className={styles.contactsMapDescription}>
            <Image
              className={styles.contactsMapImage}
              src={imageContacts}
              alt="Контакты BriTehnoVillage"
            />
            <a
              className={styles.phone}
              href={`tel:${PHONE.replaceAll(' ', '')}`}
            >
              {PHONE}
            </a>
            <address className={styles.address}>{ADDRESS}</address>
            <a href={`mailto:${EMAIL}`.toLowerCase()} className={styles.email}>
              {EMAIL}
            </a>
            <ul className={styles.socials}>
              <li className={styles.socialItem}>
                <a className={styles.socialItemLink} href="#">
                  <TelegramIcon />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a className={styles.socialItemLink} href="#">
                  <VkIcon />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a className={styles.socialItemLink} href="#">
                  <WhatsappIcon />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a
                  className={clsx(
                    styles.socialItemLink,
                    styles.socialItemLinkInsta,
                  )}
                  href="#"
                >
                  <InstagramIcon />
                  <span>
                    <AsteriksIcon />
                  </span>
                </a>
              </li>
            </ul>
            <div className={styles.socialNote}>
              <AsteriksIcon />
              <span className={styles.socialNoteText}>
                Запрещенная на территории Российской Федерации организация
              </span>
            </div>
          </div>
          <div className={styles.map}>
            <Map />
          </div>
        </div>
      </section>

      <section className={clsx('container', styles.sectionCarousel)}>
        <Carousel
          title="Галерея маршрута"
          slidesPerView={4}
          slidesPerViewTablet={3}
          data={IMAGES_SlIDER_CONTACTS.map((slide) => (
            <Image
              className={styles.carouselImage}
              key={slide.id}
              src={slide.image}
              alt={`Фото маршрута - ${slide.id}`}
            />
          ))}
        />
      </section>
      <section className={clsx('container', styles.sectionBooking)}>
        <BookingForm />
      </section>
      <section className={clsx('container', styles.sectionBanner)}>
        <Banner />
      </section>
      <section className={styles.sectionReviews}>
        <ReviewsSection />
      </section>
      <section className={clsx('container', styles.sectionAbout)}>
        <AboutSection />
      </section>
    </>
  );
};
