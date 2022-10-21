import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(client => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} md:min-w-min min-w-max m-5`}
        >
          <img
            src={client.logo}
            alt={`Logo of ${client.logo}`}
            className="sm:w-48 w-24 object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
