import { useEffect } from "react";
import SimpleCocktailDTO from "../DTO/SimpleCocktailDTO";


function FindAllNames () {
    const NamesCocktails : string[] = [];

    useEffect(() => {
        const fetchCocktails = async () => {
            const response = await fetch('http://localhost:3000/cocktails');
            const content = (await response.json()) as SimpleCocktailDTO[];
            content.forEach((cocktail) => {
                NamesCocktails.push(cocktail.name);
            });
        };
        fetchCocktails();
    }, []);
    return NamesCocktails
}

export default FindAllNames;