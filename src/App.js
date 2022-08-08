import React, { Fragment } from 'react';
import Meals from './Body/Meals';
import Cart from './Cart/Cart';

import Header from './Head/Header';

function App() {
  
  
  return (
    <Fragment >
      <Cart />
      <Header />
      <Meals />
    </Fragment>
  )
}

export default App;
