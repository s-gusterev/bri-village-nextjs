'use client';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import styles from './styles.module.css';
import { useWindowSize } from '@/shared/lib/use-hooks-ts';
import Burger from '@/shared/ui/burger';
import Button from '@/shared/ui/button';
import CloseButton from '@/shared/ui/close-button';
import {
  LogoLink,
  Navigation,
  ContactInfo,
} from '@/widgets/header/ui/navigation';
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useWindowSize({ initializeWithValue: false });

  const isMobile = useMemo(() => width !== undefined && width <= 768, [width]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };

  if (!isMobile && openMenu) {
    closeMenu();
  }

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
