import React from "react";
import "./home.css";
import background from "../../assets/wedding.jpg";

const Home = () => {
  return (
    <div className="home">
      <div style={{ backgrounImage: 'url("../../assets/wedding.jpg")' }}></div>
      {/* <div className="home-image">
        <img src={background} />
      </div> */}
    </div>
  );
};

export default Home;
