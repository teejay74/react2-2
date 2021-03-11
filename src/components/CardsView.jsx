import {ShopCard} from './ShopCard'

export function CardsView(props) {
    const { cards }= props;
    return(
        <div className="Cards">
          {cards.map(card => <ShopCard card={card} key={card.img}/>)}
        </div>
    )
}