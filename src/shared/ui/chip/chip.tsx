import clsx from 'clsx';
import styles from './styles.module.css';

type ChipProps = {
  text: string;
  variant?: 'default' | 'primary' | 'secondary';
  size: 'normal' | 'small' | 'large';
};

const Chip = ({ text, variant = 'default', size }: ChipProps) => {
  return (
    <span
      className={clsx(
        styles.chip,
        styles[`chipSize_${size}`],
        variant && styles[`chipColor_${variant}`],
      )}
    >
      {text}
    </span>
  );
};

export default Chip;
