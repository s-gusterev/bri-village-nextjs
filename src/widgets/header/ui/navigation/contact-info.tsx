import styles from './styles.module.css';
import { PHONE } from '@/shared/config';
import { MobileIcon } from '@/shared/ui/icons';

const ContactInfo = () => {
  return (
    <a href={`tel:${PHONE.replaceAll(' ', '')}`} className={styles.phone}>
      <MobileIcon /> {PHONE}
    </a>
  );
};

export default ContactInfo;
