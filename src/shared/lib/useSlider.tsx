'use client';
import { useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import { CarouselProps } from '../model/sliders';

export const useSlider = (data: CarouselProps['data']) => {
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

  const handlePaginationChange = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      setCurrentIndex(swiper.realIndex);
    }
  };

  const goToPrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const goToNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const handlePaginationClick = (index: number) => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.slideToLoop(index);
      setCurrentIndex(index);
    }
  };

  return {
    swiperRef,
    currentIndex,
    isPrevDisabled,
    isNextDisabled,
    handleSlideChange,
    goToPrevSlide,
    goToNextSlide,
    handlePaginationClick,
    handlePaginationChange,
  };
};
