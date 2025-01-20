import { dataHeroSlider } from './_shared/constans';
import Slider from './_components/slider';
import BookForm from './_components/book-form';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <section className={`container ${styles.hero}`}>
        <Slider data={dataHeroSlider} height={640} />
      </section>
      <section className={`container ${styles.book}`}>
        <BookForm />
      </section>
    </main>
  );
}
