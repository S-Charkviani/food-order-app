import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <Card>
      <div className={classes.form}>
        {props.items.map((meal) => {
          return (
            <div key={meal.id}>
              <MealItem
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            </div>
          );
        })}
         
      </div>
      
    </Card>
    
  );
};

export default MealItemForm;
