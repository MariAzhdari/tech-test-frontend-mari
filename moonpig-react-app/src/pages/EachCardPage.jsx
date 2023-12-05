import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EachCardPage.css"; 

const EachCardPage = ({ cardItem, fetchId }) => {
  const [cardData, setCardData] = useState(undefined);
  const [error, setError] = useState(null);

  // Get the 'id' parameter from the URL using useParams
  const { id } = useParams();

  // useEffect hook to fetch individual card data based on 'id'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const link = `https://moonpig.github.io/tech-test-frontend/product/${id}.json`;
        const response = await fetch(link);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setCardData(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="each-card-container">
      {!cardData ? (
        <div>Loading still..</div>
      ) : (
        <div className="card-content">
          <div className="image-container">
            <img
              className="eachcard-image"
              src={cardData.ImageUrls[0].ImageUrl}
              alt={cardData.ProductCategoryGroup.Name}
            />
          </div>
          <div className="text-container">
            <p className="description">{cardData.Description}</p>
            <p className="category">Category: {cardData.ProductCategoryGroup.Name}</p>
            <button className="purchase-button">Buy Me</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EachCardPage;












