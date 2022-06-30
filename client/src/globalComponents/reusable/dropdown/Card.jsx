import React from "react";
import "./card.css";

const Card = ({ category, cards }) => {
  const cardsCarusel = cards.map((card) => {
    return (
      <div className="card-ceremony child" key={card.title}>
        <h1>{category}</h1>
        <h3>{card.title}</h3>
        <img className="card-img" src={card.imgURL.replace(" 715w", "")} alt={card.title}></img>
        <p>{card.description}</p>
      </div>
    );
  });
  return <>{cardsCarusel}</>;
};

export default Card;
