'use client';
import styles from './styles.module.css';
import { menu } from '@/app/_shared/constans';
import { useState } from 'react';
import Logo from '../logo';
import Navigation from '../navigation';
import Button from '../button';
import { MobileIcon } from '../icons';
import Burger from '../burger';
import CloseButton from '../close-button';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={`container ${styles.header} `}>
      <Logo />
      <div
        className={`${styles.navigation}  ${
          openMenu ? styles['navigation--open'] : ''
        } `}
      >
        <div className={styles.mobile}>
          <span className={styles.title__menu}>Меню</span>
          <CloseButton type="button" onClick={() => setOpenMenu(!openMenu)} />
        </div>
        <Navigation menu={menu} />
        <div className={styles.buttons}>
          <a href="tel:+79953831616" className={styles.phone}>
            <MobileIcon /> +7 995 383 16 16
          </a>
          <Button size="normal" type="button">
            Забронировать
          </Button>
        </div>
      </div>
      <Burger type="button" onClick={() => setOpenMenu(!openMenu)} />
    </header>
  );
};

export default Header;
