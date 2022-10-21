import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="Transactions made by the app"
        className="w-full h-full relative z-10"
      />

      {/* Gradient layers */}
      <div className="absolute z-[1] w-1/2 h-1/2 -left-1/3 top-0 rounded-full white__gradient" />
      <div className="absolute z-[0] w-1/2 h-1/2 -left-1/3 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your
        <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`max-w-lg ${styles.paragraph} mt-5`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cum harum,
        iusto dicta quo obcaecati eius dolorem consectetur possimus! Debitis
        eligendi repellat distinctio ad neque eius sint maxime, repudiandae
        iusto.
      </p>

      <div className="flex flex-row flex-wrap md:mt-10 mt-6">
        <img
          src={apple}
          alt="App Store button"
          className="w-36 h-11 object-contain cursor-pointer"
        />
        <img
          src={google}
          alt="Google Play button"
          className="w-36 h-11 object-contain cursor-pointer ml-5"
        />
      </div>
    </div>
  </section>
);

export default Billing;
