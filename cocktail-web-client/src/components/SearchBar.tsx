import { useState } from "react";
import '../styles/SearchBar.css';

import FindAllNames from "../method/Searchmethod";

function SearchBar({WhichCocktail, UpdateCocktail} : {WhichCocktail : string, UpdateCocktail : Function}){
    const [name, setName] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("the name searched "+ name);
        UpdateCocktail(name);
        setName('');
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input name="text" className="input-search" type="text" value={name} onChange={handleChange}>
            </input>
            <button className="button-search" type="submit"  >Search</button>
        </form>
    )
}

export default SearchBar;