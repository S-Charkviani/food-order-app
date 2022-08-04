import React from 'react';


import MealsSummary from './Body/MealsSummary';
import MealItemForm from './Body/MealItemForm';
import DUMMY_MEALS from './Body/dummy-meals';
import Header from './Head/Header';

function App() {
  
  
  return (
    <div >
      <Header />
      <MealsSummary/>
      <MealItemForm items={DUMMY_MEALS}/>
    </div>
  )
}

export default App;
