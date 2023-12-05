import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Card = ({ cardItem }) => {
  // State variable for managing loading state
  const [isLoading, setIsLoading] = useState(false);
  return (
    // Render card if cardItem is truthy
    cardItem &&
    (isLoading ? (
      <div>Loading still..</div>
    ) : (
      <div className="card">
        <p>{cardItem.Title}</p>
        <p>{cardItem.Price.Value}</p>
        
        <img className="card-image"
            src={cardItem.ProductImage.Link.Href}
            alt={cardItem.Title}
          />
           {/* Link to navigate to EachCard component */}
          <Link to={`card/${cardItem.MoonpigProductNo}`}>
          <button className="card-button">see more</button>
        </Link>
      </div>
    ))
  );
  }

export default Card;




