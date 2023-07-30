import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./../Styles/LoadMorePage.css";
import Card from './Card';


const LoadMorePage = () => {

  const [cards,setCards] = useState([{rating:{rate:4}}]);
  const [limit,setLimit] = useState(6);

  useEffect(() => {
    axios.get(`https://backend-ecom-server.onrender.com/?limit=${limit}`).then((response) => {
      console.log("response ",response);
      setCards(response.data.allData);
    }).catch((err)=>{
      console.log(err);
    });
  }, [limit]);

  const handleLoadMore = () =>{
    setLimit(limit+6);
  }

  return (
    <div className='MainContainer'>
        <h3 className='seller'>BEST SELLER</h3><br />
        <div className='flex-containerLoadMore' >
            {
              cards.map((ele,index)=>{
                return(
                  <Card card={ele} key={index}/>
                )
              })
            }
        </div>
        <div className='LoadMoreBtnContainer'>
          <button className='LoadMoreBtn' onClick={handleLoadMore}>Load More</button>
          <hr className='LoadMoreBtnHr'/>
        </div>
    </div>
  )
}

export default LoadMorePage;