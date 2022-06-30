import { Route, Routes } from "react-router-dom";

import About from "./pages/about/about";
import { AuthProvider } from "./context/context";
import Ceremony from "./pages/ceremony/Ceremony";
import Home from "./pages/homepage/Home";
import Login from "./pages/UserAccount/login/login";
import Navbar from "./globalComponents/navbar/Navbar";
import React from "react";
import Registraion from "./pages/UserAccount/registration/registraion";
import Upload from "./pages/upload/upload/Upload";
import { Logout } from "./pages/UserAccount/logout/Logout";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceremony" element={<Ceremony />} />
          <Route path="/share" element={<Upload />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registraion />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
