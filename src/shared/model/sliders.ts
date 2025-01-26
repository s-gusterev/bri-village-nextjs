import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface Slide {
  id: number;
  image: StaticImageData;
  title?: string;
  description?: string;
}

export interface Slides {
  slides: Slide[];
}

export interface SlideGalleryProps {
  slides: { slides: Slide[] };
  allImages: Slide[];
}

export interface SliderProps {
  data: ReactNode[];
  height: number;
}

export interface CarouselProps {
  data: ReactNode[];
  title?: string;
}
