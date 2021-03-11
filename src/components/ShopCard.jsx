export function ShopCard(props) {
    const {card} = props;
    return(
        <div className="card">
            <div className="name">{card.name}</div>
            <div className="color">{card.color}</div>
            <img className="image" src={card.img} alt="img"></img>
            <div className="price-cart">
                <div className="price">${card.price}</div>
                <button className="cart">Add to cart</button>
            </div>
        </div>
    )
}