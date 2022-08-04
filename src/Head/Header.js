import React from 'react';
import meals from './meals.jpg';
import classes from "./Header.module.css";
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
       
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt='A Cover' />
      </div>
    </div>
  )
}

export default Header