import clsx from 'clsx';
import Image from 'next/image';

import styles from './styles.module.css';
import bannerImage from '@/shared/assets/images/home-16.webp';
import Button from '@/shared/ui/button';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Banner = ({ className, ...rest }: Props) => {
  return (
    <div className={clsx(styles.banner, className)} {...rest}>
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
