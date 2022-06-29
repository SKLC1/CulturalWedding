import "./about.css"

import React from "react";

const About = () => {
  return (
   <div className="About-Page">
       <h1 className="Header">About the project</h1>
       <p className="Description">
         add description
       </p>
       <div className="Team-Members">
        <div>
          <a href=" https://github.com/SKLC1" target="_blank" rel="noreferrer" ><img src="https://avatars.githubusercontent.com/u/95040809?v=4" alt="segav_photo"></img><label>Segav</label></a>
        </div>
        <div>
          <a href=" https://github.com/hibara89" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/102147745?v=4" alt="hiba_photo"></img><label>Hiba</label></a>
        </div>
        <div>
          <a href=" https://github.com/abedkhalaf8" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/100962928?v=4" alt="abed_photo"></img><label>Abed</label></a>
        </div>
        <div>
          <a href=" https://github.com/ShiraOhana" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/95177306?v=4" alt="shira_photo"></img><label>Shira</label></a>
        </div>
        <div>
          <a href="https://github.com/benrotlevy" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/77206040?v=4" alt="benjamin_photo"></img><label>Benjamin </label></a>
        </div>
        </div>
       <div className="github-logo">
        <a href="https://github.com/SKLC1/CulturalWedding"  target="_blank" rel="noreferrer"><label>Github</label></a>
        </div>
   </div>
 )};

export default About;
