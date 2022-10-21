import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => (
  <section
    id="cta"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-2xl box-shadow`}
  >
    <div className="flex-1 flex flex-col md:ml-10 ml-0">
      <h2 className={styles.heading2}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-md mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} md:mr-10 mr-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
