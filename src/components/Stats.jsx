import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 sm:mt-20 mb-6 px-14`}
  >
    {stats.map(stat => (
      <div
        key={stat.id}
        className="flex-1 flex flex-row justify-start items-center m-3"
      >
        <p className="font-semibold text-white sm:text-4xl text-3xl sm:leading-10 leading-8">
          {stat.value}
        </p>
        <p className="font-normal sm:text-lg text-sm sm:leading-6 leading-3 text-gradient uppercase ml-2">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
