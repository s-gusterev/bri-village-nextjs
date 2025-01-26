import Image from 'next/image';
import logo from '@/shared/assets/images/logo.svg';
import styles from './styles.module.css';

const Logo = () => {
  return (
    <Image
      className={styles.logo}
      src={logo}
      alt="logo"
      width={72}
      height={72}
      priority
    />
  );
};

export default Logo;
