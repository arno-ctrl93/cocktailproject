import { useEffect, useState } from "react";
import "../styles/CocktailList.css";

interface CocktailsDTO{
    id: number,
    name: string,
    image: string,
}

function CocktailList () {
    const[cocktails, setCocktails] = useState<CocktailsDTO[] | null>(null);
    useEffect(() => {
        const fetchCocktails = async () => {
            const response = await fetch('http://localhost:3000/cocktails');
            const content = (await response.json()) as CocktailsDTO[];
            setCocktails(content);
        };
        fetchCocktails();
    }, []);

    return (
        <div>
            <ul className="cocktail-list">
            {cocktails?.map((cocktail) => (
                <li key={cocktail.id} className='cocktail-item'>
                    <img src={cocktail.image} className='cocktail-item_image' alt={cocktail.name}></img>
                    <div className="item-name">{cocktail.name}</div>
                </li>
            ))}
            </ul>
        </div>)
}

export default CocktailList;