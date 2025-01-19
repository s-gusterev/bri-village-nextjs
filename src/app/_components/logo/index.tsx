'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import logo from '@/app/_assets/images/logo.png';
import { usePathname } from 'next/navigation';

const Logo = () => {
  const pathname = usePathname();

  const isHome = pathname === '/';
  return (
    <Link href="/" className={styles.logo} aria-label="logo">
      <Image src={logo} alt="logo" width={212} height={72} priority />
      {isHome && (
        <h1 className={styles.logoText}>Bri Village - Глэмпинг в Казани</h1>
      )}
    </Link>
  );
};

export default Logo;
