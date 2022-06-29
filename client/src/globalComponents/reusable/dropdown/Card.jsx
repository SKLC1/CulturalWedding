import React from "react";
import "./card.css";

const Card = ({res}) => {
  const cards = res.map((card,idx)=>{
    return(
      <div className="card-ceremony child" key={`${idx}j`}>
      <h3>{card.title}</h3>
      <img className="card-img" src={card.imgURL} alt={card.title}></img>
      <p>{card.description}</p>
    </div>
      )
    })
  return (
    <div className="container">
      {cards}
    </div>
  );
};

export default Card;
