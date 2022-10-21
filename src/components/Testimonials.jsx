import React from 'react';
import styles from '../style';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.flexCenter} flex-col ${styles.paddingY} relative`}
  >
    <div className="absolute z-0 w-3/5 h-3/5 -right-1/2 bottom-40 rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-4 relative z-10">
      <h2 className={styles.heading2}>
        What people are
        <br className="sm:block hidden" />
        saying about us
      </h2>

      <p className={`max-w-lg ${styles.paragraph} mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="w-full flex flex-wrap sm:justify-start justify-center feedback-container relative z-10">
      {feedback.map(card => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
