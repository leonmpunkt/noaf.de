// Flipcard.js

import React, { useState } from 'react';
import './Flipcard.css'; // make sure to create this CSS file

const FlipCard = ({ image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image.src} alt={image.alt || 'Gallery image'} />
        </div>
        <div className="flip-card-back">
          {/* Image information */}
          <p>{image.text}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
