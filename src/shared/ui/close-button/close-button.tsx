import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.css';
import { CloseIcon } from '@/shared/ui/icons';

const CloseButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...rest
}) => {
  return (
    <button type="button" className={styles.close} {...rest}>
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
