import { useState } from "react";
import "../styles/FooterCocktail.css"

function FooterCocktail(){
    const [mail, setMail] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMail(event.target.value);
        // console.log(mail);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log("the mail: " + mail);
    }



    return (
        <div className="container_footer">
            <div className="Text">Pour les passionnés de spam</div>
            <form className ="InputArea" onSubmit={handleSubmit}>
                <input className="areamail"  type="text" value={mail} onChange={handleChange}></input>
                <button className="addmail" type="submit" >Search</button>
            </form>
            </div>
    )
}

export default FooterCocktail;