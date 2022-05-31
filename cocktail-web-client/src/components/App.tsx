import React, { useState } from 'react';
import Banner from './Banner';
import { BrowserRouter as Router,Routes, Route, Link, HashRouter, BrowserRouter } from 'react-router-dom';
import '../styles/app.css';
import '../styles/container.css';
import CocktailList from './CocktailList';
import SearchBar from './SearchBar';
import DetailledCocktail from './DetailledCocktail';
import FooterCocktail from './FooterCocktail';

function App() {
  const[WhichCocktail, UpdateCocktail] = useState<string>('');
    

  return (
    <BrowserRouter>
    <div className='app'>
      <Banner></Banner>
      <SearchBar WhichCocktail={WhichCocktail} UpdateCocktail={UpdateCocktail}></SearchBar>

      <Routes>
        <Route path='/' element={<CocktailList WhichCocktail={WhichCocktail} UpdateCocktail={UpdateCocktail}></CocktailList>}></Route>
        <Route path='/cocktail/:id' element={<DetailledCocktail WhichCocktail={WhichCocktail} UpdateCocktail={UpdateCocktail}></DetailledCocktail>}></Route>
      </Routes>
      <FooterCocktail></FooterCocktail>
    </div>
    </BrowserRouter>

  );
}

export default App;
