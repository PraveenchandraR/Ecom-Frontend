import React, { useState } from 'react';
import "./../Styles/CartItem.css";
import { useEffect, useContext} from 'react';
import UserContext from '../Context/UserContext';
import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CartItem = ({Item,index,handleItemQuantityChange,handleRemoveItem}) => {
console.log("item",Item);
  const [Qty,setQty] = useState(Item.quantity);
  const {user} = useContext(UserContext);
  

  useEffect(()=>{
    const Data = {
      userID:user.UserID,
      productID:Item._id,
      quantity:Qty,
      price:Item.price
    }
    console.log("Data of cartItem body",Data);
    axios.post("https://backend-ecom-server.onrender.com/cart/addItem",{
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'JWT fefege...'
      },
      Data
    }).then((res)=>{
      console.log("res==>Qty",res);
      // toast.success('Item Qty updated ');
    })
      .catch((error) => {
  
       
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[Qty]);


  const handleClikInc = () =>{
    console.log("user",user);
    console.log("Before setQty call prev Qty==>",Qty);
    setQty(Qty+1);
    handleItemQuantityChange(index, Qty + 1);
    console.log("Before qtyUpdate call updated Qty==>",Qty);
    // QtyUpdated();
  }

 
 
  const handleClikDec = () => {
    if (Qty > 1) {
        setQty(Qty - 1);
        handleItemQuantityChange(index, Qty - 1);
    } else {
        toast.warn('Item will be removed if Quantity becomes zero');
        setQty(0);
        handleItemQuantityChange(index, 0);
        handleRemoveItem(index); // Call handleRemoveItem when quantity becomes zero
    }
};


return (
  Qty > 0 && (
      <React.Fragment key={index}>

<div className="imgContainer" >
  <img className="ItemImg" src={Item.image} alt="Itemimg" />
</div>
<div className="itemTitile">{Item.title}</div>
<h3 className="gridItem1">{Item.price}</h3>
<div className="btnQty gridItem1">
  <button className="dec" onClick={handleClikDec}>-</button>
  <span className="ItemQty">{Qty}</span>
  <button className="inc" onClick={handleClikInc}>
    +
  </button>
</div>
<div> <h3 className="gridItem1">{Item.price * Qty}</h3></div>



</React.Fragment>        )
);
}


export default CartItem