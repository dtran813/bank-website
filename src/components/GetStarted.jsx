import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-28 h-28 rounded-full bg-blue-gradient p-1 cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-medium text-gradient text-lg leading-6">
          <span>Get</span>
          <img
            src={arrowUp}
            alt="Get Started Arrow"
            className="w-7 h-7 object-contain inline-block p-1"
          />
          <span className="block">Started</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
