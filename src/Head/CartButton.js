import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import CartContext from "../store/cart-context";
import classes from "../Head/HeaderCartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  const [btnIsHighlighted, setBtnIsHighlighted]=useState(false);
const {items}=cartCtx;
  const btnClasses=`${classes.button} ${btnIsHighlighted ? classes.bump:''}`;

  useEffect(()=>{                  //Cart Bump while pressing add button
    if(items.length===0){
      return;
    }
    setBtnIsHighlighted (true);
    const timer=setTimeout(()=>{
      setBtnIsHighlighted(false);
    }, 300);
    return ()=>{
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}> 
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
