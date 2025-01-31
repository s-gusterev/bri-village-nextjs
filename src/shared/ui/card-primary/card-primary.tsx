import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './styles.module.css';
import { Card } from '@/shared/model';

interface CardPrimaryProps extends Card {
  disableAnimation?: boolean;
}

const CardPrimary = ({
  disableAnimation = false,
  ...props
}: CardPrimaryProps) => {
  const Wrapper = disableAnimation ? 'div' : motion.div;

  return (
    <Wrapper
      className={styles.cardPrimary}
      {...(!disableAnimation && {
        initial: { opacity: 0.8, y: 10, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.9 },
        transition: { duration: 0.3, ease: 'easeInOut' },
      })}
    >
      <div className={styles.image}>
        <Image src={props.image} alt={props.title} />
      </div>
      <h3 className={styles.title}>{props.title}</h3>
    </Wrapper>
  );
};

export default CardPrimary;
