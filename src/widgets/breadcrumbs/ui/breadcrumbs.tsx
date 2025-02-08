'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './styles.module.css';

interface BreadcrumbsProps {
  customTitles?: Record<string, string>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customTitles = {} }) => {
  const pathname = usePathname();
  const pathSegments = pathname?.split('/').filter(Boolean);

  if (pathSegments?.length === 0) return null;

  return (
    <nav className={styles.breadcrumbs}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>
            Главная
          </Link>
        </li>
        {pathSegments?.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const title = customTitles[segment] || decodeURIComponent(segment);

          return (
            <li key={href} className={styles.item}>
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
