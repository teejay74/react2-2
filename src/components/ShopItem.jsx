export function ShopItem(props) {
    const {card} = props;
    return(
        <div className="card-list">
            <img className="image-list" src={card.img} alt="img"></img>
            <div className="name-list">{card.name}</div>
            <div className="color-list">{card.color}</div>      
            <div className="price-list">${card.price}</div>
            <button className="cart">Add to cart</button>
        </div>
    )
}