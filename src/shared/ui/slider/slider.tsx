'use client';
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CSSProperties } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderNavigation from '@/shared/ui/slider-navigation';
import SliderPagination from '@/shared/ui/slider-pagination';
import { SliderProps } from '@/shared/model';
import { useSlider } from '@/shared/lib/useSlider';

interface MyCustomCSS extends CSSProperties {
  '--height-slider': string;
}

const Slider: React.FC<SliderProps> = ({ data, height }) => {
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

  return (
    <div className={styles.slider} style={customProperties}>
      <Swiper
        pagination={{ type: 'bullets', clickable: true }}
        modules={[Autoplay, Navigation]}
        loop={true}
        speed={400}
        autoplay={{ delay: 5000 }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handlePaginationChange}
        style={{ borderRadius: '30px', overflow: 'hidden' }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide}
            {/* <SliderItem slide={slide} onlyImage={onlyImage} /> */}
          </SwiperSlide>
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
