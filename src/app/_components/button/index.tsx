import styles from './styles.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: 'normal' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'dark';
};

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  color = 'primary',
  ...rest
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${size}`]} ${
        styles[`button--${color}`]
      } `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
