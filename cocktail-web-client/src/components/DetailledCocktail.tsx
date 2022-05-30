
import { useEffect, useState } from 'react';

import '../styles/DetailledCocktail.css';

import DetailledCocktailDTO from '../DTO/DetailledCocktailDTO';

function DetailledCocktail({WhichCocktail, UpdateCocktail} : {WhichCocktail : string, UpdateCocktail : Function}) {

    
    const[cocktail, setCocktail] = useState< DetailledCocktailDTO| null>(null);
    useEffect(() => {
        const fetchCocktails = async () => {
            // console.log("the  requests  http://localhost:3000/cocktails/searchbyname/"+ WhichCocktail);
            const response = await fetch('http://localhost:3000/cocktails/searchbyname/' + WhichCocktail);
            const content = (await response.json()) as DetailledCocktailDTO[];
            // console.log(content);
            setCocktail(content[0]);
        };
        fetchCocktails();
    }, []);

    return(
        <div className='DetailledView'>
            {
                cocktail ?
                (
                    <div>
                        <div className="DTitle">{cocktail.name}</div>
                        <div className="DInstruction" >{cocktail.instructions}</div>
                        <div>
                            <img src={cocktail.image} className="DImage" alt={cocktail.name}></img>
                        </div>
                            <div className="CategoryIng">Ingrédients</div>
                            <div>
                                {
                                    cocktail.ingredients.map((ingredient, index) => (
                                        <div key={index} className="DIngredient">
                                            <div className="DIngredientName">{ingredient}</div>
                                            <div className="DIngredientMesurement">{cocktail.mesurements[index]}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        <input className='buttonback' type="button" value="Back" onClick={() => UpdateCocktail('')}></input>
                    </div>
                )
                :
                <div>Loading...</div>
            }
        </div>
    )
}


export default DetailledCocktail;