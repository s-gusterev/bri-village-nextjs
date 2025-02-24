import clsx from 'clsx';
import Image from 'next/image';

import styles from './styles.module.css';
import { REVIEWS } from '../config/constans';
import Carousel from '@/shared/ui/carousel';
import Text from '@/shared/ui/text';
const ReviewsSection = () => {
  return (
    <div className={styles.reviewsSection} data-section="reviews">
      <div className={clsx('container', styles.reviewsContainer)}>
        <Carousel
          data={REVIEWS.map((review) => (
            <div key={review.id} className={styles.review}>
              <div className={styles.header}>
                <Image
                  src={review.avatar}
                  alt="avatar"
                  width={60}
                  height={60}
                  className={styles.avatar}
                />
                <div className={styles.info}>
                  <time dateTime={review.date} className={styles.date}>
                    {review.date}
                  </time>
                  <h3 className={styles.name}>{review.name}</h3>
                </div>
              </div>
              <Text>{review.review}</Text>
            </div>
          ))}
          title="Отзывы наших гостей"
          slidesPerView={2}
        />
      </div>
    </div>
  );
};

export default ReviewsSection;
