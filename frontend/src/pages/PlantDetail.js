import React from "react";
import { useLocation } from "react-router-dom";

export default function PlantDetail() {
  const { state: plant } = useLocation();

  return (
    <div className="p-6">
      <h1>{plant.Name}</h1>
      <img src={plant.image_url} alt={plant.Name} width="300" />
      <p><b>Description:</b> {plant.Description}</p>
      <p><b>Lifespan:</b> {plant.Lifespan}</p>
      <p><b>Dimensions:</b> {plant.Height}x{plant.Breadth}</p>
      <p><b>Sunlight:</b> {plant.sunlight}</p>
      <p><b>Water Need:</b> {plant.water_need}</p>
      <p><b>Price:</b> ₹{plant.price}</p>
      <p><b>Pros:</b> {plant.Pros}</p>
      <p><b>Cons:</b> {plant.Cons}</p>

      {/* AR Viewer */}
      <model-viewer
        src={plant.model_url}
        alt={plant.Name}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: "400px", height: "400px" }}
      ></model-viewer>
    </div>
  );
}
