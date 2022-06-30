import React from "react";
import "./card.css";

const Card = ({ category, cards }) => {
  const cardsCarusel = cards.map((card) => {
    return (
      <div className="card-ceremony" key={card.title}>
        <h1>{category}</h1>
        <h3>{card.title}</h3>
        <img className="card-img" src={card.img} alt={card.title}></img>
        <p>{card.description}</p>
      </div>
    );
  });
  return <div>{cardsCarusel}</div>;
};

export default Card;
