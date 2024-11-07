import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage({ plants, setPlants, searchTerm, setSearchTerm }) {
  const [filteredPlants, setFilteredPlants] = useState(plants);

useEffect(() => {
  setFilteredPlants(
    plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
}, [plants, searchTerm]);

const addPlant = (newPlant) => {
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((response) => response.json())
    .then((data) => {
     setPlants((prevPlants) => [...prevPlants, data]);
    });
  };

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
