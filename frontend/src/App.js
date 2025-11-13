import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlantDetail from "./pages/PlantDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant/:name" element={<PlantDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
