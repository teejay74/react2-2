import {ShopItem} from './ShopItem'

export function ListView(props) {
    const { cards }= props;
    return(
        <div className="Cards-list">
          {cards.map(card => <ShopItem card={card} key={card.img}/>)}
        </div>
    )
}