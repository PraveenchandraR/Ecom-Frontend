import axios from "axios";
import React, { useEffect, useState, useContext} from "react";
import "./../Styles/LoadMorePage.css";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from "../Context/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import ViewSimiliar from "./ViewSimilar";


const Details = () => {
  const { id } = useParams();
  const [Item, setItem] = useState([{ rating: { rate: 4 } }]);
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(product.rating["rate"]);
  useEffect(() => {
    axios
      .post(`https://backend-ecom-server.onrender.com/products/${id}`)
      .then((res) => {
        console.log("res.status",res.status)
        // console.log(res.data);
        
        setItem(...[], res.data.product);
       
        // alert("product added to cart");
        // navigate("/cart");
        console.log("product", Item);
      })
      .catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  const addToCart =()=>{
    console.log("user add item in cart",user);
    if(user.status){
      const Data = {
        userID:user.UserID,
        productID:id,
        quantity:1
      }
      console.log("Data", Data);
      if (Data) {
        alert('product added');
        // navigate('/cart');
      }
      axios.post("https://backend-ecom-server.onrender.com/cart/addItem",{
        headers: {
            'Content-Type': 'application/json'
        },
        Data  
      }).then((res) => {
        console.log("respose",res.status)
    
      }).catch((error)=>{
          console.log(error);
          toast.error('failed to add in cart');
      });
    }else{
      navigate("/SignIn");
    }
  }

  return (
    <div>
      {Item && (
        <div className="flex-items">
          <div className="image">
            <img className="img" src={`${Item.image}`} alt="cards"></img>
          </div>
          <div className="addtoCartDiv">
            <button className="addtoCartButton" onClick={addToCart}>
              <span>Add to cart</span>
              <FontAwesomeIcon className="IconCart" icon="shopping-cart" />
            </button>
          </div>
          <div className="details">
            <h4>{Item.title}</h4> <br />
            <p>{Item.description}</p> <br />
            <div className="rating">
              {Item.rating && <ReactStars {...{ size: 30, edit: false }} />}
            </div>{" "}
            <br />${Item.price}
          </div>
        </div>
      )}
      <ToastContainer
                position="top-right"
                autoClose={4000}
                closeOnClick
                rtl={false}
                theme="light"
      />
      <br /><br /><br />
      <ViewSimiliar category={Item.category} productID={id}/>
    </div>
  );
};

export default Details;