import React from 'react';

const Button = ({ mt }) => (
  <button
    type="button"
    className={`font-medium text-primary bg-blue-gradient outline-none rounded-md py-4 px-6 ${mt} `}
  >
    Get Started
  </button>
);

export default Button;
