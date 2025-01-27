'use client';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import styles from './styles.module.css';
import clsx from 'clsx';

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
}) => {
  return (
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
};

export default SliderItem;
