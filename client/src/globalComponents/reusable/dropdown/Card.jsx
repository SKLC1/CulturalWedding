import React from "react";
import "./card.css";

const Card = (arrOfItems) => {
  const cards = arrOfItems.map((card) => {
    return (
      <div className="card-ceremony">
        <h1></h1>
        <h3>{card.title}</h3>
        <img className="card-img" src={card.img} alt={card.title}></img>
        <p>{card.description}</p>
      </div>
    );
  });
  return <div>{cards}</div>;
};

export default Card;
