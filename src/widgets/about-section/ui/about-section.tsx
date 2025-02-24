import clsx from 'clsx';
import Image from 'next/image';

import styles from './styles.module.css';
import homeImage from '@/shared/assets/images/home-6.webp';
import Heading from '@/shared/ui/heading';
import Text from '@/shared/ui/text';
const AboutSection = () => (
  <section className={clsx('container', styles.aboutSection)}>
    <div className={styles.aboutSectionContent}>
      <div className={styles.aboutSectionText}>
        <Heading level={2} className={styles.aboutSectionTitle}>
          О нашем глэмпинге BriTehnoVillage
        </Heading>
        <Text className={styles.aboutSectionDescription}>
          Bri TehnoVillage — это глэмпинг в экологически чистом районе рядом с
          Техногородом. Здесь вы можете насладиться природой, не отказываясь от
          комфорта. Вокруг леса и озера, создающие идеальные условия для отдыха.
          Стильные домики оборудованы всем необходимым.
        </Text>
        <Text className={styles.aboutSectionDescription}>
          Это место подходит для тех, кто ценит экологию, но не готов жертвовать
          удобствами. В домиках есть Wi-Fi, обеспечивая связь с миром.
          Наслаждайтесь свежим воздухом и всеми удобствами Bri TehnoVillage.
          Идеальное место для заряда энергией и отдыха на полную! 🌿✨
        </Text>
      </div>
      <Image
        src={homeImage}
        alt="about"
        width={580}
        className={styles.aboutSectionImage}
      />
    </div>
  </section>
);

export default AboutSection;
