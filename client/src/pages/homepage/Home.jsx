import React from "react";
import "./home.css";
import background from "../../assets/wedding3.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src={background} />
      </div>
    </div>
  );
};

export default Home;
