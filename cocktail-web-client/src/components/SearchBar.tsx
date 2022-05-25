import { useState } from "react";
import '../styles/SearchBar.css';


function SearchBar(){
    const[input, setInput] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInput('');
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input name="text" className="input-search" type="text" value={input} onChange={handleChange}/>
            <button className="button-search" type="submit">Search</button>
        </form>
    )
}

export default SearchBar;