import { ButtonHTMLAttributes } from 'react';
import { CloseIcon } from '@/shared/ui/icons';
import styles from './styles.module.css';

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
