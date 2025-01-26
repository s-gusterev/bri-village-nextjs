'use client';
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderNavigation from '@/shared/ui/slider-navigation';
import { CarouselProps } from '../../model/sliders';
import { useSlider } from '@/shared/lib/useSlider';

const Gallery: React.FC<CarouselProps> = ({ data, title }) => {
  const {
    swiperRef,
    isPrevDisabled,
    isNextDisabled,
    handleSlideChange,
    goToPrevSlide,
    goToNextSlide,
  } = useSlider(data);

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
            onClick={goToPrevSlide}
            disabled={isPrevDisabled}
          />
          <SliderNavigation
            position="right"
            size="normal"
            color="primary"
            aria-label="Перейти к следующему слайду"
            onClick={goToNextSlide}
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
          {data.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
