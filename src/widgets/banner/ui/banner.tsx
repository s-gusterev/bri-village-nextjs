import Image from 'next/image';

import styles from './styles.module.css';
import bannerImage from '@/shared/assets/images/home-16.webp';
import Button from '@/shared/ui/button';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.image}
        src={bannerImage}
        alt="banner"
        width={210}
        height={130}
      />
      <h2 className={styles.title}>
        Поможем с выбором и проконсультируем по всем вопросам
      </h2>
      <Button color="light" size="large" className={styles.button}>
        <span>Забронировать</span>
      </Button>
    </div>
  );
};

export default Banner;
