'use client';
import {
  dataHeroSlider,
  galleryBestHome,
  galleryBestHome2,
} from './_shared/constans';
import Slider from './_components/slider';
import BookForm from './_components/book-form';
import GalleryGrid from './_components/gallery-grid';
import styles from './page.module.css';
import GalleryGridMobile from './_components/gallery-grid-mobile';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Условие для мобильных устройств (до 768px)
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <section className={`container ${styles.hero}`}>
        <Slider data={dataHeroSlider} height={640} />
      </section>
      <section className={`container ${styles.book}`}>
        <BookForm />
      </section>
      <section className={`container ${styles.galleryGrid}`}>
        {isMobile ? (
          <GalleryGridMobile
            data={galleryBestHome2}
            title="Лучшие домики на природе"
          />
        ) : (
          <GalleryGrid
            data={galleryBestHome}
            title="Лучшие домики на природе"
          />
        )}
      </section>
    </main>
  );
}
