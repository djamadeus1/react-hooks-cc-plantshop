import React, { useState, useEffect } from "react";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Plantsy 🌱</h1>
      </header>
      <PlantPage plants={plants} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
