import React, { useState } from 'react';
import Banner from './Banner';
import '../styles/app.css';
import '../styles/container.css';
import CocktailList from './CocktailList';
import SearchBar from './SearchBar';

function App() {


  return (
    <div className='app'>
      <Banner></Banner>
      <SearchBar></SearchBar>
      <CocktailList></CocktailList>
    </div>
  );
}

export default App;
