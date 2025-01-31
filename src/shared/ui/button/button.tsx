import clsx from 'clsx';
import Link from 'next/link';

import styles from './styles.module.css';

type CommonProps = {
  size: 'normal' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'dark';
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
};

type LinkProps = {
  as: 'a';
  href: string;
};

type Props = (ButtonProps | LinkProps) & CommonProps;

const Button: React.FC<Props> = ({
  size,
  color = 'primary',
  children,
  className,
  as = 'button',
  ...rest
}) => {
  const combinedClassName = clsx(
    styles.button,
    styles[`button--${size}`],
    styles[`button--${color}`],
    className,
  );

  if (as === 'a') {
    const { href, ...linkProps } = rest as LinkProps;
    return (
      <Link href={href} className={combinedClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
};

export default Button;
