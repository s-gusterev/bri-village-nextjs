'use client';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './styles.module.css';
import {
  SLIDER_INFRASTRUCTURE,
  IMAGES_HERO_SLIDER,
  IMAGES_BEST_HOME,
  IMAGES_BEST_HOME_MOBILE,
  IMAGES_SlIDER_BOOK,
} from '../config';
import AboutSection from '@/pages/home/ui/about-section';
import BookForm from '@/pages/home/ui/book-form';
import { useWindowSize } from '@/shared/lib/use-hooks-ts';
import Button from '@/shared/ui/button';
import Carousel from '@/shared/ui/carousel';
import Chip from '@/shared/ui/chip';
import Gallery from '@/shared/ui/gallery';
import Heading from '@/shared/ui/heading';
import SlideCarousel from '@/shared/ui/slide-carousel';
import SlideGallery from '@/shared/ui/slide-gallery';
import Slider from '@/shared/ui/slider';
import SliderItem from '@/shared/ui/slider-item';
import Text from '@/shared/ui/text';
import Banner from '@/widgets/banner';
import ServiceSection from '@/widgets/service-section';

export default function HomePage() {
  const { width } = useWindowSize({ initializeWithValue: false });

  const isMobile = width !== undefined && width <= 768;

  return (
    <main>
      <section className={clsx('container', styles.hero)}>
        <Slider
          data={IMAGES_HERO_SLIDER.map((slide) => (
            <SliderItem key={slide.id} slide={slide} overlay />
          ))}
          height={640}
          autoPlay={true}
          className={styles.heroSlider}
        />
      </section>
      <section className={clsx('container', styles.book)}>
        <BookForm />
      </section>
      <section className={clsx('container', styles.galleryGrid)}>
        {isMobile ? (
          <Carousel
            data={IMAGES_BEST_HOME_MOBILE.map((slide) => (
              <SlideCarousel
                key={slide.id}
                slide={slide}
                slides={IMAGES_BEST_HOME_MOBILE}
              />
            ))}
            title="Лучшие домики на природе"
          />
        ) : (
          <Gallery
            title="Лучшие домики на природе"
            data={IMAGES_BEST_HOME.map((slide, index) => (
              <SlideGallery
                key={index}
                slides={slide}
                allImages={IMAGES_BEST_HOME_MOBILE}
              />
            ))}
          />
        )}
      </section>
      <section className="container">
        <div className={styles.sliderBook}>
          <Heading level={2} className={styles.headingSliderBook}>
            Аренда домиков на глэмпинге
          </Heading>
          <Slider
            data={IMAGES_SlIDER_BOOK.map((slide) => (
              <SliderItem key={slide.id} slide={slide} onlyImage />
            ))}
            height={520}
            autoPlay={false}
            className={styles.sliderBookSlider}
          />
          <div className={styles.sliderBookContent}>
            <div className={styles.sliderBookText}>
              <div className={styles.sliderBookChips}>
                <Chip text="Вс - Чт: 7 000 ₽/сутки" size="small" />
                <Chip text="Пт - Сб: 10 000 ₽/сутки" size="small" />
              </div>
              <Text color="secondary" className={styles.sliderBookDescription}>
                У нас есть 5 крутых отдельно стоящих домиков – свежих, стильных
                и прокачанных. В каждом есть всё, чтобы ты чувствовал себя как в
                лайфстайл-блоге: уют, дизайн и полный комфорт. Это не просто
                домики, это твоя личная vibe-зона для отдыха. Заселяйся и
                кайфуй! 🏕️🔥
              </Text>
            </div>
            <Button size="normal" as="a" href="/rooms">
              Подробнее
            </Button>
          </div>
        </div>
      </section>
      <section className={clsx('container', styles.services)}>
        <Heading level={2} className={styles.headingServices}>
          Услуги и акции
        </Heading>
        <ServiceSection />
      </section>
      <section className={styles.sliderInfrastructure}>
        <div
          className={clsx('container', styles.sliderInfrastructureContainer)}
        >
          <Carousel
            data={SLIDER_INFRASTRUCTURE.map((slide) => (
              <div key={slide.id} className={styles.sliderInfrastructureItem}>
                <div className={styles.sliderInfrastructureImage}>
                  <Image src={slide.image} alt={slide.title} />
                </div>
                <h3 className={styles.sliderInfrastructureTitle}>
                  {slide.title}
                </h3>
              </div>
            ))}
            title="Инфраструктура рядом"
          />
        </div>
      </section>
      <AboutSection />
      <section className={clsx('container', styles.banner)}>
        <Banner />
      </section>
    </main>
  );
}
