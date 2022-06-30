import "./about.css"

import React from "react";

const About = () => {
  return (
   <div className="About-Page">
       <h1 className="Header">About the project</h1>
       <p className="Description">
           This our Project for Appleseed's Academy.
       </p>
       <div className="Team-Border">
       <p className="team-title">Team</p>
       <div className="Team-Members">
        <div className="Photo-card">
          <a href=" https://github.com/SKLC1" target="_blank" rel="noreferrer" ><img src="https://avatars.githubusercontent.com/u/95040809?v=4" alt="segav_photo"></img>
            <div class="container">
            <p>Segev</p>

            </div>
          </a>
        </div>
        <div className="Photo-card">
          <a href=" https://github.com/hibara89" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/102147745?v=4" alt="hiba_photo"></img></a>
          <div className="container">
             <p>Hiba</p>
          </div>
        </div>
        <div className="Photo-card">
          <a href=" https://github.com/abedkhalaf8" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/100962928?v=4" alt="abed_photo"></img></a>
          <div className="container">
          <p>Abed</p>
          </div>
        </div>
        <div className="Photo-card">
          <a href=" https://github.com/ShiraOhana" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/95177306?v=4" alt="shira_photo"></img></a>
          <div className="container">
          <p>Shira</p>
          </div>
        </div>
        <div className="Photo-card">
          <a href="https://github.com/benrotlevy" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/77206040?v=4" alt="benjamin_photo"></img></a>
          <div className="container">
          <p>Benjamin</p>
          </div>
          </div>
        </div>
        </div>
   </div>
 )};

export default About;



