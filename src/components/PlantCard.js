import React, { useState } from "react";

function PlantCard({ listing }) {
  const [isSoldOut, setIsSoldOut] = useState(listing.soldOut);
  const toggleSoldOut = () => {
    fetch(`http://localhost:6001/plants/${listing.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...listing,
        soldOut: !isSoldOut,
      }),
    })
    .then((response) => response.json())
    .then((updatedPlant) => {
      setIsSoldOut(updatedPlant.soldOut);
    });
  };
  return (
    <li className="card" data-testid="plant-item">
      <img src={listing.image} alt={listing.name} />
      <h4>{listing.name}</h4>
      <p>Price: ${listing.price}</p>
      {isSoldOut ? (
        <button onClick={toggleSoldOut}>Sold Out</button>
      ) : (
        <button className="primary" onClick={toggleSoldOut}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
