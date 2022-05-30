import React, { useState } from 'react';
import Banner from './Banner';
import '../styles/app.css';
import '../styles/container.css';
import CocktailList from './CocktailList';
import SearchBar from './SearchBar';
import DetailledCocktail from './DetailledCocktail';
import FooterCocktail from './FooterCocktail';

function App() {
  const[WhichCocktail, UpdateCocktail] = useState<string>('');
    

  return (
    <div className='app'>
      <Banner></Banner>
      <SearchBar WhichCocktail={WhichCocktail} UpdateCocktail={UpdateCocktail}></SearchBar>
      {
        (WhichCocktail === '') ? 
        <CocktailList WhichCocktail={WhichCocktail} UpdateCocktail={UpdateCocktail}></CocktailList> 
        
        : <DetailledCocktail WhichCocktail={WhichCocktail} UpdateCocktail={UpdateCocktail}></DetailledCocktail>
      }
      <FooterCocktail></FooterCocktail>
    </div>
  );
}

export default App;
