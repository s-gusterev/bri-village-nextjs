'use client';
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { useRef, useState } from 'react';
import { StaticImageData } from 'next/image';
import SliderNavigation from '../slider-navigation';
import SliderItem from './slider-item';

interface Slide {
  id: number;
  image: StaticImageData;
}

interface SliderProps {
  data: Slide[];
  title?: string;
}

const GalleryGridMobile: React.FC<SliderProps> = ({ data, title }) => {
  const swiperRef = useRef<SwiperCore>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === data.length - 1;

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      setCurrentIndex(swiper.activeIndex);
    }
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.header}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.navigation}>
          <SliderNavigation
            size="normal"
            position="left"
            color="secondary"
            aria-label="Перейти к предыдущему слайду"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isPrevDisabled}
          />
          <SliderNavigation
            position="right"
            size="normal"
            color="primary"
            aria-label="Перейти к следующему слайду"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isNextDisabled}
          />
        </div>
      </div>

      <div className={styles.slider}>
        <Swiper
          modules={[Navigation]}
          loop={true}
          speed={300}
          slidesPerView={1.1}
          spaceBetween={10}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className={styles.swiper}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SliderItem slide={slide} slides={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryGridMobile;
