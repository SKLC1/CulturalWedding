import "./about.css"

import React from "react";

const About = () => {
  return (
   <div className="About-Page">
       <h1 className="Header">About the project</h1>
       <p className="Description">

       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/>aliquip ex ea commodo consequat. Duis int occaecat cupidatat non proident, sunt in culpa qui <br/>officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing 
       </p>
       <div className="Team-Border">
       <p className="team-title">Team</p>
       <div className="Team-Members">
        <div className="Photo-card">
          <a href=" https://github.com/SKLC1" target="_blank" rel="noreferrer" ><img src="https://avatars.githubusercontent.com/u/95040809?v=4" alt="segav_photo"></img>
            <div class="container">
            <p>Segav</p>
            </div>
          </a>
        </div>
        <div className="Photo-card">
          <a href=" https://github.com/hibara89" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/102147745?v=4" alt="hiba_photo"></img></a>
          <div class="container">
             <p>Hiba</p>
          </div>
        </div>
        <div className="Photo-card">
          <a href=" https://github.com/abedkhalaf8" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/100962928?v=4" alt="abed_photo"></img></a>
          <div class="container">
          <p>Abed</p>
          </div>
        </div>
        <div className="Photo-card">
          <a href=" https://github.com/ShiraOhana" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/95177306?v=4" alt="shira_photo"></img></a>
          <div class="container">
          <p>Shira</p>
          </div>
        </div>
        <div className="Photo-card">
          <a href="https://github.com/benrotlevy" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/77206040?v=4" alt="benjamin_photo"></img></a>
          <div class="container">
          <p>Benjamin</p>
          </div>
          </div>
        </div>
        </div>
   </div>
 )};

export default About;



