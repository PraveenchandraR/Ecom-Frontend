import React from "react";
// import Card from "./Card";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spiner from "../Compo/Spiner";
const Card = React.lazy(() => import("./Card"));


const Fashion = () => {
  const [cards, setCards] = useState([{ rating: {rate:4} }]);

  useEffect(() => {
    axios
      .get("https://backend-ecom-server.onrender.com/fasion")
      .then((response) => {
        console.log("response ", response);
        setCards(response.data.allData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="MainContainer">
      <div className="flex-containerLoadMore">
      {cards.map((ele, index) => {
          return( 
          <React.Suspense fallback={<Spiner />}>
            <Card card={ele} key={index} />
          </React.Suspense>)
        })}
      </div>
    </div>
  );
};

export default Fashion;