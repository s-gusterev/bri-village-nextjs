import { StaticImageData } from 'next/image';
import { ReactNode, HTMLAttributes } from 'react';

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

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  data: ReactNode[];
  height: number;
  autoPlay: boolean;
}

export interface CarouselProps {
  data: ReactNode[];
  title?: string;
  slidesPerView?: number;
}
