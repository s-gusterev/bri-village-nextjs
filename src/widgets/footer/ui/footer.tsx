import Link from 'next/link';

import styles from './styles.module.css';
import { menu } from '@/shared/config';
import { PHONE, EMAIL, ADDRESS } from '@/shared/config';
import {
  MapPinIcon,
  DeviceMobileIcon,
  MailIcon,
  TelegramIcon,
  WhatsappIcon,
  VkIcon,
  InstagramIcon,
  AsteriksIcon,
} from '@/shared/ui/icons';
import Logo from '@/shared/ui/logo';
import Text from '@/shared/ui/text';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.footerTop}>
        <Logo />
        <nav className={styles.nav}>
          <h4 className={styles.title}>Карта сайта</h4>
          <ul className={styles.list}>
            {menu.map(({ href, title }) => (
              <li key={href} className={styles.item}>
                <Link href={href} className={styles.link}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.contacts}>
          <h4 className={styles.title}>Администрация Техногородка</h4>
          <ul className={styles.listContacts}>
            <li className={styles.itemContacts}>
              <div className={styles.itemContactsHeader}>
                <MapPinIcon />
                <span className={styles.itemContactsTitle}>
                  Адрес населенного пункта
                </span>
              </div>
              <address className={styles.itemContactsText}>{ADDRESS}</address>
            </li>
            <li className={styles.itemContacts}>
              <div className={styles.itemContactsHeader}>
                <DeviceMobileIcon />
                <span className={styles.itemContactsTitle}>
                  Телефон для связи
                </span>
              </div>
              <a
                href={`tel:${PHONE.replaceAll(' ', '')}`}
                className={styles.itemContactsText}
              >
                {PHONE}
              </a>
            </li>
            <li className={styles.itemContacts}>
              <div className={styles.itemContactsHeader}>
                <MailIcon />
                <span className={styles.itemContactsTitle}>
                  Email для связи
                </span>
              </div>
              <a
                href={`mailto:${EMAIL}`.toLowerCase()}
                className={styles.itemContactsText}
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <h4 className={styles.title}>Социальные сети</h4>
          <ul className={styles.listSocial}>
            <li className={styles.itemSocial}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.itemSocialLink}
              >
                <TelegramIcon /> <span>Telegram</span>
              </a>
            </li>
            <li className={styles.itemSocial}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.itemSocialLink}
              >
                <WhatsappIcon />
                <span>Whatsapp</span>
              </a>
            </li>
            <li className={styles.itemSocial}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.itemSocialLink}
              >
                <VkIcon />
                <span>VK</span>
              </a>
            </li>

            <li className={styles.itemSocial}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.itemSocialLink}
              >
                <InstagramIcon />
                <span className={styles.itemSocialInsta}>
                  Instagram
                  <span className={styles.asteriks}>
                    <AsteriksIcon />
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <div className={styles.socialNote}>
            <AsteriksIcon />
            <span className={styles.socialNoteText}>
              Запрещенная на территории Российской Федерации организация
            </span>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <Text className={styles.footerBottomText}>
          © Техногород {new Date().getFullYear()} Все права защищены. Любое
          копирование информации возможно только с согласия правообладателя
          ресурса.
        </Text>
        <div className={styles.footerBottomLinks}>
          <Link href="#">Договор оферты</Link>
          <Link href="#">Политика конфиденциальности</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
