import classes from "./MealItem.module.css";
import Input from "./Input";


const MealItem = (props) => {
  return (
      <div className={classes.meal} >
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{props.price}</p>
        <Input />
        <button> add</button>
      </div>
   
  );
};

export default MealItem;
