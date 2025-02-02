import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Masonry from 'react-masonry-css';

import styles from './styles.module.css';
import { IMAGES_ABOUT_SECTION, LIST_ABOUT_SECTION } from '../../config';
import Button from '@/shared/ui/button';
import Heading from '@/shared/ui/heading';
import Slider from '@/shared/ui/slider';
import SliderItem from '@/shared/ui/slider-item';
import Text from '@/shared/ui/text';
const AboutSection = () => {
  const INITIAL_VISIBLE_CARDS = 6;
  const BREAKPOINT_MASONRY_COLUMNS = {
    default: 2,
    768: 1,
  };
  const [visibleCards, setVisibleCards] = useState(INITIAL_VISIBLE_CARDS);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    if (showMore) {
      setVisibleCards(INITIAL_VISIBLE_CARDS);
    } else {
      setVisibleCards(LIST_ABOUT_SECTION.length);
    }
    setShowMore(!showMore);
  };
  return (
    <section className={clsx('container', styles.aboutSection)}>
      <div className={styles.aboutSectionContent}>
        <div className={styles.aboutSectionText}>
          <Heading level={2} className={styles.aboutSectionTitle}>
            О нашем глэмпинге BriTehnoVillage
          </Heading>
          <Text className={styles.aboutSectionDescription}>
            Bri TehnoVillage – это топовый глэмпинг в стиле
            &quot;техно-уют&quot;, который находится в чистом районе недалеко от
            Техногорода. У нас можно оторваться от городской суеты, но при этом
            оставаться в кайфе со всеми удобствами. Представь: стильные домики,
            лес вокруг, озера рядом – идеально для тех, кто хочет залипать на
            природу, но без потери вайфая и комфорта. Это место для тех, кто
            любит экологию, но не готов жертвовать своими чилами.
          </Text>
          <Text className={styles.aboutSectionDescription}>
            Тут у нас 100% экологичный вайб – дышишь свежим воздухом, кайфуешь
            от природы, а вокруг только лес и озера. Наши домики – это не просто
            место для сна, а настоящий комфорт со всеми плюшками. Всё, что нужно
            для крутого отдыха, уже внутри. Приезжай, заряжайся энергией и
            отдыхай на полную! 🌿✨
          </Text>
          <Button
            size="normal"
            color="secondary"
            as="a"
            href="/about"
            className={styles.aboutSectionButton}
          >
            Читать подробнее
          </Button>
        </div>
        <Slider
          data={IMAGES_ABOUT_SECTION.map((slide) => (
            <SliderItem key={slide.id} slide={slide} onlyImage />
          ))}
          height={470}
          autoPlay={false}
          className={styles.aboutSectionSlider}
        />
      </div>

      <AnimatePresence initial={false}>
        <Masonry
          breakpointCols={BREAKPOINT_MASONRY_COLUMNS}
          className={styles.masonry}
          columnClassName={styles.masonryColumn}
        >
          {LIST_ABOUT_SECTION.slice(0, visibleCards).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                className={styles.aboutSectionItem}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.02,
                }}
              >
                <div className={styles.aboutSectionIcon}>
                  <IconComponent />
                </div>
                <Text color="secondary">{item.title}</Text>
              </motion.div>
            );
          })}
        </Masonry>
      </AnimatePresence>
      <Button
        size="large"
        color="secondary"
        onClick={handleShowMore}
        className={styles.button}
      >
        <span> {showMore ? 'Свернуть' : 'Больше преимуществ'} </span>
      </Button>
    </section>
  );
};

export default AboutSection;
