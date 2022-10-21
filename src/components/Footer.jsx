import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { socialMedia, footerLinks } from '../constants';

const Footer = () => (
  <section
    id="footer"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`w-full ${styles.flexStart} sm:flex-row flex-col mb-8`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="HooBank" className="w-64 h-20 object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-xs`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="w-full flex-[1.5] flex flex-row flex-wrap justify-between md:mt-0 mt-10">
        {footerLinks.map(footerLink => (
          <div
            key={footerLink.id}
            className="flex flex-col sm:my-0 my-4 min-w-min"
          >
            <p className="font-medium text-lg leading-7 text-white">
              {footerLink.title}
            </p>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-normal text-base leading-6 text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center sm:flex-row flex-col pt-6 border-t-2 border-t-slate-800">
      <p className="font-normal text-center text-lg leading-7 text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-5 h-5 object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
