import React, { Fragment } from "react";
import meals from "./meals.jpg";
import classes from "./Header.module.css";

import CartButton from "./CartButton";


const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>

      <div className={classes["main-image"]}>
        <img src={meals} alt="A Cover" />
      </div>
    </Fragment>
  );
};

export default Header;
