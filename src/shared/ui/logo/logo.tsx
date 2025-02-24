import Image from 'next/image';

import styles from './styles.module.css';
import logo from '@/shared/assets/images/logo.svg';

const Logo = () => (
  <Image
    className={styles.logo}
    src={logo}
    alt="logo"
    width={72}
    height={72}
    priority
  />
);

export default Logo;
