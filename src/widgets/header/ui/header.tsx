'use client';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { LogoLink, Navigation, ContactInfo } from './navigation';
import { useWindowSize } from '@/shared/lib/use-hooks-ts';
import { RemoveScroll } from 'react-remove-scroll';
import CloseButton from '@/shared/ui/close-button';
import Button from '@/shared/ui/button';
import Burger from '@/shared/ui/burger';
import clsx from 'clsx';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useWindowSize({ initializeWithValue: false });

  const isMobile = width !== undefined && width <= 768;

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (!isMobile) {
      setOpenMenu(false);
    }
  }, [isMobile]);

  return (
    <header className={clsx('container', styles.header)}>
      <div
        className={clsx(styles.overlay, { [styles.overlayVisible]: openMenu })}
        onClick={toggleMenu}
      ></div>
      <LogoLink />
      <RemoveScroll enabled={openMenu} removeScrollBar={false}>
        <div
          className={clsx(styles.navigation, {
            [styles['navigation--open']]: openMenu,
          })}
        >
          <div className={styles.mobile}>
            <span className={styles.title__menu}>Меню</span>
            <CloseButton
              type="button"
              onClick={toggleMenu}
              aria-label="Закрыть меню"
            />
          </div>
          <Navigation onClick={closeMenu} />
          <div className={styles.buttons}>
            <ContactInfo />
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
