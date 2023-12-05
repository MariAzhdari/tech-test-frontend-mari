import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

 function HomePage() {

// State variables for managing loading, card data, and errors
const [isLoading, setIsLoading] = useState(false);
const [cards, setCards] = useState([]);
const [error, setError] = useState(null);

// API URL for fetching card data
  const apiUrl = "https://moonpig.github.io/tech-test-frontend/search.json";

  // Effect hook to fetch data on component
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setCards(result.Products);

        // Log the fetched data to the console for debugging
        // console.log("result", result.Products)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);// Empty dependency array ensures the effect runs only

  return  (    
  <div className="container">
     <Header/>
    <div className="cards">
  {cards
    ? cards.map((cardItem) => (
        <Card key={cardItem.ProductId} cardItem={cardItem} fetchId={cardItem.ProductLink.Href} />
      ))
    : "No Results."}
    </div>
</div>
  );
}

export default HomePage;