import { useEffect, useState } from "react";
import "../styles/CocktailList.css";
import SimpleCocktailDTO from "../DTO/SimpleCocktailDTO";


type CocktailProps = {
    cocktail : SimpleCocktailDTO,
    UpdateCocktail: any
}

const Cocktail = ({ cocktail, UpdateCocktail }: CocktailProps) => (
    <li key={cocktail.id} className='cocktail-item' onClick={() => UpdateCocktail(cocktail.name)}>
        <img src={cocktail.image} className='cocktail-item_image' alt={cocktail.name}></img>
        <div className="item-name">{cocktail.name}</div>
    </li>
)

function CocktailList ({WhichCocktail, UpdateCocktail} : {WhichCocktail : string, UpdateCocktail : Function}) {
    const[cocktails, setCocktails] = useState<SimpleCocktailDTO[] | null>(null);

    useEffect(() => {
        const RANDOM_PAGE_LOCATION_REGEX = /\/random\/([\d]*)/
        const randomPageMatch = window.location.pathname.match(RANDOM_PAGE_LOCATION_REGEX)

        let drinksRoute: string;

        if (!!randomPageMatch) {
            const numberOfRandomDrinks = randomPageMatch[1]
            drinksRoute = `http://localhost:3000/cocktails/random/${numberOfRandomDrinks}`
        } else {
            drinksRoute = 'http://localhost:3000/cocktails'
        }

        const fetchCocktails = async () => {
            const response = await fetch(drinksRoute);
            const content = (await response.json()) as SimpleCocktailDTO[];
            setCocktails(content);
        };

        fetchCocktails();
    }, []);

    if (!cocktails) {
        return null
    }

    return (
        <div>
            <ul className="cocktail-list">
                {cocktails.map((cocktail) => <Cocktail cocktail={cocktail} UpdateCocktail={UpdateCocktail} />)}
            </ul>
        </div>
    )
}

export default CocktailList;