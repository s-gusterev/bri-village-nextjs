'use client';
import clsx from 'clsx';
import styles from './styles.module.css';

interface PaginationProps {
  slideCount: number;
  activeIndex: number;
  onSlideChange: (index: number) => void;
  style?: React.CSSProperties;
}

const Pagination: React.FC<PaginationProps> = ({
  slideCount,
  activeIndex,
  onSlideChange,
  style,
}) => {
  return (
    <div className={styles.pagination} style={style}>
      {Array.from({ length: slideCount }).map((_, index) => (
        <button
          key={index}
          className={clsx(styles.dot, {
            [styles.active]: activeIndex === index,
          })}
          onClick={() => onSlideChange(index)}
          aria-label={`Перейти к слайду ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Pagination;
