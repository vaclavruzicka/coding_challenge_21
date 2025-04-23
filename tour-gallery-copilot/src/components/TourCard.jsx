import React from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <h4 className="tour-price">${price}</h4>
        <p>{info}</p>
        <button className="btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;