import React, { useEffect, useState } from 'react';
import iphone from "./../../Images/iphone_6_plus.png";
import "./../Styles/Store.css";
import { Slider } from '@mui/material';
import axios from 'axios';
// import Card from './Card';
import queryString from 'query-string';
import Spiner from "../Compo/Spiner";
const Card = React.lazy(() => import("./Card"));


const Store = () => {
    // eslint-disable-next-line
    const [cards,setCards] = useState([]);
    // eslint-disable-next-line
    const [NoOfItems,setNoOfItems] = useState();
    const [SortBy, setSortBy] = useState("");
    const [Show, setShow] = useState("");
    const [Price,setPrice] = useState(100);
    const [queryParams,setQueryParams] = useState({});

    const handleSortBy = (event) => {
        setSortBy(event.target.value);

    }
    const handleShow = (event) => {
        setShow(event.target.value);
        updateQueryParams();

    }

    const handlePrice = (e,data) =>{
        setPrice(data);
        updateQueryParams();
    }

    const updateQueryParams = () => {
        setQueryParams({
            'price[lte]':Price,
            'limit':Show
        });

        // console.log("queryParams",queryString.stringify(queryParams));
    }

    useEffect(()=>{
        // console.log("queryString.stringify(queryParams)",queryString.stringify(queryParams));
        let string = queryString.stringify(queryParams).replace("%5B",'[')
        string = string.replace("%5D",']')
        console.log(string);
        axios.get(`https://ecomackend.onrender.com/store?${string}`)
        .then((res)=>{
            // console.log(res);
            setCards(res.data.Products);
            setNoOfItems(res.data.Products.length);
        })
        .catch()
        // eslint-disable-next-line
    },[Show,Price])

  return (
    <div className="StoreContainer">
        <div className="StoreCarouse2">
            <img src={`${iphone}`} className="" alt="iphone" />
            <h3>iPhone 6 Plus</h3>
            <p>Performance and design. Taken right to the edge.</p>
        </div>
        <div className='HeaderAndSliderContainer'>
            <div className='divSliderPrice'>
                <h4>Price</h4>
                <p>Ranger:</p>
                <Slider  value={Price} onChange={handlePrice} defaultValue={100}  min={10} max={1000}/>
            </div>
            <header>
                <div>{NoOfItems} Items</div>
                <div>
                    <label htmlFor="dropdownSortBy">Sort By</label>    
                    <select id="dropdownSortBy" value={SortBy} onChange={handleSortBy}>
                        <option value="title">Name</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
                <div>
                <label htmlFor="dropdownShow">Show</label>    
                    <select id="dropdownShow" value={Show} onChange={handleShow}>
                        <option value="6">6</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </header>
            
        </div>
        <div className="MainContainer">
            <div className="flex-containerLoadMore">
            {
             
                cards.map((ele, index) => {
                    return( 
                    <React.Suspense fallback={<Spiner />}>
                      <Card card={ele} key={index} />
                    </React.Suspense>)
                  })
            }
        </div>
    </div>
    </div>
  )
}

export default Store