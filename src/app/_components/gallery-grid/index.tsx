'use client';
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules';
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

interface Slides {
  slides: Slide[];
}

interface SliderProps {
  data: Slides[];
  title?: string;
}

const GalleryGrid: React.FC<SliderProps> = ({ data, title }) => {
  const swiperRef = useRef<SwiperCore>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = data.flatMap((slideGroup) => slideGroup.slides);

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
          modules={[Navigation, EffectFade]}
          loop={false}
          speed={400}
          effect={'fade'}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          style={{ borderRadius: '10px', overflow: 'hidden' }}
        >
          {data.map((slides, index) => (
            <SwiperSlide key={index}>
              <SliderItem slides={slides} allImages={allImages} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryGrid;
