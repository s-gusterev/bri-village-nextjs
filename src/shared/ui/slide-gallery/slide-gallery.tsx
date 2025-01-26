'use client';
import Image from 'next/image';
import styles from './styles.module.css';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoSlider } from 'react-photo-view';
import { SlideGalleryProps, Slide } from '../../model/sliders';
import { usePhotoView } from '@/shared/lib/usePhotoView';

const SlideGallery = ({ slides, allImages }: SlideGalleryProps) => {
  const { visible, startIndex, openSlider, closeSlider, setStartIndex } =
    usePhotoView(allImages);

  return (
    <>
      <div className={styles.slide}>
        {slides.slides.map((slide: Slide) => (
          <div
            key={slide.id}
            className={styles.overlay}
            onClick={() => openSlider(slide)}
          >
            <Image
              src={slide.image}
              alt="Изображение слайда"
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <PhotoSlider
        maskOpacity={0.9}
        images={allImages.map((s) => ({ src: s.image.src, key: s.id }))}
        visible={visible}
        onClose={closeSlider}
        index={startIndex}
        onIndexChange={(index) => setStartIndex(index)}
      />
    </>
  );
};

export default SlideGallery;
