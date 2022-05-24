import { useEffect, useState } from "react";

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
            {cocktails?.map((cocktail) => (
                <div>{cocktail.name}</div>
            ))}
        </div>)
}

export default CocktailList;