import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="sm:block hidden" />
        in few easy steps.
      </h2>
      <p className={`max-w-lg ${styles.paragraph} mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga
        esse facere ex officiis, fugiat minima quo nam neque? Nisi sit odio
        animi laborum illo totam, ad repudiandae est accusamus.
      </p>

      <Button mt="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="Functionalities provided by app"
        className="w-full h-full relative z-10"
      />
    </div>
  </section>
);

export default CardDeal;
