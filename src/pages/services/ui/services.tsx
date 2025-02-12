import clsx from 'clsx';
import Image from 'next/image';

import styles from './styles.module.css';
import { IMAGES_SlIDER_SERVICES } from '../config';
import Carousel from '@/shared/ui/carousel';
import Heading from '@/shared/ui/heading';
import AboutSection from '@/widgets/about-section';
import Banner from '@/widgets/banner';
import Breadcrumbs from '@/widgets/breadcrumbs';
import ServiceSection from '@/widgets/service-section';

const ServicesPage = () => {
  return (
    <>
      <section className={clsx('container', styles.section)}>
        <Breadcrumbs customTitles={{ services: 'Услуги и акции' }} />
        <Heading level={1} className={styles.servicesTitle}>
          Услуги и акции BriTehnoVillage
        </Heading>
        <ServiceSection />
      </section>
      <section className={clsx('container', styles.section)}>
        <AboutSection />
      </section>
      <section className={clsx('container', styles.section)}>
        <Banner />
      </section>
      <section className={clsx('container', styles.sectionCarousel)}>
        <Carousel
          title="Домики BriTehnoVillage"
          slidesPerView={3}
          data={IMAGES_SlIDER_SERVICES.map((slide) => (
            <Image
              className={styles.carouselImage}
              key={slide.id}
              src={slide.image}
              alt={`Домик BriTehnoVillage - ${slide.id}`}
            />
          ))}
        />
      </section>
    </>
  );
};

export default ServicesPage;
