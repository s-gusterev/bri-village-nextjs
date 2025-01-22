import { StaticImageData } from 'next/image';
import Image from 'next/image';
import styles from './styles.module.css';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

interface Slide {
  id: number;
  image: StaticImageData;
}

const SliderItem = ({ slide, slides }: { slide: Slide; slides: Slide[] }) => {
  return (
    <PhotoProvider maskOpacity={0.9}>
      <div className={styles.slide}>
        <PhotoView key={slide.id} src={slide.image.src}>
          <div className={styles.overlay}>
            <Image
              src={slide.image}
              alt="Изображение слайда"
              className={styles.image}
            />
          </div>
        </PhotoView>
      </div>
      <div style={{ display: 'none' }}>
        {slides.map((slide) => (
          <PhotoView key={slide.id} src={slide.image.src} />
        ))}
      </div>
    </PhotoProvider>
  );
};

export default SliderItem;
