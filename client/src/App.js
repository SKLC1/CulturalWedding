import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./globalComponents/navbar/Navbar";
import Home from "./pages/homepage/Home";
import About from "./pages/about/about";
import Ceremony from "./pages/ceremony/Ceremony";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ceremony" element={<Ceremony />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
