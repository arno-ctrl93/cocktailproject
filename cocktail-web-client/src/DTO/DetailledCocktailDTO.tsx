interface CocktailDTO
{
    id: number;
    name: string;
    image: string;
    instructions: string;
    ingredients: string[];
    mesurements: string[];
    Category: string;
    Glass: string;
}

export default CocktailDTO;