import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./components/GamePage";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DetailsPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
