import styles from './styles.module.css';
import { MobileIcon } from '@/shared/ui/icons';

const ContactInfo = () => {
  return (
    <a href="tel:+79953831616" className={styles.phone}>
      <MobileIcon /> +7 455 799 33 44
    </a>
  );
};

export default ContactInfo;
