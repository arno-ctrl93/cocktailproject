import { useEffect, useState } from "react";
import "../styles/CocktailList.css";
import SimpleCocktailDTO from "../DTO/SimpleCocktailDTO";




function CocktailList ({WhichCocktail, UpdateCocktail} : {WhichCocktail : string, UpdateCocktail : Function}) {
    const[cocktails, setCocktails] = useState<SimpleCocktailDTO[] | null>(null);
    useEffect(() => {
        const fetchCocktails = async () => {
            const response = await fetch('http://localhost:3000/cocktails');
            const content = (await response.json()) as SimpleCocktailDTO[];
            setCocktails(content);
        };
        fetchCocktails();
    }, []);

    return (
        <div>
            <ul className="cocktail-list">
            {cocktails?.map((cocktail) => (
                <li key={cocktail.id} className='cocktail-item' onClick={() => UpdateCocktail(cocktail.name)}>
                    <img src={cocktail.image} className='cocktail-item_image' alt={cocktail.name}></img>
                    <div className="item-name">{cocktail.name}</div>
                </li>
            ))}
            </ul>
        </div>)
}

export default CocktailList;