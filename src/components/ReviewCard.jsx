import React from 'react';
import '../styles/components/ReviewCard.scss';

const ReviewCard = ({ text }) => {
  return (
    <div className="review-card">
      <p>{text}</p>
    </div>
  );
};

export default ReviewCard;
