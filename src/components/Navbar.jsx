import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(prevToggle => !prevToggle);
  }

  return (
    <nav className="w-full flex justify-between items-center py-3 navbar">
      <img src={logo} alt="OH2K Bank logo" className="w-32 h-8" />

      <ul className="sm:flex hidden justify-end items-center flex-1 list-none">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-normal cursor-pointer text-base text-white 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center flex-1">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={handleToggle}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } bg-black-gradient absolute top-20 right-0 p-6 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col justify-end items-center flex-1 list-none">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-normal cursor-pointer text-base text-white 
                ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
