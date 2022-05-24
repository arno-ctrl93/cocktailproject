import React from 'react';
import Banner from './Banner';
import '../styles/app.css';
import '../styles/container.css';
import Cart from './Cart';
import CocktailList from './CocktailList';

function App() {
  return (
    <div className='app'>
      <Banner></Banner>
      <div className='container'>
        <Cart></Cart>
        <CocktailList></CocktailList>
      </div>
    </div>
  );
}

export default App;
