import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./globalComponents/navbar/Navbar";
import Home from "./pages/homepage/Home";
import About from "./pages/about/about";
import Ceremony from "./pages/ceremony/Ceremony";
import Upload from "./pages/upload/upload/Upload";
import Login from "./pages/UserAccount/login/login";
import Registraion from "./pages/UserAccount/registration/registraion";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ceremony" element={<Ceremony />} />
        <Route path="/share" element={<Upload />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registraion />} />
      </Routes>
    </div>
  );
}

export default App;
