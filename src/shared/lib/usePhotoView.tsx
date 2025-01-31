'use client';
import { useState } from 'react';

import { Slide } from '@/shared/model/sliders';

interface IUsePhotoView {
  visible: boolean;
  startIndex: number;
  openSlider: (currentSlide: Slide) => void;
  closeSlider: () => void;
  setStartIndex: (index: number) => void;
}

export const usePhotoView = (slides: Slide[]): IUsePhotoView => {
  const [visible, setVisible] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openSlider = (currentSlide: Slide) => {
    const currentIndex = slides.findIndex((s) => s.id === currentSlide.id);
    setStartIndex(currentIndex);
    setVisible(true);
  };

  const closeSlider = () => {
    setVisible(false);
  };

  return {
    visible,
    startIndex,
    openSlider,
    closeSlider,
    setStartIndex,
  };
};
