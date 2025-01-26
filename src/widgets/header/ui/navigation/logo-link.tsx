'use client';
import Link from 'next/link';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';
import Logo from '@/shared/ui/logo';

const LogoLink = () => {
  const pathname = usePathname();

  const isHome = pathname === '/';
  return (
    <Link href="/" className={styles.logo} aria-label="logo">
      <Logo />
      {isHome && <h1 className={styles.logoText}>Глэмпинг в Технопоселении</h1>}
    </Link>
  );
};

export default LogoLink;
