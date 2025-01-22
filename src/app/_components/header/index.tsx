'use client';
import styles from './styles.module.css';
import { menu } from '@/app/_shared/constans';
import { useEffect, useState } from 'react';
import Logo from '../logo';
import Navigation from '../navigation';
import Button from '../button';
import { MobileIcon } from '../icons';
import Burger from '../burger';
import CloseButton from '../close-button';
import { RemoveScroll } from 'react-remove-scroll';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const closeMenu = () => {
    if (isMobile) setOpenMenu(false);
  };

  // Отслеживание ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Условие для мобильных устройств (до 768px)
    };

    handleResize(); // Установить значение при первой загрузке
    window.addEventListener('resize', handleResize); // Слушатель изменений размеров экрана

    return () => {
      window.removeEventListener('resize', handleResize); // Очистить слушатель при размонтировании
    };
  }, []);

  return (
    <header className={`container ${styles.header} `}>
      <div
        className={`${styles.overlay} ${openMenu ? styles.overlayVisible : ''}`}
        onClick={toggleMenu}
      ></div>
      <Logo />
      <RemoveScroll enabled={openMenu} removeScrollBar={false}>
        <div
          className={`${styles.navigation}  ${
            openMenu ? styles['navigation--open'] : ''
          } `}
        >
          <div className={styles.mobile}>
            <span className={styles.title__menu}>Меню</span>
            <CloseButton
              type="button"
              onClick={toggleMenu}
              aria-label="Закрыть меню"
            />
          </div>
          <Navigation menu={menu} onClick={closeMenu} />
          <div className={styles.buttons}>
            <a href="tel:+79953831616" className={styles.phone}>
              <MobileIcon /> +7 995 383 16 16
            </a>
            <Button size="normal" type="button">
              Забронировать
            </Button>
          </div>
        </div>
      </RemoveScroll>
      <Burger type="button" onClick={toggleMenu} aria-label="Открыть меню" />
    </header>
  );
};

export default Header;
