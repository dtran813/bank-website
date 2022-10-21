import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-2xl ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt={`Feature icon for ${title}`}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h3 className="font-semibold text-white text-lg leading-5 mb-2">
        {title}
      </h3>
      <p className={`font-normal text-dimWhite text-base leading-5`}>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business,
        <br className="sm:block hidden" />
        we'll handle the money.
      </h2>
      <p className={`max-w-lg ${styles.paragraph} mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum
        assumenda nulla unde hic, fugit fuga numquam quod deleniti esse nihil
        rem ea maiores doloremque sapiente corrupti inventore adipisci eum.
      </p>

      <Button mt="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} index={index} {...feature} />
      ))}
    </div>
  </section>
);

export default Business;
