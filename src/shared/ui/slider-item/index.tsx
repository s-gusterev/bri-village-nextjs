'use client';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

import styles from './styles.module.css';

interface Slide {
  id: number;
  title?: string;
  description?: string;
  image: StaticImageData;
}

const SliderItem = ({
  slide,
  onlyImage,
  overlay = false,
}: {
  slide: Slide;
  onlyImage?: boolean;
  overlay?: boolean;
}) => (
  <div className={styles.slide}>
    <div
      className={clsx(styles.overlay, {
        [styles.overlayBackground]: overlay,
      })}
    >
      <Image
        src={slide.image}
        alt={slide.title || 'Изображение слайда'}
        priority
        className={styles.image}
      />
    </div>
    {onlyImage ? null : (
      <div className={styles.content}>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
      </div>
    )}
  </div>
);

export default SliderItem;
