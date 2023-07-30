import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';
import EmptyCart from './EmptyCart';
import Cart from './Cart';

const ShowCart = () => {
    const {user} = useContext(UserContext);
    console.log(user);
  return (
    <div>
      { user.status ? <Cart/>: <EmptyCart/>}
    </div>
  )
}

export default ShowCart