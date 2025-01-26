'use client';
import {
  IMAGES_HERO_SLIDER,
  IMAGES_BEST_HOME,
  IMAGES_BEST_HOME_MOBILE,
} from '@/shared/config';
import Slider from '@/shared/ui/slider';
import Gallery from '@/shared/ui/gallery';
import styles from './styles.module.css';
import Carousel from '@/shared/ui/carousel';
import { useWindowSize } from '@/shared/lib/use-hooks-ts';
import SlideCarousel from '@/shared/ui/slide-carousel';
import SlideGallery from '@/shared/ui/slide-gallery';
import BookForm from '@/widgets/book-form';

const Home = () => {
  const { width } = useWindowSize({ initializeWithValue: false });

  const isMobile = width !== undefined && width <= 768;

  return (
    <main>
      <section className={`container ${styles.hero}`}>
        <Slider data={IMAGES_HERO_SLIDER} height={640} />
      </section>
      <section className={`container ${styles.book}`}>
        <BookForm />
      </section>
      <section className={`container ${styles.galleryGrid}`}>
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
    </main>
  );
};

export default Home;
