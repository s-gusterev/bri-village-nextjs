'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './styles.module.css';
import { menu } from '@/widgets/header/config';

type LinkType = {
  href: string;
  title: string;
};

const Navigation = ({ onClick }: { onClick?: () => void }) => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {menu.map(({ href, title }: LinkType) => (
          <li key={href} className={styles.item}>
            <Link
              href={href}
              className={`${styles.link} ${
                pathname === href ? styles.active : ''
              }`}
              onClick={onClick}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
