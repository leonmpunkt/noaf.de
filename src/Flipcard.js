// Flipcard.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <div>
          <p>{image.text} </p>
          </div>
          <div>
            <p><Link to={image.mehrLink}>Mehr lesen</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
