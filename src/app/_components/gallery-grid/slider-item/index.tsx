import { StaticImageData } from 'next/image';
import Image from 'next/image';
import styles from './styles.module.css';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

interface Slide {
  id: number;
  image: StaticImageData;
}

interface SliderItemProps {
  slides: { slides: Slide[] };
  allImages: Slide[];
}

const SliderItem = ({ slides, allImages }: SliderItemProps) => {
  const imagesToDisplayInGallery = allImages.filter(
    (image) => !slides.slides.find((slide) => slide.id === image.id),
  );

  return (
    <PhotoProvider maskOpacity={0.9}>
      <div className={styles.slide}>
        {slides.slides.map((slide: Slide) => (
          <PhotoView key={slide.id} src={slide.image.src}>
            <div className={styles.overlay}>
              <Image
                src={slide.image}
                alt="Изображение слайда"
                className={styles.image}
              />
            </div>
          </PhotoView>
        ))}
      </div>
      <div style={{ display: 'none' }}>
        {imagesToDisplayInGallery.map((slide) => (
          <PhotoView key={slide.id} src={slide.image.src} />
        ))}
      </div>
    </PhotoProvider>
  );
};

export default SliderItem;
