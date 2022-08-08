import React, { useState } from 'react';
import Meals from './Body/Meals';
import Cart from './Cart/Cart';

import Header from './Head/Header';
import CartProvider from './store/CartProvider';

function App() {
 const [cartIsShown, setCartIsShown]=useState (false);
 const showCartHandler=()=>{
  setCartIsShown (true);
 };

 const hideCartHandler=()=>{
  setCartIsShown(false);
 }
  
  return (
    <CartProvider >
      {cartIsShown&&<Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals />
    </CartProvider>
  )
}

export default App;
