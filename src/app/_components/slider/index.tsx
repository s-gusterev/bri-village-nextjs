'use client';
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CSSProperties } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { useRef, useState } from 'react';
import { StaticImageData } from 'next/image';
import SliderNavigation from '../slider-navigation';
import SliderPagination from '../slider-pagination';
import SliderItem from './slider-item';

interface Slide {
  id: number;
  title?: string;
  description?: string;
  image: StaticImageData;
}

interface SliderProps {
  data: Slide[];
  height: number;
  onlyImage?: boolean;
}

interface MyCustomCSS extends CSSProperties {
  '--height-slider': string;
}

const Slider: React.FC<SliderProps> = ({ data, height, onlyImage = false }) => {
  const customProperties: MyCustomCSS = {
    '--height-slider': `${height}px`,
  };

  const swiperRef = useRef<SwiperCore>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      setActiveIndex(swiper.realIndex);
    }
  };

  const handlePaginationClick = (index: number) => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.slideToLoop(index);
      setActiveIndex(index);
    }
  };

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
        onSlideChange={handleSlideChange}
        style={{ borderRadius: '30px', overflow: 'hidden' }}
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SliderItem slide={slide} onlyImage={onlyImage} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigation
        size="normal"
        position="left"
        color="secondary"
        aria-label="Перейти к предыдущему слайду"
        onClick={() => swiperRef.current?.slidePrev()}
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
        onClick={() => swiperRef.current?.slideNext()}
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
        activeIndex={activeIndex}
        onSlideChange={handlePaginationClick}
      />
    </div>
  );
};

export default Slider;
