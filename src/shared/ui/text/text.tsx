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
}) => {
  const combinedClassName = `${styles.text} ${styles[`textColor_${color}`]} ${
    className || ''
  }`.trim();

  return (
    <p className={combinedClassName} {...rest}>
      {children}
    </p>
  );
};

export default Text;
