import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between px-10 py-12 rounded-2xl max-w-sm md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="Double quotes sign"
      className="w-10 h-7 object-contain"
    />
    <p className="font-normal text-lg leading-8 text-white my-10">{content}</p>

    <div className="flex flex-row">
      <img
        src={img}
        alt={`Testimonial by ${name}`}
        className="w-12 h-12 rounded-full"
      />

      <div className="flex flex-col ml-4">
        <p className="font-semibold text-white sm:text-lg text-base sm:leading-8">
          {name}
        </p>
        <p className="font-normal text-dimWhite sm:text-base text-sm sm:leading-6">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
