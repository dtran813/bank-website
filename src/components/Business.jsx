import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
// import { icon, star, shield } from '../assets';
import Button from './Button';

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business,
        <br className="sm:block hidden" />
        we'll handle the money.
      </h2>
      <p className="max-w-lg text-gradient leading-8 mt-5">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Button mt="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}></div>
  </section>
);

export default Business;
