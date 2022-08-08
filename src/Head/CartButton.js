import React from 'react'
import CartIcon from './CartIcon';
import classes from '../Head/HeaderCartButton.module.css'

const CartButton = () => {
  return (
   
        <button className={classes.button}> 
        
        <div className={classes.icon}><CartIcon /></div>
        <div className={classes.badge}>0</div>
        </button>
  )
}

export default CartButton