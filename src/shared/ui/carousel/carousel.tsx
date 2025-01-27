'use client';
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderNavigation from '@/shared/ui/slider-navigation';
import { CarouselProps } from '../../model/sliders';
import { useSlider } from '@/shared/lib/useSlider';
import Heading from '../heading';

const Carousel: React.FC<CarouselProps> = ({ data, title }) => {
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
        {title && <Heading level={2}>{title}</Heading>}
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
          modules={[Navigation]}
          loop={true}
          speed={300}
          slidesPerView={1.0937}
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
          {data.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
