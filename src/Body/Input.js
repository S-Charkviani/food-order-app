import React from 'react'
import classes from './Input.module.css';

const Input = () => {
  return (
    <div className={classes.input}>
        <label>Amount: <input type="number" min="0" max="10"/> </label>
    </div>
  )
}

export default Input