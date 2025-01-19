import { dataHeroSlider } from './_shared/constans';
import Slider from './_components/slider';

export default function Home() {
  return (
    <main>
      <section className="container">
        <Slider data={dataHeroSlider} height={640} />
        <Slider data={dataHeroSlider} height={520} onlyImage={true} />
      </section>
    </main>
  );
}
