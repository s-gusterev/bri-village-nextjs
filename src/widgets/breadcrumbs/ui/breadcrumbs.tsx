'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './styles.module.css';

interface BreadcrumbsProps {
  customTitles?: Record<string, string>;
  color?: 'primary' | 'secondary';
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  customTitles = {},
  color = 'primary',
}) => {
  const pathname = usePathname();
  const pathSegments = pathname?.split('/').filter(Boolean);

  if (pathSegments?.length === 0) return null;

  return (
    <nav className={styles.breadcrumbs}>
      <ol className={styles.list}>
        <li className={clsx(styles.item, styles[`item--${color}`])}>
          <Link href="/" className={styles.link}>
            Главная
          </Link>
        </li>
        {pathSegments?.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const title = customTitles[segment] || decodeURIComponent(segment);

          return (
            <li
              key={href}
              className={clsx(styles.item, styles[`item--${color}`])}
            >
              {index === pathSegments.length - 1 ? (
                <span>{title}</span>
              ) : (
                <Link href={href} className={styles.link}>
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
