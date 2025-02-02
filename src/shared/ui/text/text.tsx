import clsx from 'clsx';

import styles from './styles.module.css';

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({
  color = 'primary',
  children,
  className,
  ...rest
}) => (
  <p
    className={clsx(styles.text, styles[`textColor_${color}`], className)}
    {...rest}
  >
    {children}
  </p>
);

export default Text;
