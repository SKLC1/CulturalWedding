import React from "react";
import "./card.css";

const Card = ({ category, title, description, img }) => {
  return (
    <div className="card-ceremony">
      <h1>{category}</h1>
      <h3>{title}</h3>
      <img className="card-img" src={img} alt={title}></img>
      <p>{description}</p>
    </div>
  );
};

export default Card;
