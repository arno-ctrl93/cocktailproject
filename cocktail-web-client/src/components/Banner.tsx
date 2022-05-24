import '../styles/Banner.css';

function Banner(){
    const title : string = 'DoDrink';
    const subtitle : string = 'A place to find your future drink ideas';
    return (
        <div className="banner">
            <ul className="title">{title}</ul>
            <ul className='description'>{subtitle}</ul>
        </div>
    );
}

export default Banner;