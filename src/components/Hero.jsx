import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className="flex md:flex-row flex-col sm:py-4 py-6">
    <div className={`flex-1 ${styles.flexStart} flex-col`}>
      <div
        className={`flex flex-row items-center py-2 px-4 mb-5 bg-discount-gradient rounded-lg`}
      >
        <img src={discount} alt="Discount" className="w-8 h-8" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% </span>
          Discount For
          <span className="text-white"> 1 Month </span>
          Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full md:mt-3 sm">
        <h1 className="font-bold text-white text-up sm:text-[53px] text-5xl sm:leading-[90px] leading-[70px]">
          The Next
          <span className="text-gradient block"> Generation </span>
          Payment Method
        </h1>

        <div className="md:flex hidden md:ml-4 ml-0">
          <GetStarted />
        </div>
      </div>

      <p className={`${styles.paragraph} max-w-lg mt-10 leading`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="A robot's hand is holding cards"
        className="w-full h-full relative z-10"
      />

      {/* Create gradient layers */}
      <div className="absolute z-0 w-2/5 h-2/5 top-0 pink__gradient" />
      <div className="absolute z-[1] w-4/5 h-4/5 bottom-0 white__gradient" />
      <div className="absolute z-[2] w-1/2 h-1/2 right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`md:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
