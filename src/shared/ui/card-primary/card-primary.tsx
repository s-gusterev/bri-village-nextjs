import { motion } from 'framer-motion';
import { Card } from '@/shared/model';
import Image from 'next/image';
import styles from './styles.module.css';

const CardPrimary = (props: Card) => {
  return (
    <motion.div
      className={styles.cardPrimary}
      initial={{ opacity: 0.8, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      key={props.id}
    >
      <div className={styles.image}>
        <Image src={props.image} alt={props.title} />
      </div>
      <h3 className={styles.title}>{props.title}</h3>
    </motion.div>
  );
};

export default CardPrimary;
