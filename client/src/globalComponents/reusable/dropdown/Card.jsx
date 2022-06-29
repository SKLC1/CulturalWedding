import React from "react";
import "./card.css";

const Card = ({ category, title, description, img }) => {
  return (
    <div className="card-ceremony">
      <h1>{category}</h1> <br />
      <h3>{title}</h3> <br />
      <p>{description}</p> <br />
      <img className="card-img" src={img} alt={title}></img>
    </div>
  );
};

export default Card;
