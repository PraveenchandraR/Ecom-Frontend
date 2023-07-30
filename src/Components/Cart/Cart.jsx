import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItem from './CartItem';
import "./../Styles/Cart.css";
import axios from 'axios';
import UserContext from '../Context/UserContext';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0);

    const { user } = useContext(UserContext);
    const locate = useNavigate();
    useEffect(() => {
        const Data = {
            userID: user.UserID,
            quantity: 1
        };

        axios.post("https://backend-ecom-server.onrender.com/cart", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
            },
            Data
        })
            .then((res) => {
                console.log("res==>", res.data.cartItems)
                setCartItems(res.data.cartItems);
                console.log("CartItems After cart req ==> ", cartItems);
            })
            .catch();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        
        useEffect(() => {
            const cartItemsFromStorage = localStorage.getItem('cartItems');
            if (cartItemsFromStorage) {
                const parsedCartItems = JSON.parse(cartItemsFromStorage);
                const filteredCartItems = parsedCartItems.filter((item) => item.quantity > 0);
                setCartItems(filteredCartItems);
                localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
            }
        }, []);
        
        const handleItemQuantityChange = (index, newQuantity) => {
            const updatedCartItems = [...cartItems];
            updatedCartItems[index].quantity = newQuantity;
            
            if (newQuantity === 0) {
                updatedCartItems.splice(index, 1); // Remove item from the array if quantity is 0
            }
            
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        };
        
        const handleRemoveItem = (index) => {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(index, 1);
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        };
        
        
        
        const handleCheck = () => {
            // toast.success("Orderplaced successfully");
            console.log(user)
axios.post("https://backend-ecom-server.onrender.com/cart/checkout",user)

            setCartItems([]);
            alert("Orderplaced successfully");
            localStorage.removeItem('cartItems');
            locate("/payment")

    }
    // const cartlength=cartItems.length
    // const totalPrice = cartlength > 0 ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
    const totalPrice = cartItems && cartItems.length > 0
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;
    // const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
        <div className='MainCartContainer'>
            <header><FontAwesomeIcon icon="shopping-cart" /> My Cart</header>

            <div className="gridContainer">

                <div className='gridItem1 Item1 Font'>Product</div>
                <div className='gridItem1 Font'>Unit Price</div>
                <div className='gridItem1 Font'>Qty</div>
                <div className='gridItem1 Font'>Total Price</div>


                {cartItems &&
                    cartItems.map((Item, index) =>
                        Item.quantity > 0 ? (
                            <CartItem
                                key={index}
                                Item={Item}
                                index={index}
                                handleItemQuantityChange={handleItemQuantityChange}
                                handleRemoveItem={handleRemoveItem}
                            />
                        ) : null
                    )}

                <div className='check' id='check'>
                    <button className='checkout' onClick={handleCheck}>Checkout</button>
                    <div className='carttotal'>
                        <span id='total'>Total:  </span>
                        <span id='totalprice'>{totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                
                <ToastContainer />
            </div>
        </div>
    )
}

export default Cart