import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlantCard({ plant }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        margin: "10px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={plant.image_url}
        alt={plant.Name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{plant.Name}</h3>
      <p>{plant.City}</p>
      <button onClick={() => navigate(`/plant/${plant.Name}`, { state: plant })}>
        View Details
      </button>
    </div>
  );
}
