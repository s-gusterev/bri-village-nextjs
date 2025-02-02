'use client';
import { useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';

import { CarouselProps } from '@/shared/model/sliders';

export const useSlider = (data: CarouselProps['data']) => {
  const swiperRef = useRef<SwiperCore>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(data.length <= 1);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setCurrentIndex(swiperRef.current.realIndex);
      setIsPrevDisabled(swiperRef.current.isBeginning);
      setIsNextDisabled(swiperRef.current.isEnd);
    }
  };

  const goToPrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const goToNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
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
  };
};
