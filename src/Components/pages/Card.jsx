import React from "react";
import "./../Styles/LoadMorePage.css";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";


const Card = ({ card, index }) => {

  const navigate = useNavigate();
  function cardClik(ele) {
    // console.log("ele.productName ",ele.productName);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    navigate(`/products/${ele.category}/${ele._id}`);
  }

  return (
    <div key={index} className="flex-items" onClick={() => cardClik(card)}>
      <div className="image">
        <img className="img" src={`${card.image}`} alt="cards"></img>
      </div>
      
      <div className="details">
        <h4>{card.title}</h4> <br />
        <div className="rating">
          <ReactStars {...{ size: 30, value: Math.floor(card.rating.rate), edit: false }} />
        </div>{" "}
        <br />${card.price}
      </div>
    </div>
  );
};

export default Card;