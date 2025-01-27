import React, { FC } from 'react';
import styles from './styles.module.css';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
};

const Heading: FC<HeadingProps> = ({ level, className = '', children }) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const combinedStyles = `${styles.heading} ${className}`.trim();

  return <Tag className={combinedStyles}>{children}</Tag>;
};

export default Heading;
