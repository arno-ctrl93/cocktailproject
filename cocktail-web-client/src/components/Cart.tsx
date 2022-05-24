import "../styles/Cart.css";

function Cart () {

    return (
        <div className='cart'>
            Drink description
            In process....
            <div className='container-cart'>
                <input type="text" placeholder="Enter drink name" className='search-input'></input>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Cart;