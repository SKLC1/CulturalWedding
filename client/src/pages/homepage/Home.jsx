import "./home.css";


import {Link} from 'react-router-dom';
import React from "react";
import Spinner from "../../spinner/spinner";

// import background from "../../assets/wedding.jpg";

const Home = () => {
  return (
    <div className="home">
      <div style={{ backgroundImage: 'url("../../assets/wedding.jpg")' }}></div>
         <div className="border-title">
         Need to find a cultural<br/> touch for your wedding?
         </div>
      
      <div className="btn-explore">
        <Link to="/ceremony">
        <button>Explore</button> 
        </Link>
      </div>
      {/* //! for test only you can delete it later -- added by abed */}
      <Spinner />
    </div>
  );
};

export default Home;
