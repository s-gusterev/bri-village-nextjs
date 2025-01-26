'use client';
import Image from 'next/image';
import styles from './styles.module.css';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoSlider } from 'react-photo-view';
import { Slide } from '../../model/sliders';
import { usePhotoView } from '../../lib/usePhotoView';

const SlideCarousel = ({
  slide,
  slides,
}: {
  slide: Slide;
  slides: Slide[];
}) => {
  const { visible, startIndex, openSlider, closeSlider, setStartIndex } =
    usePhotoView(slides);

  return (
    <>
      <div className={styles.slide} onClick={() => openSlider(slide)}>
        <div className={styles.overlay}>
          <Image
            src={slide.image}
            alt="Изображение слайда"
            className={styles.image}
          />
        </div>
      </div>
      <PhotoSlider
        maskOpacity={0.9}
        images={slides.map((s) => ({ src: s.image.src, key: s.id }))}
        visible={visible}
        onClose={closeSlider}
        index={startIndex}
        onIndexChange={(index) => setStartIndex(index)}
      />
    </>
  );
};

export default SlideCarousel;
