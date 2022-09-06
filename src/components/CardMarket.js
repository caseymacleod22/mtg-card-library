import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css'

export default function CardMarket() {
    const [card, setCard] = useState([])

    useEffect(() => {
        axios
        .get('https://api.scryfall.com/cards/cardmarket/379041')
        .then(res => {
            let price = res.data.prices.usd
            let cardImage = res.data.image_uris.small
            console.log(cardImage)
            console.log(price)
            setCard(price)
            setCard(cardImage)
            })
        }, [])
    return (
        <div className="sets">
            <img src={card} alt="" />
            {card}
        </div>
    )
}