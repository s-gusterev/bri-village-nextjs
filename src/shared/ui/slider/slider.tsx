'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import clsx from 'clsx';
import { CSSProperties } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.css';
import { useSlider } from '@/shared/lib/useSlider';
import { SliderProps } from '@/shared/model';
import SliderNavigation from '@/shared/ui/slider-navigation';
import SliderPagination from '@/shared/ui/slider-pagination';

interface MyCustomCSS extends CSSProperties {
  '--height-slider': string;
}

const Slider: React.FC<SliderProps> = ({
  data,
  height,
  autoPlay,
  className,
  ...rest
}) => {
  const customProperties: MyCustomCSS = {
    '--height-slider': `${height}px`,
  };

  const {
    swiperRef,
    handlePaginationChange,
    goToPrevSlide,
    goToNextSlide,
    handlePaginationClick,
    currentIndex,
  } = useSlider(data);

  const autoplaySettings = autoPlay ? { delay: 5000 } : false;

  return (
    <div
      className={clsx(styles.slider, className)}
      style={customProperties}
      {...rest}
    >
      <Swiper
        pagination={{ type: 'bullets', clickable: true }}
        modules={[Autoplay, Navigation]}
        loop={true}
        speed={400}
        autoplay={autoplaySettings}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handlePaginationChange}
        style={{ borderRadius: '30px', overflow: 'hidden' }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigation
        size="normal"
        position="left"
        color="secondary"
        aria-label="Перейти к предыдущему слайду"
        onClick={goToPrevSlide}
        style={{
          position: 'absolute',
          left: '37px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: '100',
        }}
      />
      <SliderNavigation
        position="right"
        size="normal"
        color="secondary"
        aria-label="Перейти к следующему слайду"
        onClick={goToNextSlide}
        style={{
          position: 'absolute',
          right: '37px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: '100',
        }}
      />

      <SliderPagination
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '20px',
        }}
        slideCount={data.length}
        activeIndex={currentIndex}
        onSlideChange={handlePaginationClick}
      />
    </div>
  );
};

export default Slider;
