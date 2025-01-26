import { ButtonHTMLAttributes } from 'react';
import { BurgerIcon } from '@/shared/ui/icons';
import styles from './styles.module.css';

const Burger: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...rest
}) => {
  return (
    <button type="button" className={styles.burger} {...rest}>
      <BurgerIcon />
    </button>
  );
};

export default Burger;
