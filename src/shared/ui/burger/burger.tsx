import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.css';
import { BurgerIcon } from '@/shared/ui/icons';

const Burger: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...rest
}) => (
  <button type="button" className={styles.burger} {...rest}>
    <BurgerIcon />
  </button>
);

export default Burger;
