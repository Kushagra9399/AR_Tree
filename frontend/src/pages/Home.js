import React, { useState, useEffect } from "react";
import axios from "axios";
import PlantCard from "../components/PlantCard";

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [city, setCity] = useState("");

  const fetchPlants = async () => {
    const res = await axios.get(`http://localhost:8000/plants/${city || "India"}`);
    setPlants(res.data);
  };

  return (
    <div className="p-6">
      <h1>🌿 GreenAR - Find the Best Tree for Your City</h1>
      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchPlants}>Search</button>

      <div className="grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
